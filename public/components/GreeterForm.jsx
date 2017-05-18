const React = require('react');

let GreeterForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    let message = this.refs.message.value;
    let updates = {};

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates);

  },

  render: function() {

    return (
      <form id="form" onSubmit={this.onFormSubmit}>

        <input type="text" ref="name" placeholder="Enter name..."/>
        <br/>
        <textarea form="form" ref="message" placeholder="Enter message..."></textarea>
        <button>Set Name</button>

      </form>
    );
  }
});

module.exports = GreeterForm;
