import { faBiking, faClipboardList, faQuoteLeft, faShoppingBag, faSignOutAlt, faTasks, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './SideBar.css';
import SideBarSpinner from './SideBarSpinner';

const SideBar = ({ show, adminLoading }) => {
    const { isAdmin } = useContext(UserContext);
    const { panel } = useParams();
    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <div className="sidebar-header">
                <Image className='d-inline-block image' src={logo}  alt='...' />
                <h4 className='d-inline-block'>Moto Repair</h4>
            </div>
            {adminLoading ? <SideBarSpinner /> :
            <ul className='list-unstyled sidebar-items'>
                    <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                        <Link to="/dashboard/profile" className={panel === "profile" ? "link-active" : ""} >
                            <FontAwesomeIcon icon={faUserCircle}  /> <span>Profile</span>
                        </Link>
                    </motion.li>
               {!isAdmin?
                        <>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                 <Link to="/dashboard/book" className={panel === "book" ? "link-active" : ""} >
                                    <FontAwesomeIcon icon={faShoppingBag}  /> <span>Book</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/book-list" className={panel === "book-list" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faClipboardList} /> <span>Book List</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/reviews" className={panel === "reviews" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faQuoteLeft}/> <span>Reviews</span>
                                </Link>
                            </motion.li>
                        </>
                        :
                         <>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/add-services" className={panel === "add-services" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faBiking}/> <span>Add Services</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/add-admins" className={panel === "add-admins" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/manage-services" className={panel === "manage-services" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/all-orders" className={panel === "all-orders" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faClipboardList} /> <span>Orders List</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/all-reviews" className={panel === "all-reviews" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faQuoteLeft}/> <span>Manage Reviews</span>
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3, originX:0, color:'#00000'}} transition={{type:'spring', stiffness:1000}}>
                                <Link to="/dashboard/all-admins" className={panel === "all-admins" ? "link-active" : ""}>
                                    <FontAwesomeIcon icon={faUserCircle}/> <span>Manage Admins</span>
                                </Link>
                            </motion.li>
                    </>
                }
             </ul >
          }
             <ul className="list-unstyled back-button">
             <li>
                    <Link to="/" className="back-home brn btn-info main-button">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Back to Home
                    </Link>
                </li>
             </ul>
        </nav>
    );
};

export default SideBar;