(function(){
  'use strict';

  angular.module('scenarios')
         .service('scenarioService', ['$q','$http', ScenarioService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function ScenarioService($q,$http){


    // Promise-based API
    return {
      loadAllScenarios : function() {
        // Simulate async nature of real remote calls

        // Conf Zibase
        return $http.get('./zibaseconf.json', {cache: true}).then(function(zibaseconf) {
            console.log(zibaseconf);
             var url = zibaseconf.data.url+'?zibase='+zibaseconf.data.id+'&token='+zibaseconf.data.token+'&service=get&target=home';

            return $http.get(url, {cache: true})
                        .then(function(response){
                          console.log(response.data.body)
                          var data = response.data.body.scenarios; 
                          return data;
                        })
            });
        
      },
      launchScenario : function(selected) {
        // Simulate async nature of real remote calls

        //Getting actual state and ID to configure URL
        var id = selected.id;
        console.log(id);
        return $http.get('./zibaseconf.json', {cache: true}).then(function(zibaseconf) {
            var url = zibaseconf.data.url+'?zibase='+zibaseconf.data.id+'&token='+zibaseconf.data.token+'&service=execute&target=scenario&id='+id;

            console.log(url);
            return $http.get(url)
                    .then(function(response){
                      console.log(selected);
                      return response;
                    })
 
        });   
     }      
    };
  }

})();
