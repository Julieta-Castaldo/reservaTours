import {MainSection} from "../Components/sections/MainSection/MainSection.jsx";
import {ToursSection} from "../Components/sections/ToursSection/ToursSection.jsx";
import {CategoriesSection} from "../Components/sections/CategoriesSection/CategoriesSection.jsx";
import {DividerSection} from "../Components/sections/DividerSection/DividerSection.jsx";

const Home = () => {
    return (
        <main>
            <MainSection/>
            <DividerSection padding={'20rem 20% 5rem 20%;'}/>
            <ToursSection/>
            <DividerSection padding={'5rem 20% 5rem 20%;'}/>
            <CategoriesSection/>
        </main>
    )
}

export default Home;