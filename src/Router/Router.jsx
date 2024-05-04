import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/blogs',
                element:<PrivateRouter><Blogs/></PrivateRouter>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
            {
                path:'/signIn',
                element:<SignIn/>
            }
        ]
    },
]);