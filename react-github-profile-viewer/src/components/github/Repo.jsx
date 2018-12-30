let React = require('react');

let Repo = React.createClass({
  render: function(){
    return(
      <li className="list-group-item">
          <a href={this.props.repo.html_url}>{this.props.repo.name}</a> : {this.props.repo.description}
      </li>
    );
  }
});

module.exports = Repo;
