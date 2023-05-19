import {MainSection} from "../Components/sections/MainSection/MainSection.jsx";
import {ToursSection} from "../Components/sections/ToursSection/ToursSection.jsx";
import {CategoriesSection} from "../Components/sections/CategoriesSection/CategoriesSection.jsx";

const Home = () => {
    return (
        <main>
            <MainSection/>
            <ToursSection/>
            <CategoriesSection/>
        </main>
    )
}

export default Home;