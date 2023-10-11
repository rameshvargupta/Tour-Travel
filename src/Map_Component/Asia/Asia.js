import { useState } from 'react';
import Footer from '../../Component/Footer';
import '../SouthEastAsia/SouthEastAsia.css';
import { Link } from 'react-router-dom';

const Asia = () => {
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

            <div className="southEastAsia">
                <div className="SthImage">
                    <img className='img-fluid' src="./Images/Asia/Asia Mainpage.jpg" alt="" />
                </div>

                <h1>ASIA</h1>
            </div>

            <div className="SeaTour">

                <div className="SeaTourName">

                    <div class="accordion accordion-flush" id="accordionFlushExample" >

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Maldives
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Maldives")} >Maldives Romatic Getaway</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Almaty
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Almaty")} >Almaty Exploration</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed SeaPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Tashkent
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Tashkent")} >Tashkent Highlights</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <span />

                    </div>

                </div>

                <div className="SeaTourDetails">


                    <div className="container">

                        <div className="defaulttourdetails">

                            <div style={{ display: selectdetails === "defaultshowdetails" ? "block" : "none" }}>

                                <div className="row">

                                    <h1 className='my-4 text-center'>Our Tours And Packages</h1>


                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription} onMouseLeave={hideDescription}>

                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./Images/Asia/Maldives.jpeg" alt="" />
                                            </div>

                                            <div className="SeaImageDiscription" id='SeaDecription' >
                                                <h5>Maldives Romatic Getaway</h5>
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

                                            <div className='SeaPlaceName'>Maldives Romatic Getaway</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription2} onMouseLeave={hideDescription2}>
                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./Images/Asia/almaty.jpg" alt="" />
                                            </div>

                                            <div className="SeaImageDiscription" id='SeaDecription2' >
                                                <h5>Almaty Exploration</h5>
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

                                            <div className='SeaPlaceName'>Almaty Exploration</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription3} onMouseLeave={hideDescription3}>
                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./Images/Asia/tashkent.jpg" alt="" />
                                            </div>

                                            <div className="SeaImageDiscription" id='SeaDecription3'>
                                                <h5>Tashkent Highlights</h5>
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



                                            <div className='SeaPlaceName'>Tashkent Highlights</div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                        <div className="MaldivesDetails" style={{ display: selectdetails === "Maldives" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Maldives Romatic Getaway</u></h2>
                                        <h4>A 7-day tour package in the Maldives can offer a perfect blend of relaxation, adventure, and luxury. Here's a sample itinerary for a 7-day tour package in the Maldives:</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Malé</h4>
                                            <div> <strong>Morning:</strong> Arrive at Malé International Airport, transfer to your resort via speedboat or seaplane.</div>
                                            <div> <strong>Afternoon:</strong> Check-in and settle into your overwater bungalow or beach villa.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at the resort's main restaurant.</div>

                                        </div>

                                    </div>


                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala2.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala1.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Relax and Unwind</h4>
                                            <div> <strong>Morning:</strong> Breakfast at the resort.</div>
                                            <div> <strong>Afternoon:</strong> Relax on the beach or take a dip in the lagoon.</div>
                                            <div> <strong>Evening:</strong> Sunset cruise to spot dolphins or simply enjoy the view.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Snorkeling and Water Sports</h4>
                                            <div> <strong>Morning:</strong> Guided snorkeling tour to explore the coral reefs.</div>
                                            <div> <strong>Afternoon:</strong> Choose from water sports like jet skiing, windsurfing, or kayaking.</div>
                                            <div> <strong>Evening:</strong> Free time or optional spa treatment.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala5.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Island Hopping</h4>
                                            <div> <strong>Morning:</strong> Visit a local island to experience Maldivian culture.</div>
                                            <div> <strong>Afternoon:</strong> Picnic lunch on a deserted island.</div>
                                            <div> <strong>Evening:</strong> Return to the resort.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Underwater Exploration</h4>
                                            <div> <strong>Morning:</strong> Optional scuba diving excursion or visit to an underwater restaurant.</div>
                                            <div> <strong>Afternoon:</strong> Relax at the resort or engage in more water sports.</div>
                                            <div> <strong>Evening:</strong> Themed dinner at the resort or private beach dinner (additional cost).</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Leisure and Optional Activities</h4>
                                            <div> <strong>Morning:</strong> Free time for leisure or optional activities like fishing.</div>
                                            <div> <strong>Afternoon:</strong> Optional spa treatments or cooking classes to learn Maldivian cuisine.</div>
                                            <div> <strong>Evening:</strong> Farewell cocktail party hosted by the resort.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Breakfast at the resort.</div>
                                            <div> <strong>Afternoon:</strong> Check-out and transfer to Malé International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons:</strong> Seaplane Photo Flight: Aerial views of the atolls.
                                        Night Fishing: An evening fishing trip, often followed by a barbecue where you can eat your catch.
                                        This itinerary offers a mix of relaxation, water activities, and cultural experiences, making the most out of a 7-day trip to the Maldives.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="AlmatyDetails" style={{ display: selectdetails === "Almaty" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Almaty Exploration</u></h2>
                                        <h4>A 7-day tour package in Almaty, Kazakhstan, can offer a balanced mix of city exploration, cultural experiences, and natural beauty. Here's a sample itinerary for a 7-day tour package in Almaty:</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Almaty</h4>
                                            <div> <strong>Morning:</strong> Arrive at Almaty International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at a local Kazakh restaurant.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala2.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala1.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Almaty City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit Panfilov Park and Zenkov Cathedral.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Central State Museum.</div>
                                            <div> <strong>Evening:</strong> Walk along Arbat Street for shopping and local art.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Day Trip to Big Almaty Lake</h4>
                                            <div> <strong>Morning:</strong> Drive to Big Almaty Lake.</div>
                                            <div> <strong>Afternoon:</strong> Enjoy hiking and photography around the lake.</div>
                                            <div> <strong>Evening:</strong> Return to Almaty.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala5.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Medeu and Shymbulak</h4>
                                            <div> <strong>Morning:</strong> Visit the Medeu Ice Skating Rink.</div>
                                            <div> <strong>Afternoon:</strong> Take a cable car to Shymbulak Ski Resort for mountain views.</div>
                                            <div> <strong>Evening:</strong> Return to Almaty.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Kok-Tobe Hill and Shopping</h4>
                                            <div> <strong>Morning:</strong> Take a cable car to Kok-Tobe Hill for panoramic city views.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Green Bazaar and Mega Almaty Mall for shopping.</div>
                                            <div> <strong>Evening:</strong> Free time or optional cultural performance.</div>
                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Day Trip to Charyn Canyon</h4>
                                            <div> <strong>Morning:</strong> Drive to Charyn Canyon.</div>
                                            <div> <strong>Afternoon:</strong> Explore the canyon and enjoy a picnic lunch.</div>
                                            <div> <strong>Evening:</strong> Return to Almaty.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Free time for last-minute shopping or optional activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Almaty International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>


                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Tamgaly Petroglyphs: A day trip to see ancient rock carvings.
                                        Kolsai Lakes: Extend your trip by a day or two to visit these stunning mountain lakes.
                                        This itinerary offers a mix of cultural, historical, and natural experiences, making the most out of a 7-day trip to Almaty.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="TashkentDetails" style={{ display: selectdetails === "Tashkent" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Tashkent Highlights</u></h2>
                                        <h4>A 7-day tour package in Tashkent, Uzbekistan, can offer a well-rounded experience of the city's historical sites, cultural attractions, and modern amenities. Here's a sample itinerary for a 7-day tour package in Tashkent:</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Tashkent</h4>
                                            <div> <strong>Morning:</strong> Arrive at Tashkent International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at a local Uzbek restaurant.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala2.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala1.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Tashkent City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit Amir Timur Square and Museum.</div>
                                            <div> <strong>Afternoon:</strong> Explore Khast Imam Complex and Chorsu Bazaar.</div>
                                            <div> <strong>Evening:</strong> Optional visit to Navoi Opera Theater.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Day Trip to Samarkand</h4>
                                            <div> <strong>Morning:</strong> Take a train to Samarkand.</div>
                                            <div> <strong>Afternoon:</strong> Visit Registan Square and Gur-e-Amir Mausoleum.</div>
                                            <div> <strong>Evening:</strong> Return to Tashkent by train.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala5.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Modern Tashkent</h4>
                                            <div> <strong>Morning:</strong> Visit Independence Square.</div>
                                            <div> <strong>Afternoon:</strong> Explore Tashkent Tower and take a ride on the Tashkent Metro.</div>
                                            <div> <strong>Evening:</strong> Free time for shopping at Samarkand Darvoza Mall.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Day Trip to Charvak Lake</h4>
                                            <div> <strong>Morning:</strong> Drive to Charvak Lake.</div>
                                            <div> <strong>Afternoon:</strong> Enjoy water activities or hiking around the lake.</div>
                                            <div> <strong>Evening:</strong> Return to Tashkent.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Cultural Experiences</h4>
                                            <div> <strong>Morning:</strong> Visit the Museum of Applied Arts.</div>
                                            <div> <strong>Afternoon:</strong> Explore local madrasahs and mosques.</div>
                                            <div> <strong>Evening:</strong> Enjoy a traditional Uzbek dinner with folk music.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4> Departure</h4>
                                            <div> <strong>Morning:</strong> Free time for last-minute shopping or optional activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Tashkent International Airport for departure.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>
                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Bukhara Day Trip: Extend your trip by a day to visit the historical city of Bukhara.
                                        Cooking Class: Learn how to make traditional Uzbek dishes like plov and shashlik.
                                        This itinerary offers a mix of historical, cultural, and modern experiences, making the most out of a 7-day trip to Tashkent.</div>

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

export default Asia




