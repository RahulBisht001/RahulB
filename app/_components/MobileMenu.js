import React from "react";

import {IoDocumentText} from "react-icons/io5";
import {IoBriefcase} from "react-icons/io5";
import {FaBookReader} from "react-icons/fa";
import {FaNewspaper} from "react-icons/fa6";
import {PiCertificateFill} from "react-icons/pi";

const MobileMenu = ({tab, setTab}) => {
    const navItems = [
        {
            id: 0,
            icon: <IoDocumentText size={15} className={`${tab === 0 ? "text-gray-100" : "text-[#434343]"}`} />,
        },
        {
            id: 1,
            icon: <FaBookReader size={15} className={`${tab === 1 ? "text-gray-100" : "text-[#434343]"}`} />,
        },
        {
            id: 2,
            icon: <IoBriefcase size={15} className={`${tab === 2 ? "text-gray-100" : "text-[#434343] "}`} />,
        },
        {
            id: 3,
            icon: <PiCertificateFill size={15} className={` ${tab === 3 ? "text-gray-100" : "text-[#434343]"}`} />,
        },
        {
            id: 4,
            icon: <FaNewspaper size={15} className={` ${tab === 4 ? "text-gray-100" : "text-[#434343]"}`} />,
        },
    ];
    return (
        <>
            {/* <div className="fixed bottom-0 left-9 flex gap-4 p-2 px-4 rounded-xl border border-gray-200 shadow-lg bg-[#000080e2]"> */}
            <div className="fixed bottom-0 left-0 right-0 gap-4 flex justify-center p-2 px-4 rounded-xl border border-gray-200 shadow-lg bg-[#000080e2]">
                {navItems.map((item, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`p-3 rounded-lg bg-[#e1e9f0ff] ${
                                tab === item.id ? "bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09]" : ""
                            }`}
                            onClick={() => {
                                setTab(item.id); // Update active tab state
                            }}
                        >
                            {item.icon}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default MobileMenu;
