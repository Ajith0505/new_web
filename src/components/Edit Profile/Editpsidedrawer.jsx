import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../../src/redux/reducers/users";
import { handleEditsideDrawer } from "../../../src/redux/reducers/users";
import { useFormik } from "formik";
import { Formik } from 'formik';
import { useState } from "react";
import { useRef } from "react";
import { editProfile } from "../../api/useraction";

const EditSlideDrawer = () => {
  const isEditDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isEditDrawerOPen
  );
  const fileref = useRef(null)
  const dispatch = useDispatch()
  const closeEditDrawer = () => {
    dispatch(handleEditsideDrawer(false))
  }

  const [file, setFile] = useState(null);
  const [imgUrl, setimgUrl] = useState(null)
  const handleChange = (e) => {
    console.log("outside onsubmit *****",e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setimgUrl(e.target.files[0])
  }


  const formik = useFormik({
    initialValues: {
     name:"",
     email:"",
     number:null,
     address:" "
    }
    , onSubmit: (values,e) => {
      //api.then
      console.log("Inside onsubmit ********",imgUrl);
      dispatch(editProfile({...values,pic:imgUrl}));
      closeEditDrawer();

    },

  },
  )




  let drawerClasses = isEditDrawerOPen ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <div><img className="drawer-background" src="images/background.svg" alt="profile-background" />
        <div className="sidedrawer-heading">Edit Profile</div>
        <div className="sample" onClick={closeEditDrawer}><img className="sample-pro-img" src="images/close-line.svg" alt="cross-image" /></div>




        <div className="profile-image3x">
          <input hidden ref={fileref} type="file" onChange={handleChange} />
          <img src={file} className="edit-image" />
          <button onClick={() => { fileref.current.click() }} className="image-button"> <img className="add-image" src="images/add-icon.svg" alt="image-submit" /> </button>
        </div>





        <div className="edit-form">
          
          <form onSubmit={formik.handleSubmit}>
          <div className="edit-form-fields">
            <fieldset className="edit-profile-fields">
            <legend className="legend-terms">Name</legend>
              <input
                type="text"
                id="name"
                name="name"
                className="input-fields-form"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </fieldset>

            <fieldset className="edit-profile-fields">
            <legend className="legend-terms">Email</legend>
              <input
                type="text"
                id="email"
                name="email"
                className="input-fields-form"
                onChange={formik.handleChange}
                value={formik.values.email} />

            </fieldset>
            <fieldset className="edit-profile-fields">
            <legend className="legend-terms">Contact number</legend>
              <input
                type="number"
                id="number"
                name="number"
                className="input-fields-form"
                onChange={formik.handleChange}
                value={formik.values.number} />

            </fieldset>

            <fieldset className="field-input-area">
              <legend className="legend-terms">Address</legend>
              <input
                type="text"
                id="address"
                name="address"
                className="input-fields-form-address"
                onChange={formik.handleChange}
                value={formik.values.address} />

            </fieldset>

            <div className="sidedrawer-bottom">
              <button className="cancel-edit-profile" onClick={closeEditDrawer}> <span className="cancel-edit" >Cancel</span></button>
              <button type="submit" className="save-edit-profile" > <span className="edit-pro-save">Save</span> </button>
            </div>
            </div>
          </form>
          
        </div>

      </div>
    </div>
  );
};

export default EditSlideDrawer;
