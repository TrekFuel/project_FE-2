/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./js/config.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./js/render.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./js/router.js");
/* harmony import */ var _checkbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-service */ "./js/checkbox-service.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post */ "./js/post.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.news = [];
    this.router = new _router__WEBPACK_IMPORTED_MODULE_4__["Router"]();
    this.checkboxService = new _checkbox_service__WEBPACK_IMPORTED_MODULE_5__["CheckboxService"]();
    this.render = new _render__WEBPACK_IMPORTED_MODULE_3__["Render"](this.checkboxService, this.router);
    this.checkboxService.subscribe(this.onFilterChange.bind(this));
    this.post = new _post__WEBPACK_IMPORTED_MODULE_6__["Post"]();
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].api, "/news"), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.news = data;

        _this.render.generateAllNews(data);

        _this.render.initSingleNewsPage();

        _this.render.initResetCheckbox();

        _this.render.initAboutPage();

        _this.render.initPostNewsPage();

        _this.post.initPost();

        _this.initRouter();

        _this.router.render(decodeURI(window.location.pathname));
      });
    }
  }, {
    key: "initRouter",
    value: function initRouter() {
      this.router.addRoute('', this.render.renderMainPage.bind(this.render, this.news));
      this.router.addRoute('news', this.render.renderSingleNewsPage.bind(this.render, this.news));
      this.router.addRoute('filter', this.render.renderFilterResult.bind(this.render, this.news, this.checkboxService.filters));
      this.router.addRoute('about', this.render.renderAboutPage.bind(this.render, this.news));
      this.router.addRoute('feedback', this.render.renderPostNewsPage.bind(this.render, this.news));
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange(data) {
      window.history.pushState(null, null, data);
      this.router.render(decodeURI(window.location.pathname));
    }
  }]);

  return App;
}();

var app = new App();

/***/ }),

/***/ "./js/checkbox-service.js":
/*!********************************!*\
  !*** ./js/checkbox-service.js ***!
  \********************************/
/*! exports provided: CheckboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxService", function() { return CheckboxService; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./js/config.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable */ "./js/observable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // eslint-disable-next-line import/prefer-default-export

var CheckboxService =
/*#__PURE__*/
function () {
  function CheckboxService() {
    _classCallCheck(this, CheckboxService);

    // eslint-disable-next-line no-underscore-dangle
    this._checkboxes = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.checkboxes; // eslint-disable-next-line no-underscore-dangle

    this._observable = new _observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
    this.filters = {};
    this.initialState();
    this.init();
  }

  _createClass(CheckboxService, [{
    key: "subscribe",
    value: function subscribe(fn) {
      // eslint-disable-next-line no-underscore-dangle
      this._observable.subscribe(fn);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      // eslint-disable-next-line no-underscore-dangle
      this._checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', _this.onCheckboxClick.bind(_this));
      });

      var clearFiltersBtn = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.clearFiltersBtn;
      clearFiltersBtn.addEventListener('click', function (event) {
        event.preventDefault();
        _this.filters = {}; // eslint-disable-next-line no-underscore-dangle

        _this._observable.next('/');
      });
    }
  }, {
    key: "onCheckboxClick",
    value: function onCheckboxClick(event) {
      var target = event.target;
      var specName = target.getAttribute('name');

      if (target.checked) {
        if (!(this.filters[specName] && this.filters[specName].length)) {
          this.filters[specName] = [];
        }

        this.filters[specName].push(target.value);
      } else {
        if (this.filters[specName] && this.filters[specName].length && this.filters[specName].includes(target.value)) {
          var index = this.filters[specName].indexOf(target.value);
          this.filters[specName].splice(index, 1);
        }

        if (!this.filters[specName].length) {
          delete this.filters[specName];
        }
      } // eslint-disable-next-line no-underscore-dangle


      this._observable.next(this.createQueryHash());
    }
  }, {
    key: "initialState",
    value: function initialState() {
      if (window.location.pathname.includes('filter/')) {
        var filter = window.location.pathname.split('/filter/')[1].trim();

        try {
          this.filters = JSON.parse(decodeURI(filter));
        } catch (e) {
          this.filters = {};
        }
      }
    }
  }, {
    key: "createQueryHash",
    value: function createQueryHash() {
      if (Object.keys(this.filters).length > 0) {
        return "/filter/".concat(JSON.stringify(this.filters));
      }

      return '/';
    }
  }, {
    key: "getCurrentState",
    value: function getCurrentState() {
      return this.createQueryHash();
    }
  }]);

  return CheckboxService;
}();

/***/ }),

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
// eslint-disable-next-line import/prefer-default-export
var CONFIG = {
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
    checkboxes: document.querySelector('#filtersPage').querySelectorAll('input[type=checkbox]'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    feedbackButton: document.getElementById('feedbackButton'),
    header: document.getElementById('header')
  },
  displayNone: 'd-none',
  displayBlock: 'd-block',
  filterOptions: ['newsCategory', 'newsDate', 'newsActivity', 'newsRating']
};

/***/ }),

/***/ "./js/observable.js":
/*!**************************!*\
  !*** ./js/observable.js ***!
  \**************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// eslint-disable-next-line import/prefer-default-export
var Observable =
/*#__PURE__*/
function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.subscribers = [];
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.subscribers.push(fn);
    }
  }, {
    key: "next",
    value: function next(data) {
      this.subscribers.forEach(function (sb) {
        sb(data);
      });
    }
  }]);

  return Observable;
}();

/***/ }),

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "../node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./js/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // eslint-disable-next-line import/prefer-default-export

var Post =
/*#__PURE__*/
function () {
  function Post() {
    _classCallCheck(this, Post);

    this.api = _config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].api;
  }

  _createClass(Post, [{
    key: "sendPost",
    value: function sendPost() {
      var emailInput = _config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].elements.emailInput;
      var nameInput = _config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].elements.nameInput;
      var countryInput = _config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].elements.countryInput;
      var topicInput = _config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].elements.topicInput;
      var textInput = _config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].elements.textInput;
      fetch("".concat(this.api, "/suggestedNews"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "".concat(emailInput.value),
          name: "".concat(nameInput.value),
          country: "".concat(countryInput.value),
          topic: "".concat(topicInput.value),
          text: "".concat(textInput.value)
        })
      }).then(function (res) {
        if (res.status !== 201) {
          // eslint-disable-next-line new-cap
          return Promise.reject(new Error(res.statusText));
        }

        return Promise.resolve(res);
      }).then(function () {
        emailInput.value = '';
        nameInput.value = '';
        countryInput.value = '';
        topicInput.value = '';
        textInput.value = '';
      });
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "initPost",
    value: function initPost() {
      var _this = this;

      var options = {
        submitHandler: function submitHandler() {
          _this.sendPost();

          var successMsg = document.createElement('div');
          successMsg.innerHTML = 'Ваша новость была успешно отправлена. Спасибо!';
          successMsg.className = 'alert alert-success mt-5 font-italic text-monospace';
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postForm').after(successMsg);
          setTimeout(function () {
            successMsg.remove();
          }, 5000);
        },
        invalidHandler: function invalidHandler() {
          var errorMsg = document.createElement('div');
          errorMsg.innerHTML = 'Пожалуйста, проверьте правильность ввода данных!';
          errorMsg.className = 'alert alert-danger mt-5 font-italic text-monospace';
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postForm').after(errorMsg);
          setTimeout(function () {
            errorMsg.remove();
          }, 5000);
        },
        rules: {
          email: {
            required: true,
            email: true
          },
          name: {
            required: true,
            minlength: 2
          },
          country: {
            required: true,
            minlength: 3
          },
          topic: {
            required: true,
            minlength: 10
          },
          text: {
            required: true,
            minlength: 50
          }
        },
        messages: {
          email: {
            required: 'Пожалуйста, введите Ваш email',
            email: 'Ввведите Ваш email в корректном формате, пожалуйста (test@gmail.com)'
          },
          name: 'Пожалуйста, введите Ваше имя (минимум 2 буквы)',
          country: 'Пожалуйста, введите Вашу страну (минимум 3 буквы)',
          topic: 'Пожалуйста, введите тему Вашей новости (минимум 10 символов)',
          text: 'Пожалуйста, расскажите про Вашу новость (минимум 50 символов)'
        },
        validClass: 'text-success',
        errorClass: 'text-danger'
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postForm').validate(options);
    }
  }]);

  return Post;
}();

/***/ }),

/***/ "./js/render.js":
/*!**********************!*\
  !*** ./js/render.js ***!
  \**********************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./js/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var previewTemplate = __webpack_require__(/*! ../templates/preview-template.handlebars */ "./templates/preview-template.handlebars");

var viewTemplate = __webpack_require__(/*! ../templates/view-template.handlebars */ "./templates/view-template.handlebars"); // eslint-disable-next-line import/prefer-default-export


var Render =
/*#__PURE__*/
function () {
  function Render(checkboxService, router) {
    _classCallCheck(this, Render);

    this.checkboxService = checkboxService;
    this.router = router;
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Render, [{
    key: "scrollToContacts",
    value: function scrollToContacts() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#contactsButton').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()([document.documentElement, document.body]).animate({
          scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts').offset().top
        }, 0);
      });
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "renderMainPage",
    value: function renderMainPage(newsElems) {
      var mainPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.mainPage;
      var singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.singleNewsPage;
      this.scrollToContacts();
      var allNews = document.querySelectorAll('.single-news');

      _toConsumableArray(allNews).forEach(function (news) {
        news.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayNone);
      });

      _toConsumableArray(allNews).forEach(function (news) {
        newsElems.forEach(function (item) {
          if (Number(news.dataset.index) === Number(item.id)) {
            news.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayNone);
          }
        });
      });

      mainPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      singleNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "generateAllNews",
    value: function generateAllNews(data) {
      var _this = this;

      var mainPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.mainPage;
      var allNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.allNewsPage;
      allNewsPage.innerHTML = previewTemplate(data);
      var singleNewsTitle = document.querySelectorAll('.single-news-title');
      var singleNewsButton = document.querySelectorAll('.single-news-btn');
      singleNewsTitle.forEach(function (title) {
        // eslint-disable-next-line no-param-reassign
        title.style.cursor = 'pointer';
        title.addEventListener('click', function (event) {
          event.preventDefault();
          var index = title.dataset.index;
          window.history.pushState(null, null, "/news/".concat(index));

          _this.router.render(decodeURI(window.location.pathname));

          mainPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
        });
      });
      singleNewsButton.forEach(function (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          var index = button.dataset.index;
          window.history.pushState(null, null, "/news/".concat(index));

          _this.router.render(decodeURI(window.location.pathname));

          mainPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
        });
      });
    }
  }, {
    key: "initSingleNewsPage",
    value: function initSingleNewsPage() {
      var _this2 = this;

      var singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.singleNewsPage;
      var header = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.header;
      singleNewsPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);

      if (singleNewsPage.classList.contains(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock)) {
        header.addEventListener('click', function (event) {
          event.preventDefault();
          var clicked = event.target;

          if (clicked.classList.contains('main-btn')) {
            event.preventDefault();
            singleNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
            window.history.pushState(null, null, _this2.checkboxService.getCurrentState());

            _this2.router.render(decodeURI(window.location.pathname));
          }
        });
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "renderSingleNewsPage",
    value: function renderSingleNewsPage(newsElems) {
      var singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.singleNewsPage;
      var index = window.location.pathname.split('/news/')[1].trim();
      var isFind = false;

      if (newsElems.length) {
        newsElems.forEach(function (news) {
          if (Number(news.id) === Number(index)) {
            isFind = true;
            singleNewsPage.innerHTML = viewTemplate(news);
          }
        });
      } // eslint-disable-next-line no-unused-expressions


      isFind ? singleNewsPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock) : this.renderErrorPage();
    }
  }, {
    key: "renderErrorPage",
    value: function renderErrorPage() {
      window.history.pushState(null, null, '/404');
      this.router.render(decodeURI(window.location.pathname));
    }
  }, {
    key: "initAboutPage",
    value: function initAboutPage() {
      var _this3 = this;

      var aboutButton = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.aboutButton;
      var aboutPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.aboutPage;
      var mainPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.mainPage;
      aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.history.pushState(null, null, '/about');

        _this3.router.render(decodeURI(window.location.pathname));

        mainPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
        aboutPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      });
    }
  }, {
    key: "renderAboutPage",
    value: function renderAboutPage() {
      var _this4 = this;

      var aboutPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.aboutPage;
      var header = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.header;
      var postNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.postNewsPage;
      var singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.singleNewsPage;
      singleNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      postNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      aboutPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);

      if (aboutPage.classList.contains(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock)) {
        header.addEventListener('click', function (event) {
          event.preventDefault();
          var clicked = event.target;

          if (clicked.classList.contains('main-btn')) {
            event.preventDefault();
            aboutPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
            window.history.pushState(null, null, _this4.checkboxService.getCurrentState());

            _this4.router.render(decodeURI(window.location.pathname));
          }
        });
      }
    }
  }, {
    key: "initPostNewsPage",
    value: function initPostNewsPage() {
      var _this5 = this;

      var feedbackButton = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.feedbackButton;
      var postNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.postNewsPage;
      var mainPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.mainPage;
      feedbackButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.history.pushState(null, null, '/feedback');

        _this5.router.render(decodeURI(window.location.pathname));

        mainPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
        postNewsPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      });
    }
  }, {
    key: "renderPostNewsPage",
    value: function renderPostNewsPage() {
      var _this6 = this;

      var postNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.postNewsPage;
      var header = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.header;
      var aboutPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.aboutPage;
      var singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.singleNewsPage;
      singleNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      aboutPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
      postNewsPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);

      if (postNewsPage.classList.contains(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock)) {
        header.addEventListener('click', function (event) {
          event.preventDefault();
          var clicked = event.target;

          if (clicked.classList.contains('main-btn')) {
            event.preventDefault();
            postNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].displayBlock);
            window.history.pushState(null, null, _this6.checkboxService.getCurrentState());

            _this6.router.render(decodeURI(window.location.pathname));
          }
        });
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "filterResult",
    value: function filterResult(newsElems, filter) {
      var options = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].filterOptions; // eslint-disable-next-line no-unused-vars

      var newsElemsCopy = _toConsumableArray(newsElems);

      var result = [];
      var isFiltered = false;
      this.clearCheckbox();
      options.forEach(function (option) {
        if (filter[option] && filter[option].length) {
          if (isFiltered) {
            newsElemsCopy = result;
            result = [];
          }

          filter[option].forEach(function (item) {
            newsElemsCopy.forEach(function (news) {
              if (typeof news.features[option] === 'string' && news.features[option].toLowerCase().indexOf(item) !== -1) {
                result.push(news);
                isFiltered = true;
              }

              if (typeof news.features[option] === 'number' && news.features[option] === Number(item)) {
                result.push(news);
                isFiltered = true;
              }
            });
            _toConsumableArray(document.querySelectorAll("input[name=".concat(option, "]"))).filter(function (checkbox) {
              return checkbox.value === item;
            })[0].checked = true;
          });
        }
      });
      return result;
    }
  }, {
    key: "renderFilterResult",
    value: function renderFilterResult(newsElems, filter) {
      var result = this.filterResult(newsElems, filter);
      this.renderMainPage(result);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "clearCheckbox",
    value: function clearCheckbox() {
      var checkboxes = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.checkboxes;

      _toConsumableArray(checkboxes).forEach(function (checkbox) {
        // eslint-disable-next-line no-param-reassign
        checkbox.checked = false;
      });
    }
  }, {
    key: "initResetCheckbox",
    value: function initResetCheckbox() {
      var _this7 = this;

      var clearFiltersBtn = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].elements.clearFiltersBtn;
      clearFiltersBtn.addEventListener('click', function (event) {
        event.preventDefault();

        _this7.clearCheckbox();
      });
    }
  }]);

  return Render;
}();

/***/ }),

/***/ "./js/router.js":
/*!**********************!*\
  !*** ./js/router.js ***!
  \**********************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./js/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // eslint-disable-next-line import/prefer-default-export

var Router =
/*#__PURE__*/
function () {
  function Router() {
    var _this = this;

    _classCallCheck(this, Router);

    this.routes = {
      404: function _() {
        var errorPage = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.errorPage;
        var postNewsPage = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.postNewsPage;
        errorPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock);
        postNewsPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayNone);
      }
    };
    this.allNews = document.querySelectorAll('.single-news');
    window.addEventListener('popstate', function (event) {
      event.preventDefault();

      _this.render(decodeURI(window.location.pathname));
    });
  }

  _createClass(Router, [{
    key: "addRoute",
    value: function addRoute(route, action) {
      this.routes[route] = action;
    }
  }, {
    key: "render",
    value: function render(url) {
      var temp = url.split('/')[1];

      _toConsumableArray(this.allNews).forEach(function (news) {
        news.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock);
      }); // eslint-disable-next-line no-unused-expressions


      this.routes[temp] ? this.routes[temp]() : this.routes['404']();
    }
  }]);

  return Router;
}();

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./templates/preview-template.handlebars":
/*!***********************************************!*\
  !*** ./templates/preview-template.handlebars ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"col-md-4 mb-4 mt-3 single-news\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":58},"end":{"line":2,"column":64}}}) : helper)))
    + "\">\n    <div class=\"card\">\n      <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"small") : stack1), depth0))
    + "\"\n           class=\"rounded mx-auto d-block mt-3 img-fluid\"\n           width=\"240\"\n           height=\"135\"\n           alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":25}}}) : helper)))
    + "\"\n           title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":18},"end":{"line":9,"column":27}}}) : helper)))
    + "\"/>\n      <div class=\"card-body\">\n        <h6 class=\"text-center single-news-title\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":62},"end":{"line":11,"column":68}}}) : helper)))
    + "\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":19}}}) : helper)))
    + "\n        </h6>\n        <p class=\"text-muted\">категория: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsCategory") : stack1), depth0))
    + "; дата выхода:\n          "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsDate") : stack1), depth0))
    + "; активность: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsActivity") : stack1), depth0))
    + ";\n          рейтинг: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsRating") : stack1), depth0))
    + "</p>\n      </div>\n      <button type=\"button\"\n              class=\"btn-primary btn-sm w-25 mx-auto mb-3 single-news-btn\"\n              data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":32}}}) : helper)))
    + "\">\n        Читать\n      </button>\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./templates/view-template.handlebars":
/*!********************************************!*\
  !*** ./templates/view-template.handlebars ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col mt-3 single-news\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":52}}}) : helper)))
    + "\">\n  <div class=\"card\">\n    <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"large") : stack1), depth0))
    + "\"\n         class=\"rounded mx-auto d-block mt-3 img-fluid pl-3 pr-3\"\n         width=550\"\n         height=\"370\"\n         alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":14},"end":{"line":7,"column":23}}}) : helper)))
    + "\"\n         title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":25}}}) : helper)))
    + "\"/>\n    <div class=\"card-body\">\n      <h5 class=\"card-title text-center font-weight-bold\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":17}}}) : helper)))
    + "\n      </h5>\n      <p class=\"card-text\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":16}}}) : helper)))
    + "\n      </p>\n      <p class=\"text-muted\">категория: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsCategory") : stack1), depth0))
    + "; дата выхода:\n        "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsDate") : stack1), depth0))
    + "; активность: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsActivity") : stack1), depth0))
    + ";\n        рейтинг: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsRating") : stack1), depth0))
    + "</p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./js/app.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map