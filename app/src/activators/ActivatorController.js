(function(){

  angular
       .module('activators')
       .controller('ActivatorController', [
          'activatorService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          ActivatorController
       ]);

  /**
   * Controller for Connected Activators
   * @param $scope
   * @param $mdSidenav
   * @param activatorService
   * @constructor
   */
  function ActivatorController( activatorService, $mdBottomSheet, $log, $q) {
    var self = this;

    self.activators        = [ ];
    // Load all registered activators

    activatorService
          .loadAllActivators()
          .then( function( activators ) {
            self.activators    = [].concat(activators);
          });


    /**
     * Select the current activaro
     * @param objectId
     */
    this.selectActivator = function( activator ) {
       activatorService
          .switchState(activator);
          
    }
  }

})();
