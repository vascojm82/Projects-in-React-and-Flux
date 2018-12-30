let React = require('react');

let Search = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    let username = this.refs.username.value.trim();

    if(!username){
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
