import React from 'react';
import Search from './search';
import $ from 'jquery';
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

  getIframe: function (index) {
    console.log(this.state);
    var iframe = this.state.videos[index].data.media_embed.content;
    if (!iframe) return null;

    iframe = iframe.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace('600', '1280').replace('338', '720');

    return {__html: iframe};
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
        {this.leftButton()}
        <div className='video-container' dangerouslySetInnerHTML={this.getIframe(this.state.index)} />
        {this.rightButton()}
      </div>
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