const React = require('react');
const GreeterMessage = require('GreeterMessage');
const GreeterForm = require('GreeterForm');

let Greeter = React.createClass({

  getDefaultProps: function() {
    return {name: 'Rayhaan', msg: 'This is a component'};
  },

  getInitialState: function() {

    return {name: this.props.name, message: this.props.msg};
  },

  handleNewData: function(updates) {


    this.setState(updates);

  },

  render: function() {
    let name = this.state.name;
    let msg = this.state.message;
    return (

      <div>

        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewData={this.handleNewData}/>

      </div>
    );
  }
});

module.exports = Greeter;
