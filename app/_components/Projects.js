import React, {useState} from "react";
import Image from "next/image";

import {FaLink, FaGithub} from "react-icons/fa";

import domains from "../_utils/Domains";
import ProjectDetails from "../_utils/ProjectDetails";

const Projects = () => {
    const [active, setActive] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleLink = (link) => {
        window.open(link, "_blank");
    };

    // Filter projects based on the selected category
    const filteredProjects = selectedCategory
        ? selectedCategory === "All"
            ? ProjectDetails // Return all projects if "All" is selected
            : ProjectDetails.filter((project) => project.category === selectedCategory)
        : ProjectDetails;

    return (
        <>
            <div className="p-2">
                <div className="flex items-center gap-5 sm:mx-5">
                    <h1 className="text-xl font-bold">PROJECTS</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div className="sm:mx-5 mt-5">
                    <ul className="text-sm text-gray-800 flex gap-5 cursor-pointer">
                        {domains.map((domain) => {
                            return (
                                <li
                                    key={domain.id}
                                    className={active === domain.id ? "text-[#f9551a]" : ""}
                                    onClick={() => {
                                        setActive(domain.id);
                                        setSelectedCategory(domain.title);
                                        // Set selected category
                                    }}
                                >
                                    {domain.title}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <br />

                <div className="sm:mx-5 overflow-y-auto max-h-[70vh]">
                    <div className="sm:gap-5 grid sm:grid-cols-3 mb-5">
                        {filteredProjects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-[#e1e8efff] p-3 rounded-xl flex flex-col items-center justify-center"
                                >
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        width={300}
                                        height={300}
                                        className="rounded-xl"
                                    />

                                    <span className="text-sm text-gray-700 text-center my-3 font-bold">
                                        {project.title}
                                    </span>

                                    <p className="text-xs text-gray-500 text-justify px-2">{project.description}</p>

                                    <div className="w-full flex justify-evenly mt-5">
                                        {project.liveLink ? (
                                            <button
                                                className="text-xs p-2 bg-[#ffe3bfff] rounded-lg shadow-md flex items-center gap-3"
                                                onClick={() => handleLink(project.liveLink)}
                                            >
                                                <FaLink size={15} className="text-gray-800" />
                                                Go Live
                                            </button>
                                        ) : (
                                            <button className="text-xs p-2 bg-[#ffe3bfff] rounded-lg shadow-md flex items-center gap-3 cursor-default">
                                                Not Available
                                            </button>
                                        )}

                                        <button
                                            className="text-xs p-2 bg-[#00000079] rounded-lg shadow-md flex items-center gap-3"
                                            onClick={() => handleLink(project.githubLink)}
                                        >
                                            <FaGithub size={15} className="text-gray-800" />
                                            Github
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
