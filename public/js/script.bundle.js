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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pug_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pug/_app */ \"./src/pug/_app.pug\");\n/* harmony import */ var _pug_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pug_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/app */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slide */ \"./src/js/slide.ts\");\n/* harmony import */ var _js_slide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slide__WEBPACK_IMPORTED_MODULE_2__);\n/* pug\n====================*/\n\n/* scss\n====================*/\n\n/* js\n====================*/\n\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/js/slide.ts":
/*!*************************!*\
  !*** ./src/js/slide.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar Form = /** @class */ (function () {\n    function Form(id, form, inter, slide, slideItemAll, lastItem) {\n        window.addEventListener(\"load\", function () {\n        });\n    }\n    // フェイド\n    Form.prototype.Fade = function () {\n    };\n    // 横\n    Form.prototype.Side = function () {\n    };\n    return Form;\n}());\nvar Model = /** @class */ (function () {\n    function Model(id, form, inter, slide, slideItemAll, lastItem) {\n        var _this = this;\n        window.addEventListener(\"load\", function () {\n            _this._curr = 0;\n            if (!form)\n                form = \"fade\";\n            if (!inter)\n                inter = 3000;\n            _this.Loop(id, form, inter, slide, slideItemAll, lastItem);\n        });\n    }\n    Model.prototype.Loop = function (id, form, inter, slide, slideItemAll, lastItem) {\n        var _this = this;\n        setInterval(function () {\n            _this.Next(id, form, inter, slide, slideItemAll, lastItem);\n        }, inter);\n    };\n    Model.prototype.Next = function (id, form, inter, slide, slideItemAll, lastItem) {\n        if (this._curr == lastItem) {\n            this._curr = 0;\n            if (form == \"fade\") {\n                slideItemAll[lastItem].style.opacity = 0;\n                slideItemAll[this._curr].style.opacity = 1;\n            }\n            else if (form == \"side\") {\n            }\n        }\n        else {\n            this._curr++;\n            if (form == \"fade\") {\n                slideItemAll[this._curr - 1].style.opacity = 0;\n                slideItemAll[this._curr].style.opacity = 1;\n            }\n            else if (form == \"side\") {\n            }\n        }\n    };\n    Model.prototype.Preview = function (id, form, inter, slide, slideItemAll, lastItem) {\n        if (this._curr == 0) {\n            this._curr = lastItem;\n            slideItemAll[0].style.opacity = 0;\n            slideItemAll[this._curr].style.opacity = 1;\n        }\n        else {\n            this._curr--;\n            slideItemAll[this._curr + 1].style.opacity = 0;\n            slideItemAll[this._curr].style.opacity = 1;\n        }\n    };\n    Model.prototype.pn = function () {\n    };\n    return Model;\n}());\nvar El = /** @class */ (function () {\n    function El() {\n        this.Init();\n    }\n    El.prototype.Init = function () {\n        this._slideAll = document.querySelectorAll(\".slide\");\n        for (var i = 0; i < this._slideAll.length; i++) {\n            this._id = this._slideAll[i].dataset.slideId;\n            this._inter = Number(this._slideAll[i].dataset.slideInter);\n            this._form = this._slideAll[i].dataset.slideForm;\n            this._slide = document.querySelector(\"[data-slide-id='\" + this._id + \"']\");\n            this._slideCont = this._slide.querySelector(\".slide-cont\");\n            this._slideItemAll = this._slide.querySelectorAll(\".slide-cont__item\");\n            this._lastItem = this._slideItemAll.length - 1;\n            this._np = this._slide.querySelector(\".slide-np\");\n            this._pn = this._slide.querySelector(\".slide-pn\");\n            // ネクストプレビュー生成\n            if (this._np) {\n                this._next = document.createElement(\"span\");\n                this._preview = document.createElement(\"span\");\n                this._next.setAttribute(\"class\", \"slide-np__item slide-np__item--next\");\n                this._preview.setAttribute(\"class\", \"slide-np__item slide-np__item--preview\");\n                this._next.setAttribute(\"data-slide-id\", this._id);\n                this._preview.setAttribute(\"data-slide-id\", this._id);\n                this._np.appendChild(this._next);\n                this._np.appendChild(this._preview);\n            }\n            // ページネーション生成\n            if (this._pn) {\n                for (var i_1 = 0; i_1 < this._slideItemAll.length; i_1++) {\n                    this._pnItem = document.createElement(\"li\");\n                    this._pnItem.setAttribute(\"class\", \"slide-pn__item\");\n                    this._pnItem.setAttribute(\"data-slide-id\", this._id);\n                    this._pnItem.setAttribute(\"data-slide-index\", String(i_1));\n                    this._pn.appendChild(this._pnItem);\n                }\n            }\n            new Model(this._id, this._form, this._inter, this._slide, this._slideItemAll, this._lastItem);\n            new Form(this._id, this._form, this._inter, this._slide, this._slideItemAll, this._lastItem);\n        }\n    };\n    return El;\n}());\nnew El();\n\n\n//# sourceURL=webpack:///./src/js/slide.ts?");

/***/ }),

/***/ "./src/pug/_app.pug":
/*!**************************!*\
  !*** ./src/pug/_app.pug ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html>\\n  <head>\\n    <meta charset=\\\"utf-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0,user-scalable=0\\\">\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"id=edge\\\">\\n    <meta name=\\\"keywords\\\" content=\\\"\\\">\\n    <meta name=\\\"description\\\">\\n    <meta property=\\\"og:url\\\" content=\\\"\\\">\\n    <meta property=\\\"og:title\\\">\\n    <meta property=\\\"og:type\\\" content=\\\"article\\\">\\n    <meta property=\\\"og:description\\\">\\n    <meta property=\\\"og:image\\\" content=\\\"\\\">\\n    <title></title>\\n    <link href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900\\\" rel=\\\"stylesheet\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"/css/style.min.css\\\">\\n  </head>\\n  <body id=\\\"body\\\">\\n    <div id=\\\"wrap\\\">\\n      <div id=\\\"cont\\\">\\n      </div>\\n    </div>\\n    <script src=\\\"/js/script.bundle.js\\\"></script>\\n  </body>\\n</html>\";\n\n//# sourceURL=webpack:///./src/pug/_app.pug?");

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