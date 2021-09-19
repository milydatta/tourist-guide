import React from 'react';
import Card from '../Card/Card';


const About = () => {
    return (
        <main style={{height:850}} id="about">
            <h1 className="mt-5" style={{textAlign: 'center',paddingTop:100}}>About <span className="text-success"> US </span></h1>
            <div className="row d-flex align-items-center p-1">
            <div className="col-md-6  offset-md-1">
               <Card></Card>
            </div>
            
            <div className="col-md-4" style={{paddingTop:400}}>
               <h1>Why You  <span className="text-success">Choose</span> Us</h1>
               <p className="mt-5">lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect</p>
            </div>
            </div>
        </main>
    );
};

export default About;