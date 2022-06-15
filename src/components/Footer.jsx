import React from "react";
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer__container">
            <a href="#" className="footer__link"><FaTwitterSquare className="footer__icon" /></a>
            <a href="#" className="footer__link"><FaFacebookSquare className="footer__icon" /></a>
            <a href="#" className="footer__link"><FaInstagramSquare className="footer__icon" /></a>
            <a href="https://github.com/isaac-code98" target="_blank" className="footer__link"><FaGithubSquare className="footer__icon" /></a>
        </div>
    )   
}





