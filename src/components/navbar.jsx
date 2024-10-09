import Link from "next/link";

const Navbar = () => {
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            {/* logo */}
            <div>
                <Link
                    href="/"
                    className="bg-black rounded-md p-1 font-semibold flex items-center justify-center"
                >
                    <span className="text-white pr-1">PhucNguyen</span>
                    <span className="w-12 h-8 bg-white flex items-center justify-center">
                        .dev
                    </span>
                </Link>
            </div>
            {/* Responsive Menu */}
            <div>2</div>
        </div>
    );
};

export default Navbar;
