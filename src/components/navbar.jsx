"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const social = [
    { href: "/", src: "/github.png", alt: "Github" },
    { href: "/", src: "/dribbble.png", alt: "Dribbble" },
    { href: "/", src: "/facebook.png", alt: "Facebook" },
    { href: "/", src: "/instagram.png", alt: "Instagram" },
    { href: "/", src: "/linkedin.png", alt: "Linkedin" },
    { href: "/", src: "/pinterest.png", alt: "Pinterest" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 xl:text-xl">
            {/* Links */}
            <div className="hidden md:flex gap-4 lg:w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* Logo */}
            <div className="md:hidden lg:flex lg:justify-center lg:w-1/3">
                <Link
                    href="/"
                    className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white mr-1">PhucNguyen</span>
                    <span className="w-12 h-8 bg-white flex items-center justify-center">
                        .dev
                    </span>
                </Link>
            </div>
            {/* Social */}
            <div className="hidden md:flex gap-4 lg:w-1/3 lg:justify-center">
                {social.map((item) => (
                    <Link href={item.href} key={item.alt}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={24}
                            height={24}
                        />
                    </Link>
                ))}
            </div>
            {/* Responsive Menu */}
            <div className="md:hidden">
                {/* Button menu */}
                <button
                    className="w-10 h-8 flex flex-col justify-between relative z-50"
                    onClick={() => setOpen(!open)}
                >
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                </button>
                {/* Menu list */}
                {open && (
                    <div className="absolute top-0 left-0 flex flex-col w-screen h-screen bg-black text-white justify-center items-center gap-8">
                        {links.map((link) => (
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
