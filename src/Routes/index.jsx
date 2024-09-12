import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BigSpinner from "../components/BigSpinner/BigSpinner";
/* import Detail from "../components/Detail/Detail"; */


export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        loader:BigSpinner,
    }
   /*  {
        path:"/detail",
        element:<Detail/>,
        loader:BigSpinner
    } */
  
])

