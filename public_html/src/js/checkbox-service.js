import { CONFIG } from './config';
import { Observable } from './observable';

// eslint-disable-next-line import/prefer-default-export
export class CheckboxService {
  constructor() {
    // eslint-disable-next-line no-underscore-dangle
    this._checkboxes = CONFIG.elements.checkboxes;
    // eslint-disable-next-line no-underscore-dangle
    this._observable = new Observable();
    this.filters = {};
    this.initialState();
    this.init();
  }

  subscribe(fn) {
    // eslint-disable-next-line no-underscore-dangle
    this._observable.subscribe(fn);
  }

  init() {
    // eslint-disable-next-line no-underscore-dangle
    this._checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', this.onCheckboxClick.bind(this));
    });

    const { clearFiltersBtn } = CONFIG.elements;
    clearFiltersBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.filters = {};
      // eslint-disable-next-line no-underscore-dangle
      this._observable.next('/');
    });
  }

  onCheckboxClick(event) {
    const { target } = event;
    const specName = target.getAttribute('name');

    if (target.checked) {
      if (!(this.filters[specName] && this.filters[specName].length)) {
        this.filters[specName] = [];
      }
      this.filters[specName].push(target.value);
    } else {
      if (this.filters[specName] && this.filters[specName].length
        && this.filters[specName].includes(target.value)) {
        const index = this.filters[specName].indexOf(target.value);
        this.filters[specName].splice(index, 1);
      }
      if (!this.filters[specName].length) {
        delete this.filters[specName];
      }
    }
    // eslint-disable-next-line no-underscore-dangle
    this._observable.next(this.createQueryHash());
  }

  initialState() {
    if (window.location.pathname.includes('filter/')) {
      const filter = window.location.pathname.split('/filter/')[1].trim();
      try {
        this.filters = JSON.parse(decodeURI(filter));
      } catch (e) {
        this.filters = {};
      }
    }
  }

  createQueryHash() {
    if (Object.keys(this.filters).length > 0) {
      return `/filter/${JSON.stringify(this.filters)}`;
    }
    return '/';
  }

  getCurrentState() {
    return this.createQueryHash();
  }
}
