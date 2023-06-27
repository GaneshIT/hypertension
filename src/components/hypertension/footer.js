import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default class FooterComponent extends Component {
    constructor(props) {
        super();

       
    }
   



    componentDidMount() {

    }
    render() {
        return (
           <div>
             <div className="shop4">
        <div className="container" >
        <div className="row">
        <div class="col-md-2">

            </div>
            <div className="col-md-2">
                    <h4 id="footer_head"><u>QUICK LINKS</u></h4>
                    <ul className="footer">
                      {/* <Link to={"admin-login"}> <li>Admin Login</li></Link> */}
                   <a href='http://13.126.55.53:4001/home'><li>admin</li></a>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Field Force Login</li>
                    </ul>
                </div>
                <div className="col-md-2">
                  
                </div>
                <div className="col-md-2">
                
                    <h4><u>Navigations</u></h4> 
                    <ul className="footer">
                    <li>Aboutegistry</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                    </ul>
                    
                </div>
                <div className="col-md-2">
                   
                </div>
                <div className="col-md-2">
                    
                </div>
             

    
        

        </div>
        
       </div>
       <div style={{textAlign:"center"}}>©
       2023, Hypertension Registry
        of India. All rights reserved.
    </div>
       </div>
         
           </div>

        );

    }
}