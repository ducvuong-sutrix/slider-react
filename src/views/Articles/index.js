import React from 'react';
import Data from '../../data/data.json';
import ArticleContent from './../../component/Article';
import {Redirect} from 'react-router-dom';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.getArticle = this.getArticle.bind(this);
  }

  getArticle = (data, articleId) => {
    const article =  data.filter((item, index) => {
      return item.id === articleId ? { article } : false ;
    })
    if (article.length > 0) {
      return <ArticleContent data={article[0]}/>
    }
    else {
      return <div>
        <Redirect to="/404" />
      </div>
    }
  }

  render() {
    const data = Data.newsEvent.articles;
    const articleId = this.props.match.params.articleId;
    return (
      <div>
        {this.getArticle(data, articleId)}
      </div>
    )
  }
}
export default Articles;
