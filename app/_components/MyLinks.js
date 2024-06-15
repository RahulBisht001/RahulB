import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import {SiCodeigniter} from "react-icons/si";
import CodingProfiles from "../_utils/Profiles";

export default function MyLinks() {
    const [state, setState] = useState({bottom: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <div className="p-2 m-2">
                {CodingProfiles.map((profile) => (
                    <div key={profile.id} className="flex gap-6 items-center p-2">
                        <Image
                            src={profile.src}
                            alt={profile.altText}
                            width={45}
                            height={45}
                            className="rounded-full"
                        />
                        <Link href={profile.href} className="text-xl font-Outfit font-medium">
                            {profile.Title}
                        </Link>
                    </div>
                ))}
                {/* <div className="flex gap-6 items-center p-2">
                    <Image src="/Leetcode.png" alt="Leetcode Profile" width={45} height={45} className="rounded-full" />
                    <Link href={"https://leetcode.com/u/rahulb_001/"} className="text-xl font-Lexend">
                        Leetcode
                    </Link>
                </div>
                <div className="flex gap-4 items-center p-2">
                    <Image
                        src="/Geeksforgeeks.png"
                        alt="Geeksforgeeks Profile"
                        width={45}
                        height={45}
                        className="rounded-full"
                    />
                    <Link href={"https://www.geeksforgeeks.org/user/rb001/"} className="text-lg font-Lexend">
                        Geeksforgeeks
                    </Link>
                </div>
                <div className="flex gap-4 items-center p-2">
                    <Image
                        src="/Codestudio.png"
                        alt="Coding Ninja Profile"
                        width={45}
                        height={45}
                        className="rounded-full"
                    />
                    <Link href={"https://www.naukri.com/code360/profile/RahuB"} className="text-lg font-Lexend">
                        Code Studio
                    </Link>
                </div>
                <div className="flex gap-4 items-center p-2">
                    <Image
                        src="/HackerRankLogo.png"
                        alt="HackerRank Profile"
                        width={45}
                        height={45}
                        className="rounded-full"
                    />
                    <Link href={"https://www.hackerrank.com/profile/Rahulbisht1012"} className="text-lg font-Lexend">
                        HackerRank
                    </Link>
                </div> */}
            </div>
        </Box>
    );

    return (
        <div className="rounded-lg">
            <button onClick={toggleDrawer("bottom", true)}>
                <SiCodeigniter size={35} className="cursor-pointer text-orange-500" />
            </button>
            <Drawer
                anchor="bottom"
                open={state.bottom}
                onClose={toggleDrawer("bottom", false)}
                sx={{width: 200}}
                PaperProps={{
                    sx: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        overflow: "hidden", // Ensure content respects border radius
                        // width: "calc(100% - 10px)",
                        margin: "0 auto", // Center the drawer horizontally
                        backgroundColor: "#d4e9fe",
                        // color: "#fff",
                    },
                }}
            >
                {list("bottom")}
            </Drawer>
        </div>
    );
}
