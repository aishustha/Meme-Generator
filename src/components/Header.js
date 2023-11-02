import React from "react";

export default function Header(props) {

  

    return (
        <header className="header--content">
            <img src="1.png"/>
            <h2>Header Component</h2>
            <h4>React Course - Project 3</h4>


            <p>Current user: {props.name}</p>
        </header>
    )
}