import React from 'react';
import PluginSlider from './../../../component/PluginSlider';
class Slider extends React.Component {
  render() {
    const {data} = this.props;
    const list = data.map((item, index) => {
      return <div className="slider-item my-slider-item" key={index}>
               <img src={require('../../../' + item.src)} alt={item.alt}/>
                <div className="caption">
                  <p>{item.description}</p>
                </div>
            </div>
    })
    return (
      <PluginSlider className="slider">
        {list}
      </PluginSlider>
    )
  }
}
Slider.defaultProps = {
  "src": "",
  "alt": "",
  "description": "description"
}
export default Slider;
