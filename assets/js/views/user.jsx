 "use strict";
 
 define(function(require){

  var React = require('react');

  function View() {
    this.AppView = React.createClass({
      render: function () {
        return ( <div> <p> USER! {this.props.id}</p> <a href="#">index page</a> </div> );
      }
    });
  }

  View.prototype.init = function (opt) {
    React.render(<this.AppView id={opt.id}/>, document.body);
  };

  return View;

});
 