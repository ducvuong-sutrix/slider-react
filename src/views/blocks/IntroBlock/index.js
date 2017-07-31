import React from 'react';
import {Link} from 'react-router-dom';
import PluginSlider from './../../../component/PluginSlider';
class IntroBlock extends React.Component {
  render() {
    const {data} = this.props;
    const list = data.introSlider.map((item, index) => {
      return <div className="intro-slider-item" key={index}>
        <img src={require('../../../' + item.src)} alt={item.alt}/>
      </div>
    })

    return (
      <div className="intro-block block">
        <PluginSlider className="intro-slider" arrow={false}>
          {list}
        </PluginSlider>
        <div className="content">
          <h1 className="title">{data.title}</h1>
          <div className="desc">
            <p>{data.description}</p>
          </div>
        <Link to="/news" title="View more" className="viewmore">View more</Link>
        </div>
      </div>
    )
  }
}
IntroBlock.defaultProps = {
  "introSlider": [{
    "src": "#",
    "alt": "demo"
  }],
  "title": "title",
  "description": "description"
}
export default IntroBlock;
