"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div
                key={pathName}
                className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
            >
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                    className="fixed top-0 left-0 right-0 bottom-0 m-auto text-white text-8xl z-50 w-fit h-fit"
                    initial={{ opacity: 1, display: "block" }}
                    animate={{ opacity: 0, display: "none" }}
                    exit={{ opacity: 0, display: "none" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {links.map((link) =>
                        pathName === link.url ? link.title : ""
                    )}
                </motion.div>
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.6 } }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
