//import axios from "axios";
import { createContext, lazy, Suspense, useState } from "react";
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Spinner from "./Components/HomeComponents/Spinner/Spinner";
import { getDecodedUser } from "./Components/LoginAuth/LoginManager";
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
const Dashboard = lazy(() => import ('./Pages/Dashboard'));
const Home = lazy(() => import ('./Pages/Home'));
const Login = lazy(() => import ('./Pages/Login'));


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState([]);
  const [adminLoading, setAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);



  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isAdmin, selectedService, setSelectedService }}>
      <Router>
      <Toaster />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/dashboard/:panel'>
            <Dashboard adminLoading={adminLoading} />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
