import React from 'react';
var classNames = require('classnames');

var Hero = React.createClass({
  getInitialState: function() {
    return {welcome: true}
  },

  handleWelcome: function() {
    this.setState({
      welcome: false
    });
  },

  render: function() {
    var heroClass = classNames('hero transition',{welcome:this.state.welcome});
    var subheadClass = classNames('transition',{invisible:!this.state.welcome})
    return (
      <div className={heroClass} onClick={this.handleWelcome}>
      	<h1>reddi.tv</h1>
        <h4 className={subheadClass}>click anywhere to begin</h4>
      </div>
    );
  }
})

export default Hero;