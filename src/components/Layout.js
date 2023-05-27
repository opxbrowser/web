import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import { ScrollRestoration } from "react-router-dom";
import HorizontalPadding from "./HorizontalPadding";

export default function Layout({ children, containerStyle }) {
	return (
		<div className="min-w-full h-[100vh] overflow-x-hidden">
			<Header />
			<HorizontalPadding containerStyle={containerStyle}>
				{children}
			</HorizontalPadding>
			<Footer />
			<ScrollRestoration />
		</div>
	);
}
