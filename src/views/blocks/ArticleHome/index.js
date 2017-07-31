import React from 'react';
import {Link} from 'react-router-dom';
import ArticleFeature from './../../../component/ArticleFeature';
import ArticleItem from './../../../component/ArticleItem';

class ArticleHome extends React.Component {
  constructor(props) {
    super(props);
    this.getArticle = this.getArticle.bind(this);
  }

  getArticle = (data) => {
    const list =  data.map((item, index) => {
      return item.banner ? <ArticleFeature data={item} key={index}/> : <ArticleItem data={item} key={index}/>
    })
    return <section>{list}</section>
  }

  render() {
    const {data} = this.props;
    return (
      <article className="article-block block">
        <header>
          <h2 className="title">{data.title}</h2>
          <Link to={data.link} title="View more" className="viewmore">View more</Link>
        </header>
        { data.articles ? this.getArticle(data.articles) : <article>Dont have any news !</article> }
      </article>
    )
  }
}

ArticleHome.defaultProps = {
  data: {
    title: '',
    link: '',
  }
};
export default ArticleHome;
