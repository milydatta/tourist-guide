import React, { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const Dashboard = () => {
   const [info, setInfo] = useState({});
   const [file, setFile] = useState(null);
   const handleBlur = event => {
      const newInfo = {...info};
      newInfo[event.target.name] = event.target.value;
      setInfo(newInfo);
   }

   const handleFileChange = (event) => {
      const newFile = event.target.files[0];
      setFile(newFile);
   }

   const handleSubmit = () => {
      const formData = new FormData();
      
      console.log(info);

      formData.append('file', file);
      formData.append('name', info.name);
      formData.append('email', info.email);

      fetch('http://localhost:5050/dashboard', {
         method: 'POST',
         body: formData
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
   }

  return (
    <section>
      <div className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <form onSubmit={handleSubmit} className="col-md-10 mt-5"style={{paddingLeft:100,}}>
          <div class="form-group">
            <label  htmlFor="exampleInputEmail1">Email address</label>
            <input onBlur={handleBlur}
              type="email"
              class="form-control"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label  htmlFor="exampleInputPassword1">Name</label>
            <input onBlur={handleBlur}
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input onChange={handleFileChange}
              type="file"
              class="form-control"
              placeholder="Picture"
            />
          </div>
          <button type="submit" class="btn btn-success mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Dashboard;
