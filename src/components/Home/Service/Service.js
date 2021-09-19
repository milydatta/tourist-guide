import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    return (
        <div  className="mt-5" id="service" style={{paddingTop:100,paddingBottom:100}}>
            <h1 style={{textAlign:'center'}}>Our <span className="text-success">Services</span></h1>
             <h3 className="mt-5" style={{textAlign:'center'}} >HOW TOURIST <span className="text-success">GUIDE</span> WORKS</h3>
             <ServiceDetail></ServiceDetail>
        </div>
    );
};

export default Service;