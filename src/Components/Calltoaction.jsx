import React from 'react'
import { Link } from 'react-router-dom'

export default function Calltoaction() {
  return (
    <div>
      <div className="container pb-3">
        <div className="fables-testimonial mt-3 bg-rules">
          <div className='fables-after-overlayy'> 
            <div className="row p-5 d-flex justify-content-between align-items-center">
              <div className="col-12 col-md-8">
                <div className="fables-contact-caption-txt">
                  <h3 className="font-25 font-weight-bold white-color mb-3 position-relative z-index">How can we help you?</h3>
                  <p className="fables-third-text-color position-relative z-index font-weight-light">Please call us or submit a business inquiry</p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <Link to="/contact"> <button className="btn btn-color px-5 py-3">Contact us</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
