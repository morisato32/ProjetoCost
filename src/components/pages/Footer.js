import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import style from '../pages/Footer.module.css'
function Footer(){
    return(
        <footer className={style.footer}>
            <ul>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>
                <span>Cost</span>
                &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;