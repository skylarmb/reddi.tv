import React from 'react';
import Search from './search'

var Content = React.createClass({
  render: function() {
    return (
      <div className='content'>
      	<Search/>
        <div className='row'>
          <p>
            Biltong leberkas capicola ball tip filet mignon, fatback spare ribs beef frankfurter swine pork loin ham kielbasa. Ribeye fatback bacon beef meatball tongue chicken strip steak sirloin picanha sausage bresaola.
          </p>
        </div>
      </div>
    );
  }
})

export default Content;