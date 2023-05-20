import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllToy from "../pages/AllToy/AllToy";
import Categories from "../pages/Categories/Categories";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Blog from "../pages/Blog/Blog";
import MyJobs from "../pages/MyJobs/MyJobs";
import Update from "../pages/Update/Update";
import FourOFour from "../pages/FourOFour/FourOFour";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

            {
                path: '/adtoy',
                element: <Categories></Categories>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
            },
            {
                path: 'details/:id',
                element: <ViewDetails></ViewDetails>,
                loader:({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/mytoy',
                element:<MyJobs></MyJobs>
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/mybookings/${params.id}`)
            }
        ]
    },
    {
        path:'*',
        element:<FourOFour></FourOFour>
    }
]);



export default router;