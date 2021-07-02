import React, { Component, useState } from "react";
// import { SafeAreaView} from 'react-native';
import "./Profile.css";
// import EditProfile from "./EditProfile";
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
    // const ProfilePage = () => (
    //     <User
    //       render={({ user, error, loading }) => {
    //         if (error) return <p>{error}</p>;
    //         if (loading) return <p>Loading...</p>;
    //         return (
    //           <div className="userProfile">
    //             <img src={user.picture.large} alt="Profile Picture" />
    //             <h1>{user.name}</h1>
    //             <div className="userInfo">
    //               <ul>
    //                 <li>Email: {user.email}</li>
    //                 <li>Username: {user.login.username}</li>
    //                 <li>Phone: {user.phone}</li>
    //                 <li>Birthdate: {user.dob.date}</li>
    //               </ul>
    //             </div>
    //           </div>
    //         );
    //       }}
    //     />
    //   );
      render() {
        console.log(this.props.pins)
        const pins = this.props.pins?.map(pin => <h5 key={pin._id}>{pin.description}</h5>)
        console.log(pins)
        // const user = this.state.user(user => <h5 key={user._id}>{user.description}</h5>)
        // console.log(user)
        return (
                      
            <div class=" profile">
                <div>
                    <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                    src="https://play-lh.googleusercontent.com/TECjsAu9DWLbKBuDl2sDHEUhlTh-n0eTgrHbt-7-a33Fy2p-slkHg8FN6r_dCbKBdA"
                    />
                    <h2>Profile for {this.user}</h2>
                </div>
                <h1 id='Profile'>Profile</h1>
                <h3>User Info: Spencer Soto</h3>
                <h4>Location: Miami</h4> <br></br>
               <p> Our community is dedicated to the Adventures of your Life!</p>
  
                <div class="profile-work">
                   
                    <h2>PINS</h2>
                    {/* {PINS = this.state.user}ß */}
                    {pins}
                    </div>
                <div className="profile-work">
                    <h2>Blogs</h2>
                {/* user={this.state.user} */}
                </div>
            </div>
  
            // {/* <EditProfile/> */}
          
  
        )
    }
 }
  
  
 export default Profile;