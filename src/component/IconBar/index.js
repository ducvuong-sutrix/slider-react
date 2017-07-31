import React from 'react'

function IconBar(props) {
  return (
    <button type={props.type} className={props.className}>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  )
}
export default IconBar;
