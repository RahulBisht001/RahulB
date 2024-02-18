import React from "react";
import Image from "next/image";
import Link from "next/link";

import {FaLinkedinIn} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {ImStackoverflow} from "react-icons/im";

const Sidebar = () => {
    return (
        <>
            <div className="w-[30%] bg-white rounded-xl">
                <div className="flex justify-center mb-1 mt-[-40px]">
                    <Image
                        src="/RahulB.png"
                        alt="RahulB Profile picture"
                        width={120}
                        height={120}
                        className="border-4 border-orange-400 rounded-full"
                    />
                </div>
                <h1 className="text-[20px] font-Lexend font-semibold text-center">Rahul Bisht</h1>
                <div className="text-center">
                    <span className="text-[10px] text-gray-500">Full Stack Developer</span>

                    <div className="flex p-2 gap-4 justify-center">
                        <div className="p-3 text-[#0077b5] bg-[#f2f6faff] rounded-md">
                            <Link href="https://linkedin.com/in/RahulB001">
                                <FaLinkedinIn size={16} />
                            </Link>
                        </div>
                        <div className="p-3 text-black bg-[#f2f6faff] rounded-md">
                            <Link href="https://github.com/RahulBisht001">
                                <FaGithub size={16} />
                            </Link>
                        </div>
                        <div className="p-3 text-[#1DA1F2] bg-[#f2f6faff] rounded-md">
                            <Link href="https://twitter.com/Twts_RahulB">
                                <FaTwitter size={16} />
                            </Link>
                        </div>
                        <div className="p-3 text-[#f58225ff] bg-[#f2f6faff] rounded-md">
                            <Link href="https://stackoverflow.com/users/17308211/rahul-b">
                                <ImStackoverflow size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
