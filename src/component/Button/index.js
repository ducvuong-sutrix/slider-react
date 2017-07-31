import React from 'react'

function Button(props) {
  return <button type={props.type} className={props.className}>{props.children}</button>
}
Button.defaultProps = {
  className: 'btn',
  type: "button"
};

export default Button;
