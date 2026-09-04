
import Link from "next/link";

export default function ProjectCard({...props}) {
    return (
        <Link href={props.href} className="flex flex-wrap md:max-w-3/4 sm:max-w-11/12 hover:shadow-xl rounded-2xl m-2">
            <div className="bg-inherit border-slate-300 border rounded-2xl p-4">
                <h2 className="text-3xl text-slate-600 font-bold">{props.title}</h2>
                <p className="text-slate-800">{props.children}</p>
            </div>
        </Link>
    );
}