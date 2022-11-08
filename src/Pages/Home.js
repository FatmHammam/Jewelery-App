import React from 'react'
import Header from '../Components/Header';
import ImageSlider from '../Components/ImageSlider';
import AboutUS from '../Components/AboutUS';
import Designs from '../Components/Designs';
import NewCollections from '../Components/NewCollections';
import Rings from '../Components/Rings';
import Footer from '../Components/Footer';
import general from "../Images/general.jpg"

function Home() {
    return (
        <div>
            <Header />
            <ImageSlider />
            <AboutUS
                title={"BATOT DESIGNS"}
                basicInfo={"Batot Design was established in 2014 in Istanbul as an extension to its legacy company, Batot Jewelry, which has a history of jewelry Manufacturing, wholesaling and retailing in Palestine since 1984."}
                src={general}
                continueReading={"Continue Reading"} />
            <Designs />
            <NewCollections />
            <Rings />
            <Footer />
        </div>
    );
}

export default Home;