"use strict"

define([ 'backbone' ], function(Backbone){

  return Backbone.Router.extend({
          routes: {
              "user/:id": "userPage",
              "*actions": "indexPage"
              // matches http://example.com/#anything-here
          },
          indexPage:() => {
            alert("indexPage");
          },
          userPage: (id) => {
            alert("userPage for "+id);
          }
      });
});