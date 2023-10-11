import React, { useEffect } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {

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
          <img  src="./Images/logo.jpg" alt="" />
          </div>
          </Link>

          <div className="login2" >
            <li><Link className='active' to={"/"}>  <span className='AllIcon'><img src="./Images/Icon/home.png" alt="" /></span>Home</Link></li>
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
              <li><Link className='active' to={"/"}> Home <span className='AllIcon'><img src="./Images/Icon/home.png" alt="" /></span></Link></li>
              <li><Link to={"/Tour"}> Tour <span className='AllIcon'><img src="./Images/Icon/tour.png" alt="" /></span> </Link></li>
              <li><Link to={"/About"}> About <span className='AllIcon'><img src="./Images/Icon/contact.png" alt="" /></span> </Link></li>
              <li><Link to={"/Services"}> Services <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span> </Link></li>
              <li><Link to={"/Contact"}> Contact Us <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span> </Link></li>
            </div>
          </div>

        </div>
      </div>

      <div className="main">

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div className="homeImages">
                <img className='img-fluid' src="./Images/topimage1.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>

            <div class="carousel-item">
              <div className="homeImages">
                <img className='img-fluid' src="./Images/topimage2.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>

            <div class="carousel-item">
              <div className="homeImages">
                <img className='img-fluid' src="./Images/topimage3.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>

          </div>

          {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}

        </div>

        <form action="https://formspree.io/f/meqbjajq"
          method="POST"
          className="contact-inputs">
          <div className="form">
            <div className="InnerForm">
              <div className="divideInput">
                <div className='InnerInput'>
                  <label for="name" class="form-label">Name <span className='mendatary'>*</span></label>
                  <input type="text" name='Name' required class="form-control" id="name" />
                </div>

                <div className='InnerInput2'>
                  <label for="email" class="form-label">Email <span className='mendatary'>*</span></label>
                  <input type="email" name='Email' required class="form-control" id="email" />
                </div>

              </div>

              <div className="divideInput">
                <div className='InnerInput'>
                  <label for="number" class="form-label">Contact No. <span className='mendatary'>*</span></label>
                  <input type="number" name='Mobile Number' required class="form-control" id="number" />
                </div>

                <div className='InnerInput'>

                  <label for="date" class="form-label">Start Date <span className='mendatary'>*</span></label>
                  <input type="date" name='Travel Date' required class="form-control" id="date" />

                </div>
              </div>

              <div className="divideInput">

                <div className='InnerInput'>
                  <label for="duration" required class="form-label">Duration</label>
                  <select name="Duration" id="duration" class="form-control">
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

                <div className='InnerInput2'>
                  <label for="number" class="form-label">No. of Adult</label>
                  <input type="text" name='No. of Adult' required class="form-control" id="number" />
                </div>
              </div>

              <div className="divideInput">
                <div className='InnerInput'>
                  <label for="number" class="form-label">No. of Children</label>
                  <input type="text" name='No. of Child' class="form-control" id="number" />
                </div>

                <div className='InnerInput2'>
                  <label for="tour" class="form-label">Select Tour</label>
                  <select name="Tour" id="duration" class="form-control">
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
              <div className="textarea">
                <label for="textarea" class="form-label">Comment</label><br />
                <textarea name="Comment Box" id="textarea" placeholder='Please enter your comment (e.g. age of children and any other specific requirement)' class="form-control" rows="2"></textarea>
              </div>

              <div className="subbtn">
                <button className='btn btn-primary'>Plan You Trip</button>
              </div>
            </div>
          </div>

        </form>

      </div>

      <div className="container cont1">
        <h1 style={{ textAlign: "center" }} className='my-4'> <u>CUSTOMIZE YOUR TRIP</u></h1>

        <div className="row">

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" >
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/rishikesh3.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Rishikesh</p>
                    <div>India</div>
                  </div>
                  <hr />

                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 3500
                    </div>
                  </div>

                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/vaishno3.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Vaishno Devi</p>
                    <div>India</div>
                  </div>
                  <hr />

                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 4200
                    </div>
                  </div>

                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/manali.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Manali</p>
                    <div>India</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 4500
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/kerala.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Kerala</p>
                    <div>India</div>
                  </div>

                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 4700
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/andaman.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Andaman Nicobar</p>
                    <div>India</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 8500
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/rajsthan2.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>The Royal Rajasthan</p>
                    <div>India</div>
                  </div>

                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 5700
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/uk.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Uttarakhand</p>
                    <div>India</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 6800
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/ladakh.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Kashmir & Ladakh</p>
                    <div>India</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 8900
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/hm.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Himachal Pradesh</p>
                    <div>India</div>
                  </div>

                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 7900
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere dolor nam maxime. Quidem reiciendis provident debitis libero delectus suscipit!</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>


        </div>
        
        {/* <div className="cont2 my-4">
          <h1>FROM PREVIOUS EXPEDITIONS</h1>
          <p>Client Stories – Experiences</p>
          <div className="row">
            <div className="col-sm-12 col-lg-6" data-aos="fade-up">
              <figure>
                <img className='img-fluid' src="./Images/user1.png" alt="" />
                <figcaption>New Delhi, India</figcaption>
              </figure>
            </div>

            <div className="col-sm-12 col-lg-6" data-aos="fade-up">
              <figure>
                <img className='img-fluid' src="./Images/user2.png" alt="" />
                <figcaption>Jakarta, Indonasia</figcaption>
              </figure>
            </div>
          </div>
        </div> */}

      </div>

      {/* <div className="cont3 mt-4">
        <div className="container">

          <h1 style={{ textAlign: "center", color: " #05203c", marginBottom: "20px" }}> <u>WHAT TRAVELLERS SAY ABOUT US</u></h1>

          <div className="bigDisplay" data-aos="zoom-in-up">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators" id='carouselBtn'>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div class="carousel-inner">
                <div class="carousel-item active">

                  <div className="totalCustmer">

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer1.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Gaurav</div>
                          <div className="country">
                            Europe
                          </div>
                        </figcaption>
                      </figure>
                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>
                    </div>

                    <div className='my-4'></div>

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer2.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Siddharth</div>
                          <div className="country">
                            Spain
                          </div>
                        </figcaption>
                      </figure>

                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>

                    </div>

                  </div>

                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>

                <div class="carousel-item">

                  <div className="totalCustmer">

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer3.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Alex</div>
                          <div className="country">
                            Ladakh
                          </div>
                        </figcaption>
                      </figure>
                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>
                    </div>

                    <div className='my-4'></div>

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer4.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Nishtha</div>
                          <div className="country">
                            Kerala
                          </div>
                        </figcaption>
                      </figure>

                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>

                    </div>

                  </div>

                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>

                <div class="carousel-item">

                  <div className="totalCustmer">

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer1.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Gaurav</div>
                          <div className="country">
                            Europe
                          </div>
                        </figcaption>
                      </figure>
                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>
                    </div>

                    <div className='my-4'></div>

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer4.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Nishitha</div>
                          <div className="country">
                            India
                          </div>
                        </figcaption>
                      </figure>

                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>

                    </div>

                  </div>

                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>

                <div class="carousel-item">

                  <div className="totalCustmer">

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer4.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Nishtha</div>
                          <div className="country">
                            Europe
                          </div>
                        </figcaption>
                      </figure>
                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>
                    </div>

                    <div className='my-4'></div>

                    <div className="custmerDetails">
                      <figure>
                        <img src="./Images/custmer1.jpg" alt="..." />
                        <figcaption>
                          <div className="name">Gaurav</div>
                          <div className="country">
                            Europe
                          </div>
                        </figcaption>
                      </figure>

                      <div className="custmerSay">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                      </div>

                    </div>

                  </div>

                  <div class="carousel-caption d-none d-md-block">

                  </div>
                </div>

              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" id='NextBtn'></span>
                <span class="visually-hidden" >Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" id='NextBtn'></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>


          <div className="smallDisplay" data-aos="zoom-in-up">

            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators" id='carouselBtn'>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">

                  <div className="custmerDetails">
                    <figure>
                      <img className='img-fluid' src="./Images/custmer1.jpg" alt="..." />
                      <figcaption>
                        <div className="name">Gaurav</div>
                        <div className="country">
                          Europe
                        </div>
                      </figcaption>
                    </figure>
                    <div className="custmerSay">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                    </div>
                  </div>

                </div>
                <div class="carousel-item">

                  <div className="custmerDetails">
                    <figure>
                      <img className='img-fluid' src="./Images/custmer2.jpg" alt="..." />
                      <figcaption>
                        <div className="name">Alex</div>
                        <div className="country">
                          Ladakh
                        </div>
                      </figcaption>
                    </figure>
                    <div className="custmerSay">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                    </div>
                  </div>

                </div>
                <div class="carousel-item">

                  <div className="custmerDetails">
                    <figure>
                      <img className='img-fluid' src="./Images/custmer4.jpg" alt="..." />
                      <figcaption>
                        <div className="name">Nikhita</div>
                        <div className="country">
                          India
                        </div>
                      </figcaption>
                    </figure>
                    <div className="custmerSay">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                    </div>
                  </div>

                </div>
                <div class="carousel-item">

                  <div className="custmerDetails">
                    <figure>
                      <img className='img-fluid' src="./Images/custmer3.jpg" alt="..." />
                      <figcaption>
                        <div className="name">Siddhartha</div>
                        <div className="country">
                          Kerala
                        </div>
                      </figcaption>
                    </figure>
                    <div className="custmerSay">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officiis nulla dicta numquam omnis molestiae nesciunt cum at, eum animi ipsum recusandae facere voluptatum nam perspiciatis sed cumque suscipit. Velit totam ullam dolorem iusto vel esse excepturi beatae illo? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit </p>
                    </div>
                  </div>

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" id='NextBtn'></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" id='NextBtn'></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>

        </div>
      </div> */}

      <div className='mt-5'>  <Footer /></div>


    </div>
  )
}

export default Home
