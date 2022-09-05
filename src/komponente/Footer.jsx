import React from 'react'
import {FaTiktok} from "react-icons/fa"
import {BsInstagram,BsFacebook} from "react-icons/bs"

function Footer(){
    return(
        <div>
             <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Korisni linkovi</h3>
                        <ul>
                            <li><a href="/listaPesama">Lista pesama</a></li>
                            <li><a href="/omiljenePesme">Omiljene pesme</a></li>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Kontakt</h3>
                        <ul>
                            <li>muzika@gmail.com</li>
                            <li>060/00112233</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Drustvene mreze</h3>
                        <ul>
                            <li>Instagram: <BsInstagram/></li>
                            <li>Facebook: <BsFacebook/></li>
                            <li>Tiktok: <FaTiktok/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        </div>
    );
}

export default Footer;