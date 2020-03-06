// eslint-disable-next-line import/prefer-default-export
export const CONFIG = {
  api: 'http://localhost:3006',
  elements: {
    mainPage: document.getElementById('mainPage'),
    filtersPage: document.getElementById('filtersPage'),
    allNewsPage: document.getElementById('allNewsPage'),
    singleNewsPage: document.getElementById('singleNewsPage'),
    aboutPage: document.getElementById('aboutPage'),
    postNewsPage: document.getElementById('postNewsPage'),
    postForm: document.getElementById('postForm'),
    emailInput: document.getElementById('emailInput'),
    nameInput: document.getElementById('nameInput'),
    countryInput: document.getElementById('countryInput'),
    topicInput: document.getElementById('topicInput'),
    textInput: document.getElementById('textInput'),
    aboutButton: document.getElementById('aboutButton'),
    errorPage: document.getElementById('errorPage'),
    checkboxes: document.querySelector('#filtersPage')
      .querySelectorAll('input[type=checkbox]'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    feedbackButton: document.getElementById('feedbackButton'),
    header: document.getElementById('header'),
  },
  displayNone: 'd-none',
  displayBlock: 'd-block',
  filterOptions: ['newsCategory', 'newsDate', 'newsActivity', 'newsRating'],
};
