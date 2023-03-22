import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Why from "./pages/Why";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/why",
		element: <Why />,
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
