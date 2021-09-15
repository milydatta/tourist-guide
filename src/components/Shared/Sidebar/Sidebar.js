  
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCalendar, faGripHorizontal, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white item">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/bookings" className="text-white item">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Bookings</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/consultings" className="text-white item">
                        <FontAwesomeIcon icon={faUsers} /> <span>Consulting</span>
                    </Link>
                </li>
                <li>
                    <Link to="/setting" className="text-white item" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
                <li>
                    <Link to="/#" className="text-white item" >
                      <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;