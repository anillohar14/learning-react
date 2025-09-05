// step 1: let install  the routing library (npm i react-router)
// step 2: now Import the requirements
// step 3:  create a router variable and assign
// step 4: now passing the RouterProvider to render
// step 5: now give the value to the obj in the createBrowserRoot and pass the App to the component key
// step 6: create an new obj below the one in createBrowserRoot and pass a h1 tag in the element key
// step 7: this will help to render the contact when we chage the url with the end like this (/contact)
// step 8: now let write the children key in the first obj
// step 8: Now let make the header component visabel to all the roots for this we have to make home component and paste all the code from the app.jsx file
// step 9: Now let create an error component this component will render when the use go to unknown page and add it to the outer obj of router and pass it to errorElement key
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
      {
        path: "/country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
