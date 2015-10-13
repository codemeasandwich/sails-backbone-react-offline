"use strict";

define(['backbone','user','cache'], function(Backbone,user) {
  
      console.log(Backbone);
  
      return Backbone.Collection.extend({
         url: "/user",
          model: user,
          
          sync: Backbone.cachingSync(Backbone.sync, 'mystuff'),
         // localStorage: new Backbone.LocalStorage("SomeCollection") // Unique name within your app.
      });
  }

);