import React from "react";
import {Tech, Fundamentals} from "../_utils/Skills";

const Resume = () => {
    return (
        <>
            <div>
                <div className="flex items-center gap-5 sm:mx-5">
                    <h1 className="text-xl font-bold">RESUME</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div className="sm:m-5 flex sm:gap-2">
                    <div className="w-1/2">
                        <h2 className="font-semibold text-md px-3 mb-3">Technical Skills</h2>

                        <div>
                            {Tech.map((item) => (
                                <span
                                    key={item.id}
                                    className="bg-[#e1e9f0ff] p-2 px-3 rounded-lg text-[10px] m-1 inline-block"
                                >
                                    {item.skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2 className="font-semibold text-md px-3 mb-3">CS Fundamentals</h2>
                        <div>
                            {Fundamentals.map((item) => (
                                <span
                                    key={item.id}
                                    className="bg-[#e1e9f0ff] p-2 px-3 rounded-lg text-[10px] m-1 inline-block"
                                >
                                    {item.skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;
