import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
    const location = useLocation()

    const pageTop = (path)=>{
if(path === location.pathname){
    window.scrollTo(0,0)
}
    }

    if(location.pathname === "/adminpanel/Addnews" || location.pathname === "/adminpanel/addnews" || location.pathname === "/adminpanel/allnews"){
        return null;
    }
  return (
    <div>
      {/* <!-- Start Footer 2 Background Image  --> */}
<div className="fables-footer-image white-color bg-rules mt-5">
  <div className='fables-after-overly'>
    <div className="container">
        <div className="row pt-5">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">BCD Services</h2>
                <p className="font-15 fables-third-text-color">
                BCD Services provides business, talent, digital and training solutions to individuals and business clients in their chosen industry.
                </p>
            </div>
             
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">Contact Us</h2>
               {/* <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Address Information</h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">158, Block D, NESPAK Housing Society, Canal Bank, Lahore</p>
                </div> */}
                <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Call Now </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">+92 3000 880 323</p>
                </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block" style={{fontSize:"13px"}}></span> Mail </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">info@bcdserve.com</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">Eplore Our Site</h2>
                <ul className="nav fables-footer-links">
                    <li><Link className="footer-link" to="/" onClick={()=> pageTop('/')}>Home</Link></li>
                    <li><Link className="footer-link" to="/about" onClick={()=> pageTop('/about')}>About</Link></li>
                    <li><Link className="footer-link" to="/bussiness-soloution" onClick={()=> pageTop('/bussiness-soloution')}>Bussiness Soloution</Link></li>
                    <li><Link className="footer-link" to="/talent-soloution" onClick={()=> pageTop('/talent-soloution')}>Talent Soloution</Link></li>
                    <li><Link className="footer-link" to="/digital-soloution" onClick={()=> pageTop('/digital-soloution')}>Digital Soloution</Link></li>
                    <li><Link className="footer-link" to="/csr-policy" onClick={()=> pageTop('/csr-policy')}>CSR</Link></li>
                    <li><Link className="footer-link" to="/contact" onClick={()=> pageTop('/contact')}>Contact</Link></li>
                    <li><Link className="footer-link mb-3" to="/join" onClick={()=> pageTop('/join')}>Join</Link></li>
                </ul>
            </div>
                      
        </div> 
        
        </div>
</div>
<div className="copyright fables-main-background-color mt-0 border-0 white-color">
        <ul className="nav fables-footer-social-links just-center fables-light-footer-links">
            <li><a href="https://www.youtube.com/bcdserve" target="blank"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://www.facebook.com/McKinsey/" target="blank"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/bcdserve/" target="blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://twitter.com/BCDserve" target="blank"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href="https://www.linkedin.com/company/bcdserve/" target="blank"><i className="fab fa-linkedin"></i></a></li>
        </ul>
        <p className="mb-0 text-center">Copyright © All rights reserved. Developed with love by <a href="https://technicmentors.com" style={{color:"#29B44A"}} target='blank'>Technic Mentors</a></p> 
        </div>
</div>
    
{/* <!-- /End Footer 2 Background Image --> */}
    </div>
  )
}
