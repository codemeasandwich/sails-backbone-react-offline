"use strict"
 
//=====================================================
//============================= RequireJS configuration
//=====================================================

require.config({
  //baseUrl: '../',
  
//++++++++++++++++++++++++++++++++++++++++++++++ paths
//++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  paths: {
    
    // CORE
    
    jquery:["vendor/jquery/dist/jquery"],
    underscore:["vendor/lodash-amd/modern/main"],
    backbone:["vendor/backbone/backbone"],
    react: "vendor/react/react-with-addons",
    // PLUGINS
    
    JSXTransformer: "js/JSXTransformer",
    jsx: "vendor/requirejs-react-jsx/jsx",
    text: "vendor/requirejs-text/text",
    
    // APP
    
    routes:["js/config/routes"],
    
    //PAGES
    
    pageIndex:["js/views/index"],
    pageUser:["js/views/user"],
  },
  
//+++++++++++++++++++++++++++++++++++++++++++++++ shim
//++++++++++++++++++++++++++++++++++++++++++++++++++++
  
 shim: {
  
    JSXTransformer: "JSXTransformer",
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
	},

//+++++++++++++++++++++++++++++++++++++++++++++++ config
//++++++++++++++++++++++++++++++++++++++++++++++++++++

    config: {
    jsx: {
      fileExtension: ".jsx",
      transformOptions: {
        harmony: true,
        stripTypes: false,
        inlineSourceMap: true
      },
      usePragma: false
    }
  },
  
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
