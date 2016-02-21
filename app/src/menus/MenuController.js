(function(){

  angular
       .module('menus')
       .controller('MenuController', [
          'menuService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          MenuController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function MenuController( menuService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected     = null;
    self.menus        = [ ];
    self.selectMenu   = selectMenu;
    self.toggleList   = toggleMenusList;

    // Load all registered menus

    menuService
          .loadAllMenus()
          .then( function( menus ) {
            self.menus    = [].concat(menus);
            self.selected = menus[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleMenusList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectMenu ( menu ) {
      self.selected = angular.isNumber(menu) ? $scope.menus[menu] : menu;
      self.toggleList();
    }

  }

})();
