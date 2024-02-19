import React from "react";
import {FaPhoneAlt} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {MdLocationPin, MdOutlineFileDownload} from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className="bg-[#f2f6faff] rounded-xl m-4 mx-6">
                <div className="p-4 flex-col justify-center items-center">
                    <div className="p-2 flex items-center gap-5">
                        <FaPhoneAlt size={20} className="text-orange-500" />
                        <div className="text-start">
                            <p className="text-xs text-gray-500">Phone</p>
                            <span className="text-xs">+91 8534049294</span>
                        </div>
                    </div>
                    <hr />

                    <div className="p-2 flex items-center gap-5">
                        <IoMdMail size={20} className="text-orange-500" />
                        <div className="text-start">
                            <p className="text-xs text-gray-500">Email</p>
                            <span className="text-xs">rahulbisht1012@gmail.com</span>
                        </div>
                    </div>
                    <hr />

                    <div className="p-2 flex items-center gap-5">
                        <MdLocationPin size={25} className="text-orange-500" />
                        <div className="text-start">
                            <p className="text-xs text-gray-500">Location</p>
                            <span className="text-xs">Dehradun , India</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <button className="bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] p-2 px-4 rounded-3xl text-sm text-white flex items-center gap-2">
                        <MdOutlineFileDownload size={25} />
                        <span> Download Resume</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;
