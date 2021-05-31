import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import AddAdmin from '../Components/Dashboard/AddAdmin/AddAdmin';
import AddServices from '../Components/Dashboard/AddService/AddServices';
import Book from '../Components/Dashboard/Book/Book';
import BookList from '../Components/Dashboard/BookList/BookList';
import ManageService from '../Components/Dashboard/ManageService/ManageService';
import OrderList from '../Components/Dashboard/OrderList/OrderList';
import Profile from '../Components/Dashboard/Profile/Profile';
import Review from '../Components/Dashboard/Review/Review';
import SideBar from '../Components/Dashboard/SideBar/SideBar';
import './Dashboard.css';

const Dashboard = () => {
    const {panel}=useParams()
    console.log(panel);
    return (
        <main className="wrapper">
           <Row>
               <Col md={3}>
               <SideBar />
               </Col>
               <Col md= {9}>
               <div  id="content">
                {
                    panel === "profile" ?  <Profile />
                    :panel === "book" ? <Book />
                    :panel === "book-list" ? <BookList />
                    :panel === "reviews" ? <Review />
                    :panel === "add-services"? <AddServices />
                    :panel === "add-admins" ? <AddAdmin />
                    :panel === "all-orders" ? <OrderList />
                    :panel === "manage-services" ? <ManageService />
                    : null
                }
            </div>
               </Col>
           </Row>
        </main>
    );
};

export default Dashboard;