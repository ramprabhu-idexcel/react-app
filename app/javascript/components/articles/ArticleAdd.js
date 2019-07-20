import React, { Component } from 'react';

class ArticleAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', content: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  render() {
    return (
        <div>
          <h1>Create Article Post</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label><br/>
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
            </div>
            <br/>
            <div className="form-group">
              <label>Content</label><br/>
              <textarea name="content" rows="5" value={this.state.content} onChange={this.handleChange} className="form-control" />
            </div>
            <br/>
            <div className="btn-group">
              <button type="submit" className="btn btn-dark">Create</button>
              <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('api/articles', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }})
        .then(response => response.json())
        .then(data => {
          this.props.history.push(`/articles/${data.id}`)
        })
        .catch(error => console.log(error))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleCancel() {
    this.props.history.push('/articles');
  }
}

export default ArticleAdd;
