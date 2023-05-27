import React from "react";

function Section({ title, children }) {
	return (
		<section className="mt-6">
			{title && <h2 className="font-semibold text-2xl">{title}</h2>}
			<p className="text-justify text-xl leading-6 mt-4">{children}</p>
		</section>
	);
}

export default Section;
