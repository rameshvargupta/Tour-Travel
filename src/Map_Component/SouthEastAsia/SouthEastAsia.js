import { useState } from 'react';
import Footer from '../../Component/Footer';
import './SouthEastAsia.css';
import { Link } from 'react-router-dom';

const SouthEastAsia = () => {
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
                    <img className='img-fluid' src="./SouthEastAsia/SeAsiaTop.jpg" alt="" />
                </div>

                <h1>SOUTH EAST ASIA</h1>
            </div>

            <div className="SeaTour">

                <div className="SeaTourName">

                    <div class="accordion accordion-flush" id="accordionFlushExample" >

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Thailand
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("5-day whirlwind adventure")} >5-day whirlwind adventure</div>
                                        <div className='selectDate' onClick={() => setSelectDetails("7-day cultural blend")} >7-day cultural blend</div>
                                        <div className='selectDate' onClick={() => setSelectDetails("Island hopping")} >Island hopping</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Vietnam
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Vietnam")} >Vietnam Discovery</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed SeaPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Indonesia
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Indonesia")} >Indonesia Explorer</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed SeaPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Malaysia
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Malaysia")} >Malaysia Gateway</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed SeaPlaceName" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    Singapore
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Singapore")} >Singapore & Beyond</div>
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
                                                <img className='img-fluid' src="./SouthEastAsia/Thailand.jpg" alt="" />
                                            </div>

                                            <div className="SeaImageDiscription" id='SeaDecription' >
                                                <h5>Thailand Island Hopping</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Explore the bustling streets of Bangkok.
                                                    Visit ancient temples in Chiang Mai.
                                                    Relax on the beaches of Koh Samui and Phi Phi Islands.
                                                    Dive in the crystal-clear waters of Koh Tao.
                                                    Example: A visit to the Grand Palace in Bangkok, followed by a traditional Thai cooking class in the evening.</div>
                                            </div>

                                            <div className='SeaPlaceName'>Thailand Island Hopping</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription2} onMouseLeave={hideDescription2}>
                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./SouthEastAsia/Vietnam.jpg" alt="" />
                                            </div>

                                            <div className="SeaImageDiscription" id='SeaDecription2' >
                                                <h5>Vietnam Discovery</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Cruise the UNESCO-listed Halong Bay.
                                                    Wander through the lantern-lit streets of Hoi An.
                                                    Explore the Mekong Delta's floating markets.
                                                    Delve into history in the Cu Chi Tunnels.
                                                    Example: A bicycle tour through the rice paddies of Hoi An's countryside, followed by a boat ride on the Thu Bon River at sunset.</div>
                                            </div>

                                            <div className='SeaPlaceName'>Vietnam Discovery</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription3} onMouseLeave={hideDescription3}>
                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./SouthEastAsia/indonesia.jpg" alt="" />
                                            </div>

                                            <div className="SeaImageDiscription" id='SeaDecription3'>
                                                <h5>Indonesia Explorer</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Jakarta's National Monument and old town.
                                                    Yogyakarta's Borobudur and Prambanan Temples.
                                                    Bali's Seminyak and Kuta beaches.
                                                    Ubud's cultural landmarks and rice terraces.
                                                    Day trip to Nusa Penida for snorkeling.
                                                    Mount Batur sunrise trek</div>
                                            </div>



                                            <div className='SeaPlaceName'>Indonesia Explorer</div>
                                        </div>

                                    </div>



                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription5} onMouseLeave={hideDescription5}>
                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./SouthEastAsia/Malaysia.jpeg" alt="" />
                                            </div>


                                            <div className="SeaImageDiscription" id='SeaDecription5' >
                                                <h5>Malaysia Getaway</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Kuala Lumpur's Petronas Towers and Batu Caves.
                                                    Historical sites in Malacca.
                                                    Penang's George Town and street food.
                                                    Langkawi's beaches and cable car ride.
                                                    Malacca's Dutch Square and A Famosa fortress.
                                                    Penang's Kek Lok Si Temple and Pinang Peranakan Mansion.</div>
                                            </div>


                                            <div className='SeaPlaceName'>Malaysia Getaway</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription6} onMouseLeave={hideDescription6}>
                                            <div className="SeaTourImage">
                                                <img className='img-fluid' src="./SouthEastAsia/Singapore.jpg" alt="" />
                                            </div>


                                            <div className="SeaImageDiscription" id='SeaDecription6'>
                                                <h5>Singapore and Beyond</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Singapore's Gardens by the Bay, Marina Bay Sands, and Sentosa Island.
                                                    Extension to nearby Batam or Bintan Islands in Indonesia for beach activities.
                                                    Day trip to Johor Bahru, Malaysia for shopping and Legoland.
                                                    Singapore's iconic landmarks like Merlion Park and Orchard Road.
                                                    Wildlife experiences at Singapore Zoo, Night Safari, and River Safari.</div>
                                            </div>



                                            <div className='SeaPlaceName'>Singapore Adventure</div>
                                        </div>

                                    </div>




                                </div>

                            </div>

                        </div>

                        <div className="ThailanDetails">

                            <div className="5daysTours" style={{ display: selectdetails === "5-day whirlwind adventure" ? "block" : "none" }}>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="maintopic">
                                            <h2>Thailand - 5 day tour</h2>
                                            <h4>A 5-day tour in Thailand is a whirlwind adventure, but it's definitely possible to get a taste of the country's highlights in that time.</h4>
                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 1</u> </h2>
                                                <h4>Bangkok Arrival and City Exploration</h4>
                                                <div> <strong>Morning:</strong> Arrive in Bangkok. Check into your hotel and freshen up</div>
                                                <div> <strong>Afternoon:</strong> Visit the Grand Palace and the Temple of the Emerald Buddha (Wat Phra Kaew).</div>
                                                <div> <strong>Evening:</strong> Explore the bustling Khao San Road, famous for its street food, shops, and vibrant nightlife.</div>
                                                <div> <strong>Example:</strong>  Dinner at a local eatery, tasting iconic dishes like Pad Thai and Mango Sticky Rice.</div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala2.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala1.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 2</u> </h2>
                                                <h4>Bangkok to Ayutthaya Day Trip</h4>
                                                <div> <strong>Morning:</strong> Head to Ayutthaya, the ancient capital of Thailand. Explore Wat Phra Si Sanphet and Wat Mahathat.</div>
                                                <div> <strong>Afternoon:</strong> Visit Bang Pa-In Summer Palace and enjoy a riverside lunch.</div>
                                                <div> <strong>Evening:</strong> Return to Bangkok.</div>
                                                <div> <strong>Example:</strong>  Evening boat ride in the Chao Phraya River with a view of the illuminated Wat Arun (Temple of Dawn).</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 3</u> </h2>
                                                <h4>Bangkok to Chiang Mai</h4>
                                                <div> <strong>Morning:</strong> Fly to Chiang Mai. Upon arrival, visit the Doi Suthep Temple with panoramic views of the city.</div>
                                                <div> <strong>Afternoon:</strong>  Wander around the Old City, exploring temples like Wat Chedi Luang</div>
                                                <div> <strong>Evening:</strong> Visit the Chiang Mai Night Bazaar for shopping and local delicacies.</div>
                                                <div> <strong>Example:</strong>  Try Northern Thai dishes like Khao Soi at a local night market stall.</div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala3.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala5.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 4</u> </h2>
                                                <h4>Chiang Mai Adventures</h4>

                                                <div> <strong>Morning:</strong> Participate in a traditional Thai cooking class, visiting a local market and preparing classic dishes.</div>
                                                <div> <strong>Afternoon:</strong> Visit the Elephant Nature Park or a similar ethical elephant sanctuary.</div>
                                                <div> <strong>Evening:</strong> Explore the lively Nimmanhaemin Road, known for its trendy cafes and boutiques.</div>
                                                <div> <strong>Example:</strong>  Attend a traditional Lanna dance and dinner show, immersing in the local culture.</div>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 5</u> </h2>
                                                <h4>Chiang Mai to Bangkok and Departure</h4>
                                                <div> <strong>Morning:</strong> Leisure time for last-minute shopping or relaxation.</div>
                                                <div> <strong>Afternoon:</strong> Fly back to Bangkok. Depending on your departure time, you could explore the MBK Center or Terminal 21 for shopping.</div>
                                                <div> <strong>Evening:</strong>Departure from Bangkok's Suvarnabhumi or Don Mueang Airport.</div>
                                                <div> <strong>Example:</strong>  This itinerary provides a mix of cultural, historical, and natural experiences, capturing the essence of Thailand in a short span. Activities can be adjusted based on preferences and interests. If you'd like further customization or details, please let us know!
                                                </div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="7daysTour" style={{ display: selectdetails === "7-day cultural blend" ? "block" : "none" }}>
                                <div className="container my-4">
                                    <div className="row">

                                        <div className="maintopic">
                                            <h2>Thailand - 7 day tour</h2>
                                            <h4>A 7-day Thailand tour package that offers a blend of culture, nature, and relaxation:</h4>
                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 1</u> </h2>
                                                <h4>Bangkok Arrival and City Exploration</h4>
                                                <div> <strong>Morning:</strong> Arrive in Bangkok. Check into your hotel and relax.</div>
                                                <div> <strong>Afternoon:</strong> Visit the Grand Palace and Wat Pho (Temple of the Reclining Buddha).</div>
                                                <div> <strong>Evening:</strong> Enjoy a traditional Thai dinner and cultural show or explore the bustling Asiatique Riverfront.</div>
                                                <div> <strong>Example:</strong>  Dinner cruise on the Chao Phraya River with views of illuminated temples.</div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala2.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala1.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 2</u> </h2>
                                                <h4>Bangkok Exploration</h4>
                                                <div> <strong>Morning:</strong> Take a canal boat tour to explore the city's waterways.</div>
                                                <div> <strong>Afternoon:</strong> Visit Jim Thompson House and go shopping at MBK or Siam Paragon.</div>
                                                <div> <strong>Evening:</strong> Explore the vibrant street food scene in Chinatown (Yaowarat Road).</div>
                                                <div> <strong>Example:</strong>  Tasting iconic dishes like Tom Yum Goong and Som Tam.</div>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 3</u> </h2>
                                                <h4>Bangkok to Ayutthaya Day Trip</h4>
                                                <div> <strong>Morning:</strong> Travel to Ayutthaya and explore historical sites like Wat Phra Si Sanphet.</div>
                                                <div> <strong>Afternoon:</strong>Visit Wat Chaiwatthanaram and have a riverside lunch.</div>
                                                <div> <strong>Evening:</strong> Return to Bangkok and relax.</div>
                                                <div> <strong>Example:</strong>  Unwind with a traditional Thai massage in Bangkok.</div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala3.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala5.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 4</u> </h2>
                                                <h4>Bangkok to Chiang Mai</h4>
                                                <div> <strong>Morning:</strong> Fly to Chiang Mai. Visit the Doi Suthep Temple.</div>
                                                <div> <strong>Afternoon:</strong> Wander around the Old City, exploring temples and historical sites.</div>
                                                <div> <strong>Evening:</strong> Visit the Chiang Mai Night Bazaar.</div>
                                                <div> <strong>Example:</strong>  Enjoy Northern Thai cuisine at a local restaurant.</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 5</u> </h2>
                                                <h4>Chiang Mai Adventures</h4>
                                                <div> <strong>Morning:</strong> Participate in a Thai cooking class, visiting a local market.</div>
                                                <div> <strong>Afternoon:</strong> Explore the Mae Sa Elephant Camp or an ethical elephant sanctuary.</div>
                                                <div> <strong>Evening:</strong> Experience the vibrant nightlife of Nimmanhaemin Road.</div>
                                                <div> <strong>Example:</strong> Attend a traditional Khantoke dinner with Lanna performances.</div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 6</u> </h2>
                                                <h4>Chiang Mai to Phuket/Krabi</h4>
                                                <div> <strong>Morning:</strong> Fly to Phuket or Krabi.</div>
                                                <div> <strong>Afternoon:</strong> Relax on the beach or explore local attractions like the Big Buddha in Phuket.</div>
                                                <div> <strong>Evening:</strong> Savor fresh seafood by the beach.</div>
                                                <div> <strong>Example:</strong> Beachfront dinner with dishes like Grilled Lobster and Thai-style Crab Curry.</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">


                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 7</u> </h2>
                                                <h4>Island Hopping in Phuket/Krabi</h4>
                                                <div> <strong>Morning:</strong> Take a boat tour to explore nearby islands like Phi Phi or James Bond Island.</div>
                                                <div> <strong>Afternoon:</strong> Snorkel in clear waters and relax on pristine beaches.</div>
                                                <div> <strong>Evening:</strong> Prepare for departure or enjoy a sunset view on the beach.</div>
                                                <div> <strong>Example:</strong>  Sip on a refreshing coconut while watching the sunset.</div>
                                                <div> <strong>Note:</strong>  This 7-day itinerary offers a mix of historical sites, cultural experiences, and beach relaxation. Depending on your interests, the itinerary can be adjusted or tailored. If you'd like more details or modifications, please let us know!</div>

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                            </div>

                                        </div>


                                    </div>
                                </div>



                            </div>

                            <div className="10daysTour" style={{ display: selectdetails === "Island hopping" ? "block" : "none" }}>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="maintopic">
                                            <h2>Thailand - Island Hopping Package</h2>
                                            <h4>A 10-day island hopping tour in Thailand offers the opportunity to explore even more of the country's stunning islands and beaches.</h4>
                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 1</u> </h2>
                                                <h4>Arrival in Phuket</h4>
                                                <div> <strong>Morning:</strong> Arrive in Phuket. Check into your hotel.</div>
                                                <div> <strong>Afternoon:</strong> Explore Phuket Town, with its colorful buildings and markets.</div>
                                                <div> <strong>Evening:</strong> Experience the nightlife on Bangla Road in Patong Beach.</div>
                                                <div> <strong>Example:</strong> Beachside dinner with Thai dishes, followed by a cultural show.</div>
                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala2.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala1.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 2</u> </h2>
                                                <h4>Phuket Exploration</h4>
                                                <div> <strong>Morning:</strong> Visit the Big Buddha and Wat Chalong.</div>
                                                <div> <strong>Afternoon:</strong> Relax on Kata or Karon Beach.</div>
                                                <div> <strong>Evening:</strong> Enjoy a traditional Thai dinner and watch a sunset.</div>
                                                <div> <strong>Example:</strong> Sunset viewing at Promthep Cape.</div>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 3</u> </h2>
                                                <h4>Phuket to Phi Phi Islands</h4>
                                                <div> <strong>Morning:</strong> Depart for Phi Phi Islands.</div>
                                                <div> <strong>Afternoon:</strong> Visit Maya Bay, Loh Samah Bay, and Pileh Lagoon.</div>
                                                <div> <strong>Evening:</strong> Explore the nightlife on Phi Phi Don.</div>
                                                <div> <strong>Example:</strong> Beach party with fire dancers.</div>

                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala3.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala5.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 4</u> </h2>
                                                <h4>Phi Phi to Krabi</h4>
                                                <div> <strong>Morning:</strong>  Snorkeling around Phi Phi's coral gardens.</div>
                                                <div> <strong>Afternoon:</strong> Depart for Krabi. Check into your hotel in Ao Nang.</div>
                                                <div> <strong>Evening:</strong> Stroll along Ao Nang Beach.</div>
                                                <div> <strong>Example:</strong> Seafood feast at a beachfront restaurant.</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 5</u> </h2>
                                                <h4>Four Islands Tour from Krabi</h4>
                                                <div> <strong>Morning:</strong> Boat tour to Phra Nang Cave Beach, Tup Island, Chicken Island, and Poda Island.</div>
                                                <div> <strong>Afternoon:</strong> Snorkeling and beach relaxation.</div>
                                                <div> <strong>Evening:</strong> Return to Krabi.</div>
                                                <div> <strong>Example:</strong> Relaxing spa treatment in Ao Nang.</div>

                                            </div>


                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 6</u> </h2>
                                                <h4>Krabi to Koh Lanta</h4>
                                                <div> <strong>Morning:</strong> Travel to Koh Lanta.</div>
                                                <div> <strong>Afternoon:</strong> Chill at Long Beach.</div>
                                                <div> <strong>Evening:</strong> Explore Lanta Old Town.</div>
                                                <div> <strong>Example:</strong> Sampling street food at a local market.</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">


                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 7</u> </h2>
                                                <h4>Koh Lanta Exploration</h4>
                                                <div> <strong>Morning:</strong> Visit Mu Ko Lanta National Park.</div>
                                                <div> <strong>Afternoon:</strong> Snorkeling trip to Koh Rok.</div>
                                                <div> <strong>Evening:</strong> Beach bonfire and relaxation.</div>
                                                <div> <strong>Example:</strong> Beach barbecue with fresh catches of the day.</div>
                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                            </div>

                                        </div>


                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">
                                                <h2 > <u>Day 8</u> </h2>
                                                <h4>Koh Lanta to Koh Phi Phi</h4>
                                                <div> <strong>Morning:</strong> Koh Lanta to Koh Phi Phi</div>
                                                <div> <strong>Afternoon:</strong> Explore the viewpoints of Phi Phi for panoramic island views.</div>
                                                <div> <strong>Evening:</strong> Enjoy the vibrant nightlife of the island.</div>
                                                <div> <strong>Example:</strong> Dinner and cocktails at a beachside bar.</div>

                                            </div>


                                        </div>


                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">



                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 9</u> </h2>
                                                <h4>Koh Phi Phi to Phuket</h4>
                                                <div> <strong>Morning:</strong> Relax on Bamboo Island near Phi Phi.</div>
                                                <div> <strong>Afternoon:</strong> Return to Phuket and indulge in some shopping or spa treatments.</div>
                                                <div> <strong>Evening:</strong> Farewell dinner in Phuket.</div>
                                                <div> <strong>Example:</strong> Traditional Thai dinner with cultural performances.</div>
                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="container my-4">
                                    <div className="row">


                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaImages">
                                                <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-lg-6">

                                            <div className="SeaTripDetails">

                                                <h2 > <u>Day 10</u> </h2>
                                                <h4>Departure from Phuket</h4>
                                                <div> <strong>Morning:</strong> Last-minute shopping or relaxation at the beach.</div>
                                                <div> <strong>Afternoon:</strong> Departure from Phuket's airport.</div>
                                                <div> <strong>Evening:</strong> Beach bonfire and relaxation.</div>
                                                <div> <strong>Example:</strong> Beach barbecue with fresh catches of the day.</div>
                                                <div> <strong>Note:</strong> This 10-day itinerary provides a mix of beach relaxation, snorkeling adventures, cultural experiences, and island exploration. Activities and islands can be adjusted based on your preferences. If you'd like further customization or additional details, please let us know!</div>
                                            </div>

                                        </div>




                                    </div>
                                </div>



                            </div>

                        </div>

                        <div className="VietnamDetails" style={{ display: selectdetails === "Vietnam" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Vietnam Discovery</u></h2>
                                        <h4>A 10-day tour of Vietnam can offer a rich blend of cultural, historical, and natural experiences. Here's a sample itinerary for a 10-day tour package in Vietnam:</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Hanoi</h4>
                                            <div> <strong>Morning:</strong> Arrive at Noi Bai International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Explore the Old Quarter and enjoy a traditional Water Puppet Show.</div>
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
                                            <h4>Hanoi City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit Ho Chi Minh Mausoleum and One Pillar Pagoda.</div>
                                            <div> <strong>Afternoon:</strong> Relax on Kata or Karon Beach.</div>
                                            <div> <strong>Evening:</strong> Explore the Temple of Literature and Hoan Kiem Lake.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Halong Bay Cruise</h4>
                                            <div> <strong>Morning:</strong> Depart for Halong Bay.</div>
                                            <div> <strong>Afternoon:</strong> Board a cruise, explore limestone caves.</div>
                                            <div> <strong>Evening:</strong> Enjoy dinner and overnight stay on the cruise.</div>

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
                                            <h4>Halong Bay to Hanoi</h4>
                                            <div> <strong>Morning:</strong>  Continue cruising, participate in a Tai Chi session.</div>
                                            <div> <strong>Afternoon:</strong> Return to Hanoi.</div>
                                            <div> <strong>Evening:</strong> Free time or optional cultural activities.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Fly to Hue</h4>
                                            <div> <strong>Morning:</strong> Flight to Hue.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Imperial City and Thien Mu Pagoda.</div>
                                            <div> <strong>Evening:</strong> Cruise on the Perfume River.</div>

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
                                            <h4>Hue to Hoi An</h4>
                                            <div> <strong>Morning:</strong> Visit the Royal Tombs.</div>
                                            <div> <strong>Afternoon:</strong> Drive to Hoi An via Hai Van Pass.</div>
                                            <div> <strong>Evening:</strong> Explore Hoi An Ancient Town.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Hoi An Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit My Son Sanctuary.</div>
                                            <div> <strong>Afternoon:</strong> Cooking class or leisure time at An Bang Beach.</div>
                                            <div> <strong>Evening:</strong> Lantern-lit streets and river cruise in Hoi An.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Fly to Ho Chi Minh City (Saigon)</h4>
                                            <div> <strong>Morning:</strong> Flight to Ho Chi Minh City.</div>
                                            <div> <strong>Afternoon:</strong> Visit the War Remnants Museum and Notre Dame Cathedral.</div>
                                            <div> <strong>Evening:</strong> Explore Ben Thanh Market.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Mekong Delta Day Trip</h4>
                                            <div> <strong>Morning:</strong> Depart for Mekong Delta.</div>
                                            <div> <strong>Afternoon:</strong> Boat tour, visit local villages.</div>
                                            <div> <strong>Evening:</strong> Return to Ho Chi Minh City.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Cu Chi Tunnels and Departure</h4>
                                            <div> <strong>Morning:</strong> Visit Cu Chi Tunnels.</div>
                                            <div> <strong>Afternoon:</strong> Last-minute shopping or sightseeing.</div>
                                            <div> <strong>Evening:</strong> Transfer to Tan Son Nhat International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons:</strong> Sapa Trekking: If you extend your trip, consider a 2-day trek in Sapa.
                                        Phong Nha Caves: Another extension could include visiting these incredible caves.
                                        Nha Trang Beach: For beach lovers, adding a couple of days in Nha Trang could be ideal.
                                        This itinerary offers a mix of cultural, historical, and natural experiences, making the most out of a 10-day trip to Vietnam. Feel free to adjust the schedule based on your interests and travel pace.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="IndonesiaDetails" style={{ display: selectdetails === "Indonesia" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Indonesia Explorer</u></h2>
                                        <h4>Indonesia is a vast country with a rich tapestry of cultures, landscapes, and activities. A 10-day tour can give you a taste of some of the best the country has to offer. Here's a sample itinerary for a 10-day tour package in Indonesia:</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Jakarta</h4>
                                            <div> <strong>Morning:</strong> Arrive at Soekarno-Hatta International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Visit the National Monument (Monas) and enjoy a welcome dinner.</div>
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
                                            <h4>Jakarta to Yogyakarta</h4>
                                            <div> <strong>Morning:</strong> Flight to Yogyakarta.</div>
                                            <div> <strong>Afternoon:</strong> Visit Prambanan Temple.</div>
                                            <div> <strong>Evening:</strong> Explore Malioboro Street for shopping and local food.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Yogyakarta Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit the Sultan's Palace (Kraton).</div>
                                            <div> <strong>Afternoon:</strong> Explore Borobudur Temple.</div>
                                            <div> <strong>Evening:</strong> Free time or optional cultural performance.</div>

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
                                            <h4>Yogyakarta to Bali</h4>
                                            <div> <strong>Morning:</strong> Flight to Bali.</div>
                                            <div> <strong>Afternoon:</strong> Visit Tanah Lot Temple.</div>
                                            <div> <strong>Evening:</strong> Sunset at Seminyak Beach.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Bali Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit Ubud Monkey Forest.</div>
                                            <div> <strong>Afternoon:</strong> Explore Tegallalang Rice Terraces.</div>
                                            <div> <strong>Evening:</strong> Traditional Balinese dance performance.</div>

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
                                            <h4>Bali Beach Day</h4>
                                            <div> <strong>Morning:</strong> Relax at Nusa Dua Beach.</div>
                                            <div> <strong>Afternoon:</strong> Water sports activities.</div>
                                            <div> <strong>Evening:</strong> Seafood dinner at Jimbaran Bay.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Bali to Komodo Island</h4>
                                            <div> <strong>Morning:</strong> Flight to Labuan Bajo.</div>
                                            <div> <strong>Afternoon:</strong> Boat trip to Komodo Island.</div>
                                            <div> <strong>Evening:</strong> Overnight on the boat.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Komodo Island to Labuan Bajo</h4>
                                            <div> <strong>Morning:</strong> Komodo dragon trekking.</div>
                                            <div> <strong>Afternoon:</strong> Snorkeling at Pink Beach.</div>
                                            <div> <strong>Evening:</strong> Return to Labuan Bajo and overnight at a hotel.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Labuan Bajo to Bali</h4>
                                            <div> <strong>Morning:</strong> Flight back to Bali.</div>
                                            <div> <strong>Afternoon:</strong> Visit Uluwatu Temple.</div>
                                            <div> <strong>Evening:</strong> Kecak Fire Dance performance.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping or beach time.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Ngurah Rai International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Mount Batur Sunrise Trek: For the adventurous, a trek to the summit of Mount Batur to catch the sunrise.
                                        Gili Islands: If you extend your trip, consider visiting these paradise islands near Bali.
                                        This itinerary offers a mix of cultural, natural, and beach experiences, making the most out of a 10-day trip to Indonesia.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="MalaysiaDetails" style={{ display: selectdetails === "Malaysia" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Malaysia Getaway</u></h2>
                                        <h4>Malaysia offers a unique blend of modernity, rich cultural heritage, and stunning natural attractions.</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Kuala Lumpur</h4>
                                            <div> <strong>Morning:</strong> Arrive in Kuala Lumpur (KL). Check into your hotel.</div>
                                            <div> <strong>Afternoon:</strong> Explore the iconic Petronas Twin Towers and take in the city view from the observation deck.</div>
                                            <div> <strong>Evening:</strong> Visit Jalan Alor Street for a variety of local dishes.</div>
                                            <div> <strong>Example:</strong> Try the famous satay, nasi lemak, and durian fruit.</div>
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
                                            <h4>Kuala Lumpur Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit Batu Caves, a Hindu temple complex.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Sultan Abdul Samad Building and Merdeka Square.</div>
                                            <div> <strong>Evening:</strong> Shop at the Central Market and Bukit Bintang area.</div>
                                            <div> <strong>Example:</strong> Watch a cultural performance at the Central Market.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Kuala Lumpur to Penang</h4>
                                            <div> <strong>Morning:</strong> Travel to Penang (by flight or road).</div>
                                            <div> <strong>Afternoon:</strong> Wander around George Town, a UNESCO World Heritage site.</div>
                                            <div> <strong>Evening:</strong> Explore Penang's street art and indulge in street food at Gurney Drive.</div>
                                            <div> <strong>Example:</strong> Savor dishes like char kway teow and Penang laksa.</div>

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
                                            <h4>Penang Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit Kek Lok Si Temple and Penang Hill.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Pinang Peranakan Mansion and Fort Cornwallis.</div>
                                            <div> <strong>Evening:</strong> Relax at Batu Ferringhi beach.</div>
                                            <div> <strong>Example:</strong> Enjoy a beachside seafood dinner.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Penang to Langkawi</h4>
                                            <div> <strong>Morning:</strong> Travel to Langkawi (by ferry or flight).</div>
                                            <div> <strong>Afternoon:</strong> Relax at Pantai Cenang Beach.</div>
                                            <div> <strong>Evening:</strong> Take the Langkawi Cable Car and walk on the Sky Bridge.</div>
                                            <div> <strong>Example:</strong> Watch the sunset from the Sky Bridge.</div>

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
                                            <h4>Langkawi Island Hopping</h4>
                                            <div> <strong>Morning:</strong> Island hopping tour to Pulau Dayang Bunting, Pulau Singa Besar, and Pulau Beras Basah.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Underwater World Langkawi.</div>
                                            <div> <strong>Evening:</strong> Free time for relaxation.</div>
                                            <div> <strong>Example:</strong> Beachside barbecue.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Langkawi to the Cameron Highlands</h4>
                                            <div> <strong>Morning:</strong> Travel to the Cameron Highlands.</div>
                                            <div> <strong>Afternoon:</strong> Visit tea plantations and enjoy a factory tour.</div>
                                            <div> <strong>Evening:</strong> Relax and enjoy the cool climate.</div>
                                            <div> <strong>Example:</strong> Sip freshly brewed tea with scones.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Cameron Highlands Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit the Cameron Lavender Garden and Butterfly Garden.</div>
                                            <div> <strong>Afternoon:</strong> Explore the local market and try fresh strawberries.</div>
                                            <div> <strong>Evening:</strong> Enjoy a traditional English dinner.</div>
                                            <div> <strong>Example:</strong> Roast dinner with Yorkshire pudding.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Cameron Highlands to Kuala Lumpur</h4>
                                            <div> <strong>Morning:</strong> Travel back to KL.</div>
                                            <div> <strong>Afternoon:</strong> Visit the Islamic Arts Museum Malaysia and KL Bird Park.</div>
                                            <div> <strong>Evening:</strong> Experience the nightlife at Changkat Bukit Bintang.</div>
                                            <div> <strong>Example:</strong> Try local craft beers at a trendy bar.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Departure from Kuala Lumpur</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping at Pavilion KL or Suria KLCC.</div>
                                            <div> <strong>Afternoon:</strong> Departure from Kuala Lumpur International Airport.</div>
                                            <div> <strong>Example:</strong> This itinerary provides a blend of cultural experiences, natural attractions, and relaxation. Activities and destinations can be adjusted based on your preferences. If you'd like further customization or details on other Malaysian destinations, please let us know!</div>

                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Experience: </strong>
                                        This itinerary provides a blend of cultural experiences, natural attractions, and relaxation. Activities and destinations can be adjusted based on your preferences. If you'd like further customization or details on other Malaysian destinations, please let us know!
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="SingaporeDetails" style={{ display: selectdetails === "Singapore" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Singapore and Beyond</u></h2>
                                        <h4>A 10-day tour in Singapore allows you to explore the city-state in depth. Here's a detailed itinerary broken down into morning, afternoon, and evening activities for each day:</h4>
                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival and Orientation</h4>
                                            <div> <strong>Morning:</strong> Arrival at Changi Airport. Transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Marina Bay Sands Light Show.</div>
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
                                            <h4>City Highlights</h4>
                                            <div> <strong>Morning:</strong> Visit Merlion Park and take photos.</div>
                                            <div> <strong>Afternoon:</strong> Ride the Singapore Flyer.</div>
                                            <div> <strong>Evening:</strong> Dinner at Clarke Quay.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Sentosa Island</h4>
                                            <div> <strong>Morning:</strong> Take Sentosa Express to Sentosa Island.</div>
                                            <div> <strong>Afternoon:</strong> Visit Universal Studios Singapore.</div>
                                            <div> <strong>Evening:</strong> Explore S.E.A. Aquarium.</div>

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
                                            <h4>Cultural Exploration</h4>
                                            <div> <strong>Morning:</strong> Visit Chinatown and the Buddha Tooth Relic Temple.</div>
                                            <div> <strong>Afternoon:</strong> Explore Little India.</div>
                                            <div> <strong>Evening:</strong> Walk around Kampong Glam and have dinner at Arab Street.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Nature and Wildlife</h4>
                                            <div> <strong>Morning:</strong> Visit Singapore Zoo.</div>
                                            <div> <strong>Afternoon:</strong> Go to the River Safari.</div>
                                            <div> <strong>Evening:</strong> Experience the Night Safari.</div>

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
                                            <h4>Gardens and Parks</h4>
                                            <div> <strong>Morning:</strong> Visit the Botanic Gardens.</div>
                                            <div> <strong>Afternoon:</strong> Explore Gardens by the Bay.</div>
                                            <div> <strong>Evening:</strong> Watch the Garden Rhapsody light and sound show at the Supertree Grove.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Shopping and Food</h4>
                                            <div> <strong>Morning:</strong> Shop at Orchard Road.</div>
                                            <div> <strong>Afternoon:</strong> Visit VivoCity Mall.</div>
                                            <div> <strong>Evening:</strong> Food tour at local hawker centers.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala6.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Art and History</h4>
                                            <div> <strong>Morning:</strong> Visit the National Gallery Singapore.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Asian Civilisations Museum.</div>
                                            <div> <strong>Evening:</strong> Walk along the Singapore River and have dinner at Boat Quay.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Off the Beaten Path</h4>
                                            <div> <strong>Morning:</strong> Take a bumboat to Pulau Ubin.</div>
                                            <div> <strong>Afternoon:</strong> Cycling or trekking on Pulau Ubin.</div>
                                            <div> <strong>Evening:</strong> Return to mainland and relax.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaImages">
                                            <img className='img-fluid' src="./TripImages/simala4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 mb-4">

                                        <div className="SeaTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Last-Minute Shopping and Departure</h4>
                                            <div> <strong>Morning:</strong> Last-minute shopping at Mustafa Centre.</div>
                                            <div> <strong>Afternoon:</strong> Visit Jewel Changi Airport.</div>
                                            <div> <strong>Evening:</strong> Departure.</div>

                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Cable Car Ride: To Sentosa Island or around Mount Faber.
                                        Tips:
                                        Public Transport: Consider getting a Singapore Tourist Pass for unlimited travel on public buses and trains.
                                        Weather: Singapore is hot and humid, so dress accordingly.
                                        Laws and Regulations: Singapore has strict laws; familiarize yourself with them to avoid any issues.
                                        This itinerary can be customized based on your interests. With 10 days, you have ample time to explore the diverse offerings of Singapore, from its modern skyscrapers to its rich cultural enclaves and natural attractions.
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

export default SouthEastAsia


