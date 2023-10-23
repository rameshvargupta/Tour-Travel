import React from 'react';
import './India.css';
import { useState } from 'react';
import Footer from '../../Component/Footer';
import { Link } from 'react-router-dom';
import '../Common.css'

const India = () => {
  const [selectdetails, setSelectDetails] = useState("defaultshowdetails");

  function openNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "220px";
  }
  function closeNav(e) {
    e.stopPropagation();
    document.getElementById("mySidenav").style.width = "0px";
  }

  function showDescription() {
    let SeaDecription = document.getElementById("SeaDecription");
    SeaDecription.style.display = "block";
  }
  function hideDescription() {
    let SeaDecription = document.getElementById("SeaDecription");
    SeaDecription.style.display = "none";
  }

  function showDescription2() {
    document.getElementById("SeaDecription2").style.display = "block";

  }
  function hideDescription2() {
    document.getElementById("SeaDecription2").style.display = "none";

  }

  function showDescription3() {
    document.getElementById("SeaDecription3").style.display = "block";

  }
  function hideDescription3() {
    document.getElementById("SeaDecription3").style.display = "none";

  }

  function showDescription5() {
    document.getElementById("SeaDecription5").style.display = "block";

  }
  function hideDescription5() {
    document.getElementById("SeaDecription5").style.display = "none";

  }

  function showDescription6() {
    document.getElementById("SeaDecription6").style.display = "block";

  }
  function hideDescription6() {
    document.getElementById("SeaDecription6").style.display = "none";

  }

  function showDescription7() {
    document.getElementById("SeaDecription7").style.display = "block";

  }
  function hideDescription7() {
    document.getElementById("SeaDecription7").style.display = "none";

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
            <li><Link className='active' to={"/Tour"}>  <span className='AllIcon'><img src="./Images/Icon/tour.png" alt="" /></span>Tour</Link></li>
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
              <li><Link className='active' to={"/Tour"}> Tour <span className='AllIcon'><img src="./Images/Icon/tour.png" alt="" /></span> </Link></li>
              <li><Link to={"/About"}> About <span className='AllIcon'><img src="./Images/Icon/contact.png" alt="" /></span> </Link></li>
              <li><Link to={"/Services"}> Services <span className='AllIcon'><img src="./Images/Icon/services.png" alt="" /></span> </Link></li>
              <li><Link to={"/Contact"}> Contact Us <span className='AllIcon'><img src="./Images/Icon/telephone.png" alt="" /></span> </Link></li>
            </div>
          </div>
        </div>
      </div>

      <div className="TopMainImage">

        <div className="Image">
          <img className='img-fluid' src="./Images/India/India Mainpage.jpg" alt="" />
        </div>

        <div className='countryName'>
          <h1>INDIA</h1>
        </div>

      </div>


      <div className="CountryTour">

        <div className="CountryTourName">

          <div class="accordion accordion-flush" id="accordionFlushExample" >

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed  CommonPlaceName" onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  North-East
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div className="traveldays">
                    <div className='selectDate' onClick={() => setSelectDetails("North-East")} >North-East Explorer</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed CommonPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Kerala
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div className="traveldays">
                    <div className='selectDate' onClick={() => setSelectDetails("Kerala")} >Kerala</div>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed CommonPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  North India
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div className="traveldays">
                    <div className='selectDate' onClick={() => setSelectDetails("North India")} >North India</div>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed CommonPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Golden Triangle
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div className="traveldays">
                    <div className='selectDate' onClick={() => setSelectDetails("Golden Triangle")} >Golden Triangle</div>
                  </div>

                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed CommonPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  Rajasthan
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div className="traveldays">
                    <div className='selectDate' onClick={() => setSelectDetails("Rajasthan")} >Rajasthan Tour</div>
                  </div>
                </div>

              </div>

            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed CommonPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  Andaman
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <div className="traveldays">
                    <div className='selectDate' onClick={() => setSelectDetails("Andaman")} >Andaman Beach</div>
                  </div>
                </div>

              </div>

            </div>

            <span />

          </div>

        </div>

        <div className="CountryTourDetails">


          <div className="container">

            <div className="defaulttourdetails">

              <div style={{ display: selectdetails === "defaultshowdetails" ? "block" : "none" }}>
                <div className="row">

                  <h1 className='my-4 text-center'>Our Tours And Packages</h1>


                  <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                    <div className="tourInnerDetails" onMouseEnter={showDescription} onMouseLeave={hideDescription}>

                      <div className="CommonTourImage">
                        <img className='img-fluid' src="./Images/India/Northeast.jpg" alt="" />
                      </div>

                      <div className="CommonImageDiscription" id='SeaDecription' >
                        <h5>North-East Explorer</h5>
                        <div>
                          <strong> Duration: </strong>

                          10-14 days.
                        </div>
                        <div> <strong>Highlights: </strong>
                          Assam: Kaziranga National Park, Majuli Island
                          Meghalaya: Living Root Bridges, Cherrapunji
                          Sikkim: Gangtok, Nathula Pass</div>
                      </div>

                      <div className='CommonPlaceName'>North-East Explorer</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                    <div className="tourInnerDetails" onMouseEnter={showDescription2} onMouseLeave={hideDescription2}>
                      <div className="CommonTourImage">
                        <img className='img-fluid' src="./Images/India/kerala.jpg" alt="" />
                      </div>

                      <div className="CommonImageDiscription" id='SeaDecription2' >
                        <h5>Kerala Backwaters and Beaches</h5>
                        <div>
                          <strong> Duration: </strong>

                          7-10 days.
                        </div>
                        <div> <strong>Highlights: </strong>
                          Kochi: Fort Kochi, Chinese fishing nets
                          Alleppey: Houseboat stay in the backwaters
                          Varkala or Kovalam: Beach relaxation</div>
                      </div>

                      <div className='CommonPlaceName'>Kerala Backwaters and Beaches</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                    <div className="tourInnerDetails" onMouseEnter={showDescription3} onMouseLeave={hideDescription3}>
                      <div className="CommonTourImage">
                        <img className='img-fluid' src="./Images/India/Himachal.jpg" alt="" />
                      </div>

                      <div className="CommonImageDiscription" id='SeaDecription3'>
                        <h5>North India Highlights Amritsar and Himachal Combo</h5>
                        <div>
                          <strong> Duration: </strong>

                          7-10 days.
                        </div>
                        <div> <strong>Highlights: </strong>
                          Amritsar: Golden Temple, Wagah Border
                          Dharamshala: McLeod Ganj, Bhagsu Falls
                          Dalhousie: Khajjiar, Kalatop Wildlife Sanctuary</div>
                      </div>

                      <div className='CommonPlaceName'>North India Highlights Amritsar and Himachal Combo</div>
                    </div>

                  </div>



                  <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                    <div className="tourInnerDetails" onMouseEnter={showDescription5} onMouseLeave={hideDescription5}>
                      <div className="CommonTourImage">
                        <img className='img-fluid' src="./Images/India/Golden triangle.jpg" alt="" />
                      </div>


                      <div className="CommonImageDiscription" id='SeaDecription5' >
                        <h5>
                          Golden Triangle Tour</h5>
                        <div>
                          <strong> Duration: </strong>

                          5-7 days.
                        </div>
                        <div> <strong>Highlights: </strong>
                          Delhi: Red Fort, Qutub Minar, India Gate
                          Agra: Taj Mahal, Agra Fort
                          Jaipur: Amber Fort, City Palace, Hawa Mahal</div>
                      </div>


                      <div className='CommonPlaceName'>
                        Golden Triangle Tour</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                    <div className="tourInnerDetails" onMouseEnter={showDescription6} onMouseLeave={hideDescription6}>
                      <div className="CommonTourImage">
                        <img className='img-fluid' src="./Images/India/Rajasthan.jpg" alt="" />
                      </div>


                      <div className="CommonImageDiscription" id='SeaDecription6'>
                        <h5>Rajasthan Heritage Tour</h5>
                        <div>
                          <strong> Duration: </strong>

                          10-14 days.
                        </div>
                        <div> <strong>Highlights: </strong>
                          Udaipur: City Palace, Lake Pichola
                          Jodhpur: Mehrangarh Fort, Umaid Bhawan Palace
                          Jaisalmer: Desert Safari, Jaisalmer Fort</div>
                      </div>



                      <div className='CommonPlaceName'>Rajasthan Heritage Tour</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                    <div className="tourInnerDetails" onMouseEnter={showDescription7} onMouseLeave={hideDescription7}>
                      <div className="CommonTourImage">
                        <img className='img-fluid' src="./Images/India/Andaman.jpg" alt="" />
                      </div>


                      <div className="CommonImageDiscription" id='SeaDecription7'>
                        <h5>Andaman Beach Getaway</h5>
                        <div>
                          <strong> Duration: </strong>

                          5-7 days.
                        </div>
                        <div> <strong>Highlights: </strong>
                          Port Blair: Cellular Jail, Corbyn's Cove Beach
                          Havelock Island: Radhanagar Beach, Elephant Beach
                          Neil Island: Natural Bridge, Bharatpur Beach</div>
                      </div>



                      <div className='CommonPlaceName'>Andaman Beach Getaway</div>
                    </div>

                  </div>




                </div>

              </div>

            </div>

            <div className="NorthEastDetails" style={{ display: selectdetails === "North-East" ? "block" : "none" }}>

              <div className="container my-4">

                <div className="row">

                  <div className="maintopic">
                    <h2><u>North-East Discovery</u></h2>
                    <h4>A detailed 10-14 day itinerary for Northeast India, broken down into morning, afternoon, and evening activities, could look something like this:</h4>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 1</u> </h2>
                      <h4>Arrival in Guwahati, Assam</h4>
                      <div> <strong>Morning:</strong> Arrive at Guwahati Airport, transfer to hotel.</div>
                      <div> <strong>Afternoon:</strong> Visit Kamakhya Temple.</div>
                      <div> <strong>Evening:</strong> Brahmaputra River Cruise.</div>
                    </div>

                  </div>


                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NEday1.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NEday2.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 2-3</u> </h2>
                      <h4>Kaziranga National Park, Assam</h4>
                      <div> <strong>Morning:</strong> Drive to Kaziranga; check-in at resort.</div>
                      <div> <strong>Afternoon:</strong> Rest and acclimatize.</div>
                      <div> <strong>Evening:</strong> Cultural performance showcasing Assamese dance and music.</div>

                      <div> <strong>Morning:</strong> Early morning elephant safari.</div>
                      <div> <strong>Afternoon:</strong> Jeep safari.</div>
                      <div> <strong>Evening:</strong> Free time at the resort.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 4-6</u> </h2>
                      <h4>Meghalaya</h4>
                      <div> <strong>Morning:</strong> Drive to Shillong.</div>
                      <div> <strong>Afternoon:</strong> Visit Umiam Lake.</div>
                      <div> <strong>Evening:</strong> Check-in at Shillong hotel.</div>

                      <div> <strong>Morning:</strong> Day trip to Cherrapunji.</div>
                      <div> <strong>Afternoon:</strong> Visit Nohkalikai Falls and Mawsmai Caves.</div>
                      <div> <strong>Evening:</strong> Return to Shillong.</div>

                      <div> <strong>Morning:</strong> Visit Living Root Bridges.</div>
                      <div> <strong>Afternoon:</strong> Explore nearby villages.</div>
                      <div> <strong>Evening:</strong> Return to Shillong.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NEday3.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NEday4.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 7-9</u> </h2>
                      <h4>Arunachal Pradesh</h4>
                      <div> <strong>Morning:</strong> Drive to Bomdila.</div>
                      <div> <strong>Afternoon:</strong> Visit local monasteries.</div>
                      <div> <strong>Evening:</strong> Rest at the hotel.</div>

                      <div> <strong>Morning:</strong> Drive to Tawang.</div>
                      <div> <strong>Afternoon:</strong> Visit Sela Pass and Jaswant Garh War Memorial.</div>
                      <div> <strong>Evening:</strong> Check-in at Tawang hotel.</div>

                      <div> <strong>Morning:</strong> Visit Tawang Monastery.</div>
                      <div> <strong>Afternoon:</strong> Explore local markets.</div>
                      <div> <strong>Evening:</strong> Free time.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 10-12</u> </h2>
                      <h4>Nagaland</h4>
                      <div> <strong>Morning:</strong> Drive to Kohima.</div>
                      <div> <strong>Afternoon:</strong> Visit the War Cemetery.</div>
                      <div> <strong>Evening:</strong> Rest at the hotel.</div>

                      <div> <strong>Morning:</strong> Day trip to Khonoma Village.</div>
                      <div> <strong>Afternoon:</strong> Explore the village.</div>
                      <div> <strong>Evening:</strong> Return to Kohima.</div>

                      <div> <strong>Morning:</strong> Attend Hornbill Festival (if in December).</div>
                      <div> <strong>Afternoon:</strong> Explore local crafts and culture.</div>
                      <div> <strong>Evening:</strong> Cultural events at the festival.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NEday5.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NEday6.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 13-14</u> </h2>
                      <h4>Manipur</h4>
                      <div> <strong>Morning:</strong> Fly to Imphal.</div>
                      <div> <strong>Afternoon:</strong> Visit Kangla Fort.</div>
                      <div> <strong>Evening:</strong> Explore local markets.</div>

                      <div> <strong>Morning:</strong> Visit Loktak Lake and Keibul Lamjao National Park.</div>
                      <div> <strong>Afternoon:</strong> Boat ride on Loktak Lake.</div>
                      <div> <strong>Evening:</strong> Fly back to Guwahati or onward destination.</div>

                    </div>

                  </div>

                  <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons:</strong> Majuli Island, Assam: Unique Satra culture.
                    Ziro Valley, Arunachal Pradesh: Apatani tribal culture.
                    Mon, Nagaland: Konyak tribe.
                    This itinerary offers a comprehensive experience of Northeast India, covering key attractions and experiences.
                    Activities can be adjusted based on preferences and interests. If you'd like further customization or details, please call or email us now!
                  </div>

                </div>
              </div>

            </div>

            <div className="KeralaDetails" style={{ display: selectdetails === "Kerala" ? "block" : "none" }}>

              <div className="container my-4">

                <div className="row">

                  <div className="maintopic">
                    <h2><u>Kerala Backwaters and Beaches</u></h2>
                    <h4>A 7-10 day tour package in Kerala can offer a blend of natural beauty, cultural experiences, and relaxation. Here's a sample itinerary:</h4>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 1</u> </h2>
                      <h4>Arrival in Kochi</h4>
                      <div> <strong>Morning:</strong> Arrive at Kochi Airport, transfer to hotel.</div>
                      <div> <strong>Afternoon:</strong> Visit Fort Kochi and Mattancherry Palace.</div>
                      <div> <strong>Evening:</strong> Watch a traditional Kathakali performance.</div>
                    </div>

                  </div>


                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday1.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday2.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 2</u> </h2>
                      <h4>Kochi to Munnar</h4>
                      <div> <strong>Morning:</strong> Drive to Munnar.</div>
                      <div> <strong>Afternoon:</strong> Visit tea plantations.</div>
                      <div> <strong>Evening:</strong> Check-in at Munnar hotel, relax.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 3</u> </h2>
                      <h4>Munnar Exploration</h4>
                      <div> <strong>Morning:</strong> Visit Eravikulam National Park.</div>
                      <div> <strong>Afternoon:</strong> Explore Mattupetty Dam.</div>
                      <div> <strong>Evening:</strong> Leisure time or local shopping.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday3.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday4.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 4</u> </h2>
                      <h4>Munnar to Thekkady</h4>
                      <div> <strong>Morning:</strong> Drive to Thekkady.</div>
                      <div> <strong>Afternoon:</strong> Visit Periyar National Park for a boat ride.</div>
                      <div> <strong>Evening:</strong> Attend a Kalaripayattu show (martial arts).</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 5</u> </h2>
                      <h4>Thekkady to Alleppey</h4>
                      <div> <strong>Morning:</strong> Drive to Alleppey.</div>
                      <div> <strong>Afternoon:</strong> Check-in to a houseboat.</div>
                      <div> <strong>Evening:</strong> Cruise through the backwaters, dinner on the boat.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday5.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday6.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 6</u> </h2>
                      <h4>Alleppey to Kovalam</h4>
                      <div> <strong>Morning:</strong> Disembark from the houseboat.</div>
                      <div> <strong>Afternoon:</strong> Drive to Kovalam.</div>
                      <div> <strong>Evening:</strong> Relax on Kovalam Beach.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 7</u> </h2>
                      <h4>Kovalam</h4>
                      <div> <strong>Morning:</strong> Visit Lighthouse Beach.</div>
                      <div> <strong>Afternoon:</strong> Relax or try water sports.</div>
                      <div> <strong>Evening:</strong> Enjoy a beachside dinner.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday7.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday8.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 8</u> </h2>
                      <h4>Kovalam to Trivandrum (Optional)</h4>
                      <div> <strong>Morning:</strong> Drive to Trivandrum.</div>
                      <div> <strong>Afternoon:</strong> Visit Padmanabhaswamy Temple and Napier Museum.</div>
                      <div> <strong>Evening:</strong> Return to Kovalam.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 9</u> </h2>
                      <h4>Kovalam to Varkala (Optional)</h4>
                      <div> <strong>Morning:</strong> Drive to Varkala.</div>
                      <div> <strong>Afternoon:</strong> Relax on Varkala Beach.</div>
                      <div> <strong>Evening:</strong> Explore the Varkala Cliff area.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday9.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Kday10.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 10</u> </h2>
                      <h4>Departure</h4>
                      <div> <strong>Morning:</strong> Drive to Trivandrum or Kochi for departure.</div>
                      <div> <strong>Afternoon:</strong> Last-minute shopping or sightseeing.</div>
                      <div> <strong>Evening:</strong> Catch flight back home.</div>
                    </div>

                  </div>

                  <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons:</strong> This itinerary offers a mix of natural beauty, relaxation, and cultural experiences, making the most out of a 7-10 day trip to Kerala.
                    If you'd like further customization or details, please call or email us now!
                  </div>

                </div>
              </div>

            </div>

            <div className="NorthIndiaDetails" style={{ display: selectdetails === "North India" ? "block" : "none" }}>

              <div className="container my-4">

                <div className="row">

                  <div className="maintopic">
                    <h2><u>North India (Amritsar and Himachal Pradesh) </u></h2>
                    <h4>A 7-10 day tour package combining Amritsar and Himachal Pradesh can offer a blend of spiritual, cultural, and natural experiences. Here's a sample itinerary:</h4>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 1</u> </h2>
                      <h4>Arrival in Amritsar</h4>
                      <div> <strong>Morning:</strong> Arrive at Amritsar Airport, transfer to hotel.</div>
                      <div> <strong>Afternoon:</strong> Visit Jallianwala Bagh.</div>
                      <div> <strong>Evening:</strong> Visit the Golden Temple and attend the Palki Sahib ceremony.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday1.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday2.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 2</u> </h2>
                      <h4>Amritsar</h4>
                      <div> <strong>Morning:</strong> Visit Durgiana Temple.</div>
                      <div> <strong>Afternoon:</strong> Explore local markets.</div>
                      <div> <strong>Evening:</strong> Attend the Wagah Border ceremony.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 3</u> </h2>
                      <h4>Amritsar to Dharamshala</h4>
                      <div> <strong>Morning:</strong> Drive to Dharamshala.</div>
                      <div> <strong>Afternoon:</strong> Arrive and check-in at the hotel.</div>
                      <div> <strong>Evening:</strong> Leisure time or explore McLeod Ganj.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday3.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday4.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 4</u> </h2>
                      <h4>Dharamshala</h4>
                      <div> <strong>Morning:</strong> Visit the Dalai Lama Temple.</div>
                      <div> <strong>Afternoon:</strong> Explore Bhagsu Falls.</div>
                      <div> <strong>Evening:</strong> Stroll around McLeod Ganj and visit local cafes.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 5</u> </h2>
                      <h4>Dharamshala to Manali</h4>
                      <div> <strong>Morning:</strong> Drive to Manali.</div>
                      <div> <strong>Afternoon:</strong> Arrive and check-in at the hotel.</div>
                      <div> <strong>Evening:</strong> Walk along Mall Road.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday5.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday6.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 6</u> </h2>
                      <h4>Manali</h4>
                      <div> <strong>Morning:</strong> Visit Hidimba Devi Temple.</div>
                      <div> <strong>Afternoon:</strong> Explore Solang Valley.</div>
                      <div> <strong>Evening:</strong> Leisure time or local shopping.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 7</u> </h2>
                      <h4>Manali to Shimla</h4>
                      <div> <strong>Morning:</strong> Drive to Shimla.</div>
                      <div> <strong>Afternoon:</strong> Check-in and rest.</div>
                      <div> <strong>Evening:</strong> Walk along the Ridge and visit Christ Church..</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday7.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday8.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 8</u> </h2>
                      <h4>Shimla</h4>
                      <div> <strong>Morning:</strong> Visit Kufri and enjoy horse riding.</div>
                      <div> <strong>Afternoon:</strong> Explore the Shimla State Museum.</div>
                      <div> <strong>Evening:</strong> Shopping at Lakkar Bazaar.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 9</u> </h2>
                      <h4>Shimla to Dalhousie (Optional)</h4>
                      <div> <strong>Morning:</strong> Drive to Dalhousie.</div>
                      <div> <strong>Afternoon:</strong> Check-in and rest.</div>
                      <div> <strong>Evening:</strong> Walk along Mall Road or visit St. John's Church.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday9.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/NIday10.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 10</u> </h2>
                      <h4>Departure</h4>
                      <div> <strong>Morning:</strong> Drive back to Amritsar or Chandigarh for departure.</div>
                      <div> <strong>Afternoon:</strong> Last-minute shopping or sightseeing.</div>
                      <div> <strong>Evening:</strong> Catch flight back home.</div>
                    </div>

                  </div>

                  <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Experience: </strong>
                    This itinerary offers a mix of spiritual, cultural, and natural experiences, making the most out of a 7-10 day trip to Amritsar and Himachal Pradesh.
                    Activities can be adjusted based on preferences and interests. If you'd like further customization or details, please call or email us now!
                  </div>

                </div>
              </div>

            </div>

            <div className="GoldenTringleDetails" style={{ display: selectdetails === "Golden Triangle" ? "block" : "none" }}>

              <div className="container my-4">

                <div className="row">

                  <div className="maintopic">
                    <h2><u>Golden Triangle Tour</u></h2>
                    <h4>A 5-7 day Golden Triangle tour package in India, covering Delhi, Agra, and Jaipur, can offer a rich blend of history, culture, and architecture. Here's a sample itinerary:</h4>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 1</u> </h2>
                      <h4>Arrival in Delhi</h4>
                      <div> <strong>Morning:</strong> Arrive at Delhi Airport, transfer to hotel.</div>
                      <div> <strong>Afternoon:</strong> Visit India Gate and Humayun's Tomb.</div>
                      <div> <strong>Evening:</strong> Explore Connaught Place for shopping and dining.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday1.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday2.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 2</u> </h2>
                      <h4>Delhi Sightseeing</h4>
                      <div> <strong>Morning:</strong> Visit Red Fort.</div>
                      <div> <strong>Afternoon:</strong> Explore Jama Masjid and Chandni Chowk.</div>
                      <div> <strong>Evening:</strong> Visit Qutub Minar, enjoy a light and sound show if available.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 3</u> </h2>
                      <h4>Delhi to Agra</h4>
                      <div> <strong>Morning:</strong> Drive to Agra.</div>
                      <div> <strong>Afternoon:</strong> Visit Agra Fort.</div>
                      <div> <strong>Evening:</strong> View the Taj Mahal from Mehtab Bagh during sunset.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday3.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday4.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 4</u> </h2>
                      <h4>Agra to Jaipur via Fatehpur Sikri</h4>
                      <div> <strong>Morning:</strong> Visit the Taj Mahal at sunrise.</div>
                      <div> <strong>Afternoon:</strong> Drive to Jaipur, visit Fatehpur Sikri en route.</div>
                      <div> <strong>Evening:</strong> Arrive in Jaipur and check-in at the hotel.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 5</u> </h2>
                      <h4>Jaipur Sightseeing</h4>
                      <div> <strong>Morning:</strong> Visit Amber Fort, enjoy an elephant ride.</div>
                      <div> <strong>Afternoon:</strong> Visit City Palace and Jantar Mantar.</div>
                      <div> <strong>Evening:</strong> Explore the local bazaars or visit Hawa Mahal.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday5.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday6.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 6</u> </h2>
                      <h4>Jaipur to Delhi (Optional)</h4>
                      <div> <strong>Morning:</strong> Drive back to Delhi.</div>
                      <div> <strong>Afternoon:</strong> Explore the Underwater World Langkawi.</div>
                      <div> <strong>Evening:</strong> Last-minute shopping or dining in Delhi.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 7</u> </h2>
                      <h4>Departure from Delhi (Optional)</h4>
                      <div> <strong>Morning:</strong> Leisure time or optional visit to Lotus Temple.</div>
                      <div> <strong>Afternoon:</strong> Transfer to Delhi Airport.</div>
                      <div> <strong>Evening:</strong> Catch flight back home.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/GTday7.jpg" alt="" />

                    </div>

                  </div>


                  <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Experience: </strong>
                    This itinerary offers a mix of historical, cultural, and architectural experiences, making the most out of a 5-7 day trip to the Golden Triangle in India.
                    Activities can be adjusted based on preferences and interests. If you'd like further customization or details, please call or email us now!
                  </div>

                </div>
              </div>

            </div>

            <div className="RajasthanDetails" style={{ display: selectdetails === "Rajasthan" ? "block" : "none" }}>

              <div className="container my-4">

                <div className="row">

                  <div className="maintopic">
                    <h2><u>Rajasthan Heritage Tour</u></h2>
                    <h4>A 10-day tour package in Rajasthan can offer a rich blend of history, culture, and natural beauty. Here's a sample itinerary:</h4>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 1</u> </h2>
                      <h4>Arrival in Jaipur</h4>
                      <div> <strong>Morning:</strong> Arrive at Jaipur Airport, transfer to hotel.</div>
                      <div> <strong>Afternoon:</strong> Visit City Palace and Jantar Mantar.</div>
                      <div> <strong>Evening:</strong> Stroll in the local bazaars or visit Hawa Mahal.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday1.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday2.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 2</u> </h2>
                      <h4>Jaipur</h4>
                      <div> <strong>Morning:</strong> Visit Amber Fort, enjoy an elephant ride.</div>
                      <div> <strong>Afternoon:</strong> Visit Nahargarh Fort.</div>
                      <div> <strong>Evening:</strong> Light and Sound Show at Amber Fort.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 3</u> </h2>
                      <h4>Jaipur to Jodhpur</h4>
                      <div> <strong>Morning:</strong> Drive to Jodhpur.</div>
                      <div> <strong>Afternoon:</strong> Check-in at the hotel.</div>
                      <div> <strong>Evening:</strong> Visit Mehrangarh Fort.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday3.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday4.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 4</u> </h2>
                      <h4>Jodhpur</h4>
                      <div> <strong>Morning:</strong> Visit Umaid Bhawan Palace.</div>
                      <div> <strong>Afternoon:</strong> Explore Jaswant Thada.</div>
                      <div> <strong>Evening:</strong> Walk around the Clock Tower and Sardar Market.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 5</u> </h2>
                      <h4>Jodhpur to Udaipur via Ranakpur</h4>
                      <div> <strong>Morning:</strong> Drive to Udaipur, visit Ranakpur Jain Temple en route.</div>
                      <div> <strong>Afternoon:</strong> Continue drive to Udaipur.</div>
                      <div> <strong>Evening:</strong> Boat ride on Lake Pichola.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday5.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday6.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 6</u> </h2>
                      <h4>Udaipur</h4>
                      <div> <strong>Morning:</strong> Visit City Palace.</div>
                      <div> <strong>Afternoon:</strong> Explore Saheliyon-ki-Bari and Jagdish Temple.</div>
                      <div> <strong>Evening:</strong> Cultural show at Bagore Ki Haveli.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 7</u> </h2>
                      <h4>Udaipur to Pushkar</h4>
                      <div> <strong>Morning:</strong> Drive to Pushkar.</div>
                      <div> <strong>Afternoon:</strong> Visit Pushkar Lake and Brahma Temple.</div>
                      <div> <strong>Evening:</strong> Leisure time.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday7.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday8.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 8</u> </h2>
                      <h4>Pushkar to Jaisalmer</h4>
                      <div> <strong>Morning:</strong> Drive to Jaisalmer.</div>
                      <div> <strong>Afternoon:</strong> Check-in at the hotel.</div>
                      <div> <strong>Evening:</strong> Visit Jaisalmer Fort.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 9</u> </h2>
                      <h4>Jaisalmer</h4>
                      <div> <strong>Morning:</strong> Visit Patwon Ki Haveli and Gadisar Lake.</div>
                      <div> <strong>Afternoon:</strong> Drive to Sam Sand Dunes.</div>
                      <div> <strong>Evening:</strong> Enjoy a camel ride and cultural performances.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday9.jpeg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Rday10.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 10</u> </h2>
                      <h4>Jaisalmer to Jaipur and Departure</h4>
                      <div> <strong>Morning:</strong> Drive back to Jaipur.</div>
                      <div> <strong>Afternoon:</strong> Last-minute shopping or sightseeing.</div>
                      <div> <strong>Evening:</strong> Transfer to Jaipur Airport for departure.</div>

                    </div>

                  </div>

                  <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Experience: </strong>
                    This itinerary offers a mix of historical, cultural, and natural experiences, making the most out of a 10-day trip to Rajasthan.
                    Activities can be adjusted based on preferences and interests. If you'd like further customization or details, please call or email us now! </div>

                </div>
              </div>

            </div>

            <div className="AndamanDetails" style={{ display: selectdetails === "Andaman" ? "block" : "none" }}>

              <div className="container my-4">

                <div className="row">

                  <div className="maintopic">
                    <h2><u>Andaman Beach Getaway</u></h2>
                    <h4>A 5-7 day tour package in the Andaman Islands can offer a mix of relaxation, water sports, and natural beauty. Here's a sample itinerary:</h4>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 1</u> </h2>
                      <h4>Arrival in Port Blair</h4>
                      <div> <strong>Morning:</strong> Arrive at Port Blair Airport, transfer to hotel.</div>
                      <div> <strong>Afternoon:</strong> Visit Cellular Jail.</div>
                      <div> <strong>Evening:</strong> Attend the Light and Sound Show at Cellular Jail.</div>
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday1.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday2.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 2</u> </h2>
                      <h4>Port Blair to Havelock Island</h4>
                      <div> <strong>Morning:</strong> Take a ferry to Havelock Island.</div>
                      <div> <strong>Afternoon:</strong> Check-in at the resort.</div>
                      <div> <strong>Evening:</strong> Relax at Radhanagar Beach.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 3</u> </h2>
                      <h4>Havelock Island</h4>
                      <div> <strong>Morning:</strong> Scuba diving or snorkeling at Elephant Beach.</div>
                      <div> <strong>Afternoon:</strong> Leisure time or optional water activities.</div>
                      <div> <strong>Evening:</strong> Enjoy a beachside dinner.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday3.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday4.jpg" alt="" />

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 4</u> </h2>
                      <h4>Havelock to Neil Island</h4>
                      <div> <strong>Morning:</strong> Take a ferry to Neil Island.</div>
                      <div> <strong>Afternoon:</strong> Visit Bharatpur Beach and Laxmanpur Beach.</div>
                      <div> <strong>Evening:</strong> Witness the sunset at Laxmanpur Beach.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">
                      <h2 > <u>Day 5</u> </h2>
                      <h4>Neil Island to Port Blair</h4>
                      <div> <strong>Morning:</strong> Visit Natural Bridge.</div>
                      <div> <strong>Afternoon:</strong> Take a ferry back to Port Blair.</div>
                      <div> <strong>Evening:</strong> Explore local markets for shopping.</div>

                    </div>


                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday5.jpg" alt="" />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday6.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 6</u> </h2>
                      <h4>Day Trip to Ross Island (Optional)</h4>
                      <div> <strong>Morning:</strong> Take a boat to Ross Island.</div>
                      <div> <strong>Afternoon:</strong> Explore the island and its historical ruins.</div>
                      <div> <strong>Evening:</strong> Return to Port Blair.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonTripDetails">

                      <h2 > <u>Day 7</u> </h2>
                      <h4>Departure</h4>
                      <div> <strong>Morning:</strong> Visit Chidiya Tapu if time allows.</div>
                      <div> <strong>Afternoon:</strong> Transfer to Port Blair Airport.</div>
                      <div> <strong>Evening:</strong> Catch flight back home.</div>

                    </div>

                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                    <div className="CommonImages">
                      <img className='img-fluid' src="./Images/India/Aday7.jpg" alt="" />

                    </div>

                  </div>

                  <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Experience: </strong>
                    This itinerary offers a mix of relaxation, water activities, and natural beauty, making the most out of a 5-7 day trip to the Andaman Islands.
                    Activities can be adjusted based on preferences and interests. If you'd like further customization or details, please call or email us now!
                  </div>

                </div>
              </div>

            </div>

          </div>

          <div><Footer /></div>

        </div>

      </div>


    </div>
  )
}

export default India


