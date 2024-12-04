import React, { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(event) {
    event.preventDefault(); // Prevent the form from submitting
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <form className="form">
        <div className="input-group">
          <div className="input-field">
            <label htmlFor="top-text">Top text</label>
            <input
              id="top-text"
              type="text"
              className="form-input"
              placeholder="Top text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              id="bottom-text"
              type="text"
              className="form-input"
              placeholder="Bottom text"
            />
          </div>
        </div>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </form>
      <div className="meme">
        <img src={memeImage} alt="Generated Meme" />
        <span className="top">Hello</span>
        <span className="bottom">hello</span>
      </div>
    </main>
  );
}
