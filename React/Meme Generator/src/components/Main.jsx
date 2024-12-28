import {useState} from 'react'

export default function Main() {

    const [memeContent, setMemeContent] = useState({
        topText:"One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(e){
        setMemeContent({
            ...memeContent,
            topText:(e.target.name === "topText" ? e.target.value:memeContent.topText),
            bottomText:(e.target.name === "bottomText" ? e.target.value:memeContent.bottomText)
        })
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src= {memeContent.imageUrl}/>
                <span className="top">{memeContent.topText}</span>
                <span className="bottom">{memeContent.bottomText}</span>
            </div>
        </main>
    )
}