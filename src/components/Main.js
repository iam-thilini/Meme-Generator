import React, { useState } from "react";

export default function Main() {

  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(event) {
    const { value, name } = event.currentTarget
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <form className="form">
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="top-text">Top text</label>
            <input
              type="text"
              name="topText"
              className="form-input"
              placeholder="One does not simply"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              type="text"
              name="bottomText"
              className="form-input"
              placeholder="Walk into Mordor"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="form-button">Get a new meme image 🖼</button>
      </form>
      <div className="meme">
        <img src={meme.imageUrl} alt="Generated Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
