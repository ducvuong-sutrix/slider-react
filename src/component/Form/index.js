import React from 'react';

function Form(props) {
  return <form action={props.action} method={props.method} className={props.className}>{props.children}</form>
}

Form.defaultProps = {
  action: '',
  method: '',
  className: ''
};

export default Form;
