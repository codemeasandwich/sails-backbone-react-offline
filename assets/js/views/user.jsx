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
      
        return ( <div> <p> USER! {this.props.id} {networkState}</p> <a href="#">index page</a> </div> );
      }
    });
  }

  View.prototype.init = function (opt) {
    React.render(<this.AppView id={opt.id}/>, document.body);
  };

  return View;

});
 