import $ from 'jquery';

var Videos = {
  current: null,

  get: function (subreddit) {
    var base = 'http://www.reddit.com/r/';
    var url  = base + subreddit + '.json?jsonp=?';
    $.getJSON(url).done(function (json) {
      this.current = json;
      $(window).trigger('set-videos', this.current);
    }.bind(this)).fail(function (error) {
      $(window).trigger('set-videos-error', error);
    });
  },

  getUrl: function (index) {
    var iframe = this.current ? this.current.data.children[index].data.media_embed.content : null;
    if (!iframe) return null;
    var src = iframe.match(/src="(\S+)"/)[1].concat('&autoplay=1');
    return src;
  }
};

export default Videos;
