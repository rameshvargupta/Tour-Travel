import { useState } from 'react';
import Footer from '../../Component/Footer';
import { Link } from 'react-router-dom';

const Europe = () => {
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
                    <img className='img-fluid' src="./Images/Europe/SAday1.jpg" alt="" />
                </div>

                <h1>EUROPE</h1>
            </div>

            <div className="CountryTour">

                <div className="CountryTourName">

                    <div class="accordion accordion-flush" id="accordionFlushExample" >

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Classic Europe
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Classic Europe")} >Classic Europe</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Western European Trio
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Western European Trio")} >Western European Trio</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Switzerland and Austria
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Switzerland and Austria")} >Switzerland and Austria</div>
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
                                                <img className='img-fluid' src="./Images/Europe/london.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription' >
                                                <h5>Classic Europe (London, Paris, Rome)</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    7 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Overwater bungalow stay and Private beach dinner
                                                    Couples spa treatments and Sunset cruise
                                                    Private yacht or seaplane transfers
                                                    Scuba diving or snorkeling excursions
                                                    Water sports like jet skiing, windsurfing, and parasailing
                                                </div>
                                            </div>

                                            <div className='CountryPlaceName'>Classic Europe (London, Paris, Rome)</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription2} onMouseLeave={hideDescription2}>
                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/Europe/paris.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription2' >
                                                <h5>Paris</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    7-10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Panfilov Park and Zenkov Cathedral
                                                    Kok-Tobe Hill via cable car
                                                    Day trip to Big Almaty Lake
                                                    Medeu Ice Skating Rink and Shymbulak Ski Resort
                                                    Almaty Central State Museum and Kasteyev Museum of Arts
                                                    Kazakh Folk Musical Instruments Museum
                                                    Visit to the Falcon Farm "Sunkar" to see birds of prey
                                                    .</div>
                                            </div>

                                            <div className='CountryPlaceName'>Paris Delights</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription3} onMouseLeave={hideDescription3}>
                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/Europe/switzerland.webp" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription3'>
                                                <h5>Nature and Culture (Switzerland and Austria)</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    5-7 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Amir Timur Square and Museum
                                                    Khast Imam Complex, Tashkent Metro tour and Chorsu Bazaar
                                                    Day trip to Charvak Lake and Chimgan Mountains
                                                    Visit to the ancient city of Samarkand
                                                    Independence Square and Tashkent Tower
                                                    Shopping at Samarkand Darvoza Mall
                                                    Traditional Uzbek dinner with folk music</div>
                                            </div>



                                            <div className='CountryPlaceName'>Nature and Culture (Switzerland and Austria)</div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                        <div className="ClassicEuropeDetails" style={{ display: selectdetails === "Classic Europe" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Classic Europe (London, Paris, Rome)</u></h2>
                                        <h4>A 7-day tour package in the Classic Europe can offer a perfect blend of relaxation, adventure, and luxury. Here's a sample itinerary for a 7-day tour package in the Classic Europe:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in London</h4>
                                            <div> <strong>Morning:</strong> Arrive at Heathrow Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Arrive at Heathrow Airport, transfer to hotel.</div>
                                            <div> <strong>Evening:</strong> Thames River Cruise.</div>

                                        </div>

                                    </div>


                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>London</h4>
                                            <div> <strong>Morning:</strong> Breakfast at the resort.</div>
                                            <div> <strong>Afternoon:</strong> Explore Westminster Abbey and Big Ben.</div>
                                            <div> <strong>Evening:</strong> London Eye experience.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>London to Paris</h4>
                                            <div> <strong>Morning:</strong> Take the Eurostar to Paris.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Louvre Museum.</div>
                                            <div> <strong>Evening:</strong> Seine River Cruise.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/paris.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Paris</h4>
                                            <div> <strong>Morning:</strong> Eiffel Tower visit.</div>
                                            <div> <strong>Afternoon:</strong> Eiffel Tower visit.</div>
                                            <div> <strong>Evening:</strong> Optional cabaret show at Moulin Rouge.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Paris to Rome</h4>
                                            <div> <strong>Morning:</strong> Flight to Rome.</div>
                                            <div> <strong>Afternoon:</strong> Flight to Rome.</div>
                                            <div> <strong>Evening:</strong> Explore Trastevere.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Rome</h4>
                                            <div> <strong>Morning:</strong> Vatican City and St. Peter's Basilica.</div>
                                            <div> <strong>Afternoon:</strong> Sistine Chapel and Vatican Museums.</div>
                                            <div> <strong>Evening:</strong> Spanish Steps and Trevi Fountain.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Departure from Rome</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping.</div>
                                            <div> <strong>Afternoon:</strong> Last-minute shopping.</div>
                                            <div> <strong>Evening:</strong> Flight back home.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday7.jpg" alt="" />

                                        </div>

                                    </div>



                                </div>
                            </div>

                        </div>

                        <div className="WesternEuropeanTrioDetails" style={{ display: selectdetails === "Western European Trio" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Western European Trio Exploration</u></h2>
                                        <h4>A 7-day tour package covering Paris, Amsterdam, and Brussels can offer a rich blend of history, culture, and modernity. Here's a sample itinerary broken down into morning, afternoon, and evening activities:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Paris</h4>
                                            <div> <strong>Morning:</strong> Arrive at Charles de Gaulle Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Louvre Museum.</div>
                                            <div> <strong>Evening:</strong> Seine River Cruise.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/CEday4.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/paris.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Paris Sightseeing</h4>
                                            <div> <strong>Morning:</strong> Visit the Eiffel Tower.</div>
                                            <div> <strong>Afternoon:</strong> Explore Montmartre and Sacré-Cœur Basilica.</div>
                                            <div> <strong>Evening:</strong> Optional cabaret show at Moulin Rouge.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Paris to Amsterdam</h4>
                                            <div> <strong>Morning:</strong> Take a Thalys train to Amsterdam.</div>
                                            <div> <strong>Afternoon:</strong> Check-in at the hotel, then visit Anne Frank House.</div>
                                            <div> <strong>Evening:</strong> Canal cruise or explore De Wallen (Red Light District).</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/WEday3.webp" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/WEday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Amsterdam Sightseeing</h4>
                                            <div> <strong>Morning:</strong> Visit Rijksmuseum.</div>
                                            <div> <strong>Afternoon:</strong> Explore Vondelpark or take a bike tour.</div>
                                            <div> <strong>Evening:</strong> Visit Leidseplein for dining and entertainment.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Amsterdam to Brussels</h4>
                                            <div> <strong>Morning:</strong> Take a train to Brussels.</div>
                                            <div> <strong>Afternoon:</strong> Visit Atomium and Mini-Europe.</div>
                                            <div> <strong>Evening:</strong> Visit Atomium and Mini-Europe.</div>
                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/WEday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/WEday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Brussels Sightseeing</h4>
                                            <div> <strong>Morning:</strong> Visit the Royal Palace.</div>
                                            <div> <strong>Afternoon:</strong> Explore Magritte Museum or Comic Strip Center.</div>
                                            <div> <strong>Evening:</strong> Sample Belgian beers at Delirium Café.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Brussels to Paris and Departure</h4>
                                            <div> <strong>Morning:</strong> Take a train back to Paris.</div>
                                            <div> <strong>Afternoon:</strong> Last-minute shopping or visit Champs-Élysées.</div>
                                            <div> <strong>Evening:</strong> Transfer to Charles de Gaulle Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/WEday7.jpeg" alt="" />

                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>

                        <div className="AustriaDetails" style={{ display: selectdetails === "Switzerland and Austria" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Switzerland and Austria</u></h2>
                                        <h4>A 7-day tour package in Switzerland and Austria can offer a well-rounded experience of the city's historical sites, natural, cultural attractions, and modern amenities. Here's a sample itinerary for a 7-day tour package in Switzerland and Austria:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Zurich</h4>
                                            <div> <strong>Morning:</strong> Arrive at Zurich Airport, transfer to Lucerne.</div>
                                            <div> <strong>Afternoon:</strong> Visit Chapel Bridge and Water Tower.</div>
                                            <div> <strong>Evening:</strong> Lake Lucerne Cruise.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Lucerne</h4>
                                            <div> <strong>Morning:</strong> Mount Pilatus day trip.</div>
                                            <div> <strong>Afternoon:</strong> Explore the mountain.</div>
                                            <div> <strong>Evening:</strong> Return to Lucerne.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Lucerne to Interlaken</h4>
                                            <div> <strong>Morning:</strong> Train to Interlaken.</div>
                                            <div> <strong>Afternoon:</strong> Visit Harder Kulm.</div>
                                            <div> <strong>Evening:</strong> Explore Interlaken.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Interlaken</h4>
                                            <div> <strong>Morning:</strong> Jungfraujoch day trip.</div>
                                            <div> <strong>Afternoon:</strong> Explore the "Top of Europe.</div>
                                            <div> <strong>Evening:</strong> Return to Interlaken.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Interlaken to Salzburg</h4>
                                            <div> <strong>Morning:</strong> Train to Salzburg.</div>
                                            <div> <strong>Afternoon:</strong> Visit Hohensalzburg Fortress.</div>
                                            <div> <strong>Evening:</strong> Explore Old Town.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Salzburg</h4>
                                            <div> <strong>Morning:</strong> Sound of Music Tour.</div>
                                            <div> <strong>Afternoon:</strong> Visit Mirabell Palace.</div>
                                            <div> <strong>Evening:</strong> Mozart Dinner Concert.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4> Departure from Salzburg</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Salzburg Airport.</div>
                                            <div> <strong>Evening:</strong> Flight back home.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Europe/SAday7.webp" alt="" />

                                        </div>
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

export default Europe




