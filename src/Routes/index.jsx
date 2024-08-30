import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BigSpinner from "../components/BigSpinner/BigSpinner";
import Contact from "../components/Contact/Contact";
import Detail from "../components/Detail/Detail";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        loader:BigSpinner,
    },
    {
        path:"nosotras",
        element: <Contact/>,
        loader:BigSpinner

    },
    {
        path:"detalle",
        element:<Detail/>,
        loader:BigSpinner
    }
])

