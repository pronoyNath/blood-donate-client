import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import DonationLists from "../../components/DonationLists/DonationLists";
import Features from "../../components/Features/Features";
import HeartBeat from "../../components/HeartBeat/HeartBeat";
import OurVolunteers from "../../components/OurVolunteers/OurVolunteers";
import Footer from "../../sharedComponents/Footer/Footer";
import SentenceMaker from "../SentenceMaker/SentenceMaker";
import Gallary3d from "../../components/Gallary3d/Gallary3d";


const Home = () => {

    return (
        <div className="overflow-x-hidden">

            <Banner />
            <Gallary3d />
            <HeartBeat />
            <Features />
            <SentenceMaker />
            <DonationLists />
            <OurVolunteers />
            <ContactUs />
            <Footer />

        </div>
    );
};

export default Home;