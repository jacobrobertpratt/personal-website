
import { HomeLink } from "../textlink/home";

export default function Footer({ ...props }) {
    return (
        <nav
            className="flex flex-row w-full justify-between bg-inherit border-t border-slate-300">
            <div />
            <HomeLink />
            <div />
        </nav>
    );
}

