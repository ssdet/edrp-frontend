import React from 'react';

const Scroll = (props) => {
  return (<div  style={{overflowY:'auto', height: '700px', margin:'0px 30px 20px 30px',  border:'3px solid green', borderRadius:'6px' }}>
       {props.children}
   </div>);
}

export default Scroll;