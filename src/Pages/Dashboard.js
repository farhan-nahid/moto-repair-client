import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../App';
import AddAdmin from '../Components/Dashboard/AddAdmin/AddAdmin';
import AddServices from '../Components/Dashboard/AddService/AddServices';
import Book from '../Components/Dashboard/Book/Book';
import BookList from '../Components/Dashboard/BookList/BookList';
import ManageService from '../Components/Dashboard/ManageService/ManageService';
import NavBar from '../Components/Dashboard/NavBar/NavBar';
import OrderList from '../Components/Dashboard/OrderList/OrderList';
import Profile from '../Components/Dashboard/Profile/Profile';
import Review from '../Components/Dashboard/Review/Review';
import SideBar from '../Components/Dashboard/SideBar/SideBar';
import './Dashboard.css';


const Dashboard = ({adminLoading}) => {
    const { loggedInUser: { email }, isAdmin } = useContext(UserContext);
    console.log(email, isAdmin);
    const {panel}=useParams()
    const history = useHistory();
    const [showSidebar, setShowSidebar] = useState(false);



    if (
        !adminLoading && !isAdmin && (
            panel === "profile" ||
            panel === "add-services" ||
            panel === "all-orders" ||
            panel === "manage-services")
    ) {
        history.replace({ pathname: "/dashboard/profile" });
    }

    return (
        <main className="wrapper">
            <Row>
                <Col md={3}>
                    <SideBar show={showSidebar} adminLoading={adminLoading} />
                </Col>
           
                <Col md={9}>
                <div  id="content">
                      <NavBar setShowSidebar={setShowSidebar} show={showSidebar}  />
                    {
                        panel === "profile" ?  <Profile />
                        :panel === "book" ? <Book />
                        :panel === "book-list" ? <BookList />
                        :panel === "reviews" ? <Review />
                        :panel === "add-services"  && isAdmin ? <AddServices />
                        :panel === "add-admins"  && isAdmin ? <AddAdmin />
                        :panel === "all-orders"  && isAdmin  ? <OrderList />
                        :panel === "manage-services"  && isAdmin  ? <ManageService />
                        : null
                    }
                </div>
                </Col>
                </Row>
        </main>
    );
};

export default Dashboard;