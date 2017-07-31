import React from 'react';
import PluginSlider from './../../../component/PluginSlider';

class PartnerHome extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <article className="partners-block block">
        <header>
          <h2 className="title">{data.title}</h2>
        </header>
        <section>
          <PluginSlider className="partners-slider" dots={false}>
            <div className="item">
              <div className="partners-slider-item">
                <a href="/" title="logo 1"><img src={require('../../../' + data.partnerSlider[0].src)} alt="logo 1"/></a>
                <a href="/" title="logo 2"><img src={require('../../../' + data.partnerSlider[1].src)} alt="logo 2"/></a>
              </div>
              <div className="partners-slider-item">
                <a href="/" title="logo 3"><img src={require('../../../' + data.partnerSlider[2].src)} alt="logo 3"/></a>
                <a href="/" title="logo 4"><img src={require('../../../' + data.partnerSlider[3].src)} alt="logo 4"/></a>
              </div>
              <div className="partners-slider-item">
                <a href="/" title="logo 5"><img src={require('../../../' + data.partnerSlider[4].src)} alt="logo 5"/></a>
                <a href="/" title="logo 6"><img src={require('../../../' + data.partnerSlider[5].src)} alt="logo 6"/></a>
              </div>
            </div>
            <div className="item">
              <div className="partners-slider-item">
                <a href="/" title="logo 1"><img src={require('../../../' + data.partnerSlider[0].src)} alt="logo 1"/></a>
                <a href="/" title="logo 2"><img src={require('../../../' + data.partnerSlider[1].src)} alt="logo 2"/></a>
              </div>
              <div className="partners-slider-item">
                <a href="/" title="logo 3"><img src={require('../../../' + data.partnerSlider[2].src)} alt="logo 3"/></a>
                <a href="/" title="logo 4"><img src={require('../../../' + data.partnerSlider[3].src)} alt="logo 4"/></a>
              </div>
              <div className="partners-slider-item">
                <a href="/" title="logo 5"><img src={require('../../../' + data.partnerSlider[4].src)} alt="logo 5"/></a>
                <a href="/" title="logo 6"><img src={require('../../../' + data.partnerSlider[5].src)} alt="logo 6"/></a>
              </div>
            </div>
          </PluginSlider>
        </section>
      </article>
    )
  }
}

export default PartnerHome;
