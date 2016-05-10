(function () {
  'use strict';

  angular
    .module('app.slideEl', [])
    .component('slideEl', {
      bindings: {
        wcData: '<',
        wcLang: '<',
        slideId: '<'
      },
      templateUrl: 'app/slide-el/slide-el.tpl.html',
      controller: SlideElController
    });

  function SlideElController() {
    var vm = this;
    vm.layoutAlign = 'center ' + vm.wcData.layoutAlign || 'flex-start';
    vm.scroll = vm.wcData.scroll || {
      enter: 'transform:translateY(-120vh); opacity:0',
      middle: 'transform:translateY(0vh); opacity:1',
      exit: 'transform:translateY(100vh); opacity:1'
    };
  }
}());
