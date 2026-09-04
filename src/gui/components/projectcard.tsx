
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({...props}) {
    return (
        <Link id={props.id} href={props.href} className="flex flex-wrap md:max-w-7/9 sm:max-w-11/12 hover:shadow-xl rounded-2xl m-2">
            <div className="bg-inherit border-slate-300 border rounded-2xl p-4">
                <h2 className="text-3xl text-slate-800 font-bold">{props.title}</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <p className="w-auto pt-4 lg:pr-4 lg:w-3/4 text-slate-800">{props.children}</p>
                    <Image
                        src={props.image}
                        alt={props.alt}
                        className="w-auto pt-4 lg:pl-4 lg:w-1/6"
                    />
                </div>
            </div>
        </Link>
    );
}