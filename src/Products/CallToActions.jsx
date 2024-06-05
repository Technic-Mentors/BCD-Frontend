import React from 'react'
import { Link } from 'react-router-dom'

export default function CallActions() {
    return (
        <div>
            <div>
                <div className="container my-4">
                    <div className="row cal-action-padding d-flex justify-content-center align-items-center" style={{ border: "1px solid black" }}>
                        <div className="col-md-4">
                            <div className="fables-contact-caption-txt">
                                <h3 className="font-25 font-weight-bold mb-3 position-relative z-index text-">How can we help you?</h3>
                                <p className=" position-relative z-index font-weight-light">Please call us or submit a business inquiry</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Link to="/contact"> <button className="btn btn-outline-success">Contact us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
