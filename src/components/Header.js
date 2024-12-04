import React from "react";
import logo from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="header-img" alt="Meme Logo" />
            <h2 className="header-title">Meme Generator</h2>
        </header>
    )
}