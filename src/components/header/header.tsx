
import { HomeIcon } from "../icons/home";
import { GitHubIcon } from "../icons/github";
import { LinkedInIcon } from "../icons/linkedin";
import { ProjectCardLink } from "../textlinks/project";

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
        <header className="sticky top-0 z-50 bg-inherit border-b border-slate-300 text-slate-800">
            <div className="flex flex-row w-full items-center justify-between p-1">
                <HomeIcon className="hover:text-slate-500" />
                <ProjectCardLink className="hover:text-slate-500" />
                <RightHeader className="hover:text-slate-500" />
            </div>
        </header>
    );
}
