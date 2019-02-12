import React from 'react';
import './Toast.css';


function Toast (props) {
  const {
    isShow,
    content,
  } = props
  return (
    <div 
      className={isShow ? 'g-toast g-toast--show' : 'g-toast'}
    >
      <span className="g-toast__content">{content}</span>
    </div>
  )
}




export default Toast;
