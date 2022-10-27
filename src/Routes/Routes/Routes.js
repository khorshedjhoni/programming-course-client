import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CheckOut from "../../Components/CheckOut/CheckOut";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import SingleCourse from "../../Components/SingleCOurse/SingleCourse";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
                
            },
            {
                path:'faq',
                element:<FAQ></FAQ>
            },
            {
                path:'courses',
                element:<Courses></Courses>
            },
            {
                path:'/course/:id',
                element:<SingleCourse></SingleCourse>,
                loader:async({params})=>fetch(`https://course-server-gamma.vercel.app/course-data/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:async({params})=>fetch(`https://course-server-gamma.vercel.app/course-data/${params.id}`)
                
            }
            ,
        {
            path:'*',
            element:<div>404: Not Found the rout</div>
        }
        ]
    }
])