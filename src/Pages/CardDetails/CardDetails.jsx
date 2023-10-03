import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardDetails from "./SingleCardDetails";

const CardDetails = () => {

    // step-11 
    const [cardDetails, setCardDetails] = useState()

    

    // step-9 
    const {id} = useParams();
    

    // step-10 
    const cards = useLoaderData();
    // console.log(cards)

    // step-12 
    useEffect(() => {
        const findCard = cards?.find(card => card.id === id)
        // console.log(findCard) 

        // step-13  
        setCardDetails(findCard);
    }, [id, cards])

    return (
        <div>
            {/* step-14 send props */}
            <SingleCardDetails cardDetails={cardDetails}></SingleCardDetails>
        </div>
    );
};

export default CardDetails;