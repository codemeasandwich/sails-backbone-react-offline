"use strict";

define(['backbone'], function(Backbone) {
  
      console.log(Backbone);
  
      return Backbone.Model.extend({
        
              initialize: function(){
                  console.log("a USER model");
              }
          });
});