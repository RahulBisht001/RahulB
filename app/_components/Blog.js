import React from "react";
import Image from "next/image";
import Link from "next/link";

import Blogs from "../_utils/BlogData";
import {FaPaperPlane} from "react-icons/fa";

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
                    <button className="flex sm:mx-5 gap-2 items-center text-sm p-2 text-white rounded-lg shadow-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a] mt-4">
                        <FaPaperPlane size={15} />
                        <Link href={"https://hashnode.com/@Rahul001"} target="_blank">
                            Hashnode Blog
                        </Link>
                    </button>
                </div>

                <div className="sm:overflow-y-auto sm:max-h-[70vh]">
                    <div>
                        <div className="sm:mx-5 sm:gap-5 grid sm:grid-cols-3 mb-5">
                            {Blogs.map((blog, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#e1e8efff] p-3 rounded-xl flex flex-col items-center justify-center mb-4"
                                    >
                                        <Link href={blog.link} target="_blank">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                width={300}
                                                height={300}
                                                className="rounded-xl"
                                            />
                                        </Link>

                                        <span className="text-sm text-gray-800 text-center mt-5">{blog.title}</span>
                                        <div className="flex justify-between gap-4">
                                            <span className="text-[10px] text-gray-700 text-center mt-1 p-2 bg-[#ffe3bfff] rounded-lg">
                                                {blog.time}
                                            </span>
                                            <p className="text-[10px] text-gray-700 text-center mt-1 p-2 bg-[#ffe3bfff] rounded-lg">
                                                {blog.date}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
