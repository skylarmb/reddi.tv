import React from 'react';
var classNames = require('classnames');

var Search = React.createClass({
  getInitialState: function() {
    return {focused: false}
  },

  handleFocus: function() {
    this.setState({
      focused: true
    });
  },
  render: function() {
  	var searchClasses = classNames('search-wrap', {focused: this.state.focused});
  	var hintClasses = classNames('transition', {invisible: this.state.focused})
    return (
      <div className={searchClasses}>
      	<input type='text' className='search' onClick={this.handleFocus}></input>
      	<p className={hintClasses}>enter a subreddit</p>
      </div>
    );
  }
})

export default Search;