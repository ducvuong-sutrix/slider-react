import React from 'react'
import {Link} from 'react-router-dom'

class ArticleLoop extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="article-loop">
        <h2><Link to={data.link}>{data.title}</Link></h2>
        <div className="article-excerpt">
          {data.excerpt}
        </div>
        <Link to={data.link} className="btn view-more">Xem thêm</Link>
      </div>
    )
  }
}
ArticleLoop.defaultProps = {
  "link": '#',
  "title": 'title',
  "date": '01/01/2011',
  "excerpt": 'description'
}
export default ArticleLoop;
