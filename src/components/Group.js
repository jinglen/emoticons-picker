import React from 'react';
import './Group.css';


function Group (props) {
  const {
    title,
    children,
  } = props
  return (
    <section className="group">
      <h5 className="group__title">{title}</h5>
      <div className="group__container">
        {children}
      </div>
    </section>
  )
}




export default Group;
