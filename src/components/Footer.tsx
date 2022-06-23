import "./Footer.css"
import picture from "./grass2.png"


export default function Footer(){

    return (

        <div>
            <img className="FooterPic" src={picture} alt="" />

            <div className="black">
                <a className="contact" href="">Contact Us</a>
                <a className="about" href="">About Us</a>
                <a className="careers" href="">Careers</a>
                <p className="copyright">© 2022 Ice Cream Wars, Inc</p>
            </div>
        </div>
        
    )
}