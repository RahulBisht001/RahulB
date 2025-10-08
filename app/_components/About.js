import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";

import { aboutText } from "../_utils/AboutText";

const About = () => {
	return (
		<>
			<div className="p-2">
				<div className="flex items-center gap-5 sm:mx-5">
					<h1 className="text-xl font-bold">ABOUT ME</h1>

					<div className="w-[20%] h-1 bg-gray-200 rounded-xl">
						<div className="h-1 rounded-xl bg-gradient-to-r from-[#FF9C1A] to-[#f92c1a]"></div>
					</div>
				</div>

				<div className="sm:mb-0">
					<p className="text-xs sm:text-sm p-1 sm:p-2 leading-6 sm:leading-8 text-justify">
						&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;{aboutText}
					</p>
					<div>
						<h2 className="font-Lexend text-lg mb-4 font-semibold sm:mx-5">
							Experience
						</h2>
						<ol className="list-decimal list-inside">
							<li className="text-xs sm:text-sm p-1 sm:p-2 leading-2 sm:leading-4 text-justify sm:mx-5">
								Engineered a resumable onboarding flow by implementing state
								persistence & granular record updates via RESTful APIs, ensuring
								cross-feature consistency through peer collaboration.
							</li>
							<li className="text-xs sm:text-sm p-1 sm:p-2 leading-2 sm:leading-4 text-justify sm:mx-5">
								Collaborating on the design and implementation of a next-gen
								reporting platform that replaces legacy analytics tools and
								opens new revenue streams for the organisation.
							</li>
							<li className="text-xs sm:text-sm p-1 sm:p-2 leading-2 sm:leading-4 text-justify sm:mx-5">
								Working on implementing and customising Apache Superset to
								fulfil evolving client requirements. Responsible for the
								configuration and enhancement of data visualisation and
								reporting solutions.
							</li>
						</ol>
					</div>
				</div>

				<div className="sm:mx-5 mb-10">
					<h2 className="font-semibold font-Lexend text-lg mb-4">
						What else i do!
					</h2>

					<div className="grid sm:grid-cols-2 gap-5">
						<div className=" gap-4 bg-[#ffebd1ff] p-3 rounded-xl">
							<div className="flex gap-3 items-center mb-2">
								<FaLaptopCode size={30} className="text-[#f92c1a]" />
								<h2 className="text-md font-semibold text-gray-900">
									Web Development
								</h2>
							</div>

							<p className="text-gray-500 text-xs">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developed High-quality web
								apps with MERN stack and Next.js Such as E-Learning
								Platform,File Sharing and many more.
							</p>
						</div>
						<div className=" gap-4 bg-[#f2f7fcff] p-3 rounded-xl">
							<div className="flex gap-3 items-center mb-2">
								<FaMobileAlt size={30} className="text-[#f92c1a]" />
								<h2 className="text-md font-semibold text-gray-900">
									React Native
								</h2>
							</div>

							<p className="text-gray-500 text-xs">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Always keen interested in
								building cross platform hybrid apps.Built a News App with React
								Native and working on others.
							</p>
						</div>

						<div className=" gap-4 bg-[#f2f7fcff] p-3 rounded-xl">
							<div className="flex gap-3 items-center mb-2">
								<SiGooglecolab size={30} className="text-[#f92c1a]" />
								<h2 className="text-md font-semibold text-gray-900">
									Machine Learning
								</h2>
							</div>

							<p className="text-gray-500 text-xs">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Built a few Machine
								Learning Model such as Handwritten Digit Recognizer . Currently
								working on integrating web and machine learning models.
							</p>
						</div>

						<div className=" gap-4 bg-[#ffebd1ff] p-3 rounded-xl">
							<div className="flex gap-3 items-center mb-2">
								<FaChalkboardTeacher size={30} className="text-[#f92c1a]" />
								<h2 className="text-md font-semibold text-gray-900">
									Content Creation
								</h2>
							</div>

							<p className="text-gray-500 text-xs">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Highly Active on Linkedin
								and share valuable content and experience with my circle.Working
								on my newsletter.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
