import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";


const Donation = () => {

    // step-24 
    const [donate, setDonate] = useState([]);

    // step-27 
    const [noFound, setNoFound] = useState(false)

    // step-25 
    useEffect(() => {
        const donateItems = JSON.parse(localStorage.getItem('donate'))

        // step-26 
        if (donateItems) {
            setDonate(donateItems)
        }
        // step-28 
        else {
            setNoFound('No data found!')
        }
    }, [])

    // console.log(donate)


    const [isExist, setIsExist] = useState(false);



    return (

        <div>
            {/* step-29  */}
            {
                noFound ? <p className="text-6xl items-center text-center h-screen">{noFound}</p>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* step-30 send props card */}
                        {
                            isExist ?
                                donate?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                :
                                donate?.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>

            }

            {donate.length > 4 && !isExist && (
                <div className="text-center mt-10">
                    <button onClick={() => setIsExist(!isExist)} className="px-8 py-2 bg-[#009444] text-white rounded-lg ">Show All</button>
                </div>

            )}
        </div>
    );
};

export default Donation;