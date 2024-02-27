import {Analytics} from "@vercel/analytics/react";

import {Lexend, Poppins} from "next/font/google";
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Lexend",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-Poppins",
});

export const metadata = {
    title: "RahulB's Portfolio",
    description: `Welcome to the portfolio of Rahul Bisht, a skilled "Fullstack Developer" with good problem solving abilities. View a collection of standout projects showcasing my expertise`,
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${lexend.variable} ${poppins.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
