import $ from 'jquery';

var Videos = {
  current: null,

  get: function (subreddit) {
    var base = 'https://reddit.com/r/';
    var url  = base + subreddit + '.json?jsonp=?';

    $.getJSON(url).done(function (json) {
      this.current = json;
      $(window).trigger('set-videos', this.current);
    }.bind(this)).fail(function (error) {
      $(window).trigger('set-videos-error', error);
    });
  }
};

export default Videos;
