/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pug_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pug/_app */ \"./src/pug/_app.pug\");\n/* harmony import */ var _pug_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pug_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/app */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/show */ \"./src/js/show.js\");\n/* harmony import */ var _js_show__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_show__WEBPACK_IMPORTED_MODULE_2__);\n/* pug\n====================*/\n\n\n/* scss\n====================*/\n\n\n/* js\n====================*/\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/show.js":
/*!************************!*\
  !*** ./src/js/show.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar node = function node() {\n    _classCallCheck(this, node);\n\n    this.el = {\n        show: null,\n        showAll: [],\n        track: null,\n        trackAll: [],\n        slide: null,\n        slideAll: [],\n        slideChild: null,\n        slideChildAll: [],\n        nextprev: null,\n        nextprevChild: null,\n        nextprevChildAll: [],\n        next: null,\n        nextAll: [],\n        prev: null,\n        prevAll: [],\n        pagination: null,\n        paginationChild: null,\n        paginationChildAll: []\n    };\n    this.data = {\n        id: '',\n        form: '',\n        speed: 400,\n        auto: undefined,\n        flow: undefined,\n        current: 0,\n        lastChild: 0\n    };\n    this.is = {\n        stop: 'is-stop'\n    };\n};\n\nvar feature = function (_node) {\n    _inherits(feature, _node);\n\n    function feature() {\n        _classCallCheck(this, feature);\n\n        return _possibleConstructorReturn(this, (feature.__proto__ || Object.getPrototypeOf(feature)).call(this));\n    }\n\n    _createClass(feature, [{\n        key: 'getNode',\n        value: function getNode(id) {\n            this.el.show = document.getElementById(id);\n            this.el.track = this.el.show.querySelector('.show-track');\n            this.el.slide = this.el.show.querySelector('.show-slide');\n            this.el.slideChildAll = this.el.show.querySelectorAll('.show-slide__child');\n            this.data.speed = this.el.show.dataset.showSpeed;\n            this.data.auto = this.el.show.dataset.showAuto;\n            this.data.lastChild = this.el.slideChildAll.length - 1;\n            this.data.current = this.el.show.dataset.showCurrent;\n        }\n    }, {\n        key: 'adjust',\n        value: function adjust(value) {\n            var _this2 = this;\n\n            clearTimeout(this.stopTimer);\n            if (value == 'auto') {\n                this.num = this.data.auto;\n            } else if (value == 'event') {\n                this.num = this.data.speed;\n            }\n            this.el.show.classList.add(this.is.stop);\n            this.stopTimer = setTimeout(function () {\n                _this2.el.show.classList.remove(_this2.is.stop);\n            }, this.num);\n        }\n    }, {\n        key: 'control',\n        value: function control(id, value) {\n            this.getNode(id);\n            this.adjust(value);\n        }\n    }]);\n\n    return feature;\n}(node);\n\nvar base = function (_feature) {\n    _inherits(base, _feature);\n\n    function base(showAll) {\n        _classCallCheck(this, base);\n\n        var _this3 = _possibleConstructorReturn(this, (base.__proto__ || Object.getPrototypeOf(base)).call(this));\n\n        _this3.el.showAll = showAll;\n\n        if (_this3.el.showAll.dataset.showAuto !== _this3.data.auto) _this3.data.auto = _this3.el.showAll.dataset.showAuto;\n        if (_this3.el.showAll.dataset.showFlow !== _this3.data.flow) _this3.data.flow = Boolean(_this3.el.showAll.dataset.showFlow);\n        if (_this3.el.showAll.dataset.showSpeed !== _this3.data.speed) _this3.data.speed = _this3.el.showAll.dataset.showSpeed;\n        if (Number(_this3.data.auto) <= Number(_this3.data.speed)) _this3.data.auto = Number(_this3.data.speed) + 100;\n        _this3.el.showAll.dataset.showAuto = _this3.data.auto;\n\n        _this3.init();\n        return _this3;\n    }\n\n    _createClass(base, [{\n        key: 'init',\n        value: function init() {\n            var _this4 = this;\n\n            this.getNode(this.el.showAll.id);\n            this.firstChild = this.el.slideChildAll[0].cloneNode(true);\n            this.lastChild = this.el.slideChildAll[this.data.lastChild].cloneNode(true);\n            this.slideW = this.el.slide.clientWidth;\n            this.el.show.dataset.showCurrent = this.data.current = 1;\n            this.data.lastChild = this.data.lastChild + 2;\n            this.el.slide.appendChild(this.firstChild);\n            this.el.slide.insertBefore(this.lastChild, this.el.slideChildAll[0]);\n            this.el.slide.style.transform = 'translate3d(-' + this.slideW + 'px, 0, 0)';\n            setTimeout(function () {\n                _this4.el.slide.style.transitionDuration = _this4.data.speed + 'ms';\n            }, 100);\n            if (this.data.auto) this.auto();\n            if (this.data.flow) this.flow();\n        }\n    }, {\n        key: 'auto',\n        value: function auto() {\n            var _this5 = this;\n\n            setInterval(function () {\n                _this5.next(_this5.el.showAll.id, 'auto');\n            }, this.data.auto);\n        }\n    }, {\n        key: 'flow',\n        value: function flow() {\n            var _this6 = this;\n\n            var w = this.slideW * this.data.lastChild - 1;\n            var num = this.slideW;\n            setTimeout(function () {\n                _this6.el.slide.style.transitionDuration = '0ms';\n            }, 100);\n            var start = function start() {\n                _this6.el.slide.style.transform = 'translate3d(-' + num + 'px, 0, 0)';\n                num = num + 1;\n                if (w <= num) num = _this6.slideW;\n                _this6.el.slide.style.transform = 'translate3d(-' + num + 'px, 0, 0)';\n                window.requestAnimationFrame(start);\n            };\n            start();\n        }\n    }, {\n        key: 'next',\n        value: function next(id, value) {\n            var _this7 = this;\n\n            var flag = this.el.show.classList.contains(this.is.stop);\n            if (!flag) {\n                this.control(id, value);\n                if (this.data.current == this.data.lastChild) {\n                    this.data.current = 1;\n                    this.el.show.dataset.showCurrent = this.data.current;\n                    this.el.slide.style.transitionDuration = '0ms';\n                    this.el.slide.style.transform = 'translate3d(-' + this.slideW + 'px, 0, 0)';\n                    setTimeout(function () {\n                        _this7.data.current++;\n                        _this7.el.show.dataset.showCurrent = _this7.data.current;\n                        _this7.el.slide.style.transitionDuration = _this7.data.speed + 'ms';\n                        _this7.el.slide.style.transform = 'translate3d(-' + _this7.slideW * _this7.data.current + 'px, 0, 0)';\n                    }, 100);\n                } else {\n                    this.data.current++;\n                    this.el.show.dataset.showCurrent = this.data.current;\n                    this.el.slide.style.transform = 'translate3d(-' + this.slideW * this.data.current + 'px, 0, 0)';\n                }\n            }\n        }\n    }, {\n        key: 'pre',\n        value: function pre() {\n            var _this8 = this;\n\n            if (this.data.current == 0) {\n                this.data.current = this.data.lastChild - 1;\n                this.el.show.dataset.showCurrent = this.data.current;\n                this.el.slide.style.transitionDuration = '0ms';\n                this.el.slide.style.transform = 'translate3d(-' + this.slideW * this.data.current + 'px, 0, 0)';\n                setTimeout(function () {\n                    _this8.data.current--;\n                    _this8.el.show.dataset.showCurrent = _this8.data.current;\n                    _this8.el.slide.style.transitionDuration = _this8.data.speed + 'ms';\n                    _this8.el.slide.style.transform = 'translate3d(-' + _this8.slideW * _this8.data.current + 'px, 0, 0)';\n                }, 100);\n            } else {\n                this.data.current--;\n                this.el.show.dataset.showCurrent = this.data.current;\n                this.el.slide.style.transform = 'translate3d(-' + this.slideW * this.data.current + 'px, 0, 0)';\n            }\n        }\n    }]);\n\n    return base;\n}(feature);\n\nvar app = function (_feature2) {\n    _inherits(app, _feature2);\n\n    function app() {\n        _classCallCheck(this, app);\n\n        var _this9 = _possibleConstructorReturn(this, (app.__proto__ || Object.getPrototypeOf(app)).call(this));\n\n        _this9.create();\n        _this9.next();\n        return _this9;\n    }\n\n    _createClass(app, [{\n        key: 'create',\n        value: function create() {\n            this.el.showAll = document.querySelectorAll('.show');\n\n            for (var i = 0; i < this.el.showAll.length; i++) {\n                this.data.id = this.el.showAll[i].id;\n                this.el.show = document.getElementById(this.data.id);\n                this.el.slideAll = this.el.show.querySelectorAll('.show-slide__child');\n                this.el.nextprev = this.el.show.querySelector('.show-nextprev');\n                this.el.pagination = this.el.show.querySelector('.show-pagination');\n\n                // ネクストプレビュー生成\n                if (this.el.nextprev) {\n                    this.el.next = document.createElement('li');\n                    this.el.prev = document.createElement('li');\n                    this.el.next.setAttribute('class', 'show-nextprev__child show-nextprev__child--next');\n                    this.el.prev.setAttribute('class', 'show-nextprev__child show-nextprev__child--prev');\n                    this.el.next.setAttribute('data-show-id', this.data.id);\n                    this.el.prev.setAttribute('data-show-id', this.data.id);\n                    this.el.nextprev.appendChild(this.el.next);\n                    this.el.nextprev.appendChild(this.el.prev);\n                    this.el.nextAll = document.querySelectorAll('.show-nextprev__child--next');\n                    this.el.prevAll = document.querySelectorAll('.show-nextprev__child--prev');\n                }\n\n                // ページネーション生成\n                if (this.el.pagination) {\n                    for (var _i = 0; _i < this.el.slideAll.length; _i++) {\n                        this.el.paginationChild = document.createElement('li');\n                        this.el.paginationChild.setAttribute('class', 'show-pagination__child');\n                        this.el.paginationChild.setAttribute('data-show-id', this.data.id);\n                        this.el.paginationChild.setAttribute('data-show-index', String(_i));\n                        this.el.pagination.appendChild(this.el.paginationChild);\n                        this.el.paginationChildAll = document.querySelectorAll('.show-pagination__child');\n                    }\n                }\n\n                this.transfer();\n            }\n        }\n    }, {\n        key: 'transfer',\n        value: function transfer() {\n            this.data.form = this.el.show.dataset.showForm;\n            switch (this.data.form) {\n                case undefined:\n                    this.base = new base(this.el.show);break;\n            }\n        }\n    }, {\n        key: 'next',\n        value: function next() {\n            var _this10 = this;\n\n            this.el.nextAll.forEach(function (el) {\n                el.addEventListener('click', function (e) {\n                    switch (_this10.data.form) {\n                        case undefined:\n                            _this10.base.next(e.target.dataset.showId, 'event');break;\n                    }\n                });\n            });\n        }\n    }, {\n        key: 'prev',\n        value: function prev() {}\n    }, {\n        key: 'pagination',\n        value: function pagination() {}\n    }, {\n        key: 'scroll',\n        value: function scroll() {}\n    }, {\n        key: 'drag',\n        value: function drag() {}\n    }, {\n        key: 'swipe',\n        value: function swipe() {}\n    }]);\n\n    return app;\n}(feature);\n\nnew app();\n\n//# sourceURL=webpack:///./src/js/show.js?");

/***/ }),

/***/ "./src/pug/_app.pug":
/*!**************************!*\
  !*** ./src/pug/_app.pug ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html>\\n  <head>\\n    <meta charset=\\\"utf-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0,user-scalable=0\\\">\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"id=edge\\\">\\n    <meta name=\\\"keywords\\\" content=\\\"\\\">\\n    <meta name=\\\"description\\\">\\n    <meta property=\\\"og:url\\\" content=\\\"\\\">\\n    <meta property=\\\"og:title\\\">\\n    <meta property=\\\"og:type\\\" content=\\\"article\\\">\\n    <meta property=\\\"og:description\\\">\\n    <meta property=\\\"og:image\\\" content=\\\"\\\">\\n    <title></title>\\n    <link href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900\\\" rel=\\\"stylesheet\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"/css/style.min.css\\\">\\n  </head>\\n  <body id=\\\"body\\\">\\n    <div id=\\\"wrapper\\\">\\n      <div id=\\\"container\\\">\\n      </div>\\n    </div>\\n    <script src=\\\"/js/script.bundle.js\\\"></script>\\n  </body>\\n</html>\";\n\n//# sourceURL=webpack:///./src/pug/_app.pug?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });