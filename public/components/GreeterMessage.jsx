const React = require('react');

let GreeterMessage = React.createClass({
  render: function() {

    let newName = this.props.name;
    let newMsg = this.props.msg;

    return (

      <div>

        <h1>Hello {newName}</h1>
        <p>{newMsg}</p>

      </div>
    );

  }

});

module.exports = GreeterMessage;
