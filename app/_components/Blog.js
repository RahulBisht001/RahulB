import React from "react";
import Image from "next/image";

const Blog = () => {
    return (
        <>
            <div className="p-2">
                <div className="flex items-center gap-5 sm:mx-5">
                    <h1 className="text-xl font-bold">READ MY BLOGS</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div className="sm:mx-5 sm:gap-10 grid grid-cols-3 mb-5">
                    <div className="bg-[#ffe3bfff] p-2 rounded-lg  flex flex-col items-center justify-center">
                        <Image
                            src="/Backend.jpg"
                            alt="Backend: QuickStartUp"
                            width={300}
                            height={300}
                            className="rounded-md"
                        />

                        <span className="text-sm text-gray-700 text-center">Backend: QuickStartUp</span>
                    </div>
                    <div className="bg-[#ffe3bfff] p-2 rounded-lg flex flex-col items-center justify-center">
                        <Image
                            src="/Backend.jpg"
                            alt="Backend: QuickStartUp"
                            width={300}
                            height={300}
                            className="rounded-md"
                        />

                        <span className="text-sm text-gray-700 text-center">Backend: QuickStartUp</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
