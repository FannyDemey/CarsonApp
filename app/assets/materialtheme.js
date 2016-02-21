    var myApp = angular
              .module('starterApp', ['ngMaterial', 'menus', 'activators', 'scenarios'])

              .config(function($mdThemingProvider, $mdIconProvider){

                  $mdIconProvider
                      .defaultIconSet("./assets/svg/icons.svg"                     , 48) // All icon in a set must have same size
                      .icon("menu"              , "./assets/svg/menu.svg"             , 24)
                      .icon("icon_thermostat"              , "./assets/svg/icon_thermostat.svg"      , 64)
                      .icon("carsonlogo"              , "./assets/svg/carsonlogo.svg"      , 512)
                      $mdThemingProvider.theme('default')
                          .primaryPalette('brown', {
                              'default': '500', // by default use shade 400 from the pink palette for primary intentions
                              'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
                              'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                              'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                            })
                          .accentPalette('deep-orange', {
                              'default': '500', // by default use shade 400 from the pink palette for primary intentions
                              'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
                              'hue-2': '700', // use shade 600 for the <code>md-hue-2</code> class
                              'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                            });

              });