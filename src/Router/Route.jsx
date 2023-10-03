import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardDetails from "../Pages/CardDetails/CardDetails";

const myCreateRouter = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
         children: [
            {
               path: "/",
               element: <Home></Home>,

               // step-1 
               loader: () => fetch('/cards.json')
            },
            {
               path: "/donation",
               element: <Favorites></Favorites>
            },
            {
               path: "/statistics",
               element: <Statistics></Statistics>,

               // step-2 statistics
               loader: () => fetch('/cards.json')
            },

            // step-8 
            {
               path: "/cards/:id",
               element: <CardDetails></CardDetails>,
               loader: () => fetch('/cards.json')
            }
       ]
    }
])

export default myCreateRouter;