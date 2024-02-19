import React from "react";
import {aboutText} from "../_utils/AboutText";

const About = () => {
    return (
        <>
            <div>
                <div className="flex items-center gap-5 sm:mx-5">
                    <h1 className="text-xl font-bold">ABOUT ME</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div>
                    <p className="text-sm p-6 leading-6 text-justify">
                        &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;{aboutText}
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
