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
        return (
            <section className='Profile'>
            <h1>Profile</h1>
            <p>NAME <br></br>
            Share your journeys and inspire others to engage our world with understanding.<br></br>
            Our community is dedicated to the Adventures of your Life!</p>

            <EditProfile/>

            </section>
        )
    }
}


export default Profile;