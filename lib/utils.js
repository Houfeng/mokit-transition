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
exports.BROWSER_PREFIX = (function () {
  let styles = window.getComputedStyle(document.documentElement, '');
  return (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
  )[1];
})();

// css 动画解束时的事件
exports.ANIMATION_END_EVENT_NAME = `${exports.BROWSER_PREFIX}AnimationEnd`;