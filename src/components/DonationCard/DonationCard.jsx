/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({card}) => {
    

    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, price, text_button_bg_color } = card || {}

    return (

        <div style={{ backgroundColor: card_bg_color }} className="mt-10 relative flex lg:w-full md:w-full lg:max-w-[48rem] max-w-[390px] md:max-w-[580px] mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="p-6">
                <h6 style={{ color: text_color, backgroundColor: category_bg_color }} className="mb-4 block font-sans text-base font-semibold  leading-relaxed tracking-normal  text-center w-32 rounded-lg  antialiased">
                        {category}
                    </h6>
                    <h4 style={{color:text_color}} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{color:text_color}} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {price}
                    </p>
                   
                    <Link to={`/cards/${id}`}><button
                        style={{ backgroundColor: text_button_bg_color }}
                        className="flex select-none  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white transition-all bg-pink-500 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        View Details

                    </button></Link>
                   
                </div>
          </div>

          
 
    );
};

export default DonationCard;