import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import MyAppoinments from "../../Layout/MyAppoinments/MyAppoinments";
import Appoinments from "../../Pages/Appoinment/Appoinments/Appoinments";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
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
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/my-appoinments",
                element: <MyAppoinments></MyAppoinments>
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default router;