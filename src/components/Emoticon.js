import React from 'react';
import './Emoticon.css';


function Emoticon (props) {
  const {
    value,
    onClick,
  } = props
  return (
    <a 
      className="emoticon"  
      name={value}
      onClick={onClick}
    >
      {value}
    </a>
  )
}




export default Emoticon;
