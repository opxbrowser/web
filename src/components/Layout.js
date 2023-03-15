import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import { ScrollRestoration } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <div className="min-w-full">
            <Header />
            {children}
            <Footer />
            <ScrollRestoration />
        </div>
    );
}
