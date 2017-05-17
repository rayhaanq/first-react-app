const React = require('react');
const ReactDOM = require('react-dom');

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

let Greeter = React.createClass({

  getDefaultProps: function() {
    return {name: 'React', msg: 'This is a component'};
  },

  getInitialState: function() {

    return {name: this.props.name, message: this.props.msg}
  },

  handleNewData: function(updates) {


      this.setState(updates);

    if (updates.message != null){
      this.setState({
        message: updates.message

      });
    }


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

ReactDOM.render(
  <Greeter/>, document.getElementById('app'));
