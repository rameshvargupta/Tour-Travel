import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="foot">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <div className="box6">
                            <h3>Follow Us</h3>
                            <hr />
                            <ul>
                                <li><a href=""> <i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href=""> <i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            </ul>
                        </div>
                    </div>



                    <div className="col-sm-12 col-lg-12">

                        <div className="box6">
                            <h3>Terms</h3>
                            <hr />
                            <ul>
                                <li><Link to={'/Services'}>Services</Link></li>
                                <li><Link to={'/Terms'}>Terms & Conditions</Link></li>
                                <li><Link to={'/Privacy'}>Privacy Policy</Link></li>
                                <li><Link to={'/Refund'}>Refund & Cancelation</Link></li>
                                <li><Link to={'/Contact'}>Complaints</Link></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <div className="LastFooter">
                <p>Compare and book affordable Prices © Co Founder <strong>Gautam Thakur</strong> Nirvvair Ltd 2023 – 2026 <span>
                </span></p>
            </div>

        </div>
    )
}

export default Footer


