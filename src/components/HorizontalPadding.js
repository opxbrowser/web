import React from "react";

function HorizontalPadding({ children, containerStyle }) {
	return (
		<main
			className={`px-52 h-[81.8%] ${containerStyle} max-[1200px]:px-24 max-[600px]:px-8 max-[400px]:px-4`}
		>
			{children}
		</main>
	);
}

export default HorizontalPadding;
