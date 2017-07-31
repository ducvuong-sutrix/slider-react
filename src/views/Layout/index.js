import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Data from '../../data/data.json';
import Home from './../Home';
import News from './../News';
import Articles from './../Articles';
import Header from './../blocks/Header';
import Footer from './../blocks/Footer';
import NotFound from './../NotFound';

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header arrMenu = {Data.header.mainMenu}/>
          <main>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/index" component = {Home} />
            <Route exact path = "/news" component = {News} />
            <Route path = "/news/:articleId" component = {Articles}/>
            <Route exact path = "/404" component = {NotFound} />
            <Route path = "*" component = {NotFound} />
          </Switch>
          </main>
          <Footer dataFooter = {Data.footer}/>
        </div>
      </Router>
    )
  }
}
export default Layout;
