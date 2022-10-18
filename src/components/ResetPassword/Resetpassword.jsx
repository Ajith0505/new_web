import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";
import { useFormik } from "formik";
import { Formik } from 'formik';
import { useState } from "react";
import { handleResetPwdsideDrawer } from "../../redux/reducers/users";
import { useEffect } from "react";
import { useRef } from "react";
import { resetPasswordAction } from "../../api/useraction";



const ResetPwdDrawer = () => {
    const isPwdDrawerOpen = useSelector(
        (state) => state.reducers.userprofile.isPwdDrawerOpen
    );

    const isResetPwdDone = useSelector(
        (state) => state.reducers.resetpassword.isResetPwdDone
    );

    const dispatch = useDispatch()
    const closeEditDrawer = () => {
        dispatch(handleResetPwdsideDrawer(false))
    }
    const [fieldName, setFieldName] = useState(false)

    const changePlaceholder = () => {
        setFieldName(true)
    }
    const changePholderOutside = () => {
        setFieldName(false)
    }



    const formik = useFormik({
        initialValues: {
            passwordcurrent: "",
            passwordconfirm: "",
           
        }
        , onSubmit: (values) => {
            
            dispatch(resetPasswordAction(values))
        },

    },
    )
    let menuRef = useRef();


    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setFieldName(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });



console.log("message trecieved 2345+++",isResetPwdDone)

    let drawerClasses = isPwdDrawerOpen ? "side-drawer open" : "side-drawer";

    return (
        <div className={drawerClasses}>
         { isResetPwdDone?<div className="updated-password">{isResetPwdDone.message}</div>:
            <div className="resetpwd-header">
                <div><button className="arrow-resetpwd"><img src="images\arrow-left-s-line.svg" alt="arrow-button" /> </button></div>
                <div className="reset-password-term"><span className="reset-password-span">Reset Password</span></div>
                <div><button className="cross-resetpwd" onClick={closeEditDrawer}> <img src="images\close-line.svg" alt="public\images\close-line.svg" /></button></div>
            </div>}
            <div className="edit-form">

                <form onSubmit={formik.handleSubmit}>
                    <div className="edit-form-fields" >
                        <fieldset className="reset-pwd-fields" onClick={changePlaceholder}>
                            {fieldName ? <legend className="legend-terms">Current password</legend> : <></>}
                            <input
                                type="text"
                                id="passwordcurrent"
                                name="passwordcurrent"
                                className="input-fields-form"
                                placeholder={fieldName ? "" : "Current password"}
                                onChange={formik.handleChange}
                                value={formik.values.passwordcurrent}
                            />
                        </fieldset>

                        <fieldset className="reset-pwd-fields">
                            {fieldName ? <legend className="legend-terms">New password</legend> : <></>}

                            <input
                                type="text"
                                id="passwordnew"
                                name="passwordnew"
                                className="input-fields-form"
                                placeholder={fieldName ? "" : "New password"}
                                onChange={formik.handleChange}
                                value={formik.values.passwordnew} />

                        </fieldset>
                        <fieldset className="reset-pwd-fields">
                            {fieldName ? <legend className="legend-terms">Confirm password</legend> : <></>}
                            <input
                                type="text"
                                id="passwordconfirm"
                                name="passwordconfirm"
                                className="input-fields-form"
                                placeholder={fieldName ? "" : "Confirm password"}
                                onChange={formik.handleChange}
                                value={formik.values.passwordconfirm} />

                        </fieldset>


                        <div className="sidedrawer-bottom">
                            <button className="cancel-edit-profile" > <span className="cancel-reset" >Cancel</span></button>
                            <button type="submit" className="reset-profile-password" > <span className="reset-pro-pwd">Reset</span> </button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default ResetPwdDrawer;