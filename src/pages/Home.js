import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

import opxElipseClean from "../assets/opx-elipse-clean.svg";
import googlePlayBadge from "../assets/google-play-badge.svg";
import iphoneOpx1 from "../assets/iphone-opx-1.svg";
import iphoneOpx2 from "../assets/iphone-opx-2.svg";
import iphoneOpx3 from "../assets/iphone-opx-3.svg";

export default function Home() {
	return (
		<Layout>
			<div className="grid grid-cols-2 pl-24 pr-24 mt-24 ">
				<div className="flex flex-col ">
					<img
						src={opxElipseClean}
						alt="Opx browser"
						className="mb-20 h-[201px] w-[176px] self-center"
					/>
					<p className="text-primary text-5xl max-w-[650px]">
						To fly we need space and{" "}
						<span className="bg-gradient-to-r  text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default font-bold">
							Opx
						</span>{" "}
						can help you
					</p>
					<p className="text-dark-500 text-2xl max-w-[350px] mt-5">
						<strong className="font-bold">Opx</strong> your easy and helpful
						mobile browser
					</p>
					<p className="text-primary-400 text-base mt-14">
						Choose your platform to install:
					</p>
					<Link to="#" className="flex bg-white w-[172px] ">
						<img
							src={googlePlayBadge}
							alt="google play banner"
							className="w-[172px] mt-5 cursor-pointer"
						/>
					</Link>
				</div>
				<div className="w-full  h-[600px]">
					<div className="relative rotate-6 rounded-[35px] border-2 border-primary w-[600px] h-[600px] left-[400px] z-10 "></div>
					<div className="relative rotate-6 rounded-[35px] border-2 border-pink border-spacing-1 w-[600px] h-[600px] left-[405px] bottom-[630px] border-dashed"></div>
					<img
						src={iphoneOpx1}
						alt="phone"
						className="relative left-[210px] z-10 bottom-[1200px] "
					/>
					<img
						src={iphoneOpx2}
						alt="phone"
						className="relative bottom-[1785px] left-[470px] z-10"
					/>
					<img
						src={iphoneOpx3}
						alt="phone"
						className="relative bottom-[2550px] left-[695px] z-10"
					/>
				</div>
			</div>
		</Layout>
	);
}
