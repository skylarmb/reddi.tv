import React from 'react';
import Search from './search';
import $ from 'jquery';
import Videos from 'lib/Videos.js';
var classNames = require('classnames');

var Content = React.createClass({
  getInitialState: function () {
    return {
      index:  0,
      videos: null,
      error:  null
    };
  },

  componentWillMount: function () {
    $(window).on('set-videos', this.setVideos);
    $(window).on('set-videos-error', this.setError);
  },

  componentWillUnmount: function () {
    $(window).off('set-videos', this.setVideos);
    $(window).off('set-videos-error', this.setError);
  },

  setVideos: function (event, json) {
    this.setState({ index: 0, videos: json.data.children });
  },

  setIndex: function (event) {
    var index = this.state.index;
    var value = $(event.target).attr('value');
    index = value === 'right' ? index + 1 : index - 1;
    this.setState({ index: index });
  },

  render: function() {
    return (
      <div className='content'>
        <Search/>
        <div className='row'>
          {this.content()}
        </div>
      </div>
    );
  },

  content: function () {
    if (!this.state.videos) {
      return (
        <p>
          Biltong leberkas capicola ball tip filet mignon, fatback spare ribs beef frankfurter swine pork loin ham kielbasa. Ribeye fatback bacon beef meatball tongue chicken strip steak sirloin picanha sausage bresaola.
        </p>
      );
    }
    return (
      <div className='video-and-buttons'>
        {this.title()}
        {this.leftButton()}
        <div className='video-container'>{this.videoIframe()}</div>
        {this.rightButton()}
      </div>
    );
  },

  title: function () {
    var title = Videos.getTitle(this.state.index);
    return (
      <h4>{title}</h4>
    )
  },

  videoIframe: function () {
    var url = Videos.getUrl(this.state.index);
    return (
      <iframe width="1280" height="720" src={url} frameBorder="0" allowFullScreen></iframe>
    );
  },

  leftButton: function () {
    var classes = classNames('left-arrow', 'material-icons', {
      hidden: this.state.index === 0
    });

    return <i onClick={this.setIndex} value='left' className={classes}>keyboard_arrow_left</i>;
  },

  rightButton: function () {
    var classes = classNames('right-arrow', 'material-icons', {
      hidden: this.state.index === this.state.videos.length - 1
    });

    return <i onClick={this.setIndex} value='right' className={classes}>keyboard_arrow_right</i>;
  }
});

export default Content;
