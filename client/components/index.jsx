import React from 'react';
import Hero from 'components/hero'
import Content from 'components/content'

var Index = React.createClass({
  render: function() {
    return (
      <section>
        <Hero/>
        <Content/>
      </section>
    );
  }
});

export default Index;