import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

// step-15 
const SingleCardDetails = ({cardDetails}) => {

    // step-16 
    const { id, picture, title, category, description, category_bg_color, card_bg_color, price, text_button_bg_color } = cardDetails || {}

    // step-19 
    const handleAddToDonate = ()=> {

        // step-21 
        const addedDonateArray = [];

        // step-20 
        const donateItems = JSON.parse(localStorage.getItem('donate'))

        // step-22 
        if(!donateItems){
            addedDonateArray.push(cardDetails)
            localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            toast('👍 Donation Completed Successfully.')
        }
        else{


            // step-23 
            const isExist = donateItems.find(card => card.id === id)
            if(!isExist){
                addedDonateArray.push(...donateItems, cardDetails)
                localStorage.setItem('donate', JSON.stringify(addedDonateArray))
            }
            else{
                swal("Error !", "Already donated !", "error");
            }

        }

        // step-20 
        // localStorage.setItem('test', 'kamrul')
    }

    return (

        
        // step-17 
       <div className="mb-52">
            <figure className="relative lg:h-[500px] h-[210px] w-[315px] mx-auto lg:w-full">
                <img
                    className="lg:w-full lg:h-full rounded-xl object-cover object-center"
                    src={picture}
                />
                <figcaption  className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-lg border border-white bg-[#0B0B0B80] py-6 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm text-white">
                     
                    {/* step-18 onClick  */}
                    <button   
                    onClick={handleAddToDonate}
                    style={{ backgroundColor: text_button_bg_color }} className="bg-red-600 py-2 px-2 lg:py-4 lg:px-6 w-56 rounded-lg">Donate {price}</button>
                </figcaption>

                <h1 className="mt-12 font-bold text-5xl">{category}</h1>

                <p className="my-8 text-2xl font-medium">{description}</p>
            </figure>
            <ToastContainer />
       </div>
    );
};

export default SingleCardDetails;