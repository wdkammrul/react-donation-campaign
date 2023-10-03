import { Link } from "react-router-dom";

// step-6 receive props
const Card = ({card}) => {

    const { id, picture, title, category, category_bg_color, card_bg_color, text_color } = card || {}

    return (
        <div className="mx-auto">

            {/* step-7 dynamic and link add */}
            <Link to={`/cards/${id}`}>
                <div style={{ backgroundColor: card_bg_color }} className="mt-10 relative rounded-lg  bg-clip-border shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-t-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className="w-96 md:w-[330px] lg:w-80 lg:h-48"
                            src={picture}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 style={{backgroundColor: category_bg_color, color: text_color}} className="block font-sans text-sm text-pink-500 bg-pink-500/10 font-medium leading-snug tracking-normal text-center w-32 rounded-lg antialiased">
                            {category}
                        </h4>
                        <p style={{ color: text_color }} className="mt-3 block font-sans font-semibold leading-relaxed text-gray-700  antialiased text-xl">
                            {title}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;