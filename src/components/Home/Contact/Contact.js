import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
    <div id="Login" className="mt-5" style={{paddingTop:30}}>
        <div>
             <h1 style={{textAlign:'center'}} className="mt-5">CONTACT <span className="text-success">US</span></h1>
        </div>
        <form style={{textAlign:'center',width:'80%'}} className="mt-5 form">
        <div className="mb-3">
              <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="First Name"/>
           </div>
           <div className="mb-3">
              <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Last Name"/>
           </div>
           <div className="mb-3">
              <input type="phone" className="form-control " id="exampleFormControlInput1" placeholder="Your Phone"/>
           </div>
            <div className="mb-3">
              <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Your Email"/>
           </div>
           <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Message"></textarea>
           </div>
           <div className="mb-3">
           <Link to="/login"> <button className="btn btn-success  btn-lg"> Log In </button> </Link>
           </div>
        </form>
    </div>

    );
};

export default Contact;