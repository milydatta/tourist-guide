import React from 'react';
import './Team.css';

 const Team = (props) => {
     const {img, name, post, quote} = props.team;
    return (
        <div className="col-md-4 shadow-sm ms-5 team" style={{height:350,width:350}}>
            <div className="card-title d-flex  align-items-center">
               <img className="mx-3" src={img} alt="" width="100"/>
            <div>
               <h6 className="text-success">{name}</h6>
               <p className="m-0">{post}</p>
            </div>
          </div>
          <div className="card-body">
                <p className="card-text text-center">{quote}</p>
          </div>
          <button className="btn btn-success mt-5">Find Guide</button>
        </div>
    );
};

export default Team;