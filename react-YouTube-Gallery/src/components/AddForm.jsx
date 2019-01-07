let React = require('react');
let Actions = require('../flux/actions/Actions.jsx');

let AddForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    let video = {
      title: this.refs.title.value,
      video_id: this.refs.video_id.value.trim(),
      description: this.refs.description.value.trim()
    }

    this.refs.title = this.refs.video_id = this.refs.description = '';

    Actions.saveVideo(video);
  },
  render: function(){
    return(
      <div className="add-form">
        <panel className="c12">
          <h3>Add Video</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Video Title</label><br />
              <input type="text" className="form-control" ref="title" />
            </div>
            <div className="form-group">
              <label>Video ID</label><br />
              <input type="text" className="form-control" ref="video_id" />
            </div>
            <div className="form-group">
              <label>Video Description</label><br />
              <textarea className="form-control" ref="description"></textarea>
            </div>
            <button type="submit" className="button">Add</button>
          </form>
        </panel>
      </div>
    );
  }
});

module.exports = AddForm;
