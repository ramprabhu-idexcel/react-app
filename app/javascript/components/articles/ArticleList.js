import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] }
  }

  componentDidMount() {
    fetch('api/articles')
        .then(response => response.json())
        .then(json => this.setState({articles: json}))
        .catch(error => console.log(error))
  }

  render() {
    return (
        <div>
          { this.renderArticles() }
          <Link to="/articles/new" className="btn btn-outline-primary">Create Article</Link>
        </div>
    )
  }

  renderArticles() {
    return this.state.articles.map((article) => {
      return(
      <div key={article.id}>
        <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
        {article.content}
        <hr/>
      </div>)
    })
  }
}

export default ArticleList;

