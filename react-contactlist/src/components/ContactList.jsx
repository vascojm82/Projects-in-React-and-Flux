let React = require('react');
let Contact = require('./Contact.jsx');

var ContactList = React.createClass({
	render: function(){
		return(
			<div className="col-md-12">
				<div style={{marginTop:40, padding:19}} className="panel">
					<div className="panel-header">
						<h3 className="text-center">Contacts</h3>
					</div>
					<div className="panel-body table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Phone</th>
									<th>Email</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{this.props.contacts.map((contact, index) => {
										return(
											<Contact clearInputFields={this.props.clearInputFields} contact={contact} key={index} />
										)
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ContactList;
