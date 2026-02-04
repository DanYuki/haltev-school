import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function Navbar() {
    const linkClass =
        "hover:text-accent transition";

    const activeClass =
        "text-accent font-semibold";

    return (
        <header className="fixed top-0 w-full z-50 bg-primary/90 text-white backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Sekolah Haltev" className="h-10" />
                    <span className="text-xl font-bold whitespace-nowrap">
                        Sekolah Haltev
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <NavLink
                        to="/profil"
                        className={({ isActive }) =>
                            isActive ? activeClass : linkClass
                        }
                    >
                        Profil
                    </NavLink>

                    <NavLink
                        to="/ppdb"
                        className={({ isActive }) =>
                            isActive ? activeClass : linkClass
                        }
                    >
                        PPDB
                    </NavLink>

                    <NavLink
                        to="/berita"
                        className={({ isActive }) =>
                            isActive ? activeClass : linkClass
                        }
                    >
                        Berita
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
