import {useState, useEffect} from 'react'

export default function Main() {

    const [memeContent, setMemeContent] = useState({
        topText:"One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [count, setCount] = useState(0)
    function handleChange(e){
        const {value, name} = e.currentTarget
        setMemeContent(memeContent => ({
            ...memeContent,
            [name] : value,
        }))
    }

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeContent(prevMeme => ({
                ...prevMeme,
                imageUrl : data["data"]["memes"][count]["url"]
        })))
    },[count])
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={memeContent.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeContent.bottomText}
                    />
                </label>
                <button onClick={() => setCount(prevCount => (prevCount + 1))}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src= {memeContent.imageUrl}/>
                <span className="top">{memeContent.topText}</span>
                <span className="bottom">{memeContent.bottomText}</span>
            </div>
        </main>
    )
}