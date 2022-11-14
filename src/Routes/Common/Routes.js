import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinments from "../../Pages/Appoinment/Appoinments/Appoinments";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Home/Signup/Signup";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../Private/PrivateRoute";

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
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>
    }
]);

export default router;