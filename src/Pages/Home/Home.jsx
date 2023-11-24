import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import OurVolunteers from "../../components/OurVolunteers/OurVolunteers";
import Footer from "../../sharedComponents/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurVolunteers></OurVolunteers>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;