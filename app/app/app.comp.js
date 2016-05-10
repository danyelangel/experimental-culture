(function () {
  'use strict';

  angular
    .module('comiccon')
    .component('appEl', {
      templateUrl: 'app/app.tpl.html',
      controller: ['LoadDep', 'Slides', AppEl]
    });

  function AppEl(LoadDep, Slides) {
    var $ctrl = this;
    $ctrl.loadDep = LoadDep.load;
    $ctrl.slides = Slides.slides;
    $ctrl.intro = Slides.intro;
    $ctrl.lang = 'es';
  }
}());
