import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
           </div>
           <div className="col-md-10">
           <form style={{textAlign:'center',width:'50%',paddingLeft:40}} className="mt-5">
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
           <ProcessPayment></ProcessPayment>
           <button className="btn btn-success mt-5">Pay</button>
           </div>
           
        </form>
          
           </div>
           </div>
        </section>
    );
};

export default Dashboard;