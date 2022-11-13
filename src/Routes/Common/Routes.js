import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinments from "../../Pages/Appoinment/Appoinments/Appoinments";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Home/Signup/Signup";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/appoinment",
                element: <Appoinments></Appoinments>
            }
        ]
    }
]);

export default router;