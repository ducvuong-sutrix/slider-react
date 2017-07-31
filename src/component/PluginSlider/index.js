import React from 'react';
class PluginSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSlide: props.children.length,
      index: 0,
      lastIndex: 0
    }
  }

  goToSlide(index, event) {
    const {sizeSlide} = this.state;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (index < 0) {
      index =  sizeSlide - 1 ;
    } else if (index >= sizeSlide) {
      index =  0 ;
    }

    this.setState({
      index: index,
      lastIndex: index
    })
  }

  renderDot() {
    const { lastIndex } = this.state;
    const { children } = this.props;
    const dots = children.map((slide, i) => {
      const activeClass = i === lastIndex ? 'dot active' : 'dot';
      return (
        <li className={ activeClass } key={ i }>
          <button
            onClick={ (event) => this.goToSlide(i, event) }>
            {i+1}
          </button>
        </li>
      );
    })

    return (
      <ul className="dots slick-dots">
        {dots}
      </ul>
    );
  }

  renderArrow() {
    const { lastIndex } = this.state;
    return (
      <div className="arrows">
        <button className="btn-prev btn-arrow" type="button" onClick={ (event) => this.goToSlide(lastIndex - 1, event) }/>
        <button className="btn-next btn-arrow" type="button" onClick={ (event) => this.goToSlide(lastIndex + 1, event) }/>
      </div>
    );
  }

  render() {
    const {className, children, arrow, dots} = this.props;
    const {sizeSlide, index} = this.state;
    const slidesStyles = {
        width: `${ 100 * sizeSlide}%`,
        transform: `translateX(${ -1 * index * (100 / sizeSlide) }%)`,
        transition: `transform 0.5s`
      };
    return (
      <div className={"my-slider " + className} >
        <div className="wrapper-my-slider" style={ slidesStyles }>
          { children }
        </div>
        { arrow ? this.renderArrow()  : null }
        { dots ? this.renderDot() : null }
      </div>
    );
  }
}
PluginSlider.defaultProps = {
  arrow: true,
  dots: true
}
export default PluginSlider;
