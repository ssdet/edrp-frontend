import React from 'react';
import { MyContext } from '../../../store/Store';
import TeacherCard from './Card';

const Cardlist= ( {Robots} )=> {

    const store = React.useContext(MyContext);

    React.useEffect(() => {
        store.fetchFaculties()
    }, [])

    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {store.state.facultyList.length < 0 && <>
            <center>
                <h5>Please Wait...</h5>
            </center>
            </>}
          {store.state.facultyList.map((user, i) => {
            return <TeacherCard 
            key={i}
            data={user}
            user={store.state.user}
             />
        })}
        </div>
    )
}

export default Cardlist ;
