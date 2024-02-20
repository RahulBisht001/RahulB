"use client";

import React, {useState} from "react";

import Content from "./_components/Content";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

import About from "./_components/About";
import Resume from "./_components/Resume";
import Blog from "./_components/Blog";
import ConnectWithMe from "./_components/ConnectWithMe";
import Projects from "./_components/Projects";

export default function Home() {
    // Map tab index to corresponding component
    const tabComponents = {
        0: <About />,
        1: <Resume />,
        2: <Blog />,
        3: <ConnectWithMe />,
        4: <Projects />,
    };

    const [tab, setTab] = useState(1);

    return (
        <>
            <div className="font-Lexend">
                <div className="flex items-center justify-between mx-20 mt-1">
                    <h1 className="p-4 text-[25px] font-bold">
                        <span className="text-orange-500">RahulB </span>
                        Portfolio
                    </h1>

                    <Navbar tab={tab} setTab={setTab} />
                </div>

                <br />

                <div className="p-6 px-10 pt-2 flex h-full gap-5">
                    <Sidebar />
                    <Content tabComponents={tabComponents} tab={tab} setTab={setTab} />
                </div>
            </div>
        </>
    );
}
