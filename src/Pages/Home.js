import React from 'react';
import About from '../Components/HomeComponents/About/About';
import Contact from '../Components/HomeComponents/Contact/Contact';
import Copyright from '../Components/HomeComponents/Footer/Copyright';
import Footer from '../Components/HomeComponents/Footer/Footer';
import Header from '../Components/HomeComponents/Header/Header';
import OurTeam from '../Components/HomeComponents/OurTeam/OurTeam';

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <OurTeam />
            <Contact />
            <Footer />
            <Copyright/>
        </main>
    );
};

export default Home;