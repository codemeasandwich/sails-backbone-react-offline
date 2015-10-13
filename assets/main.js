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
    cache:"vendor/Backbone.cachingSync/backbone.cachingsync",
    react: "vendor/react/react-with-addons",
    burry: "vendor/burry/burry",
    
    // PLUGINS
    
    JSXTransformer: "js/JSXTransformer",
    jsx: "vendor/requirejs-react-jsx/jsx",
    text: "vendor/requirejs-text/text",
    
    // APP
    
    routes:["js/config/routes"],
    
    user: 'js/models/user',
    users: 'js/collections/users',
    
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
    cache: {
			deps: [
				'backbone',
				'burry'
			],
			exports: 'cache'
    },
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},

//+++++++++++++++++++++++++++++++++++++++++++++ config
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
//============================ Application Cache events
//=====================================================

var appCache = window.applicationCache;

function handleCacheEvent(e) {
  console.log(e);
}

function handleCacheEventC(e) {
  console.count("progress");
  console.info(e);
}

function handleCacheError(e) {
  console.error(e);
 // alert('Error: Cache failed to update!');
};


// Fired after the first cache of the manifest.
appCache.addEventListener('cached', handleCacheEvent, false);

// Checking for an update. Always the first event fired in the sequence.
appCache.addEventListener('checking', handleCacheEvent, false);

// An update was found. The browser is fetching resources.
appCache.addEventListener('downloading', handleCacheEvent, false);

// The manifest returns 404 or 410, the download failed,
// or the manifest changed while the download was in progress.
appCache.addEventListener('error', handleCacheError, false);

// Fired after the first download of the manifest.
appCache.addEventListener('noupdate', handleCacheEvent, false);

// Fired if the manifest file returns a 404 or 410.
// This results in the application cache being deleted.
appCache.addEventListener('obsolete', handleCacheEvent, false);

// Fired for each resource listed in the manifest as it is being fetched.
appCache.addEventListener('progress', handleCacheEventC, false);

// Fired when the manifest resources have been newly redownloaded.
appCache.addEventListener('updateready', handleCacheEvent, false);

//=====================================================
//======================================== Internets ??
//=====================================================

//+++++++++++++++++++++++++++++ Not working in Firefox
//++++++++++++++++++++++++++++++++++++++++++++++++++++

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";
    console.warn("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus)

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
      
      require(["users"], (users) => {
        window.aGroupOfUsers = new users();//([{name:'ann'},{name:'bob'}]);
        aGroupOfUsers
        .fetch()
        .done(function(data, textStatus, jqXHR) {
             console.debug("done",arguments);
              console.info("aGroupOfUsers",aGroupOfUsers);
        })
    //  .always(function(data, textStatus, jqXHR){ })
        .fail(function(that,type,message){
             console.error("fail",arguments);
        })
        
      });
});
