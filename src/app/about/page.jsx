"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Bootstrap",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
];
const AboutPage = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillTitleRef = useRef();
    const isSkillRefInView = useInView(skillTitleRef, { once: true });

    const experienceTitleRef = useRef();
    const isExperienceRefInView = useInView(experienceTitleRef, { once: true });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className="h-full overflow-scroll flex" ref={containerRef}>
                {/* Text container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:1/2 w-full">
                    {/* Biography */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* Bio Title */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* Bio Description */}
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse enim fugit sunt labore, harum repellendus
                            vel, optio quas natus cum dolorem incidunt. Aliquam
                            vitae porro magnam eos omnis! Facilis, autem.
                        </p>
                        <span className="italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </span>
                        <div className="md:w-1/2 w-full md:h-40 h-32 relative z-20 md:self-end self-center">
                            <Image
                                src="/signature.png"
                                fill
                                className="object-contain fill-black"
                            />
                        </div>
                    </div>
                    {/* Skills */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* Skills title */}
                        <motion.h1
                            initial={{ x: "-400px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="font-bold text-2xl"
                            ref={skillTitleRef}
                        >
                            SKILLS
                        </motion.h1>
                        {/* List skills */}
                        <div className="flex flex-row flex-wrap gap-4">
                            {skills.map((skill) => (
                                <div
                                    className="cursor-pointer bg-black text-white hover:bg-white hover:text-black rounded p-2 text-sm"
                                    key={skill}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Experience */}
                    <div className="flex flex-col gap-12 justify-center pb-48">
                        {/* Experience title */}
                        <motion.h1
                            initial={{ x: "-400px" }}
                            animate={isExperienceRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="font-bold text-2xl"
                            ref={experienceTitleRef}
                        >
                            EXPERIENCES
                        </motion.h1>
                        {/* Experience list */}
                        <div>
                            <div className="flex">
                                {/* Left */}
                                <div className="flex flex-col gap-4 w-full">
                                    <h2 className="text-xl font-bold bg-white p-2 rounded">
                                        Senior JavaScript Engineer
                                    </h2>
                                    <span className="italic">
                                        My current employment. Way better than
                                        the position before
                                    </span>
                                    <p className="text-sm text-pink-500">
                                        2024 - present
                                    </p>
                                    <p className="bg-white p-2 rounded text-black w-fit">
                                        Apple
                                    </p>
                                </div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center items-center">
                                    <div className="bg-gray-500 w-[2px] h-full relative flex justify-center">
                                        <div className="absolute top-3 w-5 h-5 bg-white rounded-full ring-4 ring-pink-500"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-full"></div>
                            </div>
                            <div className="flex">
                                {/* Left */}
                                <div className="w-full"></div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center items-center">
                                    <div className="bg-gray-500 w-[2px] h-full relative flex justify-center">
                                        <div className="absolute top-3 w-5 h-5 bg-white rounded-full ring-4 ring-pink-500"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="flex flex-col gap-4 w-full">
                                    <h2 className="text-xl font-bold bg-white p-2 rounded">
                                        Senior JavaScript Engineer
                                    </h2>
                                    <span className="italic">
                                        My current employment. Way better than
                                        the position before
                                    </span>
                                    <p className="text-sm text-pink-500">
                                        2024 - present
                                    </p>
                                    <p className="bg-white p-2 rounded text-black w-fit">
                                        Apple
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SVG Container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
