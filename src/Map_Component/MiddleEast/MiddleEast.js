import { useState } from 'react';
import Footer from '../../Component/Footer';
import { Link } from 'react-router-dom';
import './MiddleEast.css';

const MiddleEast = () => {
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

            <div className="whatsapplogo">
                <a target='blank' href='https://wa.me/+917827236346'><img src="./Images/Icon/whatsapp.png" alt="" />
                </a><div className='whatapptext'>Contact Us</div>
            </div>

            <div className="TopMainImage">
                <div className="Image">
                    <img className='img-fluid' src="./Images/MiddleEast/middleEastMain.jpg" alt="" />
                </div>

                <div className='countryName'>
                    <div className='CountryBackground'><h1>MIDDLE-EAST</h1></div>
                </div>
            </div>

            <div className="CountryTour">

                <div className="CountryTourName">

                    <div class="accordion accordion-flush" id="accordionFlushExample" >

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Dubai
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Dubai")} >Dubai Tour</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Egypt
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Egypt")} >Egypt Discovery</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Jordan
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Jordan")} >Jordan Explorer</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Baku
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Baku")} >Baku Gateway</div>
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


                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="tourInnerDetails" onClick={() => setSelectDetails("Dubai")} onMouseEnter={showDescription} onMouseLeave={hideDescription}>

                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/MiddleEast/Dubai.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription' >
                                                <h5>Dubai Delights</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    6 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Stand atop the Burj Khalifa.
                                                    Shop at the Dubai Mall and Gold Souk.
                                                    Enjoy a desert safari with dune bashing.
                                                    Visit the Dubai Miracle Garden.
                                                    Example: A panoramic view from the Burj Khalifa's observation deck, followed by an evening of traditional Emirati entertainment in a desert camp.</div>
                                            </div>

                                            <div className='CountryPlaceName'>Dubai Delights</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="tourInnerDetails" onClick={() => setSelectDetails("Egypt")} onMouseEnter={showDescription2} onMouseLeave={hideDescription2}>
                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/MiddleEast/Egypt.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription2' >
                                                <h5>Historical Highlights of Egypt</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Wander around the Pyramids of Giza and the Sphinx.
                                                    Discover the Valley of the Kings in Luxor.
                                                    Sail the Nile River.
                                                    Dive in the Red Sea resorts of Hurghada.
                                                    Example: A sunrise visit to the iconic Giza pyramids, followed by a traditional felucca boat ride on the Nile in the evening.</div>
                                            </div>

                                            <div className='CountryPlaceName'>Historical Highlights of Egypt</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="tourInnerDetails" onClick={() => setSelectDetails("Jordan")} onMouseEnter={showDescription3} onMouseLeave={hideDescription3}>
                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/MiddleEast/Jordan.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription3'>
                                                <h5>Jordan Wonders</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    8 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Explore the rose-red city of Petra.
                                                    Float in the Dead Sea.
                                                    Experience the Martian landscapes of Wadi Rum.
                                                    Delve into the Roman ruins of Jerash.
                                                    Example: An early morning trek through Petra, discovering the Treasury and the Monastery, followed by a Bedouin dinner in Wadi Rum.</div>
                                            </div>



                                            <div className='CountryPlaceName'>Jordan Wonders</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="tourInnerDetails" onClick={() => setSelectDetails("Baku")} onMouseEnter={showDescription5} onMouseLeave={hideDescription5}>

                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/MiddleEast/Baku.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription5' >
                                                <h5>Baku City Highlights</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    7-10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Old City (Icherisheher) with the Maiden Tower and Shirvanshah's Palace.
                                                    Flame Towers and panoramic city views.
                                                    Nizami Street for shopping and dininga and Baku Boulevard along the Caspian Sea.
                                                    Ateshgah Fire Temple and Gobustan National Park to see ancient rock carvings.
                                                    Carpet Museum and Museum of Modern Art.
                                                    Day trip to the ancient city of Sheki.</div>
                                            </div>


                                            <div className='CountryPlaceName'>Baku City Highlights</div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>



                        <div className="DubaiDetails" style={{ display: selectdetails === "Dubai" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2>Dubai Discovery</h2>
                                        <h4>A 7-day tour package in Dubai can offer a blend of modern architecture, luxury shopping, desert adventures, and cultural experiences. Here's a sample itinerary for a 7-day tour package in Dubai:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 1 </h2>
                                            <h4>Arrival and Orientation</h4>
                                            <div> <strong>Morning:</strong> Arrive at Dubai International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Dhow Cruise Dinner along Dubai Creek.</div>
                                        </div>

                                    </div>


                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 2 </h2>
                                            <h4>City Highlights</h4>
                                            <div> <strong>Morning:</strong> Visit the Burj Khalifa and enjoy panoramic views from the observation deck.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Dubai Mall and watch the Dubai Fountain show.</div>
                                            <div> <strong>Evening:</strong> Visit the Dubai Opera or enjoy a fine dining experience.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 3 </h2>
                                            <h4>Cultural Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit the Al Fahidi Historic District and Dubai Museum.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Gold Souk and Spice Souk.</div>
                                            <div> <strong>Evening:</strong> Abra ride across Dubai Creek.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 4 </h2>
                                            <h4>Desert Safari</h4>
                                            <div> <strong>Morning:</strong>  Free time or optional beach visit.</div>
                                            <div> <strong>Afternoon:</strong> Desert Safari with dune bashing, camel riding, and sandboarding.</div>
                                            <div> <strong>Evening:</strong> BBQ dinner and cultural performances in a desert camp.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 5 </h2>
                                            <h4>Abu Dhabi Day Trip</h4>
                                            <div> <strong>Morning:</strong> Depart for Abu Dhabi.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Sheikh Zayed Grand Mosque and the Louvre Abu Dhabi.</div>
                                            <div> <strong>Evening:</strong> Return to Dubai.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 6 </h2>
                                            <h4>Luxury and Leisure</h4>
                                            <div> <strong>Morning:</strong> Visit Palm Jumeirah and take a monorail ride.</div>
                                            <div> <strong>Afternoon:</strong> Relax at Atlantis, The Palm's Aquaventure Waterpark or visit the Lost Chambers Aquarium.</div>
                                            <div> <strong>Evening:</strong> Evening: Dinner at a luxury restaurant.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 7 </h2>
                                            <h4>Last-Minute Shopping and Departure</h4>
                                            <div> <strong>Morning:</strong> Visit the Mall of the Emirates and try indoor skiing if interested.</div>
                                            <div> <strong>Afternoon:</strong> Last-minute shopping at local markets or souks.</div>
                                            <div> <strong>Evening:</strong> Transfer to Dubai International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Dday7.jpg" alt="" />

                                        </div>

                                    </div>


                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons:</strong>
                                        Hot Air Balloon Ride: Experience the desert from above.
                                        Skydiving: For adrenaline junkies, skydiving over Palm Jumeirah is a must.
                                        Yacht Cruise: Take a luxury yacht cruise along the Dubai Marina.


                                        This itinerary offers a mix of cultural, adventure, and luxury experiences, making the most out of a 7-day trip to Dubai.


                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="EgyptDetails" style={{ display: selectdetails === "Egypt" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2>Egypt Explorer</h2>
                                        <h4>A 10-day tour of Egypt can offer a rich blend of historical, cultural, and natural experiences. Here's a sample itinerary for a 10-day tour package in Egypt:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 1 </h2>
                                            <h4>Arrival in Cairo</h4>
                                            <div> <strong>Morning:</strong> Arrive at Cairo International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner and orientation.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 2 </h2>
                                            <h4>Cairo City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit the Egyptian Museum.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Citadel of Saladin and the Mosque of Muhammad Ali.</div>
                                            <div> <strong>Evening:</strong> Free time or optional Nile dinner cruise.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 3 </h2>
                                            <h4>Giza Pyramids and Sphinx</h4>
                                            <div> <strong>Morning:</strong> Visit the Giza Plateau to see the Pyramids and the Sphinx.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Solar Boat Museum.</div>
                                            <div> <strong>Evening:</strong> Sound and Light Show at the Pyramids.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 4 </h2>
                                            <h4>Fly to Aswan</h4>
                                            <div> <strong>Morning:</strong> Flight to Aswan.</div>
                                            <div> <strong>Afternoon:</strong> Visit the High Dam and Philae Temple.</div>
                                            <div> <strong>Evening:</strong> Free time to explore Aswan or optional Nubian Village visit.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 5 </h2>
                                            <h4>Abu Simbel and Nile Cruise</h4>
                                            <div> <strong>Morning:</strong> Optional trip to Abu Simbel.</div>
                                            <div> <strong>Afternoon:</strong> Board a Nile cruise and set sail.</div>
                                            <div> <strong>Evening:</strong> Dinner and entertainment on board.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 6 </h2>
                                            <h4>Kom Ombo and Edfu</h4>
                                            <div> <strong>Morning:</strong> Visit Kom Ombo Temple.</div>
                                            <div> <strong>Afternoon:</strong> Sail to Edfu and visit Edfu Temple.</div>
                                            <div> <strong>Evening:</strong> Continue sailing to Luxor.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 7 </h2>
                                            <h4>Luxor's East Bank</h4>
                                            <div> <strong>Morning:</strong> Visit Karnak Temple.</div>
                                            <div> <strong>Afternoon:</strong> Explore Luxor Temple.</div>
                                            <div> <strong>Evening:</strong> Free time or optional Luxor market visit.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday7.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday8.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 8 </h2>
                                            <h4>Luxor's West Bank</h4>
                                            <div> <strong>Morning:</strong> Visit the Valley of the Kings and the Temple of Hatshepsut.</div>
                                            <div> <strong>Afternoon:</strong> See the Colossi of Memnon.</div>
                                            <div> <strong>Evening:</strong> Flight back to Cairo.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 9 </h2>
                                            <h4>Old Cairo and Shopping</h4>
                                            <div> <strong>Morning:</strong> Visit Old Cairo, including the Hanging Church and Ben Ezra Synagogue.</div>
                                            <div> <strong>Afternoon:</strong> Shopping at Khan El Khalili Bazaar.</div>
                                            <div> <strong>Evening:</strong> Farewell dinner.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday9.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Eday10.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 10 </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping or optional activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Cairo International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Red Sea Extension: Consider adding a few days in Sharm El Sheikh or Hurghada for beach and snorkeling activities.
                                        Alexandria Day Trip: Explore the catacombs, the Citadel, and the modern Alexandria Library.
                                        This itinerary offers a mix of historical, cultural, and natural experiences, making the most out of a 10-day trip to Egypt.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="JordanDetails" style={{ display: selectdetails === "Jordan" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2>Jordan Getaway</h2>
                                        <h4>An 8-day tour package in Jordan can offer a rich blend of historical, cultural, and natural experiences. Here's a sample itinerary for an 8-day tour package in Jordan:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 1 </h2>
                                            <h4>Arrival in Amman</h4>
                                            <div> <strong>Morning:</strong> Arrive at Queen Alia International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner and orientation.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 2 </h2>
                                            <h4>Amman City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit the Amman Citadel and the Roman Theater.</div>
                                            <div> <strong>Afternoon:</strong> Explore the King Abdullah Mosque and the Jordan Museum.</div>
                                            <div> <strong>Evening:</strong> Free time or optional visit to Rainbow Street for dining and shopping.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 3 </h2>
                                            <h4>Jerash and Ajloun</h4>
                                            <div> <strong>Morning:</strong> Drive to Jerash to explore the ancient Roman ruins.</div>
                                            <div> <strong>Afternoon:</strong> Visit Ajloun Castle.</div>
                                            <div> <strong>Evening:</strong> Return to Amman.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 4 </h2>
                                            <h4>Madaba, Mount Nebo, and Dead Sea</h4>
                                            <div> <strong>Morning:</strong> Visit Madaba and see the famous mosaic map.</div>
                                            <div> <strong>Afternoon:</strong> Head to Mount Nebo, then proceed to the Dead Sea.</div>
                                            <div> <strong>Evening:</strong> Relax and float in the Dead Sea.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 5 </h2>
                                            <h4>Petra</h4>
                                            <div> <strong>Morning:</strong> Drive to Petra.</div>
                                            <div> <strong>Afternoon:</strong> Explore Petra, including the Treasury and the Monastery.</div>
                                            <div> <strong>Evening:</strong> Optional Petra by Night experience.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 6 </h2>
                                            <h4>Wadi Rum</h4>
                                            <div> <strong>Morning:</strong> Drive to Wadi Rum.</div>
                                            <div> <strong>Afternoon:</strong> Jeep tour in the desert.</div>
                                            <div> <strong>Evening:</strong> Camp under the stars in a Bedouin-style camp.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 7 </h2>
                                            <h4>Aqaba and Red Sea</h4>
                                            <div> <strong>Morning:</strong> Drive to Aqaba.</div>
                                            <div> <strong>Afternoon:</strong> Snorkeling or diving in the Red Sea.</div>
                                            <div> <strong>Evening:</strong> Return to Amman.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday7.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Jday8.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 8 </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping or optional activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Queen Alia International Airport for departure.</div>

                                        </div>

                                    </div>


                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Hot Air Balloon Ride: Experience Wadi Rum from above.
                                        Cooking Class: Learn to cook traditional Jordanian dishes.
                                        Hiking: Consider a hike in the Dana Biosphere Reserve if you extend your trip.
                                        This itinerary offers a mix of historical, cultural, and natural experiences, making the most out of an 8-day trip to Jordan.</div>

                                </div>
                            </div>

                        </div>

                        <div className="BakuDetails" style={{ display: selectdetails === "Baku" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2>Baku & Azerbaijan</h2>
                                        <h4>A 7-day tour package in Baku, Azerbaijan, can offer a mix of historical sites, modern architecture, and natural wonders. Here's a sample itinerary for a 7-day tour package in Baku:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 1 </h2>
                                            <h4>Arrival in Baku</h4>
                                            <div> <strong>Morning:</strong> Arrive at Heydar Aliyev International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at a local Azerbaijani restaurant.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 2 </h2>
                                            <h4>Baku City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit the Old City (Icherisheher), including the Maiden Tower and Shirvanshah's Palace.</div>
                                            <div> <strong>Afternoon:</strong> Explore modern Baku, including the Flame Towers and Heydar Aliyev Center.</div>
                                            <div> <strong>Evening:</strong> Walk along Baku Boulevard and visit the Mini-Venice waterways.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 3 </h2>
                                            <h4>Gobustan and Mud Volcanoes</h4>
                                            <div> <strong>Morning:</strong> Drive to Gobustan National Park to see ancient rock carvings.</div>
                                            <div> <strong>Afternoon:</strong> Visit the mud volcanoes.</div>
                                            <div> <strong>Evening:</strong> Return to Baku.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 4 </h2>
                                            <h4>Absheron Peninsula</h4>
                                            <div> <strong>Morning:</strong> Visit Ateshgah Fire Temple.</div>
                                            <div> <strong>Afternoon:</strong> Explore Yanar Dag, the natural "fire mountain.</div>
                                            <div> <strong>Evening:</strong> Return to Baku.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > Day 5 </h2>
                                            <h4>Day Trip to Gabala</h4>
                                            <div> <strong>Morning:</strong> Drive to Gabala.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Gabala amusement park or take a cable car ride for panoramic views.</div>
                                            <div> <strong>Evening:</strong> Return to Baku.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday7.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 6 </h2>
                                            <h4>Shopping and Leisure</h4>
                                            <div> <strong>Morning:</strong> Visit Nizami Street for shopping.</div>
                                            <div> <strong>Afternoon:</strong> Optional visit to Taza Bazaar, the largest food market in Baku.</div>
                                            <div> <strong>Evening:</strong> Free time or optional cultural performance.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > Day 7 </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping or optional activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Heydar Aliyev International Airport for departure.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/MiddleEast/Bday6.jpg" alt="" />

                                        </div>

                                    </div>


                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Caspian Sea Cruise: Take a boat ride on the Caspian Sea.
                                        Cooking Class: Learn to cook traditional Azerbaijani dishes.
                                        Carpet Museum: Visit the Carpet Museum to learn about Azerbaijani textile arts.
                                        This itinerary offers a mix of cultural, historical, and natural experiences, making the most out of a 7-day trip to Baku.
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

export default MiddleEast


