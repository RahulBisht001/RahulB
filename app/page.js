import Content from "./_components/Content";
import Sidebar from "./_components/Sidebar";

export default function Home() {
    return (
        <>
            <div className="font-Lexend">
                <h1 className="p-4 text-[25px] font-bold">
                    <span className="text-orange-500">RahulB </span>
                    Portfolio
                </h1>
                <br />
                <div className="p-6 px-10 flex h-full gap-5">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </>
    );
}
