import React from 'react'

function Input(props) {
  return <input type={props.type} className={props.className} placeholder={props.placeholder}/>
}
Input.defaultProps = {
  type: 'text',
  placeholder: '',
  text: '',
  className: ''
};

export default Input;
