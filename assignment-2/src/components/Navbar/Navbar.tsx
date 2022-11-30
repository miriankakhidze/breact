import React from "react";
import navItem from '../../assets/navItem.png'

const Navbar = () => {
    return (
        <>
            <div className="relative ">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#!" className="text-dark-blue text-xl">
                                Pet-first
                            </a>
                        </div>
                        {/* <div className="-my-2 -mr-2 md:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div> */}
                        <nav className="hidden space-x-16 md:flex">
                            <img src={navItem} className="absolute z-0" />
                            <a href="#!" className="text-sm text-white z-10">About</a>
                            <a href="#!" className="text-sm text-dark-blue">Service</a>
                            <a href="#!" className="text-sm text-dark-blue">Modi-Care</a>
                            <a href="#!" className="text-sm text-dark-blue">Blog</a>
                        </nav>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a href="#!" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-white  px-4 py-2 text-base font-medium text-white   ">Sign up</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar