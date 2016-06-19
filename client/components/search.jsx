import React from 'react';
import $ from 'jquery';
import Videos from 'lib/Videos.js';
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

  handleChange: function(event) {
    var name = $(event.target).val();

    /* Wait until user stops typing to execute get */
    if (this._timeout) clearTimeout(this._timeout);
    this._timeout = setTimeout(function () {
      Videos.get(name);
    }, 500);
  },

  render: function() {
  	var searchClasses = classNames('search-wrap', {focused: this.state.focused});
  	var hintClasses = classNames('transition', {invisible: this.state.focused})
    return (
      <div className={searchClasses}>
      	<input type='text' className='search' onClick={this.handleFocus} onChange={this.handleChange} />
      	<p className={hintClasses}>enter a subreddit</p>
      </div>
    );
  }
})

export default Search;