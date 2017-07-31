import React from 'react';
import {Link} from 'react-router-dom';
import TopBarRight from './../../../component/TopBarRight';
import ListMenu from './../../../component/ListMenu';
import IconBar from './../../../component/IconBar';
import Logo from './../../../assets/logo.png';
class Header extends React.Component {
  render() {
    const {arrMenu} = this.props;
    return (
    <header className="main-header">
      <Link to="/" title="Template Demo" className="logo">
        <img src={Logo} alt="Sutrix template demo"/>
      </Link>
      <IconBar type="button" className="navbar-btn"/>
      <div className="navbar-wrapper">
        <TopBarRight/>
        <nav className="navbar">
          <ListMenu arrMenu = {arrMenu}/>
        </nav>
      </div>
    </header>
    )
  }
}

export default Header;
