import React from "react";

import Image from "next/image";
import Link from "next/link";

import CertificationDetails from "../_utils/CertificationDetail";

const Certifications = () => {
    return (
        <>
            <div className="sm:p-2">
                <div className="flex items-center gap-5 sm:mx-5">
                    <h1 className="text-xl font-bold">CERTIFICATIONS</h1>

                    <div className="w-[20%] h-1 bg-gray-200 rounded-xl">
                        <div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
                    </div>
                </div>

                <div className="sm:overflow-y-auto sm:max-h-[80vh]">
                    <div className="sm:mx-5 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {CertificationDetails.map((certificate, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={certificate.link}
                                    target="_blank"
                                    className="border border-orange-400 rounded-2xl p-3 cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={certificate.image}
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="rounded-md"
                                        />
                                        <p className="text-gray-900 text-sm sm:text-md text-center font-semibold">
                                            {certificate.title}
                                        </p>
                                    </div>

                                    <p className="text-gray-700 text-sm font-bold my-2">{certificate.organization}</p>
                                    <p className="text-gray-500 text-xs my-2">{certificate.issuedOn}</p>

                                    <div className="flex gap-2 flex-wrap">
                                        {certificate.skills.map((skill) => {
                                            return (
                                                <span
                                                    key={skill.id}
                                                    className="text-[10px] p-2 px-3 bg-[#e1e8efff] rounded-lg text-gray-700"
                                                >
                                                    {skill.name}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Certifications;
