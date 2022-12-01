import navItem from '../../assets/navItem.png';

const Navbar = () => {
    return (
        <>
            <div className="relative ">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#!" className="text-dark-blue text-xl font-bold">
                                Pet-first
                            </a>
                        </div>
                        <nav className="space-x-16 flex">
                            <img src={navItem} className="absolute z-0" />
                            <a href="#!" className="text-sm text-white z-10">About</a>
                            <a href="#!" className="text-sm text-dark-blue">Service</a>
                            <a href="#!" className="text-sm text-dark-blue">Modi-Care</a>
                            <a href="#!" className="text-sm text-dark-blue">Blog</a>
                        </nav>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a href="#!" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-white  px-8 py-3 text-xl font-medium text-white   ">Sign up</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar