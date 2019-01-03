let React = require('react');
let Favicon = require('react-favicon');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');
let AddNoteForm = require('./AddNoteForm.jsx');
let NoteList = require('./NoteList.jsx');
let AppApi = require('../utils/appApi.js');

let App = React.createClass({
  getInitialState: function(){
    return { notes: AppStore.getNotes() };
  },
  componentDidMount: function(){
    AppStore.addChangeListener(this.onChange);
    AppApi.getNotes();
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState({
      notes: AppStore.getNotes()
    });
  },
  render: function(){
    return(
      <div>
        <Favicon url="./img/favicon.ico" />
        <div>
  				<div className="off-canvas-wrapper">
  					<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
  						<div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
  							<div className="row column">
  								<br />
  								<AddNoteForm />
  							</div>
  						</div>
  						<div className="off-canvas-content" data-off-canvas-content>
                <NoteList notes={this.state.notes} />
  						</div>
  					</div>
  				</div>
  			</div>

      </div>
    );
  }
});

module.exports = App;
