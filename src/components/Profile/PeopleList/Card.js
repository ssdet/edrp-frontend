import React from 'react';

const TeacherCard = (props) => {
 return(
    <div className="bg-white">
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
