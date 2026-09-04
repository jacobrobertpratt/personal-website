
import Link from "next/link";

export default function Footer({...props }) {
    return (
        <header className="flex flex-row w-full justify-between bg-inherit border-t border-slate-300">
            <Link
                href="/"
                className="hover:text-slate-500"
            >Home</Link>
        </header>
    );
}

