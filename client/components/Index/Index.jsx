import React, { Component } from 'react';

class IndexComponent extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>
        <h1>reddi.tv</h1>
        <p>
          Bacon ipsum dolor amet meatloaf cow short loin, jerky beef ribs ball tip pancetta. Drumstick jowl doner kevin spare ribs sausage frankfurter fatback bacon tongue shank flank ribeye capicola porchetta. Tenderloin spare ribs shoulder ham hock, biltong capicola pork belly pig sirloin alcatra kielbasa bacon. Filet mignon landjaeger ham hock spare ribs pork pancetta, sausage tongue strip steak tenderloin kevin venison. Strip steak shankle pork loin chuck, chicken kevin sirloin doner brisket andouille porchetta. Swine leberkas corned beef fatback, capicola pork shankle. Flank hamburger picanha, jerky capicola frankfurter spare ribs ham hock.
        </p>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
