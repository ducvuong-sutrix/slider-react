import React from 'react';
import ListMenu from './../../../component/ListMenu';

class Footer extends React.Component {
  render(){
    const {dataFooter} = this.props;
    const {contact, quickLinks, newsletter, copyright} = dataFooter;
    return (
      <div className="footer">
        <div className="top-footer">
          <div className="block">
            <h3 className="title">{contact.title}</h3>
            <div className="content">
              <address><strong>Address:</strong> {contact.address}</address>
              <strong>Tel:</strong> {contact.tel}<br/>
              <strong>Fax:</strong> {contact.fax}<br/>
              <strong>Email:&nbsp;<a href="mailto:{contactFooter.email}" title="mail">{contact.email}</a></strong>
            </div>
          </div>
          <div className="block">
            <h3 className="title">Quick links</h3>
            <div className="content">
              <nav className="nav">
                <ListMenu ArrMenu = {quickLinks}/>
              </nav>
            </div>
          </div>
          <div className="block newsletter-block">
            <h3 className="title">{newsletter.title}</h3>
            <div className="content">
              <form action="#" method="post" name="subscribe-form" id="subscribe-form" className="subscribe-form">
                <input type="text" id="subscribe-text" name="subscribe-text" placeholder="Enter Email..." required="required" className="subscribe-text"/>
                <button type="submit" name="subscribe-btn" id="subscribe-btn" title="Sign Up" className="subscribe-btn">Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <nav className="footer-nav">
            <ListMenu ArrMenu = {copyright.listLinks}/>
          </nav>
          <p className="copyright">{copyright.text}</p>
        </div>
      </div>
    )
  }
}

export default Footer;
