import React from 'react';
import './Group.css';


function Group (props) {
  const {
    title,
    children,
  } = props
  return (
    <section className="group">
      <h3 className="group__header">{title}</h3>
      <p className="group__container">
        {children}
      </p>
    </section>
  )
}




export default Group;
