import React from 'react'
import {Link} from 'react-router-dom';

class ArticleFeature extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="featured-item">
        <Link to={data.link} className="thumbnail">
          <img src={require('./../../' + data.banner.src)} alt={data.banner.alt}/>
        </Link>
        <div className="caption">
          <div className="header">
            <h3 className="title-item">
              <a href={data.link} title={data.title}>{data.title}</a>
            </h3><span className="date">{data.date}</span>
          </div>
          <div className="desc">
            <p>{data.excerpt}</p>
          </div>
        </div>
      </div>
    )
  }
}
ArticleFeature.defaultProps = {
  "link": '#',
  "title": 'title',
  "date": '01/01/2011',
  "excerpt": 'description'
}
export default ArticleFeature;
