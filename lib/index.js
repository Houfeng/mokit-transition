require('./transition.css');
const animationClasses = require('./animation-classes');
const utils = require('./utils');

exports.install = function (mokit) {

  const EventEmitter = mokit.EventEmitter;
  const Class = mokit.Class;

  const Transition = new Class({

    constructor: function (num) {
      this.animationClasses = animationClasses.get(num);
    },

    init: function (view) {
      utils.addClass(view.$element, 'ts-container');
    },

    clean: function (view) {
      utils.removeClass(view.$element, 'ts-container');
    },

    prep: function (newComponent, oldComponent) {
      if (!newComponent || !oldComponent) return;
      utils.addClass(newComponent.$element, 'ts-item');
      utils.addClass(oldComponent.$element, 'ts-item');
    },

    go: function (newComponent, oldComponent, done) {
      if (!newComponent || !oldComponent) return done();
      let doneCount = 0;
      let newEmitter = new EventEmitter(newComponent.$element);
      let oldEmitter = new EventEmitter(oldComponent.$element);
      let checkDone = function () {
        if (++doneCount > 1) {
          newEmitter.off(utils.ANIMATION_END_EVENT_NAME, checkDone);
          oldEmitter.off(utils.ANIMATION_END_EVENT_NAME, checkDone);
          utils.removeClass(oldComponent.$element, this.animationClasses.leave);
          utils.removeClass(oldComponent.$element, 'ts-item');
          utils.removeClass(newComponent.$element, this.animationClasses.enter);
          utils.removeClass(newComponent.$element, 'ts-item');
          done();
        }
      }.bind(this);
      newEmitter.on(utils.ANIMATION_END_EVENT_NAME, checkDone);
      oldEmitter.on(utils.ANIMATION_END_EVENT_NAME, checkDone);
      utils.addClass(newComponent.$element, this.animationClasses.enter);
      utils.addClass(oldComponent.$element, this.animationClasses.leave);
    }

  });

  mokit.Transition = Transition;
};

/* eslint-disable */
if (typeof require != 'undefined' && typeof mokit != 'undefined') {
  mokit.use(exports);
}
/* eslint-enable */