import React from 'react'

const NavBar = () => {
  return (
    <div>NavBar</div>
  )
}

export default NavBar






// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import '../Styles/navbar.css'
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

// export default function NavBar() {     //Navigation bar component


//     const [isHoveredAbout, setIsHoverdAbout] = useState(false);
//     const [isHoveredRoomSuite, setIsHoveredRoomSuite] = useState(false);
//     const [isHoveredDining, setIsHoverdDining] = useState(false);
//     const [isHoveredExperience, setIsHoverdExperience] = useState(false);
//     const [isHoveredEvents, setIsHoverdEvents] = useState(false);
//     const [isHoveredMore, setIsHoverdMore] = useState(false);


//     // About
//     const handleMouseEnterAbout = () => {
//         setIsHoverdAbout(true);
//     };

//     const handleMouseLeaveAbout = () => {
//         setIsHoverdAbout(false);
//     };

//     //Rooms&Suites 
//     const handleMouseEnterRoomsSuites = () => {
//         setIsHoveredRoomSuite(true);
//     };

//     const handleMouseLeaveRoomsSuites = () => {
//         setIsHoveredRoomSuite(false);
//     };


//     // Dining
//     const handleMouseEnterDining = () => {
//         setIsHoverdDining(true);
//     };

//     const handleMouseLeaveDining = () => {
//         setIsHoverdDining(false);
//     };


//     // Experience
//     const handleMouseEnterExperience = () => {
//         setIsHoverdExperience(true);
//     };

//     const handleMouseLeaveExperience = () => {
//         setIsHoverdExperience(false);
//     };



//     // Events
//     const handleMouseEnterEvents = () => {
//         setIsHoverdEvents(true);
//     };

//     const handleMouseLeaveEvents = () => {
//         setIsHoverdEvents(false);
//     };



//     // More
//     const handleMouseEnterMore = () => {
//         setIsHoverdMore(true);
//     };

//     const handleMouseLeaveMore = () => {
//         setIsHoverdMore(false);
//     };


//   return (
//     <div className='navbar_main_container'>
//         <nav>
//             <div className='logo_section'>{/*Logo section in navigation bar*/}
//                 <div className='Logo_img'>
//                     <img src='Assets/logo_hotel.png' alt='logo' width={120}/>
//                 </div>

//                 <div className='Logo_links'>
//                     <a href='#'><p className='icon_with'><PersonOutlinedIcon sx={{ color: '#5a5a5a', fontSize: 17}}/>Sign In</p></a>
//                     <a href='#'><p>Join Now</p></a>
//                     <a href='#'><p>Find Reservation</p></a>
//                     <a href='#'><p className='icon_with'><LanguageOutlinedIcon sx={{ color: '#5a5a5a', fontSize: 17}}/>English</p></a>
//                     <a href='#'><p>SGD </p></a>
//                     <a href='#' style={{border:'none',}}><StayCurrentPortraitOutlinedIcon sx={{ color: '#5a5a5a' ,fontSize: 17}}/></a>
//                 </div>
//             </div>             

//             <div className='navigation_item_section'> {/*Navigation item section*/}
//                 <div className='navigation_items'>
//                     <a 
//                         href='#' 
//                         className='icon_with'
//                         onMouseEnter={handleMouseEnterAbout}
//                         onMouseLeave={handleMouseLeaveAbout}>
//                             About {isHoveredAbout ? <ExpandLessOutlinedIcon/>: <ExpandMoreIcon/>}
//                             {isHoveredAbout && <div className='About_expand'>
//                             <p>About the hotel</p>
//                             <a href='#'>OverView</a>
//                             <a href='#'>Explore Colombo</a>
//                             <a href='#'>Services & Facilities</a>
//                             <a href='#'>Map & Directions</a>
//                         </div>}
//                     </a>
                    
//                     <a 
//                         href='#' 
//                         className='icon_with'
//                         onMouseEnter={handleMouseEnterRoomsSuites}
//                         onMouseLeave={handleMouseLeaveRoomsSuites}>Rooms & Suites{isHoveredRoomSuite ? <ExpandLessOutlinedIcon/>: <ExpandMoreIcon/>}
//                     {isHoveredRoomSuite &&<div className='Rooms_Suites_expand'>
//                         <div className='Room_category_sec'>
//                             <div className='subCategory Rooms_sec'>
//                                 <p>Rooms</p>
//                                 <a href='#'>Deluxe Lake View</a>
//                                 <a href='#'>Deluxe Ocean View</a>
//                                 <a href='#'>Premier Balcony</a>
//                                 <a href='#'>Premier Ocean View</a>
//                             </div>

//                             <div className='subCategory Horizon_Club_sec'>
//                                 <p>Horizon Club</p>
//                                 <a href='#'>Horizon Club Lake View</a>
//                                 <a href='#'>Horizon Ocean View</a>
//                             </div>

//                             <div className='subCategory Suites_sec'>
//                                 <p>Suites</p>
//                                 <a href='#'>Executive Suites</a>
//                                 <a href='#'>Specialty Suites</a>
//                                 <a href='#'>Shangri-La Suites</a>
//                             </div>

//                             <div className='subCategory Connecting_Rooms_sec'>
//                                 <p>Connecting Rooms</p>
//                                 <a href='#'>Executive Suite & Premier Ocean Room Connecting</a>
//                                 <a href='#'>Two Deluxe Lake View Rooms Connecting</a>
//                             </div>
//                         </div>

//                         <div className='Rooms_Suites_Overview'>
//                             <p>Rooms & Suites Overview</p>
//                         </div>
//                     </div>}
//                     </a>
                    
//                     <a 
//                         href='#' 
//                         className='icon_with'
//                         onMouseEnter={handleMouseEnterDining}
//                         onMouseLeave={handleMouseLeaveDining}>Dining{isHoveredDining ? <ExpandLessOutlinedIcon/>: <ExpandMoreIcon/>}
//                     {isHoveredDining &&
//                     <div className='Dining_expand'>
//                         <div className='Dining_category_sec'>
//                             <div className='subCategory Resturents_sec'>
//                                 <p>Resturents</p>
//                                 <a href='#'>Cake Temptations by Shangri-La Colombo</a>
//                                 <a href='#'>Shang Palace</a>
//                                 <a href='#'>Capital Bar & Grill</a>
//                                 <a href='#'>Central</a>
//                                 <a href='#'>Central café</a>
//                             </div>

//                             <div className='subCategory Bars_Lounges'>
//                                 <p>Bars & Lounges</p>
//                                 <a href='#'>Sapphyr Lounge</a>
//                                 <a href='#'>Capital Bar & Grill</a>
//                                 <a href='#'>Pool Bar</a>
//                             </div>
//                         </div>

//                         <div className='Rooms_Suites_Overview'>
//                             <p>Dining Overview</p>
//                         </div>
//                     </div>
//                     }
//                     </a>
                    
//                     <a 
//                         href='#' 
//                         className='icon_with'
//                         onMouseEnter={handleMouseEnterExperience}
//                         onMouseLeave={handleMouseLeaveExperience}>Experience{isHoveredExperience ? <ExpandLessOutlinedIcon/>: <ExpandMoreIcon/>}
//                      {isHoveredExperience &&
//                     <div className='Experience_expand'>
//                         <div className='Experience_category_sec'>
//                             <div className='subCategory For_Kids_sec'>
//                                 <p>For Kids</p>
//                                 <a href='#'>Overview</a>
//                                 <a href='#'>Adventure Zone</a>
//                                 <a href='#'>Celebrations</a>
//                             </div>

//                             <div className='subCategory Health_Leisure_Lounges'>
//                                 <p>Health & Leisure</p>
//                                 <a href='#'>Overview</a>
//                                 <a href='#'>Health Club</a>
//                                 <a href='#'>Chi, The Spa</a>
//                             </div>
//                         </div>
//                     </div>} 
//                     </a>
                    
//                     <a 
//                         href='#' 
//                         className='icon_with'
//                         onMouseEnter={handleMouseEnterEvents}
//                         onMouseLeave={handleMouseLeaveEvents}>Events{isHoveredEvents ? <ExpandLessOutlinedIcon/>: <ExpandMoreIcon/>}
//                     {isHoveredEvents &&
//                     <div className='Events_expand'>
//                         <div className='Events_category_sec'>
//                             <div className='subCategory Meetings_Events'>
//                                 <p>Meetings & Events</p>
//                                 <a href='#'>Overview</a>
//                                 <a href='#'>Experience It</a>
//                                 <a href='#'>Coworking Space</a>
//                                 <a href='#'>Outside Catering</a>
//                                 <a href='#'>Request For Proposal</a>
//                             </div>

//                             <div className='subCategory Wedding_Celebrations'>
//                                 <p>Wedding & Celebrations</p>
//                                 <a href='#'>Overview</a>
//                                 <a href='#'>Wedding Planning</a>
//                                 <a href='#'>Wedding by Shangri-La</a>
//                                 <a href='#'>Request For Proposal</a>
//                             </div>
//                         </div>
//                     </div>}
//                     </a>
                    
//                     <a href='#' className='icon_with'>Gallery</a>
                    
//                     <a href='#' className='icon_with'>Offers</a>
                    
//                     <a 
//                         href='#' 
//                         className='icon_with'
//                         onMouseEnter={handleMouseEnterMore}
//                         onMouseLeave={handleMouseLeaveMore}>More{isHoveredMore ? <ExpandLessOutlinedIcon/>: <ExpandMoreIcon/>}
//                     {isHoveredMore &&
//                     <div className='More_expand'>
//                         <div className='More_category_sec'>
//                             <div className='subCategory Apartments'>
//                                 <p>Apartments</p>
//                                 <a href='#'>Learn More</a>
//                             </div>
//                         </div>
//                     </div>}
//                     </a>
//                 </div>

//                 <div className='navigation_items_btn'>
//                     <button>Find A Hotel</button>
//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }
