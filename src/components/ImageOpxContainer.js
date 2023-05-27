import opxElipse from "../assets/opx-elipse.svg";

export default function ImageOpxContainer() {
	return (
		<div className="w-full flex flex-col mt-10 items-center">
			<div>
				<img
					src={opxElipse}
					alt="Opx logo"
					className="w-[100px] max-[800px]:w-[80px] max-[600px]:w-[70px] max-[400px]:w-[60px]"
				/>
			</div>
			<span className="bg-gradient-to-r  text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default text-lg max-[600px]:text-base max-[400px]:text-sm">
				@Opx Browser
			</span>
		</div>
	);
}
