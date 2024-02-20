import React, {useState} from "react";

import {HiMiniDocumentText} from "react-icons/hi2";
import {BiSolidContact} from "react-icons/bi";
import {FaBriefcase} from "react-icons/fa6";
import {FaBookReader} from "react-icons/fa";

const Navbar = ({tab, setTab}) => {
    const navItems = [
        {
            id: 0,
            icon: <HiMiniDocumentText size={15} className={`text-[#434343] ${tab === 0 ? "text-gray-100" : ""}`} />,
        },
        {
            id: 1,
            icon: <FaBookReader size={15} className={`text-[#434343] ${tab === 1 ? "text-gray-100" : ""}`} />,
        },
        {
            id: 2,
            icon: <FaBriefcase size={15} className={`text-[#434343] ${tab === 2 ? "text-gray-100" : ""}`} />,
        },
        {
            id: 3,
            icon: <BiSolidContact size={15} className={`text-[#434343] ${tab === 3 ? "text-gray-100" : ""}`} />,
        },
    ];

    return (
        <>
            <div className="flex gap-4 p-1 px-4 rounded-xl border border-gray-200 shadow-lg">
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

export default Navbar;
