import {createBrowserRouter} from "react-router-dom";
import { Login } from "../components/login";
import { Register } from "../components/register";
import App from "../App";

const router=createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element: <Login />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]);

export default router;