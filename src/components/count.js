import React from "react"


export default function Count(props){
    console.log("count rendered")
    return (
        <div>
            <h1>{props.number}</h1>
        </div>
    )
}