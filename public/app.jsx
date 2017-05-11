let Greeter = React.createClass({

  getDefaultProps: function (){
    return {

      name: 'React',
      msg: 'This is a component'
    };
  },


  render: function() {
    let name = this.props.name;
    let msg = this.props.msg;
    return (

      <div>

        <h1>Hello {name}!</h1>
        <p>{msg}</p>

      </div>

    );

  }
});

let firstName = "Rayhaan";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
