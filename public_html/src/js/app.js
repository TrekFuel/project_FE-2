import '../styles/style.scss';

import { CONFIG } from './config';
import { Render } from './render';
import { Router } from './router';
import { CheckboxService } from './checkbox-service';
import { Post } from './post';

class App {
  constructor() {
    this.news = [];
    this.router = new Router();
    this.checkboxService = new CheckboxService();
    this.render = new Render(this.checkboxService, this.router);
    this.checkboxService.subscribe(this.onFilterChange.bind(this));
    this.post = new Post();
    this.init();
  }

  init() {
    fetch(`${CONFIG.api}/news`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.news = data;
        this.render.generateAllNews(data);
        this.post.initPost();
        this.render.initSingleNewsPage();
        this.render.initAboutPage();
        this.render.initResetCheckbox();
        this.initRouter();
        this.router.render(decodeURI(window.location.pathname));
      });
  }

  initRouter() {
    this.router.addRoute('', this.render.renderMainPage
      .bind(this.render, this.news));
    this.router.addRoute('news', this.render.renderSingleNewsPage
      .bind(this.render, this.news));
    this.router.addRoute('about', this.render.renderAboutPage
      .bind(this.render, this.news));
    this.router.addRoute('filter', this.render.renderFilterResult
      .bind(this.render, this.news, this.checkboxService.filters));
  }

  onFilterChange(data) {
    window.history.pushState(null, null, data);
    this.router.render(decodeURI(window.location.pathname));
  }
}

const app = new App();
