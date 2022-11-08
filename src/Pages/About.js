import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUS';
import OurPassion from '../Components/OurPassion';
import Designs from '../Components/Designs';
import model from '../Images/model.png'
import general from "../Images/general.jpg"
import aboutRing from "../Images/aboutRing.png"

function Home() {
    return (
        <div>
            <Header />
            <AboutUs
                title={"BATOT DESIGNS"}
                src={general}
                basicInfo={"Batot Design was established in 2014 in Istanbul as an extension to its legacy company, Batot Jewelry, which has a history of jewelry Manufacturing, wholesaling and retailing in Palestine since 1984."}
                aboutUs={"Batot has significant experience of doing business internationally with highly professional and result oriented team, and can provide proactive business support in the arena of global supply chain in jewelry industry."}
                moreInfo={"The coverage of the company's business encompasses Designing with creativity, Manufacturing with the state-of-the-art technology and skillsets, and Delivering our expertise and technical support to our clients. We are one of the few jewelry designers who offer end-to-end solutions to the jewelry manufacturers and wholesalers with continuous and consistent quality control with highly trained team."}
            />
            <AboutUs
                flexDirection={"row-reverse"}
                src={aboutRing}
                basicInfo={"We strive to meet the expectations of our valuable clients from different cultures and regions in order to keep up with the creative, precise, and fashionable designs."}
                aboutUs={"The company warmly welcomes its potential business partners from all over the world to do business with us!"}
            />
            <AboutUs
                title={"Business Model"}
                src={model}
                aboutUs={"Our business model is based on creative design solutions and customers’ needs. We identify customers’ taste and deliver the desired designs created by our professional team. We are actively expanding our collections of trendy and unique designs."}
            />
            <OurPassion />
            <Designs />
            <Footer />
        </div>
    );
}

export default Home;