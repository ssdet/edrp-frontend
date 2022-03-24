import React from 'react';
import Card from '../Profile';
const Cardlist= ( {Robots} )=> {

    return (
        <div>{Robots.map((user, i) => {
            return <Card 
            key={i}
            id={Robots[i].id} 
            name={Robots[i].name} 
            email={Robots[i].email}
            username={Robots[i].username} />
        })}
        </div>
    )
}

export default Cardlist ;
