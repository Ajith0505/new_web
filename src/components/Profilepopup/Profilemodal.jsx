import React from "react";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfileModal } from "../../redux/reducers/users";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";
import { useRef } from "react";


function Profilemodal() {
  
const dispatch = useDispatch()
const isIconClicked = useSelector(
  (state) => state.reducers.userprofile.isIconClicked
);
const isDrawerOPen = useSelector(
  (state) => state.reducers.userprofile.isDrawerOPen
);

// const handleProfileModals=() => {
//   console.log("haii there");
//   dispatch(handleProfileModal(false))
// }
// //  const closeModals =() => {
//   dispatch(handleProfilesideDrawer(false))
//   console.log("waht is going on ..... in modal ",);
//  }


  const handleOpenDrawerButton=() => {
    dispatch(handleProfilesideDrawer(true))
    
  
  }

  const handleEditprofile = () => {
    dispatch(handleEditsideDrawer(true))
  }

  // function handleBackdropClick() {
  //   setDrawerOpen(false);
  // }
 
    let menuRef = useRef();
    

    useEffect(() => {
        let handler = (event) =>{
            if (!menuRef.current.contains(event.target)){
                dispatch(handleProfileModal(false));
            }
        };

        document.addEventListener("mousedown",handler);
        
        return () => {
            document.removeEventListener("mousedown",handler);
        };
    });




  console.log("-----modal calll close (profileModal.jsx)",isIconClicked);
  console.log("-----drawer calll open  (profileModal.jsx)",isDrawerOPen);

  return (
    <div className="profile-modal" ref={menuRef}>
      <div className="profile-image-div"><img className="profile-image-icon" src="images\profile@3x.png" alt="profile-image" /></div>
      <div className="profile-image"><span className="profile-name">Hyder Marakkar</span></div>
      <div className="profile-image"><span className="profile-gmail">hyder.marakkar@gmail.com</span></div>
      <div className="profile-btn"><button className="button-editprofile" onClick={handleEditprofile}><span className="edit-profile">Edit Profile</span></button></div>
      <div className="profile-category profile-hov" onClick={handleOpenDrawerButton}><div><img src="images/user-6-line.svg" alt="user-6" /></div>
      <div className="profile-name-div"><p className="profile-cat-name">My profile</p></div></div>
    
      {/* <button onClick={handleOpenDrawerButton}>My Profile</button> */}
      
      <div className="profile-category profile-hov"><div><img src="images/layout-cards.svg" alt="user-6" /></div>
      <div className="profile-name-div"><p className="profile-cat-name">My advertisements</p></div></div>
      <div className="profile-category profile-hov"><div><img src="images/heart-line.svg" alt="user-6" /></div>
      <div className="profile-name-div"><p className="profile-cat-name">My favorites</p></div></div>
      <div className="profile-category profile-hov"><div><img src="images/logout-box-r-line.svg" alt="user-6" /></div>
      <div className="profile-name-div"><p className="profile-cat-name">Logout</p></div></div>
    </div>
  );
}

export default Profilemodal;
