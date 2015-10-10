"use strict"
 
require.config({
  baseUrl: '../',
  paths: {
    jquery:["vendor/jquery/dist/jquery"],
    underscore:["vendor/lodash-amd/modern/main"],
    backbone:["vendor/backbone/backbone"]
  },
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

console.log("require main");

require(["backbone"], (Backbone)=>{
      console.log("arguments",arguments);
      console.log("Backbone",Backbone);
});
