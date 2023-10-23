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
            <img src="./Images/logo.jpg" alt="" />
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

      <div className="whatsapplogo">
        <a target='blank' href='https://wa.me/+917827236346'><img src="./Images/Icon/whatsapp.png" alt="" /></a>
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
          method="POST" className='TotalInputData'>

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

      <div className="container cont1">
        <h1 style={{ textAlign: "center" }} className='my-4'> <u>CUSTOMIZE YOUR TRIP</u></h1>

        <div className="row">

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" >
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/India/Golden triangle.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Golden Triangle</p>
                    <div>India</div>
                  </div>
                  <hr />

                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 8400
                    </div>
                  </div>

                  <hr />
                  <p className='homep'>Delhi: Red Fort, Qutub Minar, India Gate Agra: Taj Mahal, Agra Fort Jaipur: Amber Fort, City Palace, Hawa Mahal</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/India/Northeast.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>North-East Explorer</p>
                    <div>India</div>
                  </div>
                  <hr />

                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 9400
                    </div>
                  </div>

                  <hr />
                  <p className='homep'>Assam: Kaziranga National Park, Majuli Island Meghalaya: Living Root Bridges, Cherrapunji Sikkim: Gangtok, Nathula Pass</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/India/Himachal.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>North India Highlights</p>
                    <div>India</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 7800
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Amritsar: Golden Temple, Wagah Border Dharamshala: McLeod Ganj, Bhagsu Falls Dalhousie: Khajjiar, Kalatop Wildlife Sanctuary</p>
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
                  <p className='homep'>Kochi: Fort Kochi, Chinese fishing nets Alleppey: Houseboat stay in the backwaters Varkala or Kovalam: Beach relaxation</p>
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
                  <p className='homep'>Port Blair: Cellular Jail, Corbyn's Cove Beach Havelock Island: Radhanagar Beach, Elephant Beach Neil Island: Natural Bridge, Bharatpur Beach</p>
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
                  <p className='homep'>Udaipur: City Palace, Lake Pichola Jodhpur: Mehrangarh Fort, Umaid Bhawan Palace Jaisalmer: Desert Safari, Jaisalmer Fort</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/Africa/Kenya.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Kenya</p>
                    <div>Kenya</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 18000
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Nairobi's Giraffe Centre and David Sheldrick Wildlife Trust Maasai Mara National Reserve for the Great Migration Amboseli National Park.</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/SouthEastAsia/Thailand.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Thailand</p>
                    <div>Thailand</div>
                  </div>
                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 21000
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Explore the bustling streets of Bangkok. Visit ancient temples in Chiang Mai. Relax on the beaches of Koh Samui and Phi Phi Islands.</p>
                  <button>View Details <i class="fa-solid fa-circle-info"></i> </button>

                </figcaption>
              </figure>
            </div>

          </div>

          <div className="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up">
            <div className="homePage">
              <figure>
                <div className="homeImage">
                  <img className="img-fluid" src="./Images/MiddleEast/MiddleEastMain.jpg" alt="" />
                </div>

                <figcaption>
                  <div className="country">
                    <p className='city'>Dubai</p>
                    <div>UAE</div>
                  </div>

                  <hr />
                  <div className="homeprice">
                    <div className="prices">
                      Starting From Rs. 35000
                    </div>
                  </div>
                  <hr />
                  <p className='homep'>Stand atop the Burj Khalifa. Shop at the Dubai Mall and Gold Souk. Enjoy a desert safari with dune bashing. Visit the Dubai Miracle Garden.</p>
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
