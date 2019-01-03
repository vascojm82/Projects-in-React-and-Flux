let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');
let AppApi = require('../utils/appApi.js');

let AddNoteForm = React.createClass({
  onSubmit: function(e){
		e.preventDefault();

		var note = {
			text: this.refs.text.value.trim()
		}

    this.refs.text.value = "";

		Actions.addNote(note);
    AppApi.getNotes();
	},
	render: function(){
		return(
			<div>
				<h5>Add A Note</h5>
				<form onSubmit={this.onSubmit}>
					<div className="row">
						<div className="large-12 columns">
							<label>Note Text
								<input type="text" ref="text" placeholder="Enter Text..." />
							</label>
							<button className="button">Add</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = AddNoteForm;
