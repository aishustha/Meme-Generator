import React from "react";


export default function Star(props) {
    const starIcon = props.isFilled ? "2.png" : "3.png";
    return (
        <img src={starIcon} onClick={props.handleClick}/>
    )
}