import React from 'react';
import './Group.css';


function Group (props) {
  const {
    title,
    children,
  } = props
  return (
    <section className="group">
      <h3 className="group__title">{title}</h3>
      <div className="group__container">
        {children}
      </div>
    </section>
  )
}




export default Group;
