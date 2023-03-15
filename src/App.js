import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";

import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/terms",
        element: <Terms />,
    },
    {
        path: "/policy",
        element: <Policy />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
