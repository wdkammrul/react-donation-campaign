import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center gap-3">
            <h1 className="text-4xl">Opps! Sorry!!</h1>

            <Link to="/"><button className="btn bg-red-800 text-white p-3 m-3 rounded-lg">Go Back</button> </Link>
        </div>
    );
};

export default ErrorPage;