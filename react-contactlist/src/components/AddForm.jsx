let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');

var AddForm = React.createClass({
	render: function(){
		return(
			<div className="well">
				<h3>Add Contact</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" ref="name" className="form-control" placeholder="Add Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="phone" className="form-control" placeholder="Add Phone..." />
					</div>
					<div className="form-group">
						<input type="text" ref="email" className="form-control" placeholder="Add Email..." />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	},

	handleSubmit: function(e){
		e.preventDefault();

		var contact = {
			name: this.refs.name.value,
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		if(Object.values(contact).every(element => (element === null || element === ''))){
			window.alert("New Contact record cannot be empty, please fill out all values to submit!");
			return;
		}

		this.refs.name.value = this.refs.phone.value = this.refs.email.value = "";

		Actions.saveContact(contact);
	}
});

module.exports = AddForm;
