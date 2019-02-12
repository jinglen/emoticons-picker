import React from 'react';
import './Emoticon.css';


function Emoticon (props) {
  const {
    value,
    onClick,
  } = props
  return (
    <a 
      href="#copy"
      title="点击复制"
      className="emoticon"  
      name={value}
      onClick={onClick}
    >
      {value}
    </a>
  )
}




export default Emoticon;
