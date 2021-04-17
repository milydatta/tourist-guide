import React from 'react';
import adviser from '../../../images/adviser.jpg';
import transport from '../../../images/transport.jpg';
import hotel from '../../../images/hotel.jpg';


const ServiceDetail = () => {
    return (
        <div className="row text-center pt-5 pb-5 container ms-5">
            <div className="col-md-4 pb-5" style={{height:400,width:400}}>
             <img src={adviser} className="img-fluid mb-3" alt=""/>
                <h2 className="card-title">Adviser</h2>
                <div className="card-body">
                  <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet</p>
                </div>
            </div>
            <div className="col-md-4 pb-5"style={{height:400,width:400}}>
             <img src={transport} className="img-fluid mb-3" alt=""/>
                <h2 className="card-title">Transport</h2>
                <div className="card-body">
                  <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet</p>
                </div>
            </div>
            <div className="col-md-4 pb-5 ms-5"style={{height:400,width:400}}>
             <img src={hotel} className="img-fluid mb-3" alt=""/>
                <h2 className="card-title">Hotel</h2>
                <div className="card-body">
                  <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet, consectet</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;