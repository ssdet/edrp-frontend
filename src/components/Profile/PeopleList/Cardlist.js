import React from 'react';
import TeacherCard from './Card';

const Cardlist= ( {Robots} )=> {

    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {Robots.map((user, i) => {
            return <TeacherCard 
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
