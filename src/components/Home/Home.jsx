import MainSlider from "./MainSlider/MainSlider.jsx";
import TopCategory from "./TopCategory/TopCategory.jsx";
import ChooseUs from "./ChooseUs/ChooseUs.jsx";
import StudentsTestimonials from './StudentsTestimonials/StudentsTestimonials.jsx'
import FactsAndFigures from "./FactsAndFigures/FactsAndFigures.jsx";
import ActivitiesAndEvents from './ActivitiesAndEvents/ActivitiesAndEvents.jsx'
import Eservices from './E-services/E-services.jsx'
import FrequentlyAskedQuestions from './frequentlyAskedQuestions/frequentlyAskedQuestions.jsx'
import TellDetails from './TellDetails/TellDetails.jsx'
// import Footerr from '../Footer/Footer.jsx'
const Home = () => {
    return (
        <>

            <MainSlider/>
            <TopCategory/>
            <ChooseUs/>
            <FactsAndFigures/>
            <StudentsTestimonials/>
            <ActivitiesAndEvents/>
            <Eservices/>
            <FrequentlyAskedQuestions/>
            <TellDetails/>
            {/*<Footerr/>*/}


        </>


    );
};

export default Home;