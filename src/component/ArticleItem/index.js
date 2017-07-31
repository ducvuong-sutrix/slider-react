import React from 'react'
import {Link} from 'react-router-dom'

class ArticleItem extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="item-article">
        <div className="header">
          <h3 className="title-item">
          <Link to={data.link} title={data.title}>{data.title}</Link>
          </h3><span className="date">{data.date}</span>
        </div>
        <div className="shorttext">
          <p>{data.excerpt}</p>
        </div>
      </div>
    )
  }
}
ArticleItem.defaultProps = {
  "link": '#',
  "title": 'title',
  "date": '01/01/2011',
  "excerpt": 'description'
}
export default ArticleItem;
