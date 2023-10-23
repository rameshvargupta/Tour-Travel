import { useState } from 'react';
import Footer from '../../Component/Footer';
import { Link } from 'react-router-dom';

const Africa = () => {

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
                    <img className='img-fluid' src="./Images/Africa/AfricamainPage.jpg" alt="" />
                </div>

                <h1>AFRICA</h1>

            </div>

            <div className="CountryTour">

                <div className="CountryTourName">

                    <div class="accordion accordion-flush" id="accordionFlushExample" >

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed " onClick={() => setSelectDetails('defaultshowdetails')} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    South Africa
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("South Africa")} >South African Splendor</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Kenya
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Kenya")} >Safari Spectacular in Kenya</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button onClick={() => setSelectDetails('defaultshowdetails')} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Zimbabwe
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <div className="traveldays">
                                        <div className='selectDate' onClick={() => setSelectDetails("Zimbabwe")} >Zimbabwe Magic</div>
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
                                                <img className='img-fluid' src="./Images/Africa/South Africa.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription' >
                                                <h5>South African Splendor</h5>
                                                <div>
                                                    <strong> Duration: </strong>

                                                    11 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Enjoy wildlife spotting in Kruger National Park.
                                                    Explore the vibrant city of Cape Town and visit Table Mountain.
                                                    Journey along the scenic Garden Route.
                                                    Taste world-class wines in Stellenbosch.
                                                    Example: A cable car ride up Table Mountain in Cape Town, taking in panoramic views of the city and ocean, followed by a visit to the historic Robben Island.</div>
                                            </div>

                                            <div className='CountryPlaceName'>South African Splendor</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription2} onMouseLeave={hideDescription2}>
                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/Africa/Kenya.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription2' >
                                                <h5>Safari Spectacular in Kenya</h5>
                                                <div>
                                                    <strong> Duration: </strong>
                                                    7-10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Nairobi's Giraffe Centre and David Sheldrick Wildlife Trust
                                                    Maasai Mara National Reserve for the Great Migration
                                                    Amboseli National Park with views of Mount Kilimanjaro
                                                    Lake Nakuru National Park for flamingos and rhinos
                                                    Example: An early morning hot air balloon ride over the Maasai Mara, watching wildlife from above, followed by a champagne breakfast in the savannah.</div>
                                            </div>

                                            <div className='CountryPlaceName'>Safari Spectacular in Kenya</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">

                                        <div className="tourInnerDetails" onMouseEnter={showDescription3} onMouseLeave={hideDescription3}>
                                            <div className="CommonTourImage">
                                                <img className='img-fluid' src="./Images/Africa/Zimbabwe.jpg" alt="" />
                                            </div>

                                            <div className="CommonImageDiscription" id='SeaDecription3'>
                                                <h5>Zimbabwe Magic</h5>
                                                <div>
                                                    <strong> Duration: </strong>
                                                    7-10 days.
                                                </div>
                                                <div> <strong>Highlights: </strong>
                                                    Hwange National Park for elephant watching.
                                                    Mana Pools National Park for canoe safaris and walking tours.
                                                    Matobo National Park for rhino tracking.
                                                    Great Zimbabwe ruins in Masvingo and Khami Ruins near Bulawayo.</div>
                                            </div>



                                            <div className='CountryPlaceName'>Zimbabwe Magic</div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                        <div className="SouthAfricaDetails" style={{ display: selectdetails === "South Africa" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>South Africa - 11 days</u></h2>
                                        <h4>An 11-day tour package in South Africa can offer a diverse range of experiences, from wildlife safaris and cultural encounters to scenic beauty and urban exploration. Here's a sample itinerary for an 11-day tour package in South Africa:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Johannesburg</h4>
                                            <div> <strong>Morning:</strong> Arrive at O.R. Tambo International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at a local restaurant.</div>
                                        </div>

                                    </div>


                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Johannesburg City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit the Apartheid Museum.</div>
                                            <div> <strong>Afternoon:</strong> Explore Soweto and the Mandela House.</div>
                                            <div> <strong>Evening:</strong> Free time or optional visit to Maboneng Precinct for arts and dining.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Johannesburg to Kruger National Park</h4>
                                            <div> <strong>Morning:</strong> Fly or drive to Kruger National Park.</div>
                                            <div> <strong>Afternoon:</strong> Afternoon game drive.</div>
                                            <div> <strong>Evening:</strong> Overnight at a safari lodge.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Kruger Safari</h4>
                                            <div> <strong>Morning:</strong> Early morning game drive.</div>
                                            <div> <strong>Afternoon:</strong> Optional bush walk or another game drive.</div>
                                            <div> <strong>Evening:</strong> Overnight at the lodge.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Kruger to Cape Town</h4>
                                            <div> <strong>Morning:</strong> Morning game drive or leisure time at the lodge.</div>
                                            <div> <strong>Afternoon:</strong> Fly to Cape Town.</div>
                                            <div> <strong>Evening:</strong> Check-in and relax at the hotel.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Cape Peninsula Tour</h4>
                                            <div> <strong>Morning:</strong> Drive to Cape Point via Chapman's Peak Drive.</div>
                                            <div> <strong>Afternoon:</strong> Visit the penguins at Boulders Beach.</div>
                                            <div> <strong>Evening:</strong> Return to Cape Town.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Cape Winelands</h4>
                                            <div> <strong>Morning:</strong> Drive to Stellenbosch.</div>
                                            <div> <strong>Afternoon:</strong> Wine tasting and lunch in Franschhoek.</div>
                                            <div> <strong>Evening:</strong> Return to Cape Town.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday7.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday8.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Cape Town City and Table Mountain</h4>
                                            <div> <strong>Morning:</strong> Visit Table Mountain.</div>
                                            <div> <strong>Afternoon:</strong> Explore the V&A Waterfront.</div>
                                            <div> <strong>Evening:</strong> Free time or optional Robben Island tour.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Cape Town to Garden Route</h4>
                                            <div> <strong>Morning:</strong> Drive to Knysna via Mossel Bay.</div>
                                            <div> <strong>Afternoon:</strong> Explore Knysna Heads or take a lagoon cruise.</div>
                                            <div> <strong>Evening:</strong> Overnight in Knysna.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday9.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday10.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Tsitsikamma National Park</h4>
                                            <div> <strong>Morning:</strong> Drive to Tsitsikamma National Park.</div>
                                            <div> <strong>Afternoon:</strong> Hiking or optional activities like bungee jumping.</div>
                                            <div> <strong>Evening:</strong> Return to Knysna or overnight in Tsitsikamma.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 11</u> </h2>
                                            <h4>Return to Johannesburg and Departure</h4>
                                            <div> <strong>Morning:</strong> Drive to George Airport and fly back to Johannesburg.</div>
                                            <div> <strong>Afternoon:</strong> Last-minute shopping or optional activities.</div>
                                            <div> <strong>Evening:</strong> Transfer to O.R. Tambo International Airport for departure.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/SAday11.jpg" alt="" />

                                        </div>

                                    </div>



                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons:</strong> Shark Cage Diving: In Gansbaai or Mossel Bay.
                                        Hot Air Balloon Ride: In the Winelands or Magaliesberg near Johannesburg.
                                        This itinerary offers a mix of wildlife, scenic beauty, cultural experiences, and urban exploration, making the most out of an 11-day trip to South Africa.
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="KenyaDetails" style={{ display: selectdetails === "Kenya" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Kenya 10 day</u></h2>
                                        <h4>A 10-day tour package in Kenya can offer a rich blend of wildlife safaris, cultural experiences, and natural wonders. Here's a sample itinerary for a 10-day tour package in Kenya:
                                        </h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Nairobi</h4>
                                            <div> <strong>Morning:</strong> Arrive at Jomo Kenyatta International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at a local restaurant, such as Carnivore for a taste of Kenyan barbecue.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Nairobi City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit the Giraffe Centre.</div>
                                            <div> <strong>Afternoon:</strong> Explore the David Sheldrick Wildlife Trust to see orphaned elephants.</div>
                                            <div> <strong>Evening:</strong> Optional visit to the Nairobi National Museum or free time.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Amboseli National Park</h4>
                                            <div> <strong>Morning:</strong> Drive to Amboseli National Park.</div>
                                            <div> <strong>Afternoon:</strong> Game drive with views of Mount Kilimanjaro.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge in Amboseli.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Amboseli to Lake Nakuru</h4>
                                            <div> <strong>Morning:</strong> Another game drive in Amboseli.</div>
                                            <div> <strong>Afternoon:</strong> Drive to Lake Nakuru.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge near Lake Nakuru.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Lake Nakuru to Maasai Mara</h4>
                                            <div> <strong>Morning:</strong> Game drive in Lake Nakuru National Park.</div>
                                            <div> <strong>Afternoon:</strong> Drive to Maasai Mara National Reserve.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge or camp in Maasai Mara.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Maasai Mara Safari</h4>
                                            <div> <strong>Morning:</strong> Game drive in Maasai Mara.</div>
                                            <div> <strong>Afternoon:</strong> Optional visit to a Maasai village.</div>
                                            <div> <strong>Evening:</strong> Overnight at the lodge or camp.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Maasai Mara to Lake Naivasha</h4>
                                            <div> <strong>Morning:</strong> Final game drive in Maasai Mara.</div>
                                            <div> <strong>Afternoon:</strong> Drive to Lake Naivasha.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge near Lake Naivasha.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday7.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday8.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Lake Naivasha and Hell's Gate</h4>
                                            <div> <strong>Morning:</strong> Boat ride on Lake Naivasha.</div>
                                            <div> <strong>Afternoon:</strong> Visit Hell's Gate National Park for hiking or cycling.</div>
                                            <div> <strong>Evening:</strong> Return to Nairobi.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Nairobi to Mombasa</h4>
                                            <div> <strong>Morning:</strong> Flight to Mombasa.</div>
                                            <div> <strong>Afternoon:</strong> Relax on the beach or explore Fort Jesus.</div>
                                            <div> <strong>Evening:</strong> Overnight at a beach resort.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday9.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Kday10.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Free time for last-minute shopping or beach activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Moi International Airport in Mombasa for departure or return flight to Nairobi for international departure.</div>
                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Hot Air Balloon Ride: Over Maasai Mara for an aerial view of the wildlife.
                                        Snorkeling: In Mombasa or nearby marine parks.
                                        This itinerary offers a mix of wildlife, cultural, and coastal experiences, making the most out of a 10-day trip to Kenya.

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="ZimbabweDetails" style={{ display: selectdetails === "Zimbabwe" ? "block" : "none" }}>

                            <div className="container my-4">

                                <div className="row">

                                    <div className="maintopic">
                                        <h2><u>Zimbabwe 10-day tour</u></h2>
                                        <h4>A 10-day tour package in Zimbabwe can offer a rich blend of wildlife safaris, natural wonders, and cultural experiences. Here's a sample itinerary for a 10-day tour package in Zimbabwe:</h4>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 1</u> </h2>
                                            <h4>Arrival in Harare</h4>
                                            <div> <strong>Morning:</strong> Arrive at Harare International Airport, transfer to hotel.</div>
                                            <div> <strong>Afternoon:</strong> Rest and recover from jet lag.</div>
                                            <div> <strong>Evening:</strong> Welcome dinner at a local restaurant.</div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday1.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday2.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 2</u> </h2>
                                            <h4>Harare City Tour</h4>
                                            <div> <strong>Morning:</strong> Visit the National Gallery and Harare Gardens.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Mbare Musika Market.</div>
                                            <div> <strong>Evening:</strong> Optional visit to a local jazz club or free time.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 3</u> </h2>
                                            <h4>Harare to Great Zimbabwe</h4>
                                            <div> <strong>Morning:</strong> Drive to Masvingo.</div>
                                            <div> <strong>Afternoon:</strong> Explore the Great Zimbabwe ruins.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge in Masvingo.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="../Images/Africa/Zday3.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday4.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 4</u> </h2>
                                            <h4>Masvingo to Matobo National Park</h4>
                                            <div> <strong>Morning:</strong> Drive to Matobo National Park.</div>
                                            <div> <strong>Afternoon:</strong> Rhino tracking and cave exploration.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge in Matobo.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 5</u> </h2>
                                            <h4>Matobo to Hwange National Park</h4>
                                            <div> <strong>Morning:</strong> Drive to Hwange National Park.</div>
                                            <div> <strong>Afternoon:</strong> Game drive in Hwange.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge or camp in Hwange.</div>

                                        </div>


                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday5.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday6.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 6</u> </h2>
                                            <h4>Hwange Safari</h4>
                                            <div> <strong>Morning:</strong> Game drive or walking safari.</div>
                                            <div> <strong>Afternoon:</strong> Visit to a local village or waterhole watching.</div>
                                            <div> <strong>Evening:</strong> Overnight at the lodge or camp.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 7</u> </h2>
                                            <h4>Hwange to Victoria Falls</h4>
                                            <div> <strong>Morning:</strong> Drive to Victoria Falls.</div>
                                            <div> <strong>Afternoon:</strong> Visit Victoria Falls.</div>
                                            <div> <strong>Evening:</strong> Sunset cruise on the Zambezi River.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday7.jpeg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday8.jpg" alt="" />
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">
                                            <h2 > <u>Day 8</u> </h2>
                                            <h4>Adventure Activities in Victoria Falls</h4>
                                            <div> <strong>Morning:</strong> Optional activities like bungee jumping or white-water rafting.</div>
                                            <div> <strong>Afternoon:</strong> Helicopter ride over the falls or a visit to a crocodile farm.</div>
                                            <div> <strong>Evening:</strong> Free time or optional traditional dance show.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 9</u> </h2>
                                            <h4>Victoria Falls to Lake Kariba</h4>
                                            <div> <strong>Morning:</strong> Flight or drive to Lake Kariba.</div>
                                            <div> <strong>Afternoon:</strong> Boat ride or fishing in Lake Kariba.</div>
                                            <div> <strong>Evening:</strong> Overnight at a lodge near Lake Kariba.</div>

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="./Images/Africa/Zday9.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonImages">
                                            <img className='img-fluid' src="../Images/Africa/Zday10.jpg" alt="" />

                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-4">

                                        <div className="CommonTripDetails">

                                            <h2 > <u>Day 10</u> </h2>
                                            <h4>Departure</h4>
                                            <div> <strong>Morning:</strong> Free time for last-minute activities.</div>
                                            <div> <strong>Afternoon:</strong> Transfer to Harare International Airport for departure.</div>

                                        </div>

                                    </div>

                                    <div className='my-4 lastDetails' style={{ textAlign: "justify" }}> <strong>Optional Add-Ons: </strong>
                                        Canoe Safari: In Mana Pools National Park.
                                        Tiger Fishing: In Lake Kariba.
                                        This itinerary offers a mix of wildlife, natural wonders, and cultural experiences, making the most out of a 10-day trip to Zimbabwe.
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

export default Africa


