import React from "react";
import Banner from "../components/banner/banner";
import Adcategory from "../components/Adcategory/Adcategory";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchAdcategory } from "../api/useraction";
import contacts from "../components/category";

function Main() {
  const adCategory = useSelector((state) => state.reducers.adcategory.adCategory);
  const advertIconss = adCategory.categories
  console.log("before props passing",advertIconss);
    
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAdcategory())
  }, [])

  return (<main className="main-content"><div className="div-main"><Banner /><Adcategory category={contacts}/><div className="main-gallery"></div></div></main>);
}

export default Main;
