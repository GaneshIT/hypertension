import "bootstrap/dist/css/bootstrap.min.css";
import leftlogo from '../../assets/images/left-logo.png';
import hyperlogo from '../../assets/images/hyper-logo.png';
import microlapslogo from '../../assets/images/microlabs_logo.png';
import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
import gallery6 from '../../assets/images/gallery-6.jpg';
import gallery7 from '../../assets/images/gallery-7.jpg';
import gallery8 from '../../assets/images/gallery-8.jpg';
import '../../css/home.css';

export default function Gallery(){
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


            <div class="about_container flt">
    <div class="container" style={{backgroundColor:"white",margin:"20px"}}>
        <div class="gallery_title flt">
            Gallery 
        </div>
        <div class="gallery_main flt">
            <div class="gallery flt">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-1.jpg"><img
                                    src={gallery1} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-2.jpg"><img
                                    src={gallery2}  class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-3.jpg"><img
                                    src={gallery3}  class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-4.jpg"><img
                                    src={gallery4} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-5.jpg"><img
                                    src={gallery5} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-6.jpg"><img
                                    src={gallery6} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-7.jpg"><img
                                    src={gallery7} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-8.jpg"><img
                                    src={gallery8} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</div>
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