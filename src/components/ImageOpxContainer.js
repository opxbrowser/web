import opxElipse from "../assets/opx-elipse.svg";

export default function ImageOpxContainer() {
	return (
		<div className="w-full flex flex-col mt-10 items-center">
			<div>
				<img
					src={opxElipse}
					alt="Opx logo"
					className="w-[100px] r-800:w-[80px] r-600:w-[70px] r-400:w-[60px]"
				/>
			</div>
			<span className="bg-gradient-to-r  text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default text-lg r-600:text-base r-400:text-sm">
				@Opx Browser
			</span>
		</div>
	);
}
