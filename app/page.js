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

export default function Home() {
    // Map tab index to corresponding component
    const tabComponents = {
        0: <About />,
        1: <Resume />,
        2: <Projects />,
        3: <Certifications />,
        4: <Blog />,
    };

    const [tab, setTab] = useState(1);
    // Initialize with the default tab

    return (
        <>
            <div className="font-Lexend">
                <div className="flex sm:items-center sm:justify-between sm:mx-20">
                    <h1 className="p-4 text-[25px] font-bold">
                        <span className="text-orange-500">RahulB </span>
                        <span className="text-gray-500">Portfolio </span>
                    </h1>

                    <Navbar tab={tab} setTab={setTab} />
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
