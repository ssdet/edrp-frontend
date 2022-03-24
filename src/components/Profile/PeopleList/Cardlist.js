import React from 'react';
import TeacherCard from './Card';
// import Card from '../Profile';

const Cardlist= ( {Robots} )=> {

    return (
        <div>
          <h1>{Robots[0].name}</h1>  
          {/* {Robots.map((user)=> (<div key={user.id}>
            <div className="bg-white">
                 <img alt="robots" src={`https://robohash.org/${user.id}?set=set2?200x200`} />
                <div>
                   <h1>{user.name}</h1>
                   <h2>{user.username}</h2>
                   <p>{user.email}</p>
                </div>
            </div>
          </div>))} */}

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
