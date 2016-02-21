(function(){
  'use strict';

  angular.module('menus')
         .service('menuService', ['$q', MenuService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function MenuService($q){
    var menus = [
      {
        name: 'Maison',
        avatar: 'icon_home'
      },
      {
        name: 'A propos de Carson',
        avatar: 'icon_chat_bubble'      
      },
      {
        name: 'Se deconnecter',
        avatar: 'icon_exit'
      },
    ];

    // Promise-based API
    return {
      loadAllMenus : function() {
        // Simulate async nature of real remote calls
        return $q.when(menus);
      }
    };
  }

})();
