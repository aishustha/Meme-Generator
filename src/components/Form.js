import React from "react";
import memesData from "../memesData";

export default function Form(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })


    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
       const memesArray = allMemeImages.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       const url = memesArray[randomNumber].url
       setMeme(prevName => ({
        ...prevName,
        randomImage: url
       }))
    }


    return (
        <main>
            <h1>Welcome Back, {props.name}</h1>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                     type="text"
                     placeholder="Bottom Text"
                     className="form--input"
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}