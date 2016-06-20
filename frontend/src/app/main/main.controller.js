(function () {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(menu) {
    var vm = this;

    vm.menu = menu;

    vm.workshops = [
      {
        id: '1',
        title: 'Введение',
        description: 'Мастерская full stack javascript',
        img: 'http://www.programmableweb.com/sites/default/files/MEAN-stack.jpg',
        video: '',
        content: '',
        tags: ['angular', 'material']
      }
    ];
  }
})();
