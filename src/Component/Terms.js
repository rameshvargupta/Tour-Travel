import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../Component_Css/Terms.css';
const Terms = () => {
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

      <div className="terms">

        <div className="image">
          <img className='img-fluid' src="./Images/terms.jpg" alt="" />
        </div>
      </div>
      <div className="container tCont my-4">
        <h1>Terms & Conditions</h1>

        <p><h4 >User Agreement</h4> This User Agreement constitutes a binding contract between you, the User, and India Easy Trip Pvt. Ltd. with regard to the use of various services that are provided by India Easy Trip Pvt. Ltd. Please read these terms & conditions and our general information carefully before your tour booking with us. GLOBE-TROTTING HOSPITALITY PRIVATE LIMITEDis a company incorporated under the laws of India, with its principal office DT Mega mall- DLF Phase I – Gurgaon – Haryana – India, provides various travel related services through its Website (www.detour2india.com) & retail outlet at head office. Services are offered to the User conditioned on acceptance without modification of all the terms, conditions and notices contained in this Agreement. For the removal of doubts, it is clarified that availing of the Services by the User constitutes an acknowledgement and acceptance by the User of this Agreement. If the User does not agree with any part of such terms, conditions and notices, the User must not avail our Services. Additionally, the Service Provider itself may provide terms and guidelines that govern particular features, offers or the operating rules and policies applicable to each Service (for example, flights, hotel reservations, packages, etc.). The User shall be responsible for ensuring compliance with the terms and guidelines or operating rules and policies of the Service Provider with whom the User elects to deal, including terms and conditions set forth in a Service Providers’ fare rules, contract of carriage or house rules. Globe trotting Hospitality Pvt Ltd reserves the right not to accept any order placed by the User through the Website without assigning any reason thereof. Any contract to provide any service by us is not complete until full money towards the service is received from the User and accepted by India Easy Trip Pvt Ltd. </p>

        <h4>Making a Booking</h4>
        <p>To make a booking you may email or call our team directly. Our consultants will help you to select the travel arrangements that you require and will offer you a price for these arrangements. Your booking with Globe-Trotting Pvt Ltd is confirmed when we have received your advance payment for the arrangements that you have confirmed by email or by phone with our staff. If you are making a booking for more than one person, the person confirming the booking must have the consent of other accompanying guests to make the booking on their behalf and this person will be responsible for all payments for all guests travelling on the booking. For the purposes of our booking conditions “you” means the individual making the booking and all members of the party travelling with them. We make every reasonable effort to ensure that any written or oral instructions provided to us are accurately reflected in the documentation we provide to our clients and on which a booking is based. Please check the information we send you to ensure that it is accurate and reflects the instructions you have given us. We cannot be responsible for any errors that may result from an inaccuracy in our documentation that is not notified to us by email within 10 days of it being sent to you and on which you may book your arrangements or amend them.</p>

        <h4>Rates</h4>
        <p>The rates for your programme will be based upon our published tariff. Once you have made a booking with Globe-Trotting Hospitality Pvt Ltd and paid your deposit there will be no change to your price except where the Government of India impose any new taxes on travel and travel suppliers or changes fuel rates and such a change is greater than 2% of your total arrangements booked with the company</p>

        <h4>Payment</h4>
        <p>Payment may be made for your holiday by credit/debit card or by wire transfer to our bank, 100% of the total booking cost is to be paid at the time of confirmation of your reservation. No reservation is deemed to be confirmed until such time as the company, Non, has received full payment receipt of final payment by the due date will be treated as a cancellation and relevant cancellation charges will apply.
        </p>

        <h4>Insurance</h4>
        <p>Globe – Trotting Hospitality Pvt Ltd do not sell travel insurance and are unable to give advice on insurance policy content or efficacy. It is highly recommended that you purchase travel insurance at the time of your booking with your chosen insurance provider. Globe Trotting Hospitality Pvt Ltd is unable to take responsibility for costs and liabilities that may result from your decision to travel without insurance, or insurance that may not be fully comprehensive for your needs.</p>

        <h4>About You – Medical Information and Special Requests</h4>
        <p>It is necessary for you to inform us about any medical condition, dietary requirement or special requirements that may have a significant or material impact on your ability to enjoy your booked arrangements. These should be advised to us at the time of booking and whilst we may be able to accommodate special requests and requirements we cannot be responsible for any loss of enjoyment that may arise from your failure to communicate these issues at the time of booking. Some of the areas in which operate are very remote, with limited medical facilities and as such we reserve the right to refuse a booking where a medical condition may impair your ability to enjoy or fulfill your travel arrangements. India Easy Trip will not be responsible for any curtailment or amendment to travel arrangements that result from a medical condition either pre-existing or occurring during your travel arrangements. If you have any dietary requests our staff will normally be able to accommodate these but such requests are only our responsibility where we have confirmed to you in writing our ability to fulfill them.
        </p>

        <h4>Changes to Your Booking</h4>
        <p>Once you have booked your travel arrangements with us, changes you may wish to make to your booked arrangements after receipt of your deposit will be possible subject to any charges that may be made by our suppliers. Any change that requires an alteration of dates to any booking, including postponement may be treated as a cancellation and our cancellation policy applied depending upon the notice given prior to arrival.In the event that your arrangements need to be changed as a result of a missed, delayed or cancelled international or domestic airline flight, car or rail journey we will provide every assistance to you to make the required changes to your travel arrangements, but you will be responsible for the cost of such changes. Where your arrangements need to be changed, curtailed or abandoned due to circumstances beyond the control of Globe-Trotting Pvt Ltd, including but not limited to acts of god, civil commotion, strikes, war, threat of war, terrorist activity either threatened or actual, natural or nuclear disaster and events beyond the reasonable control of Globe trotting Pvt Ltd, we will, depending upon whether you are in the country or due to travel, either make alternate arrangements or offer you alternate travel arrangements where available. If such events occur whilst you are already travelling in India the costs of such arrangements will be borne by you. Globe Trotting Hospitality Pvt Ltd is regrettably unable to pay compensation or take responsibility for any costs, losses and liabilities that may result from such events, where they affect the ability of Globe Trotting to promptly and efficiently deliver its contracted arrangements to you or such events give rise to personal loss, distress, injury, or death.</p>

        <h4>Contract</h4>
        <p className='mb-5'>A binding contract exists between you and Globe Trotting Hospitality Pvt. Ltd. once you have accepted our terms and conditions and paid your deposit. The laws of the Republic of India will apply to this contract and to any dispute or claim, which arises from it. The court of Haryana-India will exclusively deal with any dispute of claim that may arise. We reserve the right to change our booking conditions and general travel information from time to time as published on our website. You will not be exempt from any terms and conditions unless specifically agreed with us in writing.</p>
      </div>


      <Footer />




    </div>
  )
}

export default Terms