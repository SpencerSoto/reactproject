import React, { Component, useState } from "react";
import "./Profile.css";
import EditProfile from "./EditProfile";
// export default () => {
//     const [editMode,setEditMode] = useStat(false);
//     const changeToFalse = () => {
//       setEditMode(false);   
//       }
//     return(
//         <div>
//             {editMode ?(
//         <div>
//             <EditProfile changetoFalse={changeToFalse}/>
//         </div>
//             )}
//         </div>
//     )
// }


class Profile extends Component {
    render() {
        console.log(this.props.pins)
        const pins = this.props.pins?.map(pin => <h5 key={pin._id}>{pin.description}</h5>)
        console.log(pins)
        return (
            <section className='Profile'>
                <h1 id='Profile'>Profile</h1>
                <p>Check out my adventure tips and journey logs <br></br>
                Here will be my map pins and journey logs<br></br>
                Our community is dedicated to the Adventures of your Life!</p>

                <div className="container">
                    <h2>PINS</h2>
                    {/* {PINS = this.state.user}ß */}
                    {pins}
                    </div>
                <div className="container">
                    <h2>Blogs</h2>
                {/* user={this.state.user} */}
                </div>
            </section>

            // {/* <EditProfile/> */}

        )
    }
}


export default Profile;