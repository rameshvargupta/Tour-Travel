import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../Component_Css/Refund.css';

const Refund = () => {

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
            <li><Link to={"/Services"}>  <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span>Services </Link></li>
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
              <li><Link to={"/Services"}> Services <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span> </Link></li>
              <li><Link to={"/Contact"}> Contact Us <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span> </Link></li>
            </div>
          </div>

        </div>
      </div>

      <div className="whatsapplogo">
        <a target='blank' href='https://wa.me/+917827236346'><img src="./Images/Icon/whatsapp.png" alt="" />
        </a><div className='whatapptext'>Contact Us</div>
      </div>

      <div className="refund">

        <div className="Image">
          <img className='img-fluid' src="./Images/CancelImage.jpg" alt="" />
        </div>

      </div>
      <div className="container RCont my-4">
        <h1 className='my-4'>Refund & Cancelation</h1>

        <p>Bookings cancelled after confirmation and payment of deposit will incur cancellation fees as a percentage of the total booking cost as follows, dependent upon the number of days prior to departure that arrangements are cancelled:</p>
        <h4>90-60 days prior to arrival – 100% refund, 59 – 30 days prior to arrival. – 80% refund, 29 – 15 days prior to arrival – 65% refund, 15 – 07 days prior to arrival – 50% refund 00- 07 days prior to arrival – No refund,</h4>

        <h4>Payments will be refunded by net banking to the customer accounts within 15 working days after cancellation.</h4>

        <h4>Travel Documents</h4>
        <p>It is your responsibility to ensure that you have the correct travel documents to enable you to travel to India. These may include but are not limited to, valid passport, flight tickets, correct visa for India and any other requirements that may from time to time be required. Globe Trotting Hospitality Pvt Ltd will not be responsible for any alterations to travel arrangements that may arise from your failure to travel with the correct documentation. The company will treat non-arrival in India as a result of incorrect documentation as a cancellation.</p>


        <h4>Complaints and Problems</h4>
        <p>In the event that you have any reason to complain or experience any problems with your travel arrangements whilst you are in India you must immediately inform your file handler in our company or one of our staff, so that we can attend to any service issue that may arise and promptly rectify it. If you wish to complain about an aspect of our service after the tour this should be communicated to us in writing within 21 days of your departure. Where any complaint arises from services not wholly owned or operated by Globe Trotting we will use our best endeavors to address the issue with the relevant supplier during your tour with Globe trotting Hospitality Pvt Ltd However Globe Trotting is unable to accept responsibility or liability for failures and omissions of its suppliers where it neither owns, manages or controls such suppliers. We do however exercise care and attention when selecting and promoting the services of third parties to support your travel arrangements. However any assistance provided by Globe Trotting Pvt Ltd in resolving a complaint in relation to any arrangements provided by suppliers to Globe trotting Pvt Ltd is provided on a goodwill basis and in its capacity as agent for such suppliers.</p>

      </div>


      <Footer />




    </div>
  )
}

export default Refund