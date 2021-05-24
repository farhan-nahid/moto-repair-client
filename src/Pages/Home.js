import React from 'react';
import About from '../Components/HomeComponents/About/About';
import Contact from '../Components/HomeComponents/Contact/Contact';
import Header from '../Components/HomeComponents/Header/Header';

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Contact />
        </main>
    );
};

export default Home;