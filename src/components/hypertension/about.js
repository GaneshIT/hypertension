
import leftlogo from '../../assets/images/left-logo.png';
import hyperlogo from '../../assets/images/hyper-logo.png';
import microlapslogo from '../../assets/images/microlabs_logo.png';
import '../../css/home.css';
export default function About(){
    return(
        <div>
            <section>
            <div className="container">
  <div className="row">
    <div className="col-sm-4" >
    <img src={leftlogo}  className="img-responsive" alt="image"  height="70" width="70"/>
    </div>
    <div className="col-sm-6">
    <img src={hyperlogo}  className="img-responsive" alt="image"  height="100" width="100" />
    <span class="logoheader" style={{fontSize:"20px"}} > <b>Hypertension Registry of India </b></span>
    </div>
    <div className="col-sm-2">
    <center><img src={microlapslogo} className="img-responsive" alt="image"  height="60" width="120" /></center>
    </div>
  </div>
</div>
            </section>
            <div class="page_container_flt">
      <div class="container">
          <div class="cont_title flt">
             <h1><b>Welcome to Hypertension Registry of India</b></h1>
          </div>
          <div class="cont_desc flt">
              <p>Hypertension is a growing problem in India and causes significant burden on the health system. Further hypertension epidemic in India is complicated by the fact that a large proportion of individuals is unaware of their hypertension status. </p>
              <p>Standardizing hypertension management through an evidence-based model that sets thresholds for diagnosis, treatment goals, follow up intervals and choice of drugs can lead to improved management of hypertension. </p>
              <p>Precisely keeping this in mind we at Micro labs in collaboration with Hypertension Foundation of India have created our country’s first Hypertension Registry. Through this registry we aim to pool data from across India to estimate the overall prevalence and absolute burden of hypertension. Thus, creating reliable information platform about the prevalence of hypertension in different regions of our country which is essential towards the prevention and control of this rising burden.</p>
              <p>We take this opportunity to invite you to be part of this novel which can be an effective tool in the therapeutic armamentarium of managing hypertension in the sub-continent.</p>
          </div>
          <div class="more_info" style={{textAlign:"center"}}>
              <button className='btn btn-secondary' onClick={" "}>Read More</button>
          </div>
      </div>
  </div>
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
    
            
        </div>
    );
}