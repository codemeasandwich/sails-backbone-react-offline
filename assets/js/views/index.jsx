 "use strict";
 
 define(function(require){

  var React = require('react');

  function View() {
    this.AppView = React.createClass({
      render: function () {
        return ( <div> <p> index! </p> <a href="#user/1">user page</a> </div> );
      }
    });
  }

  View.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };

  return View;

});
 