import React from 'react'

export default function Data() {
  return (
    <div>
      <div className="search-section">
    <div className="d-flex justify-content-center align-items-center h-100">
        <form method="post" action="#" className="w-50">
            <div className="row">
                <div className="col-10">
                    <input type="search" value="" className="form-control palce bg-transparent border-0 search-input" placeholder="Search Here ..." /> 
                </div>
                <div className="col-2 mt-3">
                     <button type="submit" className="btn bg-transparent text-white"> <i className="fas fa-search"></i> </button>
                </div>
            </div>
        </form>
    </div>
         
</div>

{/* <!-- /End Top Header --> */}

<div className="fables-transparent py-3 py-lg-0">
    <div className="container">
           <div className="row">
               <div className="col-12 col-md-10 pr-md-0">                       
                   <nav className="navbar navbar-expand-md btco-hover-menu py-lg-2">

                        <a className="navbar-brand fables-logo-brand pl-0" href="index.html"><img src="assets/custom/images/fables-logo.png" alt="Fables Template" className="fables-logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fablesNavDropdown" aria-controls="fablesNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fables-iconmenu-icon text-white font-16"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="fablesNavDropdown"> 

                            <ul className="navbar-nav mx-auto fables-nav">   
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav1">
                                        <li><a className="dropdown-item" href="home1.html">Home 1</a></li>
                                        <li><a className="dropdown-item" href="home2.html">Home 2</a></li>
                                        <li><a className="dropdown-item" href="home3.html">Home 3</a></li>
                                        <li><a className="dropdown-item" href="home4.html">Home 4</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Features
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav2">

                                        <li><a className="dropdown-item dropdown-toggle" href="#/">Headers</a>
                                            <ul className="dropdown-menu">  
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Header 1</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="header1-transparent.html">Header 1 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="header1-light.html">Header 1 Light</a></li>
                                                        <li><a className="dropdown-item" href="header1-dark.html">Header 1 Dark</a></li><li><a className="dropdown-item" href="header-megamenu.html">Header Mega menu</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Header 2</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="header2-transparent.html">Header 2 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="header2-light.html">Header 2 Light</a></li>
                                                        <li><a className="dropdown-item" href="header2-dark.html">Header 2 Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Header 3</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="header3-transparent.html">Header 3 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="header3-light.html">Header 3 Light</a></li>
                                                        <li><a className="dropdown-item" href="header3-dark.html">Header 3 Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Header 4</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="header4-transparent.html">Header 4 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="header4-light.html">Header 4 Light</a></li>
                                                        <li><a className="dropdown-item" href="header4-dark.html">Header 4 Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Header 5</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="header5-transparent.html">Header 5 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="header5-light.html">Header 5 Light</a></li>
                                                        <li><a className="dropdown-item" href="header5-dark.html">Header 5 Dark</a></li>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item dropdown-toggle" href="#/">Footers</a>
                                            <ul className="dropdown-menu">  
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Footer 1</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="footer1-bg-img.html">Footer 1 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="Footer1-light.html">Footer 1 Light</a></li>
                                                        <li><a className="dropdown-item" href="Footer1-dark.html">Footer 1 Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Footer 2</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="footer2-bg-img.html">Footer 2 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="footer2-light.html">Footer 2 Light</a></li>
                                                        <li><a className="dropdown-item" href="footer2-dark.html">Footer 2 Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Footer 3</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="footer3-bg-img.html">Footer 3 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="footer3-light.html">Footer 3 Light</a></li>
                                                        <li><a className="dropdown-item" href="footer3-dark.html">Footer 3 Dark</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item dropdown-toggle" href="#/">Footer 4</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="footer4-bg-img.html">Footer 4 Transparent</a></li>
                                                        <li><a className="dropdown-item" href="footer4-light.html">Footer 4 Light</a></li>
                                                        <li><a className="dropdown-item" href="footer4-dark.html">Footer 4 Dark</a></li>
                                                    </ul>
                                                </li>


                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="team.html">Team Members</a></li>
                                        <li><a className="dropdown-item" href="pricing-table.html">Pricing Table</a></li>
                                        <li><a className="dropdown-item" href="testimonials.html">testimonials</a></li>
                                        <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                        <li><a className="dropdown-item" href="counters.html">Counters</a></li>
                                        <li><a className="dropdown-item" href="image-hover-effects.html">Image Hover Effects</a></li> 
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav3">
                                        <li><a className="dropdown-item" href="about1.html">About 1</a></li>
                                        <li><a className="dropdown-item" href="about2.html">About 2</a></li>
                                        <li><a className="dropdown-item" href="about3.html">About 3</a></li> 
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Store
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav4">
                                        <li><a className="dropdown-item" href="store_grid_list.html">Product Category </a></li>
                                        <li><a className="dropdown-item" href="store_single.html">Product Single</a></li> 
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav5">
                                        <li><a className="dropdown-item" href="blog-cat1.html">Blog Cat 1</a></li>
                                        <li><a className="dropdown-item" href="blog-cat2.html">Blog Cat 2</a></li>
                                        <li><a className="dropdown-item" href="blog-cat3.html">Blog Cat 3</a></li>
                                        <li><a className="dropdown-item" href="blog-cat-masonry.html">Blog Cat Masonry</a></li> 
                                        <li><a className="dropdown-item" href="blog-details1.html">Blog Details 1</a></li> 
                                        <li><a className="dropdown-item" href="blog-details2.html">Blog Details 2</a></li> 
                                        <li><a className="dropdown-item" href="blog-details3.html">Blog Details 3</a></li> 
                                        <li><a className="dropdown-item" href="blog-single-img.html">Blog Single image</a></li> 
                                        <li><a className="dropdown-item" href="blog-single-slider.html">Blog Single Slider</a></li>
                                        <li><a className="dropdown-item" href="blog-single-video.html">Blog Single Video</a></li> 
                                        <li><a className="dropdown-item" href="blog-timeLine.html">Blog Timeline</a></li>
                                    </ul>
                                </li> 
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav6">
                                        <li><a className="dropdown-item" href="404.html">404</a></li>
                                        <li><a className="dropdown-item" href="comming-soon.html">Comming Soon</a></li>
                                        <li><a className="dropdown-item" href="gallery.html">Gallery</a></li>
                                        <li><a className="dropdown-item" href="gallery-filter.html">Gallery Filter</a></li> 
                                        <li><a className="dropdown-item" href="gallery-filter-masonry.html">Gallery Filter Masonry</a></li>
                                        <li><a className="dropdown-item" href="gallery-history.html">Gallery History</a></li>
                                        <li><a className="dropdown-item" href="gallery-history2.html">Gallery History 2</a></li>
                                        <li><a className="dropdown-item" href="gallery-single.html">Gallery Single</a></li>
                                        <li><a className="dropdown-item" href="gallery-timeline.html">Gallery Timeline </a></li>
                                        <li><a className="dropdown-item" href="gallery-timeline2.html">Gallery Timeline 2</a></li>
                                    </ul>
                                </li> 
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#/" id="sub-nav7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Contact Us
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="sub-nav7">
                                        <li><a className="dropdown-item" href="contactus1.html">Contact Us 1</a></li>
                                        <li><a className="dropdown-item" href="contactus2.html">Contact Us 2</a></li>
                                        <li><a className="dropdown-item" href="contactus3.html">Contact Us 3</a></li> 
                                    </ul>
                                </li>  
                            </ul> 

                </div>
            </nav>
               </div>
               <div className="col-5 col-md-2 pr-md-0 icons-header-mobile">

                   <div className="fables-header-icons pt-lg-4 text-right">
                        
                        <a href="#/" className="open-search fables-third-text-color fables-mega-menu-btn px-4  fables-second-hover-color">
                                    <span className="fables-iconsearch-icon"></span>
                             </a>
                        <div className="dropdown d-inline-block float-left float-md-none"> 
                                      <a href="#_" className="fables-third-text-color dropdown-toggle px-4 fables-second-hover-color fables-mega-menu-btn position-relative" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           <span className="fables-iconcart-icon"></span>
                                           <span className="fables-cart-number fables-second-background-color text-center">3</span>
                                        </a>

                                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                         <div className="p-3 cart-block">
                                             <p className="fables-second-text-color semi-font mb-4 font-17">(2) Items in my cart</p>
                                             <div className="row mx-0 mb-3">
                                                 <div className="col-4 p-0">
                                                     <a href="#/"><img src="assets/custom/images/sml1.jpg" alt="" className="w-100"/></a>
                                                 </div>
                                                 <div className="col-8">
                                                     <h2><a href="#/" className="fables-main-text-color font-13 d-block fables-main-hover-color">LUIS LEATHER DRIVING</a></h2>
                                                     <p className="fables-second-text-color font-weight-bold">$ 100.00</p>
                                                     <p className="fables-forth-text-color">QTY : 1</p>
                                                 </div>
                                             </div>
                                             <div className="row mx-0 mb-3">
                                                 <div className="col-4 p-0">
                                                     <a href="#/"><img src="assets/custom/images/sml1.jpg" alt="" className="w-100"/></a>
                                                 </div>
                                                 <div className="col-8">
                                                     <h2><a href="#/" className="fables-main-text-color font-13 d-block fables-main-hover-color">LUIS LEATHER DRIVING</a></h2>
                                                     <p className="fables-second-text-color font-weight-bold">$ 100.00</p>
                                                     <p className="fables-forth-text-color">QTY : 1</p>
                                                 </div>
                                             </div>
                                             <span className="font-16 semi-font fables-main-text-color">TOTAL</span>
                                             <span className="font-14 semi-font fables-second-text-color float-right">$200.00</span>
                                             <hr/>
                                             <div className="text-center">
                                                 <a href="#/" className="fables-second-background-color fables-btn-rounded  text-center white-color py-2 px-3 font-14 bg-hover-transparent border fables-second-border-color fables-second-hover-color">View my cart</a> 
                                                <a href="#/" className="fables-second-text-color border fables-second-border-color fables-btn-rounded text-center white-color p-2 px-4 font-14 fables-second-hover-background-color">Checkout</a>
                                             </div>
                                        </div>
                                      </div>
                             </div>


                   </div>

               </div>
           </div>
    </div>
</div>
     
{/* <!-- Start Header --> */}
<div className="fables-header fables-after-overlay overlay-lighter index-traingle bg-rules" style={{backgroundImage: "url(assets/custom/images/index-background.jpg)"}}>
    <div className="container">  
        <div className="row">
            <div className="col-md-10 col-lg-7 mr-auto index-carousel">
                  <div className="owl-carousel owl-theme default-carousel nav-0 z-index mt-md-4 mt-xl-5 pt-md-4 pt-xl-5 dots-0 pb-md-5">
                      <div className="pt-0 mt-0 pt-xl-5 mt-xl-5 wow slideInUp" data-wow-duration="2s" data-wow-delay=".4s">
                          <h1 className="fables-main-text-color font-weight-bold mb-1">CONSULTING SERVICE FOR ALL 
                             <span className="fables-second-text-color">KIND OF BUSINESSES</span>
                          </h1>  
                          <p className="fables-forth-text-colo mb-3 light-font fables-header-slider-details">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          </p>
                          <a href="#/" className="btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-3 px-md-4 py-2 bg-hover-transparent fables-second-hover-color">Our Services</a>
                          <a href="#/" className="btn fables-second-border-color fables-second-text-color rounded-0 px-3 px-md-4 py-2 fables-second-hover-background-color">Learn More</a>  
                      </div> 
                      <div className="pt-0 mt-0 pt-xl-5 mt-xl-5 wow slideInUp" data-wow-duration="2s" data-wow-delay=".8s">
                          <h1 className="fables-main-text-color font-weight-bold mb-1">CONSULTING SERVICE FOR ALL 
                             <span className="fables-second-text-color">KIND OF BUSINESSES</span>
                          </h1>  
                          <p className="fables-forth-text-colo mb-3 light-font fables-header-slider-details">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          </p>
                          <a href="#/" className="btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-3 px-md-4 py-2 bg-hover-transparent fables-second-hover-color">Our Services</a>
                          <a href="#/" className="btn fables-second-border-color fables-second-text-color rounded-0 px-3 px-md-4 py-2 fables-second-hover-background-color">Learn More</a>  
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>  
{/* <!-- /End Header --> */}
     

     
{/* <!-- Start page content --> */}
       <div className="container">
             <div className="row my-3 my-md-5 overflow-hidden">
                  <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay=".4s" data-wow-duration="1.5s">
                      <span className="fables-iconbussiness fables-second-text-color fa-3x"></span>
                      <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
                      <p className="fables-forth-text-color font-15">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                      </p>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay=".8s" data-wow-duration="1.5s">
                      <span className="fables-iconbussiness2 fables-second-text-color fa-3x"></span>
                      <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
                      <p className="fables-forth-text-color font-15">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                      </p>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay="1.2s" data-wow-duration="1.5s">
                      <span className="fables-iconbussiness3 fables-second-text-color fa-3x"></span>
                      <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
                      <p className="fables-forth-text-color font-15">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                      </p>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow fadeInDown" data-wow-delay="1.6s" data-wow-duration="1.5s">
                      <span className="fables-iconbussiness4 fables-second-text-color fa-3x"></span>
                      <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
                      <p className="fables-forth-text-color font-15">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                      </p>
                  </div>
            </div> 
            
       </div>
       <div className="fables-choose-background fables-after-overlay py-4 py-md-5 bg-rules overflow-hidden px-3 px-md-0">
           <div className="container position-relative z-index">
             <div className="row">
                <div className="col-12 col-lg-6 p-0 image-container translate-effect-right wow fadeInLeft mb-3 mb-md-0" data-wow-delay="1s" data-wow-duration="1.5s">
                    <img src="assets/custom/images/choose-img.jpg" alt="" className="w-100"/>
                </div>
                <div className="col-12 col-lg-6 bg-white px-6 py-3 py-md-5 wow fadeInRight" data-wow-delay="1s" data-wow-duration="1.5s">
                    <h2 className="font-30 font-weight-bold fables-second-text-color">WHY CHOOSE US</h2>
                    <p className="fables-main-text-color font-14 my-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur.
                    </p>
                    <div id="accordion">
                          <div className="card border-0 mb-2">
                            <div className="card-header p-0 border bg-transparent rounded-0" id="headingOne">
                              <h5 className="mb-0 position-relative">
                                <span className="fables-second-background-color white-color d-inline-block 
                            position-absolute fables-lus-icon pt-2 text-center">
                                    <i className="fas fa-plus"></i>  
                                </span>
                                <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Clean and modern websites , Clean and modern websites
                                </button>
                              </h5>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                              <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header bg-transparent p-0 border rounded-0" id="headingTwo">
                              <h5 className="mb-0 position-relative">
                                <span className="fables-second-background-color white-color d-inline-block 
                                position-absolute fables-lus-icon pt-2 text-center">
                                    <i className="fas fa-plus"></i>  
                                </span>
                                <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Clean and modern websites
                                </button>
                              </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                              <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header p-0 border bg-transparent rounded-0" id="headingThree">
                              <h5 className="mb-0 position-relative">
                                <span className="fables-second-background-color white-color d-inline-block 
                             position-absolute fables-lus-icon pt-2 text-center">
                                    <i className="fas fa-plus"></i>  
                                </span>
                                <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  Clean and modern websites
                                </button>
                              </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                              <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                              </div>
                            </div>
                          </div>
                          <div className="card border-0 mb-2">
                            <div className="card-header p-0 border bg-transparent rounded-0" id="headingfour">
                              <h5 className="mb-0 position-relative">
                                <span className="fables-second-background-color white-color d-inline-block 
                               position-absolute fables-lus-icon pt-2 text-center">
                                    <i className="fas fa-plus"></i>  
                                </span>
                                <button className="btn fables-main-text-color bg-transparent font-18 focus-0 d-block position-relative z-index pl-6 pt-2 pb-2 w-100 text-left border-0 text-truncate collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                  Clean and modern websites
                                </button>
                              </h5>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                              <div className="card-body fables-forth-text-color font-14 py-1 py-xl-2 pl-6 pr-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
             </div>

           </div>
       </div>
       <div className="container">
           <div className="row">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center"> 
                   <h2 className="fables-second-text-color font-35 font-weight-bold my-3 mt-md-5 mb-md-4">we are creative agency</h2>
                   <p className="fables-forth-text-color">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur.
                        quisquam consectetur culpa commodi maxime in harum sunt nam. Minima, repellat aspernatur atque voluptate dolores quos vel dolor! Debitis, consequatur, aliquid.
                   </p> 
               </div>
           </div>
           <div className="row mt-4 mt-md-5">
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-main-text-color border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="307">0</h2>
                       <h3 className="font-14 semi-font fables-forth-text-color">SATISFIED CLIENTS</h3>
                   </div>
               </div>
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-main-text-color border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="95">0</h2>
                       <h3 className="font-14 semi-font fables-forth-text-color">COMPANY MEMBERS</h3>
                   </div>
               </div>
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-main-text-color border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="55">0</h2>
                       <h3 className="font-14 semi-font fables-forth-text-color">AWWARDS WIN</h3>
                   </div>
               </div>
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-main-text-color border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="16">0</h2>
                       <h3 className="font-14 semi-font fables-forth-text-color">YEARS EXPIRIENCE</h3>
                   </div>
               </div>
           </div>
       </div>
       <div className="fables-price-bg fables-after-overlay py-4 py-lg-5 my-4 my-lg-5 bg-rules overflow-hidden"> 
           <div className="container position-relative z-index">
               <h2 className="white-color font-35 font-weight-bold text-center mb-4 mb-md-5">Our Pricing</h2> 
               <div className="row">
                   <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInDown" data-wow-delay=".4s" data-wow-duration="1.5s">
                       <div className="table-border-light fables-second-hover-border colored-table">
                          <div className="bg-blue py-4">
                              <h2 className="white-color font-weight-bold position-relative fables-third-after font-30 table-title">Starter</h2>
                              <h2 className="white-color font-weight-bold font-35 position-relative mt-4 d-inline-block">100 <span className="table-badge white-color position-absolute">$</span></h2>
                              <p className="white-color font-13 mb-4">Per month</p> 
                              <span className="fables-table-arrow border-2 bg-blue white-color rounded-circle border-white position-absolute"><i className="fas fa-arrow-down"></i></span>
                          </div> 
                          <div className="bg-white py-4">
                              <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
                               Wordpress ThemeFree 
                                Theme InstallationFree 
                                24/7 SupportFree
                              </p>
                              <a href="#/" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-4 py-2">Purchase Now</a>
                          </div>
                       </div>

                   </div>
                   <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInDown" data-wow-delay=".8s" data-wow-duration="1.5s">
                       <div className="table-border-light fables-second-hover-border colored-table">
                          <div className="fables-second-background-color py-4">
                              <h2 className="white-color font-weight-bold position-relative fables-third-after font-30 table-title">Basic</h2>
                              <h2 className="white-color font-weight-bold font-35 position-relative mt-4 d-inline-block">200 <span className="table-badge white-color position-absolute">$</span></h2>
                              <p className="white-color font-13 mb-4">Per month</p> 
                              <span className="fables-table-arrow border-2 fables-second-background-color white-color rounded-circle border-white position-absolute"><i className="fas fa-arrow-down"></i></span>
                          </div> 
                          <div className="bg-white py-4">
                              <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
                               Wordpress ThemeFree 
                                Theme InstallationFree 
                                24/7 SupportFree
                              </p>
                              <a href="#/" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-4 py-2">Purchase Now</a>
                          </div>
                       </div>

                   </div>
                   <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInDown" data-wow-delay="1.2s" data-wow-duration="1.5s">
                       <div className="table-border-light fables-second-hover-border colored-table">
                          <div className="bg-primary py-4">
                              <h2 className="white-color font-weight-bold position-relative fables-third-after font-30 table-title">Pro</h2>
                              <h2 className="white-color font-weight-bold font-35 position-relative mt-4 d-inline-block">300 <span className="table-badge white-color position-absolute">$</span></h2>
                              <p className="white-color font-13 mb-4">Per month</p> 
                              <span className="fables-table-arrow border-2 bg-primary white-color rounded-circle border-white position-absolute"><i className="fas fa-arrow-down"></i></span>
                          </div> 
                          <div className="bg-white py-4">
                              <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
                               Wordpress ThemeFree 
                                Theme InstallationFree 
                                24/7 SupportFree
                              </p>
                              <a href="#/" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-4 py-2">Purchase Now</a>
                          </div>
                       </div>

                   </div>
                   <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInDown" data-wow-delay="1.6s" data-wow-duration="1.5s">
                       <div className="table-border-light fables-second-hover-border colored-table">
                          <div className="fables-main-background-color py-4">
                              <h2 className="white-color font-weight-bold position-relative fables-third-after font-30 table-title">Ultra</h2>
                              <h2 className="white-color font-weight-bold font-35 position-relative mt-4 d-inline-block">500 <span className="table-badge white-color position-absolute">$</span></h2>
                              <p className="white-color font-13 mb-4">Per month</p> 
                              <span className="fables-table-arrow border-2 fables-main-background-color white-color rounded-circle border-white position-absolute"><i className="fas fa-arrow-down"></i></span>
                          </div> 
                          <div className="bg-white py-4">
                              <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
                               Wordpress ThemeFree 
                                Theme InstallationFree 
                                24/7 SupportFree
                              </p>
                              <a href="#/" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-4 py-2">Purchase Now</a>
                          </div>
                       </div>

                   </div>
               </div>
           </div>  
       </div>
       
       <div className="container mb-4 mb-md-5"> 
            <div className="row">
               <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                   <div className="text-center">
                       <h2 className="fables-main-text-color font-35 font-weight-bold mb-4">Latest Works</h2>
                       <p className="fables-forth-text-color">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum sunt nam.

                       </p>
                   </div>
               </div>
           </div> 
                 
               <div className="gallery-filter">
                    <div className="portfolioFilter my-3 clearfix">
                      <a href="#/" data-filter="*" className="current">ALL</a>
                      <a href="#/" data-filter=".webDesign" className="fables-forth-text-color">Web design</a>
                      <a href="#/" data-filter=".appDesign" className="fables-forth-text-color">App design</a>
                      <a href="#/" data-filter=".brand" className="fables-forth-text-color">Brand</a>
                      <a href="#/" data-filter=".development" className="fables-forth-text-color">Development</a>
                    </div> 
                    <div className="portfolioContainer row filter-masonry"> 
                          <div className="drawings places col-sm-6 col-md-3 mb-2">
                            <div className="filter-img-block position-relative image-container translate-effect-right">
                                 <img src="assets/custom/images/index-testimonial1.jpg" alt="isimage" className="w-100"/>
                                 <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                     <a href="#/" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconlink"></span></a>
                                     <a data-fancybox="gallery" href="assets/custom/images/index-testimonial1.jpg" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconsearch-icon"></span></a>
                                 </div>
                             </div>
                          </div>

                          <div className="webDesign food col-sm-6 col-md-3 mb-2">
                            <div className="filter-img-block position-relative image-container translate-effect-right">
                                 <img src="assets/custom/images/index-testimonial2.jpg" alt="isimage" className="w-100"/>
                                 <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                     <a href="#/" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconlink"></span></a>
                                     <a data-fancybox="gallery" href="assets/custom/images/index-testimonial2.jpg" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconsearch-icon"></span></a>
                                 </div>
                             </div>
                          </div>
                         <div className="webDesign objects col-sm-6 col-md-3 mb-2">
                             <div className="filter-img-block position-relative image-container translate-effect-right"> 
                                 <img src="assets/custom/images/index-testimonial3.jpg" alt="isimage" className="w-100"/> 
                                 <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                     <a href="#/" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconlink"></span></a>
                                     <a  data-fancybox="gallery" href="assets/custom/images/index-testimonial3.jpg" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconsearch-icon"></span></a>
                                 </div>
                             </div>

                          </div>    
                          <div className="appDesign brand col-sm-6 col-md-3 mb-2">
                            <div className="filter-img-block position-relative image-container translate-effect-right">
                                 <img src="assets/custom/images/index-testimonial4.jpg" alt="isimage" className="w-100"/>
                                 <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                     <a href="#/" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconlink"></span></a>
                                     <a data-fancybox="gallery" href="assets/custom/images/index-testimonial4.jpg" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconsearch-icon"></span></a>
                                 </div>
                             </div>
                          </div>

                          <div className="webDesign col-sm-6 col-md-3 mb-2">
                            <div className="filter-img-block position-relative image-container translate-effect-right">
                                 <img src="assets/custom/images/index-testimonial5.jpg" alt="isimage" className="w-100"/>
                                 <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                     <a href="#/" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconlink"></span></a>
                                     <a data-fancybox="gallery" href="assets/custom/images/index-testimonial5.jpg" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconsearch-icon"></span></a>
                                 </div>
                             </div>
                          </div> 
                          <div className="webDesign col-sm-6 col-md-3 mb-2">
                            <div className="filter-img-block position-relative image-container translate-effect-right">
                                 <img src="assets/custom/images/index-testimonial5.jpg" alt="isimage" className="w-100"/>
                                 <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                     <a href="#/" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconlink"></span></a>
                                     <a data-fancybox="gallery" href="assets/custom/images/index-testimonial5.jpg" className="gallery-filter-icon white-color fables-second-hover-color"><span className="fables-iconsearch-icon"></span></a>
                                 </div>
                             </div>
                          </div> 
                          
                       
                    </div> 
                    <div className="text-center">
                        <a href="#/" className="btn fables-main-border-color fables-main-text-color mt-md-4 px-5 py-2 fables-btn-rounded fables-main-hover-background-color white-color-hover">Show All Projects</a>
                    </div>
               </div> 
       </div>
       <div className="fables-testimonial fables-after-overlay py-5 bg-rules">
           <div className="container">
               <div className="row">
                   <div className="col-12 col-md-8">
                       <div className="fables-contact-caption-txt"> 
                           <h3 className="font-25 font-weight-bold white-color mb-3 position-relative z-index">We are the best business consulting company ever!!</h3>  
                           <p className="fables-third-text-color position-relative z-index font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lorem pretium laoreet enim at, malesuada Class aptent taciti sociosqu.</p>
                           
                       </div>
                   </div>
                   <div className="col-12 col-md-4 offset-xl-2 col-xl-2 text-center">
                        <a href="contactus1.html" className="btn fables-second-background-color fables-btn-rounded white-color mt-3 position-relative z-index font-19 px-5 py-2 white-color-hover">Contact us</a> 
                   </div>
               </div>
               
           </div>
       </div>
       <div className="container">
           <div className="row overflow-hidden">
              <div className="col-12">
                  <h2 className="font-35 font-weight-bold text-center fables-main-text-color my-4 my-lg-5">Latest News</h2>
              </div>
               <div className="col-12 col-md-4 mb-4 mb-lg-5 wow bounceInLeft" data-wow-delay=".4s" data-wow-duration="1.5s"> 
                      <div className="image-container translate-effect-right">
                          <a href="#/"><img src="assets/custom/images/cat-larg4.jpg" alt=""/></a>  
                      </div>
                      <h2 className="font-18 semi-font font-18  mt-3"><a href="#/" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design</a></h2>
                      <p className="fables-fifth-text-color font-13 my-1">09 November, 2018</p>
                      <p className="fables-forth-text-color font-14">
                          When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
                      </p>
                      <a href="@#" className="btn fables-main-text-color fables-second-hover-color p-0 underline mt-2">Read More</a> 
                  
              </div>
              <div className="col-12 col-md-4 mb-4 mb-lg-5 wow bounceInLeft" data-wow-delay=".8s" data-wow-duration="1.5s">  
                      <div className="image-container translate-effect-right">
                          <a href="#/"><img src="assets/custom/images/cat-larg5.jpg" alt=""/></a>  
                      </div>  
                      <h2 className="font-18 semi-font font-18  mt-3"><a href="#/" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design</a></h2>
                      <p className="fables-fifth-text-color font-13 my-1">09 November, 2018</p>
                      <p className="fables-forth-text-color font-14">
                          When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
                      </p>
                      <a href="@#" className="btn fables-main-text-color fables-second-hover-color p-0 underline mt-2">Read More</a> 
                  
              </div>
              <div className="col-12 col-md-4 mb-4 mb-lg-5 wow bounceInLeft" data-wow-delay="1.2s" data-wow-duration="1.5s"> 
                      <div className="image-container translate-effect-right">
                          <a href="#/"><img src="assets/custom/images/cat-larg6.jpg" alt=""/></a>  
                      </div>
                      <h2 className="font-18 semi-font font-18  mt-3"><a href="#/" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design</a></h2>
                      <p className="fables-fifth-text-color font-13 my-1">09 November, 2018</p> 
                      <p className="fables-forth-text-color font-14">
                          When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
                      </p>
                      <a href="@#" className="btn fables-main-text-color fables-second-hover-color p-0 underline mt-2">Read More</a> 
                  
              </div>
           </div>
     </div>      
 <div className="fables-testimonial fables-after-overlay py-4 py-lg-5 bg-rules">
    <div className="container">
        <h2 className="position-relative z-index white-color font-35 font-weight-bold text-center mb-4">Testimonial</h2> 
        <div className="owl-carousel owl-theme" id="fables-testimonial-carousel">
              <div className="row text-center fables-testimonial-carousel-item rounded py-4"> 
                   <div className="col-12 col-md-3">
                      <img src="assets/custom/images/testimonial-img.png" alt="Fables Template" className="fables-testimonial-carousel-img"/>  
                      <h3 className="font-14 semi-font text-white">Billy Richards</h3>
                      <h3 className="font-14 font-italic text-white mt-2">Chief Manager, Simba Co</h3>
                   </div>
                   <div className="col-12 col-md-9 p-0 p-md-2">
                        <div className="fables-testimonial-detail font-15 font-italic text-white p-4 position-relative"> 
                            No matter what issue or questions pops up, you are always there to 
                            assist me. Thank you so much for your excellent assistance and great 
                            customer support through years.
                        </div>
                   </div>
              </div>
              <div className="row text-center fables-testimonial-carousel-item rounded py-4"> 
                   <div className="col-12 col-md-3">
                      <img src="assets/custom/images/testimonial-img.png" alt="Fables Template" className="fables-testimonial-carousel-img"/>  
                      <h3 className="font-14 semi-font text-white">Billy Richards</h3>
                      <h3 className="font-14 font-italic text-white mt-2">Chief Manager, Simba Co</h3>
                   </div>
                   <div className="col-12 col-md-9 p-0 p-md-2">
                        <div className="fables-testimonial-detail font-15 font-italic text-white p-4 position-relative"> 
                            No matter what issue or questions pops up, you are always there to 
                            assist me. Thank you so much for your excellent assistance and great 
                            customer support through years.
                        </div>
                   </div>
              </div>
              

        </div>
    </div>
</div>
    <div className="container"> 
         <h2 className="font-35 font-weight-bold text-center fables-main-text-color my-3 my-lg-5">Team</h2>          
         <div className="row overflow-hidden">
            <div className="col-6 col-md-3 mb-4 wow bounceInDown" data-wow-delay=".4s" data-wow-duration="1.5s">
                <div className="card fables-team-block fables-second-hover-text-color fables-team-border fables-second-border-color">
                  <div className="image-container shine-effect">
                      <a href="#/"><img className="w-100" src="assets/custom/images/team3-1.jpg" alt="Card cap"/></a> 
                  </div>
                  <div className="card-body">
                    <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                    <p className="font-13 fables-forth-text-color my-1">Programmer</p> 
                    <ul className="nav fables-team-social-links"> 
                        <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                        <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li> 
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-4 wow bounceInDown" data-wow-delay=".8s" data-wow-duration="1.5s">
                <div className="card fables-team-block fables-second-hover-text-color fables-team-border fables-second-border-color">
                   <div className="image-container shine-effect">
                      <a href="#/"><img className="w-100" src="assets/custom/images/team3-2.jpg" alt="Card cap"/></a>
                  </div>
                  <div className="card-body">
                    <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                    <p className="font-13 fables-forth-text-color my-1">Programmer</p> 
                    <ul className="nav fables-team-social-links"> 
                        <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                        <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li> 
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-4 wow bounceInDown" data-wow-delay="1.2s" data-wow-duration="1.5s">
                <div className="card fables-team-block fables-second-hover-text-color fables-team-border fables-second-border-color">
                   <div className="image-container shine-effect">
                      <a href="#/"><img className="w-100" src="assets/custom/images/team3-1.jpg" alt="Card cap"/></a>
                  </div>
                  <div className="card-body">
                    <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                    <p className="font-13 fables-forth-text-color my-1">Programmer</p> 
                    <ul className="nav fables-team-social-links"> 
                        <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                        <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li> 
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-4 wow bounceInDown" data-wow-delay="1.6s" data-wow-duration="1.5s">
                <div className="card fables-team-block fables-second-hover-text-color fables-team-border fables-second-border-color">
                   <div className="image-container shine-effect">
                       <a href="#/"><img className="w-100" src="assets/custom/images/team3-2.jpg" alt="Card cap"/></a>
                  </div>
                  <div className="card-body">
                    <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                    <p className="font-13 fables-forth-text-color my-1">Programmer</p> 
                    <ul className="nav fables-team-social-links"> 
                        <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                        <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                        <li><a href="#/" target="_blank"><span className="fables-iconinstagram-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li> 
                    </ul>
                  </div>
                </div>
            </div>
        </div>  
        <div className="row my-3 my-lg-5">
            
          <div className="owl-carousel owl-theme px-6 my-0" id="fables-partner-carousel">
                  <div> 
                      <img src="assets/custom/images/partner2-1.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-2.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-3.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-4.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-3.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-1.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-2.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-3.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-4.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>

            </div>
        </div>   
       </div> 
         
      
{/* <!-- /End page content --> */}
    
{/* <!-- Start Footer 2 Background Image  --> */}
<div className="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center">
                <h2 className="font-30 semi-font mb-5">Newsletter</h2>
                <form className="form-inline position-relative"> 
                  <div className="form-group fables-subscribe-formgroup"> 
                    <input type="email" className="form-control fables-subscribe-input fables-btn-rouned" placeholder="Your Email"/>
                  </div>
                  <button type="submit" className="btn fables-second-background-color fables-btn-rouned fables-subscribe-btn">Subscribe</button>
                </form>
                
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <a href="#/" className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"><img src="assets/custom/images/fables-logo.png" alt="fables template"/></a>
                <p className="font-15 fables-third-text-color">
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. 
                    <br/>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p> 
                
            </div>
             
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">Contact us</h2>
               <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Address Information</h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">level13, 2Elizabeth St, Melbourne, Victor 2000</p>
                </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Call Now </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">+333 111 111 000</p>
                </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Mail </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">adminsupport@website.com</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">EXPLORE OUR SITE</h2>
                <ul className="nav fables-footer-links">
                    <li><a href="about1.html">About Us</a></li>
                    <li><a href="contactus1.html">Contact Us</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
            </div>
                      
        </div> 
        
        </div>
</div>
<div className="copyright fables-main-background-color mt-0 border-0 white-color">
        <ul className="nav fables-footer-social-links just-center fables-light-footer-links">
            <li><a href="#/" target="_blank"><i className="fab fa-google-plus-square"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-pinterest-square"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
        </ul>
        <p className="mb-0">Copyright © Fables 2018. All rights reserved.</p> 

</div>
    
{/* <!-- /End Footer 2 Background Image --> */}



{/* <!-- Start Header --> */}
<div className="fables-header fables-after-overlay bg-rules">
    <div className="container"> 
         <h2 className="fables-page-title fables-second-border-color wow fadeInLeft" data-wow-duration="1.5s">About 3</h2>
    </div>
</div>  
{/* <!-- /End Header --> */}
     
{/* <!-- Start Breadcrumbs --> */}
<div className="fables-light-gary-background">
    <div className="container"> 
        <nav aria-label="breadcrumb">
          <ol className="fables-breadcrumb breadcrumb px-0 py-3">
            <li className="breadcrumb-item"><a href="#/" className="fables-second-text-color">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">About 3</li>
          </ol>
        </nav> 
    </div>
</div>
{/* <!-- /End Breadcrumbs --> */}
     
{/* <!-- Start page content -->  */}
   <div className="container"> 
        <div className="row mt-4 my-md-5 overflow-hidden">
            <div className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown" data-wow-delay=".3s">
                <div className="border p-4">
                    <div className="row text-center text-lg-left">
                        <div className="col-12 col-lg-3 mb-3 mb-md-0">
                            <span className="fables-iconlamp-icon fables-second-text-color fa-3x"></span>
                        </div>
                        <div className="col-12 col-lg-9">
                            <h2 className="fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">We’re Creative</h2>
                            <div className="font-15 fables-forth-text-color">
                                Lorem ipsum dolor sit amet  
                                adipiscing elit. Aenean ac lorem pretium laoreet
                                 enim at. 
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown" data-wow-delay=".6s">
               <div className="border p-4">
                    <div className="row text-center text-lg-left">
                        <div className="col-12 col-lg-3 mb-3 mb-md-0">
                            <span className="fables-icongears-icon fables-second-text-color fa-3x"></span>
                        </div>
                        <div className="col-12 col-lg-9">
                           <h2 className="fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">Highly Customizable</h2>
                           <div className="font-15 fables-forth-text-color">
                                Lorem ipsum dolor sit amet  
                                adipiscing elit. Aenean ac lorem pretium laoreet
                                 enim at. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown" data-wow-delay=".9s">
               <div className="border p-4">
                    <div className="row text-center text-lg-left">
                        <div className="col-12 col-lg-3 mb-3 mb-md-0">
                            <span className="fables-iconheadset-icon fables-second-text-color fa-3x"></span>
                        </div>
                        <div className="col-12 col-lg-9">
                           <h2 className="fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">Efficient 24/7 support</h2>
                            <div className="font-15 fables-forth-text-color">
                                Lorem ipsum dolor sit amet  
                                adipiscing elit. Aenean ac lorem pretium laoreet
                                 enim at. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
       <div className="row overflow-hidden"> 
            <div className="col-12 col-md-6">
                 <div className="image-container translate-effect-right">
                    <img src="assets/custom/images/mission-img.jpg" alt="Fables Template" className="img-fluid"/>
                 </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
                <span className="fables-iconrocket-icon fables-second-text-color fa-3x"></span>
                <h2 className="font-30 font-weight-bold fables-second-text-color my-4 d-inline-block d-lg-block wow fadeInRight" data-wow-duration="1.5s">Our Mission</h2>
                <div className="fables-vision-detail fables-forth-text-color wow fadeInRight" data-wow-duration="1.5s">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br/> <br/>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                </div>
            </div>
      </div>
        
    </div>
   
   <div className="fables-counter-section fables-after-overlay my-3 my-md-5 pt-4 pb-0 py-md-5 bg-rules">
       <div className="container">
           <div className="row">
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 text-white border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="307">0</h2>
                       <h3 className="font-14 semi-font text-white">SATISFIED CLIENTS</h3>
                   </div>
               </div>
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 text-white border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="95">0</h2>
                       <h3 className="font-14 semi-font text-white">COMPANY MEMBERS</h3>
                   </div>
               </div>
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 text-white border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="55">0</h2>
                       <h3 className="font-14 semi-font text-white">AWWARDS WIN</h3>
                   </div>
               </div>
               <div className="col-6 col-md-3">
                   <div className="fables-counter">
                       <h2 className="fables-counter-value font-40 font-weight-bold mb-3 text-white border fables-second-border-color d-inline-block px-4 py-2 mb-4" data-count="16">0</h2>
                       <h3 className="font-14 semi-font text-white">YEARS EXPIRIENCE</h3>
                   </div>
               </div>
           </div>
       </div>
   </div>
    
    <div className="container"> 
       <div className="row overflow-hidden">
            <div className="col-12 col-md-6">
                <span className="fables-iconvision-icon fables-second-text-color fa-4x"></span>
                <h2 className="font-30 font-weight-bold fables-second-text-color my-4 wow fadeInLeft d-inline d-lg-block" data-wow-duration="1.5s">Our Vision</h2>
                <div className="fables-forth-text-color mt-4 wow fadeInLeft" data-wow-duration="1.5s">
                   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br/> <br/>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like 
                </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
                <div className="image-container translate-effect-right">
                     <img src="assets/custom/images/vision-img.jpg" alt="Fables Template" className="img-fluid"/>
                </div>
               
            </div>
      </div> 
    </div>
    
<div className="fables-testimonial fables-after-overlay my-4 my-md-5 py-4 py-md-5 bg-rules">
    <div className="container">
        <h2 className="position-relative z-index white-color font-35 font-weight-bold text-center mb-4">Testimonial</h2> 
        <div className="owl-carousel owl-theme" id="fables-testimonial-carousel">
              <div className="row text-center fables-testimonial-carousel-item rounded py-4"> 
                   <div className="col-12 col-md-3">
                      <img src="assets/custom/images/testimonial-img.png" alt="Fables Template" className="fables-testimonial-carousel-img"/>  
                      <h3 className="font-14 semi-font text-white">Billy Richards</h3>
                      <h3 className="font-14 font-italic text-white mt-2">Chief Manager, Simba Co</h3>
                   </div>
                   <div className="col-12 col-md-9 p-0 p-md-2">
                        <div className="fables-testimonial-detail font-15 font-italic text-white p-4 position-relative"> 
                            No matter what issue or questions pops up, you are always there to 
                            assist me. Thank you so much for your excellent assistance and great 
                            customer support through years.
                        </div>
                   </div>
              </div>
              <div className="row text-center fables-testimonial-carousel-item rounded py-4"> 
                   <div className="col-12 col-md-3">
                      <img src="assets/custom/images/testimonial-img.png" alt="Fables Template" className="fables-testimonial-carousel-img"/>  
                      <h3 className="font-14 semi-font text-white">Billy Richards</h3>
                      <h3 className="font-14 font-italic text-white mt-2">Chief Manager, Simba Co</h3>
                   </div>
                   <div className="col-12 col-md-9 p-0 p-md-2">
                        <div className="fables-testimonial-detail font-15 font-italic text-white p-4 position-relative"> 
                            No matter what issue or questions pops up, you are always there to 
                            assist me. Thank you so much for your excellent assistance and great 
                            customer support through years.
                        </div>
                   </div>
              </div>
              

        </div>
    </div>
</div>
    <div className="container"> 
        <div className="fables-team overflow-hidden">
                <h2 className="font-35 font-weight-bold fables-main-text-color mb-4 text-center">Team</h2> 
                <div className="row my-4 my-lg-5">
                    <div className="col-6 col-md-3 mb-3 wow bounceInDown" data-wow-delay=".3s">
                        <div className="card fables-team-block fables-second-hover-text-color">
                             <div className="image-container shine-effect">
                                  <a href="#/"><img className="w-100" src="assets/custom/images/team3-1.jpg" alt="Card cap"/></a>
                             </div>
                          
                          <div className="card-body">
                            <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                            <p className="font-13 fables-forth-text-color my-1 font-italic">Programmer</p> 
                            <ul className="nav fables-team-social-links mt-3"> 
                                <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                                <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3 wow bounceInDown" data-wow-delay=".3s">
                        <div className="card fables-team-block fables-second-hover-text-color">
                             <div className="image-container shine-effect">
                                  <a href="#/"><img className="w-100" src="assets/custom/images/team3-2.jpg" alt="Card cap"/></a>
                             </div>
                          
                          <div className="card-body">
                            <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                            <p className="font-13 fables-forth-text-color my-1 font-italic">Programmer</p> 
                            <ul className="nav fables-team-social-links mt-3"> 
                                <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                                <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3 wow bounceInDown" data-wow-delay=".3s">
                        <div className="card fables-team-block fables-second-hover-text-color">
                             <div className="image-container shine-effect">
                                  <a href="#/"><img className="w-100" src="assets/custom/images/team3-1.jpg" alt="Card cap"/></a>
                             </div>
                          
                          <div className="card-body">
                            <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                            <p className="font-13 fables-forth-text-color my-1 font-italic">Programmer</p> 
                            <ul className="nav fables-team-social-links mt-3"> 
                                <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                                <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3 wow bounceInDown" data-wow-delay=".3s">
                        <div className="card fables-team-block fables-second-hover-text-color">
                             <div className="image-container shine-effect">
                                  <a href="#/"><img className="w-100" src="assets/custom/images/team3-2.jpg" alt="Card cap"/></a>
                             </div>
                          
                          <div className="card-body">
                            <h5><a href="#/" className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name">JOHN MARTIN</a></h5>
                            <p className="font-13 fables-forth-text-color my-1 font-italic">Programmer</p> 
                            <ul className="nav fables-team-social-links mt-3"> 
                                <li><a href="#/" target="_blank"><span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                <li><a href="#/" target="_blank"><span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>   
                                <li><a href="#/" target="_blank"><span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span></a></li>
                                
                            </ul>
                          </div>
                        </div>
                    </div>
                </div>  

            </div>   
        <div className="row">
            <div className="owl-carousel owl-theme px-6 mt-0 mb-4 my-lg-5" id="fables-partner-carousel">
                  <div> 
                      <img src="assets/custom/images/partner2-1.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-2.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-3.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-4.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-3.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-1.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-2.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-3.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>
                  <div> 
                      <img src="assets/custom/images/partner2-4.jpg" alt="Fables Template" className="fables-partner-carousel-img"/>  
                  </div>

            </div>
        </div>     
    </div> 
{/* <!-- /End page content --> */}
    
{/* <!-- Start Footer 2 Background Image  --> */}
<div className="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center">
                <h2 className="font-30 semi-font mb-5">Newsletter</h2>
                <form className="form-inline position-relative"> 
                  <div className="form-group fables-subscribe-formgroup"> 
                    <input type="email" className="form-control fables-subscribe-input fables-btn-rouned" placeholder="Your Email"/>
                  </div>
                  <button type="submit" className="btn fables-second-background-color fables-btn-rouned fables-subscribe-btn">Subscribe</button>
                </form>
                
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <a href="#/" className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"><img src="assets/custom/images/fables-logo.png" alt="fables template"/></a>
                <p className="font-15 fables-third-text-color">
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. 
                    <br/><br/>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p> 
                
            </div>
             
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">Contact us</h2>
               <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Address Information</h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">level13, 2Elizabeth St, Melbourne, Victor 2000</p>
                </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Call Now </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">+333 111 111 000</p>
                </div>
                <div className="my-3">
                    <h4 className="font-16 semi-font"><span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span> Mail </h4>
                    <p className="font-14 fables-fifth-text-color mt-2 ml-4">adminsupport@website.com</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">EXPLORE OUR SITE</h2>
                <ul className="nav fables-footer-links">
                    <li><a href="about1.html">About Us</a></li>
                    <li><a href="contactus1.html">Contact Us</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
            </div>
                      
        </div> 
        
        </div>
</div>
<div className="copyright fables-main-background-color mt-0 border-0 white-color">
        <ul className="nav fables-footer-social-links just-center fables-light-footer-links">
            <li><a href="#/" target="_blank"><i className="fab fa-google-plus-square"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-pinterest-square"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href="#/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
        </ul>
        <p className="mb-0">Copyright © Fables 2018. All rights reserved.</p> 

</div>
    
{/* <!-- /End Footer 2 Background Image --> */}
</div>
  )
}
