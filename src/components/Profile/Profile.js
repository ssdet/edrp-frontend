import React from 'react';
import Cardlist from './PeopleList/Cardlist';
import Scroll from './PeopleList/Scroll';
import Errorboundary from './PeopleList/Errorboundary';
import '../Profile/Profile.css';

class Profile extends React.Component{

    constructor(){
        super()
        this.state={
            Robots: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
            .then(users=>this.setState({ Robots: users })).catch(err=>console.log(err))
    }

render()
    {
        return(  
                <div className="tc pa4">
                    <span >Star Troopers</span>
                    <Scroll>
                    <Errorboundary><Cardlist Robots={this.state.Robots} /></Errorboundary>
                    </Scroll>
                </div>
            );
        }
    } 



export default Profile;
