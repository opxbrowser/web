import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div
			className={`w-full h-[70px] flex items-center justify-center bg-white mt-8 max-[680px]:mt-20 `}
		>
			<nav>
				<ul className="flex items-center not-sr-only max-[680px]:hidden">
					<FooterItem title="Data policy" href="/policy" isSeparated />
					<FooterItem title="Service Terms" href="/terms" isSeparated />
					<FooterItem title="@Opx Browser 2022" href="/" disabled />
				</ul>
				<ul className="flex-col justify-center items-center not-sr-only hidden max-[680px]:flex">
					<FooterItem title="Data policy" href="/policy" bottomSeparated />
					<FooterItem title="Service Terms" href="/terms" bottomSeparated />
					<FooterItem
						title="@Opx Browser 2023"
						href="/"
						disabled
						bottomSeparated
					/>
				</ul>
			</nav>
		</div>
	);
}

const FooterItem = ({
	title,
	href,
	isSeparated,
	bottomSeparated,
	disabled,
}) => {
	return !disabled ? (
		<Link to={href}>
			<li
				className={`text-sm text-primary hover:opacity-40 hover:transition-all hover:duration-400 ${
					isSeparated && "mr-36"
				} ${bottomSeparated && "mb-8"}`}
			>
				{title}
			</li>
		</Link>
	) : (
		<li
			className={`text-sm text-primary hover:opacity-40 hover:transition-all hover:duration-400 ${
				isSeparated && "mr-36"
			} cursor-default ${bottomSeparated && "mb-8"}`}
		>
			{title}
		</li>
	);
};
