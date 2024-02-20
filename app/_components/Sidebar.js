import React from "react";
import Image from "next/image";

import SocialIcon from "./SocialIcon";
import Contact from "./Contact";

const Sidebar = () => {
    return (
        <>
            <div className="w-[30%] bg-white rounded-2xl">
                <div className="flex justify-center mb-1 mt-[-40px]">
                    <Image
                        src="/RahulB.png"
                        alt="RahulB Profile picture"
                        width={120}
                        height={120}
                        className="border-4 border-orange-500 rounded-full"
                    />
                </div>
                <h1 className="text-[20px] font-Lexend font-semibold text-center">Rahul Bisht</h1>
                <div className="text-center">
                    <span className="text-[10px] text-gray-500">Full Stack Developer</span>

                    <SocialIcon />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
