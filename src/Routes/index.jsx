import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BigSpinner from "../components/BigSpinner/BigSpinner";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        loader:BigSpinner,
    },
  
])

