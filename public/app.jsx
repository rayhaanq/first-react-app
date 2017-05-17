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

  onFormSubmit: function (e) {
    e.preventDefault();

    let name = this.refs.name.value;

    if (name.length > 0){
      this.refs.name.value = '';

      this.props.onNewName(name);

    }

  },

  render: function(){

    return(
      <form onSubmit={this.onFormSubmit}>

        <input type="text" ref="name"/>
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

    return {name: this.props.name}
  },

  handleNewName: function(name) {

    this.setState({
      name:name
    });

  },

  render: function() {
    let name = this.state.name;
    let msg = this.props.msg;
    return (

      <div>

        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewName={this.handleNewName}/>

      </div>

    );

  }
});

let firstName = "Rayhaan";

ReactDOM.render(
  <Greeter name={firstName}/>, document.getElementById('app'));
