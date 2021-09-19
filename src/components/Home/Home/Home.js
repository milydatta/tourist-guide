import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import TeamDetail from '../TeamDetail/TeamDetail';

const Home = () => {
    return (
        <div id="home">
           <Header></Header> 
           <About></About>
           <Service></Service>
           <TeamDetail></TeamDetail>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;