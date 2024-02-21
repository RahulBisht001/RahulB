import React from "react";
import Image from "next/image";
import Link from "next/link";

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

                <div className="flex justify-end items-end mb-4">
                    <button className="flex sm:mx-5 gap-2 items-center text-sm p-2 text-white rounded-lg shadow-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]">
                        {/* <FaPaperPlane size={15} /> */}
                        <Link href={"https://hashnode.com/@Rahul001"} target="_blank">
                            Go to my Hashnode Blog
                        </Link>
                    </button>
                </div>

                <div className="sm:mx-5 sm:gap-5 grid sm:grid-cols-3 mb-5">
                    <div className="bg-[#e1e8efff] p-3 rounded-xl flex flex-col items-center justify-center">
                        <Link href={"https://rahulblogs001.hashnode.dev/backend-quick-startup"} target="_blank">
                            <Image
                                src="/Backend.avif"
                                alt="Backend: QuickStartUp"
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                        </Link>

                        <span className="text-sm text-gray-700 text-center mt-5">Backend: QuickStartUp</span>
                    </div>
                    <div className="bg-[#ffe3bfff] p-3 rounded-xl flex flex-col items-center justify-center">
                        <Link href={"https://rahulblogs001.hashnode.dev/cross-origin-resource-sharing"} target="_blank">
                            <Image
                                src="/Cors.avif"
                                alt="Cross Origin Resource Sharing"
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                        </Link>

                        <span className="text-sm text-gray-700 text-center mt-5">Cross Origin Resource Sharing</span>
                    </div>
                    <div className="bg-[#e1e8efff] p-3 rounded-xl flex flex-col items-center justify-center">
                        <Link
                            href={
                                "https://rahulblogs001.hashnode.dev/boost-your-web-development-efficiency-5-advantages-of-scss-over-plain-css"
                            }
                            target="_blank"
                        >
                            <Image
                                src="/Scss.avif"
                                alt="Boost your web development efficiency with scss"
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                        </Link>

                        <span className="text-sm text-gray-700 text-center mt-5">Advantages of Using SCSS</span>
                    </div>
                    <div className="bg-[#ffe3bfff] p-3 rounded-xl flex flex-col items-center justify-center">
                        <Link href={"https://rahulblogs001.hashnode.dev/event-handling-in-react"} target="_blank">
                            <Image
                                src="/Event.avif"
                                alt="Event handling in react"
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                        </Link>

                        <span className="text-sm text-gray-700 text-center mt-5">Event handling in React.js</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
