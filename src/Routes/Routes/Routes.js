import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Header from "../../Components/Header/Header";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           
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
            
        ]
        
    }
])