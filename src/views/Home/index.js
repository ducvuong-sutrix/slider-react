import React from 'react';
import Data from '../../data/data.json';
import Slider from './../blocks/Slider';
import IntroBlock from './../blocks/IntroBlock';
import ArticleHome from './../blocks/ArticleHome';
import PartnerHome from './../blocks/PartnerHome';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Slider data={Data.slider}/>
        <IntroBlock data={Data.introBlock}/>
        <div className="home-featured">
          <ArticleHome data={Data.newsEvent}/>
          <PartnerHome data={Data.partners}/>
        </div>
      </div>
    )
  }
}
export default Home;
