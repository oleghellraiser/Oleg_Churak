/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
	var _this = this;

	var defaults = {
		indent: 20,
		top: 0,
		height: null,
		width: null,
		img_src: null //necessarily
	};

	$.fn.magnilens = function (params) {
		var options = $.extend({}, defaults, params);
		var mainBox = $(_this);
		//var img_src = (options.img_src)?options.img_src:mainBox.find('img')[0].src;
		var mainBoxSize = [mainBox.width(), mainBox.height(), mainBox.offset().left, mainBox.offset().top];

		var secondBox = "<div class='secondBox'><img src=" + options.img_src + " class='secondImg'/></div>";
		var secondBoxSize = [mainBox.width(), mainBox.height()];
		var secondBox_css = {
			position: 'absolute',
			left: mainBoxSize[0] + options.indent + 'px',
			top: options.top,
			'z-index': 10,
			width: options.width ? options.width : secondBoxSize[0] + "px",
			height: options.height ? options.height : secondBoxSize[1] + "px",
			display: 'none',
			overflow: 'hidden'
		};
		mainBox.parent().append(secondBox);
		secondBox = mainBox.parent().find('.secondBox');
		secondBox.css(secondBox_css);

		var secondImg = secondBox.find("img");
		var secondImg_css = {
			position: 'absolute'
		};
		secondImg.css(secondImg_css);

		var markSize = [mainBox.width() / 2, mainBox.height() / 2];
		var mark = "<i class='mark'></i>";
		var mark_css = {
			position: "absolute",
			top: 0,
			left: 0,
			width: markSize[0] + "px",
			height: markSize[1] + "px",
			backgroundColor: "#dcdcdc",
			display: "none",
			opacity: 0.7,
			cursor: "crosshair"
		};
		mainBox.append(mark);
		mark = mainBox.find(".mark");
		mark.css(mark_css);

		var show_w = mainBoxSize[0] - markSize[0];
		var show_h = mainBoxSize[1] - markSize[1];

		mainBox.mouseover(function () {
			mark.show();
			secondBox.show();
		}).mouseout(function () {
			mark.hide();
			secondBox.hide();
		}).mousemove(function (e) {
			var secondImgSize = [secondImg.width(), secondImg.height()];
			var left = e.pageX - mainBoxSize[2] - markSize[0] / (secondImgSize[0] / mainBoxSize[0]);
			var top = e.pageY - mainBoxSize[3] - markSize[1] / (secondImgSize[0] / mainBoxSize[0]);
			if (left < 0) {
				left = 0;
			} else if (left > show_w) {
				left = show_w;
			}
			if (top < 0) {
				top = 0;
			} else if (top > show_h) {
				top = show_h;
			}

			mark.css({ left: left + "px", top: top + "px" });

			var position_x = -(left / show_w) * (secondImgSize[0] - secondBoxSize[0]);
			var position_y = -(top / show_h) * (secondImgSize[1] - secondBoxSize[1]);
			secondImg.css({ left: position_x + "px", top: position_y + "px" });
		});
		return _this;
	};
})(jQuery);

/***/ })
/******/ ]);
//# sourceMappingURL=magnilens.bundle.js.map