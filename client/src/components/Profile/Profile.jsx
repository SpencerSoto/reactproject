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
   render() {
       console.log(this.props.pins)
       const pins = this.props.pins?.map(pin => <h5 key={pin._id}>{pin.description}</h5>)
       console.log(pins)
       return (
                     
           <div class=" profile">
               <div>
                   <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                   src="https://play-lh.googleusercontent.com/TECjsAu9DWLbKBuDl2sDHEUhlTh-n0eTgrHbt-7-a33Fy2p-slkHg8FN6r_dCbKBdA"
                   />
                   <h2>Profile for Wingz4Lyfe</h2>
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
                   {/* {blogs} */}
               {/* user={this.state.user} */}
               </div>
           </div>
 
           // {/* <EditProfile/> */}
         
 
       )
   }
}
 
 
export default Profile;