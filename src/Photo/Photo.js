import React from "react";
import "./Photo.css";

const Photo = (props) => {
    return (
        <div className="photo-container">
            <img src={props.image} alt=""/>
        </div>
    )
}
export default Photo