"use client";

import React, {useState} from "react";

import Content from "./_components/Content";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

import About from "./_components/About";
import Resume from "./_components/Resume";
import Blog from "./_components/Blog";
import Certifications from "./_components/Certifications";
import Projects from "./_components/Projects";
import {GiHamburgerMenu} from "react-icons/gi";
import MobileMenu from "./_components/MobileMenu";

import MyLinks from "./_components/MyLinks";

export default function Home() {
    // Map tab index to corresponding component
    const tabComponents = {
        0: <About />,
        1: <Resume />,
        2: <Projects />,
        3: <Certifications />,
        4: <Blog />,
    };

    const [tab, setTab] = useState(1); // Initialize with the default tab

    const [showNavbar, setShowNavbar] = useState(true); // Initially show navbar on larger screens

    // Function to toggle navbar visibility on smaller screens
    const toggleNavbar = () => {
        // alert("Hi Rahul");
        setShowNavbar(!showNavbar);
    };

    return (
        <>
            <div className="font-Lexend">
                <div className="flex items-center justify-between sm:mx-20 mx-5">
                    <h1 className="p-3 pl-0 font-semibold">
                        <div className="hidden md:block font-Outfit text-[30px]">
                            <span className="text-orange-500">Rahul </span>
                            <span className="text-gray-500">Bisht </span>
                        </div>
                        <div className="md:hidden font-Outfit text-[28px] ">
                            <span className="text-orange-500">Rahul</span>
                            <span className="text-gray-500">&nbsp;Bisht</span>
                        </div>
                    </h1>

                    {/* Show hamburger menu only on smaller screens */}
                    <div className="sm:hidden">
                        {showNavbar ? (
                            <>
                                <MobileMenu tab={tab} setTab={setTab} />
                            </>
                        ) : (
                            <GiHamburgerMenu
                                size={30}
                                className="text-gray-800 cursor-pointer"
                                onClick={toggleNavbar}
                            />
                        )}

                        {/* <Link href="https://linktr.ee/rahulb_001" target="_blank">
                            <TbCode size={30} className=" cursor-pointer text-orange-500" />
                        </Link> */}

                        <MyLinks />
                    </div>

                    {/* Show navbar on larger screens */}
                    <div className="hidden sm:flex">
                        <Navbar tab={tab} setTab={setTab} />
                    </div>
                </div>

                <br />

                <div className="p-6 px-4 sm:px-10 pt-2 flex flex-col sm:flex-row h-full gap-5">
                    <Sidebar />
                    <Content tabComponents={tabComponents} tab={tab} setTab={setTab} />
                </div>
            </div>
        </>
    );
}
