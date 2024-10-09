"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

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

    // Variants
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: "0",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

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
                    <span className="w-12 h-8 bg-white flex items-center justify-center rounded">
                        .dev
                    </span>
                </Link>
            </div>
            {/* Social */}
            <div className="hidden md:flex gap-4 lg:w-1/3 lg:justify-end">
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
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                </button>
                {/* Menu list */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 flex flex-col w-screen h-screen bg-black text-white justify-center items-center gap-8 z-40 text-4xl"
                    >
                        {links.map((link) => (
                            <motion.div
                                variants={listItemVariants}
                                key={link.title}
                            >
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
