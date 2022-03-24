import React from 'react';

const Scroll = (props) => {
  return (<div  style={{overflowY:'scroll', height: '900px', marginLeft:'90px', }}>
       {props.children}
   </div>);
}

export default Scroll;