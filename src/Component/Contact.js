import React, { useEffect } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

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
            <li><Link to={"/Services"}>  <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span>Services </Link></li>
            <li><Link className='active' to={"/Contact"}>  <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span>Contact Us </Link></li>
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
              <li><Link className='active' to={"/Contact"}> Contact Us <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span> </Link></li>
            </div>
          </div>

        </div>
      </div>

      <div className="whatsapplogo">
        <a target='blank' href='https://wa.me/+917827236346'><img src="./Images/Icon/whatsapp.png" alt="" /></a>
      </div>

      <div className="contactMain">
        <div className="contactImage" data-aos="fade-up">
          <img src="./Images/contact1.jpg" alt="" />
        </div>
      </div>

      <div className="container">
        <h1 className='my-5' style={{ textAlign: "center", color: " #05203c" }}> <u>We Would Love to Hear From You</u></h1>
        <div className="row Contact_Main">

          <div className="col-sm-12 col-lg-6" data-aos='zoom-in-up'>



            <form  action="https://formspree.io/f/meqbjajq"
              method="POST" className='ContactInputData mb-3'>

              <div className="formControl">

                <div className="InputControl">
                  <label htmlFor="name">Name<span className='mendatary'>*</span></label>
                  <input type="text" required name='Name' id='name' />
                </div>

                <div className="InputControl">
                  <label htmlFor="email">Email<span className='mendatary'>*</span></label>
                  <input type="email" required name='Email' id='email' />
                </div>
              </div>

              <div className="formControl">

                <div className="InputControl">
                  <label htmlFor="Contact">Contact No.<span className='mendatary'>*</span></label>
                  <input type="text" required name='Mobile Number' id='Contact' />
                </div>

                <div className="InputControl">
                  <label htmlFor="">Start Date<span className='mendatary'>*</span></label>
                  <input type="date" required name='Start Travel Date' id='StyleDuration' />
                </div>
              </div>

              <div className="formControl">

                <div className="InputControl">
                  <label htmlFor="">Duration</label>
                  <select name="Travel Duration" id="StyleDuration">
                    <option value="">---</option>
                    <option value="1 Nights">1 Nights</option>
                    <option value="2 Nights">2 Nights</option>
                    <option value="3 Nights">3 Nights</option>
                    <option value="4 Nights">4 Nights</option>
                    <option value="5 Nights">5 Nights</option>
                    <option value="6 Nights">6 Nights</option>
                    <option value="7 Nights">7 Nights</option>
                    <option value="8 Nights">8 Nights</option>
                    <option value="9 Nights">9 Nights</option>
                    <option value="10 Nights Above">10 Nights Above</option>
                  </select>
                </div>

                <div className="InputControl">
                  <label htmlFor="Adult">No. Of Adult</label>
                  <input type="text" name='Number Of Adult' id='Adult' />
                </div>
              </div>

              <div className="formControl">

                <div className="InputControl">
                  <label htmlFor="children">No. Of Children </label>
                  <input type="text" name='Number Of Children' id='children' />
                </div>

                <div className="InputControl">
                  <label htmlFor="">Select Tour</label>
                  <select name="Tour Name" id="StyleDuration">
                    <option value="">---</option>
                    <option value="" disabled id='domestic'>Domestic Tour</option>
                    <option value="Rishikesh">Rishikesh</option>
                    <option value="Shimla-Manali">Shimla-Manali</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Vaishno Devi-Grand Himanchal">Vaishno Devi-Grand Himanchal</option>
                    <option value="Uttrakhand">Uttrakhand</option>
                    <option value="Royal Rajastan">Royal Rajastan</option>
                    <option value="Himanchal-Vaishno Devi-kasmir Tour">Himanchal-Vaishno Devi-kasmir Tour</option>
                    <option value="Heritage Rajastan">Heritage Rajastan</option>
                    <option value="Heavenly Kashmir">Heavenly Kashmir</option>
                    <option value="Golden Kasmir">Golden Kasmir</option>
                    <option value="Golden triangle">Golden triangle</option>
                    <option value="golden Temple-Mata Vaishno Devi-kashmir">golden Temple-Mata Vaishno Devi-kashmir</option>
                    <option value="Andaman">Andaman</option>
                    <option value="" disabled id='international'>International Tour</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Bali">Bali</option>
                    <option value="A Week's Escape">A Week's Escape</option>
                  </select>
                </div>
              </div>

              <div className="formControl">
                <div className="TextAreaControl">
                  <div className="InputControl">
                    <label htmlFor="Comment">Comment </label>
                    <textarea name="Comment Box" id="Comment" placeholder='Please enter your comment (e.g. age of children and any other specific requirement)'></textarea>
                  </div>

                </div>
              </div>

              <div className="formControl">
                <div className="FormButton">
                  <button>Plan Your Trip</button>
                </div>
              </div>


            </form>

          </div>

          <div className="col-sm-12 col-lg-6" data-aos='zoom-in-up'>

            <div className="contactDetails">

              <div className='contactInnerDetails'>
                <i class="fa-solid fa-phone"></i><br /><h5>Phone</h5>
                <div>+91 7827236346</div>
              </div>

              <div className='contactInnerDetails'>
                <i class="fa-regular fa-calendar-days"></i><br /><h5>Office Hours</h5>
                <div> Monday - Friday: 9:30am - 6:30pm (Saturday until 2pm)</div>
              </div>

              <div className='contactInnerDetails'>
                <i class="fa-solid fa-envelope"></i><br /><h5>Email</h5>
                <div> info@canvastrips.com</div>
              </div>

              <div className='contactInnerDetails'>
                <i class="fa-solid fa-home"></i><br /><h5>Office Addess</h5>
                <div>Mayur Vihar Phase III,Delhi 110096</div>
              </div>

            </div>

          </div>

        </div>
      </div>


      <div className="contactMap my-4 container" data-aos='zoom-in-up'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2683.4702270091016!2d77.33590892940323!3d28.60821280456772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s18%20c%20pocket%20b%20sfs%20flats%20mayur%20vihar%20phase%20iii%20delhi%20110096!5e0!3m2!1sen!2sin!4v1695365874920!5m2!1sen!2sin" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Contact
