import React from 'react';
import {Link} from 'react-router-dom';

class ListMenu extends React.Component {
  render() {
    const list = this.props.arrMenu.map((item) => {
        return <li key={item.title}><Link to={item.link} title={item.title}>{item.text}</Link></li>
    })
    return (
      <ul className={this.props.className}>
        {list}
      </ul>
    )
  }
}
ListMenu.defaultProps = {
  arrMenu: [{
    "text": "No data",
    "title": "No data",
    "link": "#"
    }, {
    "text": "No data",
    "title": "No data",
    "link": "#"
    }],
  className: ''
};
export default ListMenu;
