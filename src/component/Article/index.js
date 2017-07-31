import React from 'react'
class Article extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="article-content">
        <h1>{data.title}</h1>
        <div className="article-description">
          {data.description}
        </div>
      </div>
    )
  }
}
Article.defaultProps = {
  "title": 'title',
  "description": 'description'
}
export default Article;
