import React from "react";

const padding = "px-24";

function HorizontalPadding({ children }) {
	return <div className={`${padding}`}>{children}</div>;
}

export default HorizontalPadding;
