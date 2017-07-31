import React from 'react';
import Data from '../../data/data.json';
import ArticleLoop from './../../component/ArticleLoop';
class News extends React.Component {
  getArticle = (data, articleId) => {
    const list =  data.map((item, index) => {
      return <ArticleLoop data={item} key={index}/>
    })
    return <div>{list}</div>
  }

  render() {
    const data = Data.newsEvent.articles,
          articleId = this.props.match.params.articleId;
    return (
      <div>
        {this.getArticle(data, articleId)}
      </div>
    )
  }
}
export default News;
