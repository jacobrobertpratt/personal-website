
import Link from "next/link";
import Image from "next/image";

// import image_home_icon from "@/../public/home.svg"
// import image_octocat from "@/../public/github/GitHub_Invertocat_Black.svg"
import image_octocat from "@/../public/github/GitHub_Invertocat_Black_Clearspace.png"
import image_linkedin from "@/../public/linkedin/linkedin-icon.png"

import { HomeIcon } from "./icons/home";
import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";
import { ProjectCardLink } from "./textlinks/project";

export default function Header({ ...props }) {
    return (
        <header className="sticky top-0 z-50 bg-inherit border-b border-slate-300">
            <div className="flex flex-row w-full items-center justify-between px-2 py-2">
                <HomeIcon />
                <ProjectCardLink />
                <GitHubIcon />
            </div>
        </header>
    );
}
// <header className="sticky top-0 z-50 flex flex-row w-full justify-between border-slate-200 bg-inherit hover:border-slate-500 hover:border-b">

//     <HomeIcon width={24} height={24} />

//     <div className="flex flex-row items-center justify-center">
//         <Link
//             href="http://localhost:3000/#start_of_project_cards" className="font-bold text-slate-800 hover:text-slate-500">PROJECTS</Link>
//     </div>

//     <div className="flex flex-row">
//         {/* <GitHubIcon width={24} height={24} /> */}
//     </div>
// </header>


