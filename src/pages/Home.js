import React from "react";
import Layout from "../components/Layout";

import opxElipseClean from "../assets/opx-elipse-clean.svg";
import iphones from "../assets/iphones.png";

export default function Home() {
	return (
		<Layout containerStyle="flex flex-row items-center overflow-x-hidden bg-blue r-1040:justify-center">
			<div className="flex flex-col r-1040:items-center items-start">
				<img
					src={opxElipseClean}
					alt="Opx browser"
					className="self-center r-1440:w-[130px] r-500:w-[100px] r-440:w-[85px] "
				/>
				<p className="text-primary text-5xl r-1440:text-4xl r-1100:text-3xl max-w-[650px] r-1440:max-w-[500px] r-1100:max-w-[400px] r-1040:text-center r-500:text-2xl r-500:max-w-[300px] r-440:text-xl mt-20 r-440:max-w-[250px]">
					To fly we need space and{" "}
					<strong className="bg-gradient-to-r text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default ">
						Opx
					</strong>{" "}
					can help you
				</p>
				<p className="text-dark-500 text-2xl r-1440:text-xl r-1100:text-lg max-w-[350px] r-1040:text-center r-1040:self-center r-500:text-base mt-12">
					<span className="font-bold">Opx</span> your easy and helpful mobile
					browser
				</p>
			</div>
			<img
				className="absolute customsize2:top-10 right-0 r-1440:w-[620px] r-1440:top-24 r-1200:w-[550px] r-1200:top-32 r-1040:hidden customsize:mt-[-80px]"
				src={iphones}
				alt="OpxBrowser app"
			/>
		</Layout>
	);
}
