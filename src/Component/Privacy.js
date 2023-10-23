import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import '../Component_Css/Privacy.css'
const Privacy = () => {
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

      <div className="privacy">

        <div className="image">
          <img className='img-fluid' src="./Images/privacy.jpg" alt="" />
        </div>
      </div>
      <div className="container PCont my-4">

        <h1 className='mb-4 text-center'>Privacy Policy</h1>

        <p>Globe trotting Hospitality Pvt Ltd respects your privacy and recognizes the need to protect the personally identifiable information (any information by which you can be identified, such as name, address, and telephone number) you share with us. We would like to assure you that we follow appropriate standards when it comes to protecting your privacy on our websites. With specific reference to booking/e-commerce transactions, Globe trotting Hospitality Pvt Ltd collects the following personal sensitive information from you while transacting through India Globe trotting Pvt Ltd such as Name, Sex, Phone Number, Address, Credit Card details, Date of birth in case of a child. Customer name, address, phone number, traveller’s name and age are shared with applicable service providers like the airlines, hotels, guides, drivers etc., for the purpose of reservation and booking the services for the customer/traveller. Information like Credit Card Details and Net Banking Details are usually collected directly by the payment gateways and banks and not by Globe Trotting Hospitality Pvt Ltd. Information like Mobile no, e-mail address and postal address may be used for promotional purposes, unless the customer/user “opts-out” of such use. If you choose not to share this information, you can still visit the Yatra website, but you may be unable to access certain options, offers and services.
        </p>

        <h4>Behavior</h4>
        <p>When you book and travel with Globe trotting Pvt. Ltd., you accept full responsibility for any damage or loss caused by you or any member of your party to our properties, equipment, staff and vehicles and those of our suppliers. Full payment for any such damage or loss must be paid to India Easy Trip Pvt Ltd or its suppliers upon request. Globe trotting Hospitality Pvt Ltd reserve the right to terminate your stay or that of any person travelling with you due to threatening behavior, moral turpitude or conduct which in Globe trotting Pvt Ltd’s reasonable opinion justifies termination of your travel arrangements and in the event of such termination no refunds will be given. Globe trotting Hospitality Pvt Ltd will not be under any obligation whatsoever to pay compensation or meet any costs or expenses you may incur as a result of your stay being terminated.</p>

        <h4>Governing Law</h4>
        <p>This agreement and each terms & condition shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws principles and disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts of Haridwar, Uttarakhand.</p>


      </div>


      <Footer />




    </div>
  )
}

export default Privacy