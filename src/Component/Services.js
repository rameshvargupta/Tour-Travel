import React, { useEffect } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import '../Component_Css/Services.css'
const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    function openNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "220px";
    }

    function closeNav(e) {
        e.stopPropagation();
        document.getElementById("mySidenav").style.width = "0px";
    }

    return (
        <div onClick={closeNav}>
            <div className="Navbar">
                <div className="container NavStart">
                    <Link to={"/"} >  <div className="logo">
                        <img src="./Images/logo.jpg" alt="" />

                    </div>
                    </Link>

                    <div className="login2" >
                        <li><Link to={"/"}>  <span className='AllIcon'><img src="./Images/Icon/home.png" alt="" /></span>Home</Link></li>
                        <li><Link to={"/Tour"}>  <span className='AllIcon'><img src="./Images/Icon/tour.png" alt="" /></span>Tour</Link></li>
                        <li><Link to={"/About"}>  <span className='AllIcon'><img src="./Images/Icon/contact.png" alt="" /></span>About </Link></li>
                        <li><Link className='active' to={"/Services"}>  <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span>Services </Link></li>
                        <li><Link to={"/Contact"}>  <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span>Contact Us </Link></li>
                    </div>

                    <div className="smallcart" onClick={openNav}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div id="mySidenav" class="sidenav" onClick={openNav}>
                        <button class="openbtn btn btn-danger" onClick={closeNav}>X</button>
                        <div className="smallnav">
                            <li><Link to={"/"}> Home <span className='AllIcon'><img src="./Images/Icon/home.png" alt="" /></span></Link></li>
                            <li><Link to={"/Tour"}> Tour <span className='AllIcon'><img src="./Images/Icon/tour.png" alt="" /></span> </Link></li>
                            <li><Link to={"/About"}> About <span className='AllIcon'><img src="./Images/Icon/contact.png" alt="" /></span> </Link></li>
                            <li><Link className='active' to={"/Services"}> Services <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span> </Link></li>
                            <li><Link to={"/Contact"}> Contact Us <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span> </Link></li>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whatsapplogo">
        <a target='blank' href='https://wa.me/+917827236346'><img src="./Images/Icon/whatsapp.png" alt="" />
        </a><div className='whatapptext'>Contact Us</div>
      </div>

            <div className="contactMain">
                <div className="Image" data-aos="fade-up">
                    <img src="./Images/Service.jpg" alt="" />
                </div>
                <div className="container SCont my-4">
                    <h1 className='mb-4 text-center'>Our Services</h1>
                    <p>At Nirvvair we create the ultimate global gateway to beautiful destinations of India, Europe, Asia, Africa, South-East Asia and Middle-East. We take pride in our customer service and we aim to make your holiday experience with us the best you've ever had. A holiday is all about leaving your worries behind and relaxing. That’s why we would never let anything come between you and a gleaming holiday.</p>

                    <div className="services my-3">
                        <h3>Overview of Services</h3>
                        <p><i class="fa-solid fa-check"></i>Foreign exchange</p>
                        <p><i class="fa-solid fa-check"></i>Domestic And International Tours</p>
                        <p><i class="fa-solid fa-check"></i>Inbound Tours</p>
                        <p><i class="fa-solid fa-check"></i>Visa And Counsellor Services</p>
                        <p><i class="fa-solid fa-check"></i>Transportation</p>
                        <p><i class="fa-solid fa-check"></i>Travel Insurance</p>
                        <p><i class="fa-solid fa-check"></i>Foreign exchange</p>
                        <p><i class="fa-solid fa-check"></i>Turnkey Logistics for: Corporate offsite meetings Conferences, Meetings, Incentive
                            Events, Weddings
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Services
