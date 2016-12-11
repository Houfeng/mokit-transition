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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	var Plugin = __webpack_require__(1);
	module.exports = new Plugin(function () {
	  return __webpack_require__(2);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*istanbul ignore next*/'use strict';
	
	var factory = function factory(thunk) {
	  function Plugin(opts) {
	    return typeof Plugin.entity === 'function' ? new Plugin.entity(opts) : Plugin.entity;
	  }
	  Plugin.install = function (mokit) {
	    factory.mokit = mokit;
	    this.entity = thunk();
	    this.entity.install(mokit);
	  };
	  if (typeof mokit !== 'undefined') {
	    mokit.use(Plugin);
	  }
	  return Plugin;
	};
	
	module.exports = factory;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	__webpack_require__(3);
	var classes = __webpack_require__(5);
	var utils = __webpack_require__(6);
	var mokit = __webpack_require__(1).mokit;
	var EventEmitter = mokit.EventEmitter;
	var Class = mokit.Class;
	
	var Transition = new Class({
	
	  constructor: function /*istanbul ignore next*/constructor(id) {
	    this.classes = classes.get(id);
	  },
	
	  init: function /*istanbul ignore next*/init(view) {
	    utils.addClass(view.$element, 'ts-container');
	  },
	
	  clean: function /*istanbul ignore next*/clean(view) {
	    utils.removeClass(view.$element, 'ts-container');
	  },
	
	  prep: function /*istanbul ignore next*/prep(newComponent, oldComponent) {
	    if (!newComponent || !oldComponent) return;
	    utils.addClass(newComponent.$element, 'ts-item');
	    utils.addClass(oldComponent.$element, 'ts-item');
	  },
	
	  go: function /*istanbul ignore next*/go(newComponent, oldComponent, done) {
	    if (!newComponent || !oldComponent) return done();
	    var doneCount = 0;
	    var newEmitter = new EventEmitter(newComponent.$element);
	    var oldEmitter = new EventEmitter(oldComponent.$element);
	    var checkDone = function () {
	      if (++doneCount > 1) {
	        newEmitter.off(utils.ANIMATION_END_EVENT_NAME, checkDone);
	        oldEmitter.off(utils.ANIMATION_END_EVENT_NAME, checkDone);
	        utils.removeClass(oldComponent.$element, this.classes.leave);
	        utils.removeClass(oldComponent.$element, 'ts-item');
	        utils.removeClass(newComponent.$element, this.classes.enter);
	        utils.removeClass(newComponent.$element, 'ts-item');
	        done();
	      }
	    }.bind(this);
	    newEmitter.on(utils.ANIMATION_END_EVENT_NAME, checkDone);
	    oldEmitter.on(utils.ANIMATION_END_EVENT_NAME, checkDone);
	    utils.addClass(newComponent.$element, this.classes.enter);
	    utils.addClass(oldComponent.$element, this.classes.leave);
	  }
	
	});
	
	Transition.install = function (mokit) {
	  mokit.Transition = this;
	};
	
	module.exports = Transition;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	/*istanbul ignore next*/'use strict';
	
	/**
	 * 获取动画样式
	 * @param {int} num 编号
	 * @returns {Object} 包含一组样式名的对象
	 */
	exports.get = function (num) {
	  var leave = /*istanbul ignore next*/void 0,
	      enter = /*istanbul ignore next*/void 0;
	  /* eslint-disable */
	  switch (num) {
	    case 1:
	      leave = 'ts-moveToLeft';
	      enter = 'ts-moveFromRight';
	      break;
	    case 2:
	      leave = 'ts-moveToRight';
	      enter = 'ts-moveFromLeft';
	      break;
	    case 3:
	      leave = 'ts-moveToTop';
	      enter = 'ts-moveFromBottom';
	      break;
	    case 4:
	      leave = 'ts-moveToBottom';
	      enter = 'ts-moveFromTop';
	      break;
	    case 5:
	      leave = 'ts-fade';
	      enter = 'ts-moveFromRight ts-ontop';
	      break;
	    case 6:
	      leave = 'ts-fade';
	      enter = 'ts-moveFromLeft ts-ontop';
	      break;
	    case 7:
	      leave = 'ts-fade';
	      enter = 'ts-moveFromBottom ts-ontop';
	      break;
	    case 8:
	      leave = 'ts-fade';
	      enter = 'ts-moveFromTop ts-ontop';
	      break;
	    case 9:
	      leave = 'ts-moveToLeftFade';
	      enter = 'ts-moveFromRightFade';
	      break;
	    case 10:
	      leave = 'ts-moveToRightFade';
	      enter = 'ts-moveFromLeftFade';
	      break;
	    case 11:
	      leave = 'ts-moveToTopFade';
	      enter = 'ts-moveFromBottomFade';
	      break;
	    case 12:
	      leave = 'ts-moveToBottomFade';
	      enter = 'ts-moveFromTopFade';
	      break;
	    case 13:
	      leave = 'ts-moveToLeftEasing ts-ontop';
	      enter = 'ts-moveFromRight';
	      break;
	    case 14:
	      leave = 'ts-moveToRightEasing ts-ontop';
	      enter = 'ts-moveFromLeft';
	      break;
	    case 15:
	      leave = 'ts-moveToTopEasing ts-ontop';
	      enter = 'ts-moveFromBottom';
	      break;
	    case 16:
	      leave = 'ts-moveToBottomEasing ts-ontop';
	      enter = 'ts-moveFromTop';
	      break;
	    case 17:
	      leave = 'ts-scaleDown';
	      enter = 'ts-moveFromRight ts-ontop';
	      break;
	    case 18:
	      leave = 'ts-scaleDown';
	      enter = 'ts-moveFromLeft ts-ontop';
	      break;
	    case 19:
	      leave = 'ts-scaleDown';
	      enter = 'ts-moveFromBottom ts-ontop';
	      break;
	    case 20:
	      leave = 'ts-scaleDown';
	      enter = 'ts-moveFromTop ts-ontop';
	      break;
	    case 21:
	      leave = 'ts-scaleDown';
	      enter = 'ts-scaleUpDown ts-delay300';
	      break;
	    case 22:
	      leave = 'ts-scaleDownUp';
	      enter = 'ts-scaleUp ts-delay300';
	      break;
	    case 23:
	      leave = 'ts-moveToLeft ts-ontop';
	      enter = 'ts-scaleUp';
	      break;
	    case 24:
	      leave = 'ts-moveToRight ts-ontop';
	      enter = 'ts-scaleUp';
	      break;
	    case 25:
	      leave = 'ts-moveToTop ts-ontop';
	      enter = 'ts-scaleUp';
	      break;
	    case 26:
	      leave = 'ts-moveToBottom ts-ontop';
	      enter = 'ts-scaleUp';
	      break;
	    case 27:
	      leave = 'ts-scaleDownCenter';
	      enter = 'ts-scaleUpCenter ts-delay400';
	      break;
	    case 28:
	      leave = 'ts-rotateRightSideFirst';
	      enter = 'ts-moveFromRight ts-delay200 ts-ontop';
	      break;
	    case 29:
	      leave = 'ts-rotateLeftSideFirst';
	      enter = 'ts-moveFromLeft ts-delay200 ts-ontop';
	      break;
	    case 30:
	      leave = 'ts-rotateTopSideFirst';
	      enter = 'ts-moveFromTop ts-delay200 ts-ontop';
	      break;
	    case 31:
	      leave = 'ts-rotateBottomSideFirst';
	      enter = 'ts-moveFromBottom ts-delay200 ts-ontop';
	      break;
	    case 32:
	      leave = 'ts-flipOutRight';
	      enter = 'ts-flipInLeft ts-delay500';
	      break;
	    case 33:
	      leave = 'ts-flipOutLeft';
	      enter = 'ts-flipInRight ts-delay500';
	      break;
	    case 34:
	      leave = 'ts-flipOutTop';
	      enter = 'ts-flipInBottom ts-delay500';
	      break;
	    case 35:
	      leave = 'ts-flipOutBottom';
	      enter = 'ts-flipInTop ts-delay500';
	      break;
	    case 36:
	      leave = 'ts-rotateFall ts-ontop';
	      enter = 'ts-scaleUp';
	      break;
	    case 37:
	      leave = 'ts-rotateOutNewspaper';
	      enter = 'ts-rotateInNewspaper ts-delay500';
	      break;
	    case 38:
	      leave = 'ts-rotatePushLeft';
	      enter = 'ts-moveFromRight';
	      break;
	    case 39:
	      leave = 'ts-rotatePushRight';
	      enter = 'ts-moveFromLeft';
	      break;
	    case 40:
	      leave = 'ts-rotatePushTop';
	      enter = 'ts-moveFromBottom';
	      break;
	    case 41:
	      leave = 'ts-rotatePushBottom';
	      enter = 'ts-moveFromTop';
	      break;
	    case 42:
	      leave = 'ts-rotatePushLeft';
	      enter = 'ts-rotatePullRight ts-delay180';
	      break;
	    case 43:
	      leave = 'ts-rotatePushRight';
	      enter = 'ts-rotatePullLeft ts-delay180';
	      break;
	    case 44:
	      leave = 'ts-rotatePushTop';
	      enter = 'ts-rotatePullBottom ts-delay180';
	      break;
	    case 45:
	      leave = 'ts-rotatePushBottom';
	      enter = 'ts-rotatePullTop ts-delay180';
	      break;
	    case 46:
	      leave = 'ts-rotateFoldLeft';
	      enter = 'ts-moveFromRightFade';
	      break;
	    case 47:
	      leave = 'ts-rotateFoldRight';
	      enter = 'ts-moveFromLeftFade';
	      break;
	    case 48:
	      leave = 'ts-rotateFoldTop';
	      enter = 'ts-moveFromBottomFade';
	      break;
	    case 49:
	      leave = 'ts-rotateFoldBottom';
	      enter = 'ts-moveFromTopFade';
	      break;
	    case 50:
	      leave = 'ts-moveToRightFade';
	      enter = 'ts-rotateUnfoldLeft';
	      break;
	    case 51:
	      leave = 'ts-moveToLeftFade';
	      enter = 'ts-rotateUnfoldRight';
	      break;
	    case 52:
	      leave = 'ts-moveToBottomFade';
	      enter = 'ts-rotateUnfoldTop';
	      break;
	    case 53:
	      leave = 'ts-moveToTopFade';
	      enter = 'ts-rotateUnfoldBottom';
	      break;
	    case 54:
	      leave = 'ts-rotateRoomLeftOut ts-ontop';
	      enter = 'ts-rotateRoomLeftIn';
	      break;
	    case 55:
	      leave = 'ts-rotateRoomRightOut ts-ontop';
	      enter = 'ts-rotateRoomRightIn';
	      break;
	    case 56:
	      leave = 'ts-rotateRoomTopOut ts-ontop';
	      enter = 'ts-rotateRoomTopIn';
	      break;
	    case 57:
	      leave = 'ts-rotateRoomBottomOut ts-ontop';
	      enter = 'ts-rotateRoomBottomIn';
	      break;
	    case 58:
	      leave = 'ts-rotateCubeLeftOut ts-ontop';
	      enter = 'ts-rotateCubeLeftIn';
	      break;
	    case 59:
	      leave = 'ts-rotateCubeRightOut ts-ontop';
	      enter = 'ts-rotateCubeRightIn';
	      break;
	    case 60:
	      leave = 'ts-rotateCubeTopOut ts-ontop';
	      enter = 'ts-rotateCubeTopIn';
	      break;
	    case 61:
	      leave = 'ts-rotateCubeBottomOut ts-ontop';
	      enter = 'ts-rotateCubeBottomIn';
	      break;
	    case 62:
	      leave = 'ts-rotateCarouselLeftOut ts-ontop';
	      enter = 'ts-rotateCarouselLeftIn';
	      break;
	    case 63:
	      leave = 'ts-rotateCarouselRightOut ts-ontop';
	      enter = 'ts-rotateCarouselRightIn';
	      break;
	    case 64:
	      leave = 'ts-rotateCarouselTopOut ts-ontop';
	      enter = 'ts-rotateCarouselTopIn';
	      break;
	    case 65:
	      leave = 'ts-rotateCarouselBottomOut ts-ontop';
	      enter = 'ts-rotateCarouselBottomIn';
	      break;
	    case 66:
	      leave = 'ts-rotateSidesOut';
	      enter = 'ts-rotateSidesIn ts-delay200';
	      break;
	    case 67:
	      leave = 'ts-rotateSlideOut';
	      enter = 'ts-rotateSlideIn';
	      break;
	    case 68:
	      leave = 'ts-fade ts-ontop';
	      enter = 'ts-fade ts-delay200';
	      break;
	  }
	  /* eslint-enable */
	
	  return { enter: enter, leave: leave };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*istanbul ignore next*/'use strict';
	
	/**
	 * 添加或删除 className
	 * @param {element} element 元素
	 * @param {string} classNames 样式名称
	 * @param {boolean} state 添加或删除
	 * @returns {void} 无返回
	 */
	exports.setClassNames = function (element, classNames, state) {
	  if (!element || !classNames) return;
	  if (!(classNames instanceof Array)) {
	    classNames = classNames.split(' ');
	  }
	  classNames.forEach(function (className) {
	    element.classList[state ? 'add' : 'remove'](className);
	  }, this);
	};
	
	/**
	 * 添加 className
	 * @param {element} element 元素
	 * @param {string} classNames 样式名称
	 * @returns {void} 无返回
	 */
	exports.addClass = function (element, classNames) {
	  this.setClassNames(element, classNames, true);
	};
	
	/**
	 * 删除 className
	 * @param {element} element 元素
	 * @param {string} classNames 样式名称
	 * @returns {void} 无返回
	 */
	exports.removeClass = function (element, classNames) {
	  this.setClassNames(element, classNames, false);
	};
	
	// 取浏览器的 CSS 前缀
	exports.BROWSER_PREFIX = function () {
	  var styles = window.getComputedStyle(document.documentElement, '');
	  return (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
	}();
	
	// css 动画解束时的事件
	exports.ANIMATION_END_EVENT_NAME = /*istanbul ignore next*/exports.BROWSER_PREFIX + 'AnimationEnd';

/***/ }
/******/ ]);
//# sourceMappingURL=mokit-transition.js.map