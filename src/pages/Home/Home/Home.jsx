import ExtraSection from "../../ExtraSection/ExtraSection";
import ExtraSection1 from "../../ExtraSection1/ExtraSection1";
import Gallery from "../../Gallery/Gallery";
import TabSection from "../../TabSection/TabSection";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <ExtraSection1></ExtraSection1>
            <TabSection></TabSection>
            <ExtraSection></ExtraSection>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;