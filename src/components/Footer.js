import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-[70px] flex items-center justify-center bg-white mt-8">
      <nav>
        <ul className="flex items-center not-sr-only">
          <FooterItem title="Data policy" href="/policy" isSeparated />
          <FooterItem title="Service Terms" href="/terms" isSeparated />
          <FooterItem title="Opx Browser 2022" href="/" />
        </ul>
      </nav>
    </div>
  );
}

const FooterItem = ({ title, href, isSeparated }) => {
  return (
    <NavLink href={href}>
      <li
        className={`text-sm text-primary hover:opacity-40 hover:transition-all hover:duration-400 ${
          isSeparated && "mr-36"
        }`}
      >
        {title}
      </li>
    </NavLink>
  );
};
