let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');

var Contact = React.createClass({
	handleRemove: function(i, j){
		Actions.removeContact(i);
	},
	handleEdit: function(i, j){
		Actions.editContact(i);						//Pass the selected contact from the list to be edited
		this.props.clearInputFields();		//Clears state in 'EditForm' component so props are displayed instead (the above selected contact)
	},
	render: function(){
		return(
			<tr>
				<td className="td-min-name">{this.props.contact.name}</td>
				<td>{this.props.contact.phone}</td>
				<td className="td-min-email">{this.props.contact.email}</td>
				<td>
						<div className="text-center">
							<a style={{paddingLeft: 30, paddingRight: 30, marginRight: 10}} href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a>
							<a style={{paddingLeft: 20, paddingRight: 20}} href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a>
						</div>
				</td>
			</tr>
		);
	}
});

module.exports = Contact;
