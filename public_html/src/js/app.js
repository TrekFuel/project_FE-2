import 'bootstrap';

import '../styles/style.scss';

import { CONFIG } from './config';
import { Render } from './render';
import { Router } from './router';
import { CheckboxService } from './checkbox-service';
import { Post } from './post';

class App {
  constructor() {
    this.news = [];
    this.comments = [];
    this.router = new Router();
    this.checkboxService = new CheckboxService();
    this.render = new Render(this.checkboxService, this.router);
    this.checkboxService.subscribe(this.onFilterChange.bind(this));
    this.post = new Post();
    this.init();
    this.initComments();
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
        this.render.initSingleNewsPage();
        this.post.initComment();
        this.render.initResetCheckbox();
        this.render.initAboutPage();
        this.render.initPostNewsPage();
        this.post.initPost();
        this.initRouter();
        this.router.render(decodeURI(window.location.pathname));
      });
  }

  initComments() {
    fetch(`${CONFIG.api}/comments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.comments = data;
        this.render.renderComments(data);
      });
  }

  initRouter() {
    this.router.addRoute('', this.render.renderMainPage
      .bind(this.render, this.news));
    this.router.addRoute('news', this.render.renderSingleNewsPage
      .bind(this.render, this.news));
    this.router.addRoute('filter', this.render.renderFilterResult
      .bind(this.render, this.news, this.checkboxService));
    this.router.addRoute('about', this.render.renderAboutPage
      .bind(this.render, this.news));
    this.router.addRoute('feedback', this.render.renderPostNewsPage
      .bind(this.render, this.news));
  }

  onFilterChange(data) {
    window.history.pushState(null, null, data);
    this.router.render(decodeURI(window.location.pathname));
  }
}

const app = new App();
