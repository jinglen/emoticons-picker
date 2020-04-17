import React from 'react';
import './Emoticon.css';


function Emoticon (props) {
  const {
    value,
    onClick,
  } = props
  return (
    <button 
      title="点击复制"
      className="emoticon"  
      name={value}
      onClick={onClick}
    >
      {value}
    </button>
  )
}




export default Emoticon;
