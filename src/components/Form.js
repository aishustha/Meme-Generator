import React from "react";

export default function Form(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

  
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

 


    function getMemeImage() {
       const randomNumber = Math.floor(Math.random() * allMemeImages.length)
       const url = allMemeImages[randomNumber].url
       setMeme(prevName => ({
        ...prevName,
        randomImage: url
       }))
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                     type="text"
                     placeholder="Bottom Text"
                     className="form--input"
                     name="bottomText"
                     value={meme.bottomText}
                     onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}