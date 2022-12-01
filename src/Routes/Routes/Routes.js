import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../../Pages/About/About";
import AllBooks from "../../Pages/Books/AllBooks/AllBooks";
import TypeBooks from "../../Pages/Books/TypeBooks/TypeBooks";
import WriterBooks from "../../Pages/Books/WriterBooks/WriterBooks";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/all-books',
                element:<AllBooks></AllBooks>
            },
            {
                path:'/writers/:id',
                element:<WriterBooks></WriterBooks>,
                loader: ({ params })=>fetch(`http://localhost:5000/writers/${params.id}`)
            },
            {
                path:'/types/:id',
                element:<TypeBooks></TypeBooks>,
                loader: ({ params })=>fetch(`http://localhost:5000/types/${params.id}`)
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])
export default router;