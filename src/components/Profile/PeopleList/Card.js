import React from 'react';

const Card=({name, email, username})=>
{
 return(
    <div className="bg-white dib br3 pa2 bw2 shadow-5 ma2 grow">
         <img alt="robots" src={`https://robohash.org/${id}?set=set2?200x200`} />
        <div>
           <h1>{name}</h1>
           <h2>{username}</h2>
           <p>{email}</p>
        </div>
    </div>
 );
}


export default Card;
