import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const baseLink =
        "block py-2 text-sm font-medium transition";
    const desktopLink =
        "hover:text-accent";
    const activeLink =
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

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {[
                        { to: "/profil", label: "Profil" },
                        { to: "/ppdb", label: "PPDB" },
                        { to: "/berita", label: "Berita" },
                        { to: "/kontak", label: "Kontak" },
                    ].map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? activeLink : desktopLink
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Burger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <XMarkIcon className="w-7 h-7" />
                    ) : (
                        <Bars3Icon className="w-7 h-7" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-primary/95 border-t border-blue-800">
                    <nav className="px-6 py-4 space-y-2">
                        {[
                            { to: "/profil", label: "Profil" },
                            { to: "/ppdb", label: "PPDB" },
                            { to: "/berita", label: "Berita" },
                        ].map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? activeLink : "text-white"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
