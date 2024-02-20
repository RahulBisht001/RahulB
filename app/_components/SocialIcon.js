import React from "react";
import Link from "next/link";

import {FaLinkedinIn} from "react-icons/fa6";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {ImStackoverflow} from "react-icons/im";

const SocialIcon = () => {
    return (
        <>
            <div className="flex p-2 gap-2 justify-center">
                <div className="p-3 text-[#0077b5] bg-[#f2f6faff] rounded-md">
                    <Link href="https://linkedin.com/in/RahulB001" target="_blank">
                        <FaLinkedinIn size={16} />
                    </Link>
                </div>
                <div className="p-3 text-black bg-[#f2f6faff] rounded-md">
                    <Link href="https://github.com/RahulBisht001" target="_blank">
                        <FaGithub size={16} />
                    </Link>
                </div>
                <div className="p-3 text-[#1DA1F2] bg-[#f2f6faff] rounded-md">
                    <Link href="https://twitter.com/Twts_RahulB" target="_blank">
                        <FaTwitter size={16} />
                    </Link>
                </div>
                <div className="p-3 text-[#f58225ff] bg-[#f2f6faff] rounded-md">
                    <Link href="https://stackoverflow.com/users/17308211/rahul-b" target="_blank">
                        <ImStackoverflow size={16} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SocialIcon;
