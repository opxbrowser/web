import opxElipse from "../assets/opx-elipse.svg";

export default function ImageOpxContainer() {
  return (
    <div className="w-full flex flex-col mt-10 items-center">
      <div>
        <img src={opxElipse} alt="Opx logo" className="w-[141px] h-[119px]" />
      </div>
      <span className="bg-gradient-to-r  text-transparent bg-clip-text from-primary to-pink mt-10 hover:from-pink hover:to-primary hover:transition-all cursor-default">
        @Opx Browser 2022
      </span>
    </div>
  );
}
