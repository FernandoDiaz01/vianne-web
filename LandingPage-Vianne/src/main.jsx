import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

/* import App from "./App.jsx";
 */import "./index.css";
import BigSpinner from "./components/BigSpinner/BigSpinner";
import { router } from "./Routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} 
  fallbackElement={<BigSpinner/>}
  />
   

);
