let React = require('react');
let Favicon = require('react-favicon');
let AddForm = require('./AddForm.jsx');
let EditForm = require('./EditForm.jsx');
let ContactList = require('./ContactList.jsx');
let Actions = require('../flux/actions/Actions.jsx');
let AppStore = require('../flux/stores/AppStore.jsx');
let AppAPI = require('../utils/appApi');

let App = React.createClass({
	getInitialState: function(){
		return { contacts: AppStore.getContacts(), contactToEdit: AppStore.getContactToEdit() }
	},
	componentDidMount: function(){
		AppStore.addChangeListener(this.onChange);
		AppAPI.getContacts();		//Load all contacts from Firebase
	},
	componentUnmount: function(){
		AppStore.removeChangeListener(this.onChange);
	},
	onChange: function(){		//When there's a change in the store, change the state accordingly
		this.setState({
			contacts: AppStore.getContacts(),
			contactToEdit: AppStore.getContactToEdit()
		});
	},
	clearInputFields: function(){
		if(this.refs.editForm)
			this.refs.editForm.clearInputValues();
	},
	render: function(){
		let form = (this.state.contactToEdit === "")? <AddForm />: <EditForm ref="editForm" contactToEdit={this.state.contactToEdit} />;

		return(
			<div>
			  <Favicon url="./img/favicon.ico" />
				<div className="col-md-12">
					<div className="title">
						<h1 style={{marginBottom:40}} className="text-center">ReactJS/Flux Contact List</h1>
					</div>
				</div>
				<div className="col-md-12">
					{form}
				</div>
				<ContactList clearInputFields={this.clearInputFields} contacts={this.state.contacts} />
			</div>
		);
	}
});

module.exports = App;
