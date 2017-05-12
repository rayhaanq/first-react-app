let Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React',
      msg: 'This is a component'
    };
  },

  getInitialState: function(){

    return {
      name : this.props.name
    }
  },

  onButtonClick: function(e){
    e.preventDefault();

    let nameRef = this.refs.name;
    let name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
      });
    }


  },

  render: function() {
    let name = this.state.name;
    let msg = this.props.msg;
    return (

      <div>

        <h1>Hello {name}!</h1>
        <p>{msg}</p>


        <form onSubmit={this.onButtonClick}>

          <input type="text" ref="name"/>
          <button>Set Name</button>

        </form>

      </div>

    );

  }
});

let firstName = "Rayhaan";

ReactDOM.render(
  <Greeter name={firstName}/>, document.getElementById('app'));
