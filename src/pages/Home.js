import React from "react";
import Layout from "../components/Layout";

import opxElipseClean from "../assets/opx-elipse-clean.svg";
import googlePlayBadge from "../assets/google-play-badge.svg";
import iphones from "../assets/iphones.jpg";

export default function Home() {
	return (
		<Layout>
			<main className="flex items-center overflow-x-hidden  max-[950px]:justify-center">
				<div className="flex flex-col mt-14">
					<img
						src={opxElipseClean}
						alt="Opx browser"
						className="self-center max-[1440px]:w-[130px] max-[500px]:w-[100px] max-[440px]:w-[85px] "
					/>
					<p className="text-primary text-5xl max-[1440px]:text-4xl max-[1100px]:text-3xl max-w-[650px] max-[1440px]:max-w-[500px] max-[1100px]:max-w-[400px] max-[950px]:text-center max-[500px]:text-2xl max-[500px]:max-w-[1000px] max-[440px]:text-xl mt-20">
						To fly we need space and{" "}
						<strong className="bg-gradient-to-r text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default ">
							Opx
						</strong>{" "}
						can help you
					</p>
					<p className="text-dark-500 text-2xl max-[1440px]:text-xl max-[1100px]:text-lg max-w-[350px] max-[950px]:text-center max-[950px]:self-center max-[500px]:text-base mt-5">
						<span className="font-bold">Opx</span> your easy and helpful mobile
						browser
					</p>
					<p className="text-primary-400 text-base mt-14 max-[950px]:text-center max-[500px]:text-sm">
						Choose your platform to install:
					</p>
					<a
						href="https://play.google.com/store"
						target="_blank"
						className="bg-white w-[172px] max-[950px]:self-center"
						rel="noreferrer"
					>
						<img
							src={googlePlayBadge}
							alt="google play banner"
							className="w-[172px] mt-5 cursor-pointer max-[500px]:w-[140px] max-[500px]:self-center"
						/>
					</a>
				</div>
				<img
					className="absolute top-14 right-0 z-10 max-[1440px]:w-[600px] max-[1440px]:top-24 max-[1100px]:w-[500px] max-[1100px]:top-32 max-[950px]:hidden"
					src={iphones}
					alt="OpxBrowser app"
				/>
			</main>
		</Layout>
	);
}
