"use client";
import React, {useState} from "react";
import About from "./About";
import Resume from "./Resume";
import Blog from "./Blog";
import ConnectWithMe from "./ConnectWithMe";
import Projects from "./Projects";

const Content = () => {
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
            <div className="w-full bg-white rounded-2xl p-4 font-Lexend">
                {/* Render the component based on the current tab */}
                {tabComponents[tab]}
            </div>
        </>
    );
};

export default Content;
