import React from 'react';
import './Emoticon.css';


function Emoticon (props) {
  const {
    value,
    onClick,
  } = props
  return (
    <div 
      title="点击复制"
      className="emoticon"  
      name={value}
      onClick={onClick}
    >
      {value}
    </div>
  )
}


      // href="#copy"


export default Emoticon;
