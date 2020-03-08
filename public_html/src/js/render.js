import $ from 'jquery';

import { CONFIG } from './config';

const previewTemplate = require('../templates/preview-template.handlebars');
const viewTemplate = require('../templates/view-template.handlebars');
const commentTemplate = require('../templates/comments-template.handlebars');

// eslint-disable-next-line import/prefer-default-export
export class Render {
  constructor(checkboxService, router) {
    this.checkboxService = checkboxService;
    this.router = router;
  }

  // eslint-disable-next-line class-methods-use-this
  scrollToContacts() {
    $('#contactsButton')
      .click(() => {
        $([document.documentElement, document.body])
          .animate({
            scrollTop: $('.contacts')
              .offset().top,
          }, 0);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  renderMainPage(newsElems) {
    const { mainPage } = CONFIG.elements;
    const { singleNewsPage } = CONFIG.elements;

    this.scrollToContacts();

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
    singleNewsPage.classList.remove(CONFIG.displayBlock);
  }

  // eslint-disable-next-line class-methods-use-this
  generateAllNews(data) {
    const { mainPage } = CONFIG.elements;
    const { allNewsPage } = CONFIG.elements;
    allNewsPage.innerHTML = previewTemplate(data);
    const singleNewsTitle = document.querySelectorAll('.single-news-title');
    const singleNewsButton = document
      .querySelectorAll('.single-news-btn');

    singleNewsTitle.forEach((title) => {
      // eslint-disable-next-line no-param-reassign
      title.style.cursor = 'pointer';
      title.addEventListener('click', (event) => {
        event.preventDefault();
        const { index } = title.dataset;
        window.history.pushState(null, null, `/news/${index}`);
        this.router.render(decodeURI(window.location.pathname));
        mainPage.classList.remove(CONFIG.displayBlock);
      });
    });

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
    const { singleNewsPage } = CONFIG.elements;
    const { header } = CONFIG.elements;

    singleNewsPage.classList.add(CONFIG.displayBlock);

    if (singleNewsPage.classList.contains(CONFIG.displayBlock)) {
      header.addEventListener('click', (event) => {
        event.preventDefault();
        const clicked = event.target;

        if (clicked.classList.contains('main-btn')) {
          event.preventDefault();
          singleNewsPage.classList.remove(CONFIG.displayBlock);
          window.history.pushState(null, null, this.checkboxService.getCurrentState());
          this.router.render(decodeURI(window.location.pathname));
        }
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderSingleNewsPage(newsElems) {
    const { singleNewsPage } = CONFIG.elements;
    const { singleNewsContainer } = CONFIG.elements;
    const index = window.location.pathname.split('/news/')[1].trim();
    let isFind = false;

    if (newsElems.length) {
      newsElems.forEach((news) => {
        if (Number(news.id) === Number(index)) {
          isFind = true;
          singleNewsContainer.innerHTML = viewTemplate(news);
        }
      });
    }

    // eslint-disable-next-line no-unused-expressions
    isFind ? singleNewsPage.classList.add(CONFIG.displayBlock)
      : this.renderErrorPage();
  }

  // eslint-disable-next-line class-methods-use-this
  renderComments(data) {
    const { commentsContainer } = CONFIG.elements;
    commentsContainer.innerHTML = commentTemplate(data);
  }

  renderErrorPage() {
    window.history.pushState(null, null, '/404');
    this.router.render(decodeURI(window.location.pathname));
  }

  initAboutPage() {
    const { aboutButton } = CONFIG.elements;
    const { aboutPage } = CONFIG.elements;
    const { mainPage } = CONFIG.elements;

    aboutButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/about');
      this.router.render(decodeURI(window.location.pathname));
      mainPage.classList.remove(CONFIG.displayBlock);
      aboutPage.classList.add(CONFIG.displayBlock);
    });
  }

  renderAboutPage() {
    const { aboutPage } = CONFIG.elements;
    const { header } = CONFIG.elements;
    const { postNewsPage } = CONFIG.elements;
    const { singleNewsPage } = CONFIG.elements;

    singleNewsPage.classList.remove(CONFIG.displayBlock);
    postNewsPage.classList.remove(CONFIG.displayBlock);
    aboutPage.classList.add(CONFIG.displayBlock);

    if (aboutPage.classList.contains(CONFIG.displayBlock)) {
      header.addEventListener('click', (event) => {
        event.preventDefault();
        const clicked = event.target;

        if (clicked.classList.contains('main-btn')) {
          event.preventDefault();
          aboutPage.classList.remove(CONFIG.displayBlock);
          window.history.pushState(null, null, this.checkboxService.getCurrentState());
          this.router.render(decodeURI(window.location.pathname));
        }
      });
    }
  }

  initPostNewsPage() {
    const { feedbackButton } = CONFIG.elements;
    const { postNewsPage } = CONFIG.elements;
    const { mainPage } = CONFIG.elements;

    feedbackButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/feedback');
      this.router.render(decodeURI(window.location.pathname));
      mainPage.classList.remove(CONFIG.displayBlock);
      postNewsPage.classList.add(CONFIG.displayBlock);
    });
  }

  renderPostNewsPage() {
    const { postNewsPage } = CONFIG.elements;
    const { header } = CONFIG.elements;
    const { aboutPage } = CONFIG.elements;
    const { singleNewsPage } = CONFIG.elements;

    singleNewsPage.classList.remove(CONFIG.displayBlock);
    aboutPage.classList.remove(CONFIG.displayBlock);
    postNewsPage.classList.add(CONFIG.displayBlock);

    if (postNewsPage.classList.contains(CONFIG.displayBlock)) {
      header.addEventListener('click', (event) => {
        event.preventDefault();
        const clicked = event.target;

        if (clicked.classList.contains('main-btn')) {
          event.preventDefault();
          postNewsPage.classList.remove(CONFIG.displayBlock);
          window.history.pushState(null, null, this.checkboxService.getCurrentState());
          this.router.render(decodeURI(window.location.pathname));
        }
      });
    }
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

  renderFilterResult(newsElems, { filters }) {
    const result = this.filterResult(newsElems, filters);
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
