import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../App';
import AddAdmin from '../Components/Dashboard/AddAdmin/AddAdmin';
import AddServices from '../Components/Dashboard/AddService/AddServices';
import AllAdmin from '../Components/Dashboard/AllAdmin/AllAdmin';
import AllReview from '../Components/Dashboard/AllReview/AllReview';
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
    const { isAdmin } = useContext(UserContext);
    const {panel}=useParams()
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <main className="dashboard-container">
          <SideBar show={showSidebar} adminLoading={adminLoading} />
            <div  id="content">
               <NavBar setShowSidebar={setShowSidebar} show={showSidebar}  />
                {
                    panel === "profile" ?  <Profile />
                    :panel === 'book' ? <Book />
                    :panel === "book-list" ? <BookList />
                    :panel === "reviews" ? <Review />
                    :panel === "add-services" && isAdmin ?  <AddServices />
                    :panel === "add-admins" && isAdmin  ? <AddAdmin />
                    :panel === "all-orders" && isAdmin  ? <OrderList />
                    :panel === "manage-services" && isAdmin  ? <ManageService />
                    :panel === "all-reviews" && isAdmin  ? <AllReview />
                    :panel === "all-admins" && isAdmin  ? <AllAdmin />
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;