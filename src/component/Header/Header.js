import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
    const [open, SetOpen] = useState(false);
    const routs = [
        { id: 1, name: "Home", link: "/home" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Contact", link: "/contact" },
        { id: 4, name: "Shop", link: "/shop" },
        { id: 5, name: "Order", link: "/order" },
    ];
    return (
        <header>
            <nav className="text-yellow-50 text-3xl w-full bg-slate-400 p-4">
                <div
                    onClick={() => SetOpen(!open)}
                    className="w-12 h-12 md:hidden"
                >
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul
                    className={`md:flex absolute md:static duration-500 ease-in bg-slate-400 p-4 right-0 w-full ${
                        open ? "top-20" : "top-[-300px]"
                    }`}
                >
                    {routs.map(route => (
                        <Link key={route.id} route={route}></Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
