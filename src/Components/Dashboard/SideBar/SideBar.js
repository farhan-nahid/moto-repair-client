import {
    faBook,
    faCog,
    faCommentDots,
    faFileMedical,
    faListUl,
    faShoppingCart,
    faSignOutAlt,
    faUserCircle,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './SideBar.css';

const SideBar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <Image className='d-inline-block image' src={logo}  alt='...' />
                <h4 className='d-inline-block'>Moto Repair</h4>
            </div>
            <ul className='list-unstyled sidebar-items'>
                    <li>
                        <Link to="/dashboard/profile">
                            <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "1.3rem" }} /> <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/book">
                            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "1.3rem" }} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/book-list">
                            <FontAwesomeIcon icon={faBook} style={{ fontSize: "1.3rem" }} /> <span>Book List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reviews">
                            <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "1.3rem" }} /> <span>Reviews</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/add-services">
                            <FontAwesomeIcon icon={faFileMedical} style={{ fontSize: "1.3rem" }} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/add-admins">
                            <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: "1.3rem" }} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/all-orders">
                            <FontAwesomeIcon icon={faListUl} style={{ fontSize: "1.3rem" }} /> <span>Orders List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manage-services">
                            <FontAwesomeIcon icon={faCog} style={{ fontSize: "1.3rem" }} /> <span>Manage Services</span>
                        </Link>
                    </li>
             </ul>
             <ul className="list-unstyled">
                <li>
                    <Link to="/" className="btn btn-info home-btn">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Back to Home
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;