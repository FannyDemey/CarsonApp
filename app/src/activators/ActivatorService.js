(function(){
  'use strict';

  angular.module('activators')
         .service('activatorService', ['$q','$http', ActivatorService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function ActivatorService($q,$http){

    //mapping Zibase image to corresponding icon in this app
    var imageToType = {
      'logotype_LampesMurales.png': 'lamp',
      'logotype_LampesPied.png': 'lamp',
      'logotype_heating2.png': 'thermostat',
      'logotype_LampesPlafond.png': 'lamp',
      'logotype_VoletsRoulants.png': 'blind'
    };

    // Promise-based API
    return {
      loadAllActivators : function() {
        // Simulate async nature of real remote calls

        // Conf Zibase
        return $http.get('./zibaseconf.json', {cache: true}).then(function(zibaseconf) {
            console.log(zibaseconf);
             var url = zibaseconf.data.url+'?zibase='+zibaseconf.data.id+'&token='+zibaseconf.data.token+'&service=get&target=home';

            return $http.get(url, {cache: true})
                        .then(function(response){
                          console.log(response.data.body)
                          var data = response.data.body.actuators; 
                          data = data.map(function(d){
                              d.type = imageToType[d.icon];
                              d.active = d.status === 1 ;
                              return d;
                          });

                          return data;
                        })
            });
        
      },
      switchState : function(selected) {
        // Simulate async nature of real remote calls

        //Getting actual state and ID to configure URL
        var id = selected.id;
        var action = (selected.active === true) ? 1 : 0;
        return $http.get('./zibaseconf.json', {cache: true}).then(function(zibaseconf) {
            var url = zibaseconf.data.url+'?zibase='+zibaseconf.data.id+'&token='+zibaseconf.data.token+'&service=execute&target=actuator&id='+id+'&action='+action;

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
