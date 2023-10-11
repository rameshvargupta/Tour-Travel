import { useState } from 'react';
import Footer from '../../Component/Footer';
import '../SouthEastAsia/SouthEastAsia.css';
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

                <h1>Europe</h1>

            </div>

            <div className="SeaTour">

                <div className="SeaTourName">

                    <div class="accordion accordion-flush" id="accordionFlushExample" >

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Europe
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Europe")} >South Africa Tour</div>
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


                                    <div className="col-12">

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

                                </div>

                            </div>

                        </div>

                        <div className="EuropeDetails" style={{ display: selectdetails === "Europe" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Europe Discovery</u></h2>
                                        <h4>A 10-day tour of Europe can offer a rich blend of cultural, historical, and natural experiences. Here's a sample itinerary for a 10-day tour package in Vietnam:</h4>
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

                    </div>

                    <div><Footer /></div>

                </div>

            </div>



        </div>
    )
}

export default Europe
