import React from 'react';
import Form from './../Form';
import Button from './../Button';
import Input from './../Input';
class TopBarRight extends React.Component {
  render() {
    return (
      <div className="navbar-right">
        <Form action="/" method="post" className="search-form">
          <Input className="search-text" placeholder="Search..."/>
          <Button type="submit" className="search-btn">Search</Button>
        </Form>

        <ul className="language">
          <li><a href="/" title="Vietnamese" className="vn">Vietnamese</a></li>
          <li><a href="/" title="English" className="en">English</a></li>
          <li><a href="/" title="Russia" className="ru">Russia</a></li>
        </ul>
      </div>
    )
  }
}

export default TopBarRight
