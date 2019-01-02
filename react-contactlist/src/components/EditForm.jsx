let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');

var EditForm = React.createClass({
	getInitialState: function(){
		return { contactToEdit: null }
	},
	clearInputValues: function(){
		this.setState({
			contactToEdit: {
				name:  "",
				phone: "",
				email: ""
			}});
	},
	handleChange: function(fieldName, event){
		let newState = event.target.value;
		let editedContact = {
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		if(Object.values(editedContact).every(element => (element === null || element === ''))){
			window.alert("Contact record cannot be empty, please fill out all values to continue!");
			return;
		}

		if(fieldName === "name")
			editedContact.name = newState;
		else if(fieldName === "phone")
			editedContact.phone = newState;
		else if(fieldName === "email")
			editedContact.email = newState;

		this.setState({
			contactToEdit: editedContact
		});
	},
	handleSubmit: function(e){
		e.preventDefault();

		var contact = {
			id: this.props.contactToEdit.id,
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		this.clearInputValues();

		Actions.updateContact(contact);
		Actions.addContact();
	},
	backToAddForm: function(){
		Actions.addContact();
	},
	render: function(){
		//Check if this.state.contactToEdit is either 'null' or empty
		let isEmpty = (this.state.contactToEdit === null)? true: Object.values(this.state.contactToEdit).every(element => (element === null || element === ''));
		let val = (isEmpty)? this.props.contactToEdit: this.state.contactToEdit;

		return(
			<div className="well">
				<h3>Edit Contact</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={val.name} className="form-control" placeholder="Add Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="phone" onChange={this.handleChange.bind(this, 'phone')} value={val.phone} className="form-control" placeholder="Add Phone..." />
					</div>
					<div className="form-group">
						<input type="text" ref="email" className="form-control" onChange={this.handleChange.bind(this, 'email')} value={val.email} placeholder="Add Email..." />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<button style={{marginLeft:10}} type="submit" onClick={this.backToAddForm} className="btn btn-primary">Back to Add Contacts</button>
				</form>
			</div>
		);
	}
});

module.exports = EditForm;
