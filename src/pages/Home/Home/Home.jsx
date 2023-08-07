import ExtraSection from "../../ExtraSection/ExtraSection";
import ExtraSection1 from "../../ExtraSection1/ExtraSection1";
import ExtraSection2 from "../../ExtraSection2/ExtraSection2";
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
            <ExtraSection2></ExtraSection2>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;