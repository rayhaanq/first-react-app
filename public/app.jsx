let Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React',
      msg: 'This is a component'
    };
  },

  onButtonClick: function(e){
    e.preventDefault();

    let name = this.refs.name.value;
    alert(name);
  },

  render: function() {
    let name = this.props.name;
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
