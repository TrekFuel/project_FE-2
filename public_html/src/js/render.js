import { CONFIG } from './config';

const previewTemplate = require('../templates/preview-template.handlebars');
const viewTemplate = require('../templates/view-template.handlebars');

// eslint-disable-next-line import/prefer-default-export
export class Render {
  constructor(checkboxService, router) {
    this.checkboxService = checkboxService;
    this.router = router;
  }

  // eslint-disable-next-line class-methods-use-this
  renderMainPage(newsElems) {
    const { mainPage } = CONFIG.elements;
    const allNews = document.querySelectorAll('.single-news');

    [...allNews].forEach((news) => {
      news.classList.add(CONFIG.displayNone);
    });

    [...allNews].forEach((news) => {
      newsElems.forEach((item) => {
        if (Number(news.dataset.index) === Number(item.id)) {
          news.classList.remove(CONFIG.displayNone);
        }
      });
    });

    mainPage.classList.add(CONFIG.displayBlock);
    this.singleNewsPage.classList.remove(CONFIG.displayBlock);
  }

  // eslint-disable-next-line class-methods-use-this
  generateAllNews(data) {
    const { mainPage } = CONFIG.elements;
    const { allNewsPage } = CONFIG.elements;
    allNewsPage.innerHTML = previewTemplate(data);
    const singleNewsButton = document
      .querySelectorAll('.single-news-btn');

    singleNewsButton.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const { index } = button.dataset;
        window.history.pushState(null, null, `/news/${index}`);
        this.router.render(decodeURI(window.location.pathname));
        mainPage.classList.remove(CONFIG.displayBlock);
      });
    });
  }

  initSingleNewsPage() {
    this.singleNewsPage = CONFIG.elements.singleNewsPage;
    this.singleNewsPage.addEventListener('click',
      (event) => {
        event.preventDefault();
        if (this.singleNewsPage.classList.contains(CONFIG.displayBlock)) {
          const clicked = event.target;

          if (clicked.classList.contains('back')) {
            window.history.pushState(null, null, this.checkboxService.getCurrentState());
            this.router.render(decodeURI(window.location.pathname));
          }
        }
      });
  }

  // eslint-disable-next-line class-methods-use-this
  renderSingleNewsPage(newsElems) {
    const { singleNewsPage } = CONFIG.elements;
    const index = window.location.pathname.split('/news/')[1].trim();
    let isFind = false;

    if (newsElems.length) {
      newsElems.forEach((news) => {
        if (Number(news.id) === Number(index)) {
          isFind = true;
          singleNewsPage.innerHTML = viewTemplate(news);
        }
      });
    }

    // eslint-disable-next-line no-unused-expressions
    isFind ? singleNewsPage.classList.add(CONFIG.displayBlock)
      : this.renderErrorPage();
  }

  renderErrorPage() {
    window.history.pushState(null, null, '/404');
    this.router.render(decodeURI(window.location.pathname));
  }

  // eslint-disable-next-line class-methods-use-this
  resetStartPage() {
    const { mainPage } = CONFIG.elements;
    const { postNewsPage } = CONFIG.elements;

    mainPage.classList.remove(CONFIG.displayBlock);
    postNewsPage.classList.add(CONFIG.displayNone);
  }

  initAboutPage() {
    const { aboutButton } = CONFIG.elements;
    const { aboutPage } = CONFIG.elements;

    aboutButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/about');
      this.router.render(decodeURI(window.location.pathname));
      this.resetStartPage();
      aboutPage.classList.add(CONFIG.displayBlock);
    });
  }

  renderAboutPage() {
    const { aboutPage } = CONFIG.elements;
    const { postNewsPage } = CONFIG.elements;

    postNewsPage.classList.add(CONFIG.displayNone);
    aboutPage.classList.add(CONFIG.displayBlock);

    aboutPage.addEventListener('click',
      (event) => {
        event.preventDefault();
        if (aboutPage.classList.contains(CONFIG.displayBlock)) {
          const clicked = event.target;

          if (clicked.classList.contains('back')) {
            aboutPage.classList.remove(CONFIG.displayBlock);
            window.history.pushState(null, null, this.checkboxService.getCurrentState());
            this.router.render(decodeURI(window.location.pathname));
          }
        }
      });
  }

  // eslint-disable-next-line class-methods-use-this
  filterResult(newsElems, filter) {
    const options = CONFIG.filterOptions;
    // eslint-disable-next-line no-unused-vars
    let newsElemsCopy = [...newsElems];
    let result = [];
    let isFiltered = false;
    this.clearCheckbox();

    options.forEach((option) => {
      if (filter[option] && filter[option].length) {
        if (isFiltered) {
          newsElemsCopy = result;
          result = [];
        }
        filter[option].forEach((item) => {
          newsElemsCopy.forEach((news) => {
            if (typeof news.features[option] === 'string'
              && news.features[option].toLowerCase()
                .indexOf(item) !== -1) {
              result.push(news);
              isFiltered = true;
            }

            if (typeof news.features[option] === 'number'
              && news.features[option] === Number(item)) {
              result.push(news);
              isFiltered = true;
            }
          });
          [...document.querySelectorAll(`input[name=${option}]`)]
            .filter((checkbox) => checkbox.value === item)[0].checked = true;
        });
      }
    });
    return result;
  }

  renderFilterResult(newsElems, filter) {
    const result = this.filterResult(newsElems, filter);
    this.renderMainPage(result);
  }

  // eslint-disable-next-line class-methods-use-this
  clearCheckbox() {
    const { checkboxes } = CONFIG.elements;
    [...checkboxes].forEach((checkbox) => {
      // eslint-disable-next-line no-param-reassign
      checkbox.checked = false;
    });
  }

  initResetCheckbox() {
    const { clearFiltersBtn } = CONFIG.elements;
    clearFiltersBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.clearCheckbox();
    });
  }
}
