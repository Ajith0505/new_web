import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Adgallerycat from "../containers/Adgallerycat";
import { useParams } from "react-router-dom";
import Adlist from "../components/AdList/Adlist";

function Dummy(){

    let {id}= useParams();
    console.log("--------------------------",useParams());
    return (
    <div>
        <Header />
        <h1>{id}</h1>
        <Adlist />
        <Footer />
    </div>
    );
}

export default Dummy;
