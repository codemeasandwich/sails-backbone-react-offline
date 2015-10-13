"use strict"

define([ 'backbone' ], function(Backbone){

  var page = (pageName,opt) => {
    
   /* require(['jsx!js/views/components/reactLoader'], function(App){
      var app = new App();
      app.init();
    });*/
   //return; 
    
    require(['jsx!page'+pageName], function(App){
      console.log('jsx!page'+pageName,App)
      var app = new App();
      app.init(opt);
    });
  }

  return Backbone.Router.extend({
          routes: {
              "user/:id": "userPage",
              "*actions": "indexPage"
              // matches http://example.com/#anything-here
          },
          indexPage:() => {  page("Index"); },
          userPage: (id) => { page("User",{id:id}); }
      });
});