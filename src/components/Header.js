import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { BiMenu, BiX, BiChevronLeft } from "react-icons/bi";

import HeaderBg from "../assets/header-bg.png";

export default function Header() {
	const [showsMenu, setShowsMenu] = useState(false);

	const menuOptions = useCallback(
		(isSeparated) => [
			{ id: 1, name: "Home", href: "/" },
			{ id: 2, name: "Why Opx?", href: "/why", isSeparated },
			{ id: 3, name: "Install App", href: "/app", isSeparated },
		],
		[]
	);

	return (
		<>
			<div className="w-full h-[70px] flex items-center justify-center border-b-2 border-white max-[800px]:justify-end">
				<nav className="max-[800px]:hidden">
					<ul className="flex items-center not-sr-only">
						{menuOptions(true).map((item) => (
							<HeaderItem
								key={item.id}
								title={item.name}
								href={item.href}
								isSeparated={item.isSeparated}
							/>
						))}
					</ul>
				</nav>
				<motion.div
					whileTap={{ scale: 0.8 }}
					onClick={() => setShowsMenu(!showsMenu)}
					className="mx-14 bg-primary-200 w-12 h-12 rounded-full justify-center items-center hidden max-[800px]:flex"
				>
					{!showsMenu ? (
						<BiMenu size={32} color={"#8A4FFF"} />
					) : (
						<BiX size={32} color={"#8A4FFF"} />
					)}
				</motion.div>
				<img
					src={HeaderBg}
					alt="header background"
					className="absolute -z-10 h-[100%] w-[100%] max-[800px]:w-[5S00px] max-[800px]:h-[200%]"
				/>
			</div>
			<AnimatePresence>
				{showsMenu && (
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						className="absolute w-[300px] h-[350px] px-10 bg-white rounded-3xl right-8 top-22 shadow-md"
					>
						<div
							onClick={() => setShowsMenu(!showsMenu)}
							className="flex flex-row items-center mt-8"
						>
							<BiChevronLeft size={28} />
							<span className="text-xl ml-4">Menu</span>
						</div>
						<ul className="h-full flex items-start flex-col mt-8">
							{menuOptions().map((item, index) => (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: index / 4 }}
								>
									<HeaderItem
										key={item.id}
										title={item.name}
										href={item.href}
										isSeparated={item.isSeparated}
										color={"#8A4FFF"}
										contentStyle="text-left mb-8 font-normal text-3xl"
									/>
								</motion.div>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

const HeaderItem = ({
	title,
	isSeparated,
	href,
	color = "#FFFFFF",
	contentStyle = "",
}) => {
	return (
		<NavLink to={href}>
			<li
				className={`text-white font-medium text-lg hover:text-black hover:duration-300 ${
					isSeparated && "ml-60"
				} ${contentStyle}`}
				style={{
					color,
				}}
			>
				{title}
			</li>
		</NavLink>
	);
};
