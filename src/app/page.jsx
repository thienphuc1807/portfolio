import Image from "next/image";

const Homepage = () => {
    return (
        <div className="h-full flex md:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            {/* Image container */}
            <div className="h-full w-full relative">
                <Image
                    src="/hero.png"
                    alt="Image"
                    fill
                    className="object-contain"
                />
            </div>
            {/* Text container */}
            <div className="w-full h-full py-8 flex flex-col gap-8 items-center justify-center">
                {/* Title */}
                <h1 className="text-4xl font-bold">
                    Crafting Digital Experiences, Designing Tomorrow
                </h1>
                {/* Description */}
                <span className="text-justify">
                    Welcome to my digital canvas, where innovation and
                    creativity converge. With a keen eye for aesthetics and a
                    mastery of code, my portfolio showcases a diverse collection
                    of projects that refect my commitment to excellence.
                </span>
                {/* Buttons */}
                <div className="w-full flex gap-4">
                    <button className="bg-black text-white ring-1 ring-black text-sm rounded-lg p-4 border-black ">
                        View my work
                    </button>
                    <button className="bg-white text-black ring-1 ring-black text-sm rounded-lg p-4 border-black">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
