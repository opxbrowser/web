import React from "react";

import { motion } from "framer-motion";

export default function InfoContainer({ children, title, description }) {
	return (
		<div className="flex flex-col  w-full h-[100%] mt-28  r-800:mt-14">
			<div className="flex flex-row items-center justify-between r-900:flex-col r-900:items-start">
				<div className="flex flex-row items-center">
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 120 }}
						transition={{
							duration: 0.6,
							type: "spring",
						}}
						className="w-[120px] h-[4px] bg-dark r-1100:hidden"
					/>

					<motion.h1
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
						className="ml-14 font-semibold text-6xl r-1400:text-4xl r-800:ml-4  max-[400px]:text-3xl"
					>
						{title}
					</motion.h1>
				</div>
				{description && (
					<motion.span
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, type: "spring" }}
						className="text-base text-primary-400 font-normal mr-44 r-1100:mr-14 r-600:ml-4 r-900:ml-14 r-900:mr-0  r-800:text-sm r-800:ml-4"
					>
						{description}
					</motion.span>
				)}
			</div>
			<div className="px-44 mt-14 text-dark r-1100:px-14 r-800:px-2 r-600:px-4">
				{children}
			</div>
		</div>
	);
}
