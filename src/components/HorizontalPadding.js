import React from "react";

function HorizontalPadding({ children, containerStyle }) {
	return (
		<main
			className={`px-52 h-[81.8%] ${containerStyle} r-1200:px-24 r-600:px-8 r-400:px-4`}
		>
			{children}
		</main>
	);
}

export default HorizontalPadding;
