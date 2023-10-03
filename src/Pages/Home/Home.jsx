import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    // step-2 
    const cards = useLoaderData()
    // console.log(cards)

    return (
        <div>

            <Banner ></Banner>

            <div>
                {/* step-3  */}
                <Cards cards={cards}></Cards>
            </div>
        </div>
    );
};

export default Home;