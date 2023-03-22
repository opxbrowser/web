import React from "react";

const padding = "px-24";

function HorizontalPadding({ children }) {
	return <div className={`${padding} max-[400px]:px-8`}>{children}</div>;
}

export default HorizontalPadding;
