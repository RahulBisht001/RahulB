import React from "react";

const Content = ({tabComponents, tab}) => {
    return (
        <>
            <div className="w-full bg-white rounded-2xl p-4 font-Lexend">
                {/* Render the component based on the current tab */}
                {tabComponents[tab]}
            </div>
        </>
    );
};

export default Content;
