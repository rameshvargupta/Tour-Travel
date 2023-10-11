import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

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
            <li><Link className='active' to={"/About"}>  <span className='AllIcon'><img src="./Images/Icon/contact.png" alt="" /></span>About </Link></li>
            <li><Link to={"/Services"}>  <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span>Services </Link></li>
            <li><Link to={"/Contact"}>  <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span>Contact Us </Link></li>
          </div>

          <div className="smallcart" onClick={openNav}>
            <i class="fa-solid fa-bars"></i>
          </div>

          <div id="mySidenav" class="sidenav"  onClick={openNav}>
            <button class="openbtn btn btn-danger" onClick={closeNav}>X</button>
            <div className="smallnav">
              <li><Link to={"/"}> Home <span className='AllIcon'><img src="./Images/Icon/home.png" alt="" /></span></Link></li>
              <li><Link to={"/Tour"}> Tour <span className='AllIcon'><img src="./Images/Icon/tour.png" alt="" /></span> </Link></li>
              <li><Link className='active' to={"/About"}> About <span className='AllIcon'><img src="./Images/Icon/contact.png" alt="" /></span> </Link></li>
              <li><Link to={"/Services"}> Services <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span> </Link></li>
              <li><Link to={"/Contact"}> Contact Us <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span> </Link></li>
            </div>
          </div>


        </div>
      </div>

      <div className="aboutMain">
        <div className="aboutImage" data-aos="fade-up">
          <img src="./Images/about.jpg" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center", color: "#05203c" }} className='my-4'><u>WHY BOOK WITH CANVASTRIPS ?</u></h1>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="homeDetails" data-aos="zoom-in-up">
              <p>Canvastrips is a fully licensed and bonded destination management company based in India. We offer customized tours and travel services catering for the FIT, Group, Incentive and MICE markets.
                We have been crafting the best holiday memories for discerning travellers from across the world since 2015. They not only provide safe and trouble-free holidays but also make sure that each day of the trip is a unique experience in itself.</p>
              <li>Air Ticketing: Best Flight Ticket for all Domestic & International sectors.</li>
              <li>Domestic Holidays: Customized Holiday Packages all over India which include airport to airport services.</li>
              <li>International Holidays: Customized Itineraries across all International tourist destinations.</li>
              <li>Hotels in India: Instant hotel Reservations across in India.</li>
              <li>Car/Coach Rentals: Ac/Non Ac 4 to 70 seater vehicles provided on hire all over India.</li>

            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="sideImage mt-3" data-aos="zoom-in-up">
              <img className='img-fluid' src="./Images/home1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center", color: "#05203c" }} className='my-4' data-aos="zoom-in-up"><u>Our Exceptional Team </u></h1>
          <div className="col-sm-12 col-lg-6">
            <div className="teamDetails" data-aos="zoom-in-up">
              <p>Our team is the heart and soul of Canvatrip Tours. Committed, passionate, and driven, we are dedicated to making your journey extraordinary.</p>
              <li><strong>Customer-Centric:</strong>We listen to your needs and preferences, crafting personalized experiences that exceed your expectations.</li>
              <li><strong>24/7 Support:</strong>Our support team is available round the clock to assist you, from trip planning to on-the-ground support during your adventure.</li>
              <li><strong>Sustainability:</strong>We are committed to responsible tourism, supporting local communities, and minimizing our environmental impact wherever we go.</li>
              <li><strong>Transparent Pricing:</strong>No hidden fees or surprise costs – our pricing is transparent, making it easy for you to plan and budget for your adventure.
                <li>Discover the world with Canvatrip Tours, where quality, affordability, and a team that cares about your adventure are at the core of what we do. Join us for the journey of a lifetime!</li>

              </li>

            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="teamImage" data-aos="zoom-in-up">
              <img className='img-fluid' src="./Images/team.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center", color: "#05203c" }} className='my-4' data-aos="zoom-in-up"><u>Our Aim</u> </h1>

          <div className="col-sm-12 col-lg-6">

            <div className="founderImage" data-aos="zoom-in-up">
              <img className='img-fluid' src="./Images/goal1.jpg" alt="img" />
            </div>


          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="founderDetails" data-aos="zoom-in-up">
              Our aim is not merely to render holiday tour but also provide a variety of services weaved to perfection according to your needs. We believe that bringing people and places together is a noble affair. Moments which people spend with their loved ones are truly magical and blessed. Likewise, holidays or get together are both an excuse and an opportunity to Explore, Relax and bound to create unforgettable moments. So we at Canvastrips & services strive to achieve this holistic experience and to ensure that every moment is timeless and unforgettable.
            </div>
          </div>
        </div>
      </div>

      <div className="cont3 mt-4">
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
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default About
