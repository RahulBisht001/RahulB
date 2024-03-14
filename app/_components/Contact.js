import React from "react";
import {FaPhoneAlt} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {MdLocationPin, MdOutlineFileDownload} from "react-icons/md";

const Contact = () => {
    //* This handleDownload is different.
    //* take it seriously

    const handleDownloadResume = () => {
        console.log("Downloading Resume");
        // const downloadUrl = "https://drive.google.com/uc?export=download&id=1cniK_Ev8WA__fk6zh5281qMbDId7805w";

        const downloadUrl = "https://drive.google.com/file/d/1AN_1R1vS1ObrafJixyYk-Ep52qWS2V3k/view?usp=sharing";

        // Trigger the download by creating an anchor element and clicking it programmatically
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "RahulB Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                    <button
                        className="bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] p-2 px-4 rounded-3xl text-sm text-white flex items-center gap-2"
                        onClick={handleDownloadResume}
                    >
                        <MdOutlineFileDownload size={25} />
                        <span> Download Resume</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;
