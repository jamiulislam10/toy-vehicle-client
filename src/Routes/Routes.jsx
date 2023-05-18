import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllToy from "../pages/AllToy/AllToy";
import Categories from "../pages/Categories/Categories";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        // {
        //     path:'services/:id',
        //     element:<Categories></Categories>,
        // loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        // },
        // {
        //     path:'/addtoy',
        //     element:<AllToy></AllToy>
        // },
        {
            path:'/adtoy',
            element:<Categories></Categories>
        },
        {
            path:'/bookings',
            element:<PrivateRoute><AllToy></AllToy></PrivateRoute>
        }
      ]
    },
  ]);



  export default router;