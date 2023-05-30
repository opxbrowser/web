import React from "react";

import { motion } from "framer-motion";

export default function InfoContainer({ children, title, description }) {
	return (
		<div className="flex flex-col  w-full h-[100%] mt-28  max-[800px]:mt-14">
			<div className="flex flex-row items-center justify-between max-[900px]:flex-col max-[900px]:items-start">
				<div className="flex flex-row items-center">
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 120 }}
						transition={{
							duration: 0.6,
							type: "spring",
						}}
						className="w-[120px] h-[4px] bg-dark max-[1100px]:hidden"
					/>

					<motion.h1
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
						className="ml-14 font-semibold text-6xl max-[1400px]:text-4xl max-[800px]:ml-4  max-[400px]:text-3xl"
					>
						{title}
					</motion.h1>
				</div>
				{description && (
					<motion.span
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
						className="text-base text-primary-400 font-normal mr-44 max-[1100px]:mr-14 max-[600px]:ml-4 max-[900px]:ml-14 max-[900px]:mr-0  max-[800px]:text-sm max-[800px]:ml-4"
					>
						{description}
					</motion.span>
				)}
			</div>
			<div className="px-44 mt-14 text-dark max-[1100px]:px-14 max-[800px]:px-2 max-[600px]:px-4">
				{children}
			</div>
		</div>
	);
}
