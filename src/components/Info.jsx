import React from "react";
import {FaEnvelope, FaLinkedin} from 'react-icons/fa'

export default function Info() {
    return (
        <div className="info__container">
            <h1>Isaac Kwong</h1>
            <h4>Frontend Developer</h4>
            <h5>github.com/isaac-code98</h5>
        
            <div className="info__btn-container">
                <a href="@mailto:isaac.code980@gmail.com" target="_blank">
                    <button className="info__btn" id="info__btn-email">
                        <FaEnvelope className="info__btn-icon"/>
                        <p className="info__btn-text">Email</p>
                    </button>
                </a>
                
                <a href="https://www.linkedin.com/in/isaac-kwong-847746188/" target="_blank">
                    <button className="info__btn" id="info__btn-linkedin">
                        <FaLinkedin className="info__btn-icon"/>
                        <p className="info__btn-text">LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    )
}