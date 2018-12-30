let React = require('react');

let Search = React.createClass({
  onSubmit: function(e){    //This will be called when the user presses enter after typing on the input box below in render()
    e.preventDefault();
    let username = this.refs.username.value.trim();   //reference to the <input> box below in render()

    if(!username){    //If <input> in render() was empty
      alert("Please enter a username");
      return;
    }

    this.props.onFormSubmit(username);
    this.refs.username.value = "";
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search GitHub Users</label>
          <input style={{marginBottom: 15}}type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
});

module.exports = Search;
