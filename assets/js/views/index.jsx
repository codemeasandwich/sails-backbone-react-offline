 "use strict";
 
 define(function(require){

  var React = require('react');

  function View() {
    this.AppView = React.createClass({
      render: function () {
      
      if(navigator.onLine){
       var networkState = <span className="label label-success">onLine</span>
      } else {
       var networkState = <span className="label label-warning">OFFLine</span>
      }
      
        return ( <div> <p> index! {networkState} </p> <a href="#user/1">user page</a> </div> );
      }
    });
  }

  View.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };

  return View;

});
 