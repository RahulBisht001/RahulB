import React from "react";

import {FaPaperPlane} from "react-icons/fa";

const ConnectWithMe = () => {
    return (
        <>
            <div className="p-2">
                <div className="flex items-center gap-5 sm:mx-5">
                    <h1 className="text-xl font-bold">CONTACT ME</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div className="sm:mx-5 my-10">
                    <span className="py-2 text-sm text-gray-500">Write mail to me</span>
                    <div className="bg-[#f2f6faff] p-4 rounded-lg mt-4">
                        <div className="flex gap-5 items-center mb-5 ">
                            <p className="text-sm text-gray-700">Subject&nbsp; : </p>
                            <input
                                type="text"
                                className="w-1/2 p-1 border-[#f2f6faff] border-b-2 border-b-orange-200 bg-[#f2f6faff] outline-none"
                            />
                        </div>

                        <p className="my-2 text-sm text-gray-700">Write message below !</p>
                        <textarea
                            name=""
                            id=""
                            cols="90"
                            rows="7"
                            className="rounded-xl border-2 p-4 outline-orange-400 text-sm text-gray-600"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button className="flex gap-2 items-center text-sm p-2 mt-5 text-white rounded-lg shadow-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]">
                            <FaPaperPlane size={15} />
                            Send Email
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConnectWithMe;
