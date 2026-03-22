import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyApp</h1>

      <nav className="flex gap-3">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink to="/github" className={linkClass}>Github</NavLink>
      </nav>
    </header>
  );
}

export default Header;