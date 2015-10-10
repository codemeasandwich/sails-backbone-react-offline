"use strict"
 
//=====================================================
//============================= RequireJS configuration
//=====================================================

require.config({
  baseUrl: '../',
  
//++++++++++++++++++++++++++++++++++++++++++++++ paths
//++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  paths: {
    
    jquery:["vendor/jquery/dist/jquery"],
    underscore:["vendor/lodash-amd/modern/main"],
    backbone:["vendor/backbone/backbone"],
    
    
    routes:["js/config/routes"]
  },
  
//+++++++++++++++++++++++++++++++++++++++++++++++ shim
//++++++++++++++++++++++++++++++++++++++++++++++++++++
  
 shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	}
});

//=====================================================
//================================ Main Web Application
//=====================================================

require(["backbone","routes"], (Backbone,Router) => {
  
      console.log("arguments",arguments);
      console.log("Backbone",Backbone);
      console.log("Router",Router);
      
//++++++++++++++++++++++++++++++++ Initiate the router
//++++++++++++++++++++++++++++++++++++++++++++++++++++

      var app_router = new Router;
      
      app_router.on('route:defaultRoute', function(actions) {
          alert(actions);
      })
      
      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();
      
//++++++++++++++++++++++++++++++++ Initiate the router
//++++++++++++++++++++++++++++++++++++++++++++++++++++
      
});
