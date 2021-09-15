import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
         const ourAddress = [
            {name: "Mohammadpur,Dhaka", link: "//google.com/map" },
            {name: "Tongi,Gazipur", link: "//google.com/map"},
           ]
         const services = [
            {name: "Advise", link: "/tourist-guide"},
            {name: "Transport", link: "/tourist-guide"},
            {name: "Hotel Booking", link: "/tourist-guide"},
            {name: "Air Ticket Booking", link: "/tourist-guide"},
            {name: "Confirm Passport,Visa", link: "/tourist-guide" }
           
    ]
    return (
         <footer className="footer-area">
             <div className="container pt-5">
                <div className="row py-5">
                   
                    <FooterCol key={1} menuTitle="Services" menuItems={services}/>
                            <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}> 
                                <ul className="social-media list-inline">
                                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" size="15px" icon={faInstagram} /></a></li>
                                </ul>
                           </FooterCol>
                        </div>
                        <div className="copyRight text-center">
                            <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;