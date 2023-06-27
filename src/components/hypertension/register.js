import React, {useState} from 'react';
import hyperlogo from '../../assets/images/hyper-logo.png';
function RegistrationForm() {
    return(
     <div className='container' style={{textAlign:'center'}}>
         <div className='row'>
                <div className='col-md-12'>
                    <img src={hyperlogo}/>
                    
                </div>
            </div>
            <h2>HYPERTENSION REGISTRY OF INDIA</h2>
            <h2 className='account'>create account</h2>
         <div className="form">
          <div className="form-body">
          <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                name="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                name="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Password</label>
              <input
                type="password"
                className="form-control"
                id="name"
                required
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Confirm-Password</label>
              <input
                type="password"
                className="form-control"
                id="name"
                required
                name="name"
              />
            </div>
              
          </div>
          <div class="footer">
              <button className='btn btn-success'>Register</button>
          </div>
      </div> 
     </div>     
    )       
}
export default RegistrationForm;