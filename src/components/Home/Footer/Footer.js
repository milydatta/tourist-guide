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


// import React from 'react';
// import './Footer.css';
// import FooterCol from '../FooterCol/FooterCol';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//     const noNamed = [
//         {name: "Emergency Dental Care" , link: "/emergency"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
//         {name: "Tooth Extraction" , link: "/tooth-extract"},
//         {name: "Check Up" , link: "/checkup"},
//     ]
//     const ourAddress = [
//         {name: "New York - 101010 Hudson" , link: "//google.com/map"},
//         {name: "Yards" , link: "//google.com/map"},
       
//     ]
//     const oralHealth = [
//         {name: "Emergency Dental Care" , link: "/emergency"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
//         {name: "Tooth Extraction" , link: "/tooth-extract"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Check Up" , link: "/checkup"}
//     ]
//     const services = [
//         {name: "Emergency Dental Care" , link: "/emergency"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
//         {name: "Tooth Extraction" , link: "/tooth-extract"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Check Up" , link: "/checkup"},
//         {name: "Check Up" , link: "/checkup"}
//     ]
//     return (
//         <footer className="footer-area clear-both">
//             <div className="container pt-5">
//                 <div className="row py-5">
//                     <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
//                     <FooterCol key={2} menuTitle="Services" menuItems={services}/>
//                     <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
//                     <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
//                         <ul className="social-media list-inline">
//                             <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
//                             <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
//                             <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
//                         </ul>
//                         <div className="mt-5">
//                             <h6>Call now</h6>
//                             <button className="btn btn-primary">+2025550295</button>
//                         </div>
//                     </FooterCol>
//                 </div>
//                 <div className="copyRight text-center">
//                     <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
//                 </div>
//             </div>
//         </footer>
        
//     );
// };

// export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const FooterCol = (props) => {
//     return (
//         <div className="col-md-3">
//             <h6 className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h6>
//             <ul className="list-unstyled mt-4">
//                  {
//                      props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
//                  }
//             </ul>
//             {props.children && props.children}
//         </div>
//     );
// };

// export default FooterCol;


// .footer-area{
//     background-image: url(../../../images/footer-bg.png);
//     background-size: cover;
// }

// .footer-area li{
//     padding-bottom: 10px;
// }

// .social-media .icon{
//     height: 40px;
//     width: 40px;
//     color: #1cc7c1;
//     border-radius: 50%;
//     border: 1px solid #6ACECE;
//     padding: 10px;
// }
// .social-media .active-icon{
//     background-color: #6ACECE ;
//     color:white;
// }