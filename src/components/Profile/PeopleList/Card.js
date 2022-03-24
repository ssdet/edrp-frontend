import React from 'react';

const TeacherCard = (props) => {
 return(
    <div style={{marginBottom:'30px',marginLeft:'30px', borderRadius:'20px', border:'2px solid black', marginTop:'30px', width:'400px', padding:'30px'}}>
         <img alt="robots" src={`https://robohash.org/${props.id}?set=set2?200x200`} />
        <div>
           <h1>{props.name}</h1>
           <h2>{props.username}</h2>
           <p>{props.email}</p>
        </div>
    </div>
 )
}


export default TeacherCard;
