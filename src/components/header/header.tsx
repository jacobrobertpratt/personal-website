
import { APP_MAIN_TITLE } from "@/common";

import { HomeIcon } from "../icons/home";
import { GitHubIcon } from "../icons/github";
import { LinkedInIcon } from "../icons/linkedin";
import { BriefcaseIcon } from "../icons/briefcase";

function LeftHeader({ ...props }) {
    return (
        <div className="flex space-x-2">
            <HomeIcon className="hover:text-slate-500" />
            <BriefcaseIcon className="hover:text-slate-500" />
        </div >
    );
}

function RightHeader({ ...props }) {
    return (
        <div className="flex space-x-2">
            <GitHubIcon {...props} />
            <LinkedInIcon {...props} />
        </div >
    );
}

export default function Header({ ...props }) {
    return (
        <header id="main_header" className="sticky top-0 z-50 bg-inherit border-b border-slate-300 text-slate-800">
            <div className="flex flex-row w-full h-auto items-center justify-between p-1">
                <LeftHeader />
                <span className="flex text-inherit font-bold text-2xl">{APP_MAIN_TITLE}</span>
                <RightHeader className="hover:text-slate-500" />
            </div>
        </header>
    );
}
