let React = require('react');
let Repo = require('./Repo.jsx');

let RepoList = React.createClass({
  render: function(){
    return(
      <div>
        <ul className="list-group">
          { this.props.userRepos.map((repo) => {
              return <Repo repo={repo} key={repo.id} />
            }) }
        </ul>
      </div>
    );
  }
});

module.exports = RepoList;
