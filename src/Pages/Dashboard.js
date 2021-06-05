import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
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
   // const history = useHistory();
    const [showSidebar, setShowSidebar] = useState(false);



    /*if (
        !adminLoading && !isAdmin && (
            panel === "profile" ||
            panel === "add-services" ||
            panel === "all-orders" ||
            panel === "manage-services")
    ) {
        history.replace({ pathname: "/dashboard/profile" });
    }*/

    return (
        <main className="wrapper">
          <SideBar show={showSidebar} adminLoading={adminLoading} />
            <div  id="content">
               <NavBar setShowSidebar={setShowSidebar} show={showSidebar}  />
                {
                    panel === "profile" ?  <Profile />
                    :panel === 'book' ? <Book />
                    :panel === "book-list" ? <BookList />
                    :panel === "reviews" ? <Review />
                    :panel === "add-services" ?  <AddServices />
                    :panel === "add-admins"  ? <AddAdmin />
                    :panel === "all-orders"  ? <OrderList />
                    :panel === "manage-services"   ? <ManageService />
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;