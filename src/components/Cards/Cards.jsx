/* eslint-disable react/prop-types */
import Card from "./Card";

// step-4 
const Cards = ({ cards }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 py-16">

            {/* step-5 map and send card props */}
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;