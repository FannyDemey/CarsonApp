(function(){

  angular
       .module('scenarios')
       .controller('ScenarioController', [
          'scenarioService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          ScenarioController
       ]);

  /**
   * Controller for Scenarios
   * @param $scope
   * @param $mdSidenav
   * @param scenarioService
   * @constructor
   */
  function ScenarioController( scenarioService, $mdBottomSheet, $log, $q) {
    var self = this;

    self.scenarios        = [ ];
    // Load all registered scenarios

    scenarioService
          .loadAllScenarios()
          .then( function( scenarios ) {
            self.scenarios    = [].concat(scenarios);
          });


    /**
     * Select the current scenario
     * @param objectId
     */
    this.selectScenario = function( scenarios ) {
       scenarioService
          .launchScenario(scenarios);
          
    }
  }

})();
