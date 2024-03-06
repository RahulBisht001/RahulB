import React from "react";
import {FaBookReader} from "react-icons/fa";

import {Tech, Fundamentals} from "../_utils/Skills";

const Resume = () => {
    return (
        <>
            <div className="">
                <div className="flex items-center gap-5 sm:mx-5 mb-2">
                    <h1 className="text-xl font-bold">RESUME</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="m-2 ml-[-5px] sm:m-5 sm:gap-2 flex items-start">
                        <FaBookReader size={35} className="text-[#f92c1a] bg-[#e1e9f0ff] p-2 rounded-lg" />

                        <h2 className="font-bold text-lg px-3">Education</h2>
                    </div>

                    <div className="sm:m-5 px-3 sm:gap-2">
                        {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}

                        <ol className="border-l border-gray-500">
                            {/*First item*/}
                            <li>
                                <div className="flex-start flex items-center pt-3">
                                    <div className="ml-[-6px] mr-3 h-[12px] w-[12px] rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]" />
                                    <p className="text-sm font-Lexend text-gray-500">2021 - 2025</p>
                                </div>
                                <div className="mb-6 ml-4 mt-2">
                                    <h4 className="mb-1.5 text-md my-1 font-semibold text-[#f9461a]">
                                        Bachelor of Technology in Computer Science Engineering
                                    </h4>
                                    <p className="mb-4 text-xs font-normal text-gray-500">
                                        Graphic Era Hill University, Dehradun ,India
                                    </p>
                                </div>
                            </li>

                            {/*Second item*/}
                            <li>
                                <div className="flex-start flex items-center pt-3">
                                    <div className="ml-[-6px] mr-3 h-[12px] w-[12px] rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]" />
                                    <p className="text-sm font-Lexend text-gray-500">2019 - 2020</p>
                                </div>
                                <div className="mb-6 ml-4 mt-2">
                                    <h4 className="mb-1.5 text-md my-1 font-semibold text-[#f9461a]">
                                        Intermediate (12th)
                                    </h4>
                                    <p className="mb-4 text-xs font-normal text-gray-500">
                                        Vidhya Mandir Belani, Rudraprayag
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex-start flex items-center pt-3">
                                    <div className="ml-[-6px] mr-3 h-[12px] w-[12px] rounded-full bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]" />
                                    <p className="text-sm font-Lexend text-gray-500">2017 - 2018</p>
                                </div>
                                <div className="mb-6 ml-4 mt-2">
                                    <h4 className="mb-1.5 text-md my-1 font-semibold text-[#f9461a]">
                                        HighSchool ( 10th )
                                    </h4>
                                    <p className="mb-4 text-xs font-normal text-gray-500">
                                        Vidhya Mandir Belani, Rudraprayag
                                    </p>
                                </div>
                            </li>
                        </ol>

                        {/* <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-5 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a] border border-[#FF9C1A]" />
                                <time className="text-sm font-Lexend text-gray-500">2021 - 2025</time>
                                <h3 className="text-md my-1 font-semibold text-[#f9461a]">
                                    Bachelor's in Computer Science Engineering
                                </h3>
                                <p className="mb-4 text-xs font-normal text-gray-500">
                                    Graphic Era Hill University, Dehradun ,India
                                </p>
                            </li>

                            <li className="mb-5 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a] border border-[#FF9C1A]" />
                                <time className="text-sm font-Lexend text-gray-500">2019 - 2020</time>
                                <h3 className="text-md my-1 font-semibold text-[#f9461a]">Intermediate</h3>
                                <p className="mb-4 text-xs font-normal text-gray-500">
                                    Vidhya Mandir Belani, Rudraprayag
                                </p>
                            </li>
                            <li className="mb-5 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a] border border-[#FF9C1A]" />
                                <time className="text-sm font-Lexend text-gray-500">2017 - 2018</time>
                                <h3 className="text-md my-1 font-semibold text-[#f9461a]">HighSchool</h3>
                                <p className="mb-4 text-xs font-normal text-gray-500">
                                    Vidhya Mandir Belani, Rudraprayag
                                </p>
                            </li>
                        </ol> */}
                    </div>
                </div>

                <div className="sm:m-5 flex flex-col sm:flex-row sm:gap-2 mb-10">
                    <div className="sm:w-1/2 mb-5 sm:mb-0">
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
                    <div className="sm:w-1/2">
                        <h2 className="font-semibold text-md px-3 mb-3">CS Fundamentals</h2>
                        <div className="">
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
