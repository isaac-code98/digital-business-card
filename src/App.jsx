import React from "react"
import ProfileImg from "./components/ProfileImg"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="app__container">
            <ProfileImg />
            <Info />
            <About />
            <Footer />
        </div>
    )
}