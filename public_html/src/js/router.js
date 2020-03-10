import { CONFIG } from './config';

// eslint-disable-next-line import/prefer-default-export
export class Router {
  constructor() {
    this.routes = {
      404: () => {
        const { errorPage } = CONFIG.elements;
        const { singleNewsPage } = CONFIG.elements;
        const { mainPage } = CONFIG.elements;

        errorPage.classList.add(CONFIG.displayBlock);
        singleNewsPage.classList.remove(CONFIG.displayBlock);
        mainPage.classList.remove(CONFIG.displayBlock);
      },
    };

    this.allNews = document.querySelectorAll('.single-news');

    window.addEventListener('popstate', (event) => {
      event.preventDefault();
      this.render(decodeURI(window.location.pathname));
    });
  }

  addRoute(route, action) {
    this.routes[route] = action;
  }

  render(url) {
    const temp = url.split('/')[1];

    [...this.allNews].forEach((news) => {
      news.classList.remove(CONFIG.displayBlock);
    });

    // eslint-disable-next-line no-unused-expressions
    this.routes[temp] ? this.routes[temp]() : this.routes['404']();
  }
}
