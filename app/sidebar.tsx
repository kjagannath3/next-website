import React from "react";
import { FaRegNewspaper, FaRegPaperPlane, FaGithub } from "react-icons/fa6";
import Link from 'next/link';

interface SidebarIconProps {
    icon: React.ReactNode;
    link: string;
    tooltip?: string;
}

export function SidebarIcon({
    icon,
    link,
    tooltip = "tooltip",
}: SidebarIconProps) {
    return (
        <Link
            className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-green-500
            hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group"
            href={link}
        >
            {icon}
            <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100">
                {tooltip}
            </span>
        </Link>
    );
}
export function Sidebar() {
    return (
        <>
        <div className="fixed  left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow">
            <SidebarIcon
                icon={<FaGithub size={28} />}
                link="https://github.com/kjagannath3"
                tooltip="Check out my github!"
            />

            <SidebarIcon
                icon={<FaRegNewspaper size={28} />}
                link="https://github.com/kjagannath3"
                tooltip="Check out my resume!"
            />
            <SidebarIcon
                icon={<FaRegPaperPlane size={28} />}
                link="https://github.com/kjagannath3"
                tooltip="Let's get in touch!"
            />
        </div>


        </>
    );
}
