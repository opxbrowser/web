import React from "react";
import Layout from "../components/Layout";

import opxElipseClean from "../assets/opx-elipse-clean.svg";
import googlePlayBadge from "../assets/google-play-badge.svg";
import iphones from "../assets/iphones.jpg";

export default function Home() {
	return (
		<Layout>
			<main className="flex items-center overflow-x-hidden">
				<div className="flex flex-col mt-14">
					<img src={opxElipseClean} alt="Opx browser" className="self-center" />
					<p className="text-primary text-5xl max-w-[650px] mt-20">
						To fly we need space and{" "}
						<strong className="bg-gradient-to-r  text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default ">
							Opx
						</strong>{" "}
						can help you
					</p>
					<p className="text-dark-500 text-2xl max-w-[350px] mt-5">
						<strong className="font-bold">Opx</strong> your easy and helpful
						mobile browser
					</p>
					<p className="text-primary-400 text-base mt-14">
						Choose your platform to install:
					</p>
					<a
						href="https://play.google.com/store"
						target="_blank"
						className="flex bg-white w-[172px] "
						rel="noreferrer"
					>
						<img
							src={googlePlayBadge}
							alt="google play banner"
							className="w-[172px] mt-5 cursor-pointer"
						/>
					</a>
				</div>
				<img
					className="absolute top-14 right-0 z-10"
					src={iphones}
					alt="OpxBrowser app"
				/>
			</main>
		</Layout>
	);
}
