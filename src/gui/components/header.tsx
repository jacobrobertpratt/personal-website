
import Link from "next/link";
import Image from "next/image";

// import image_home_icon from "@/../public/home.svg"
// import image_octocat from "@/../public/github/GitHub_Invertocat_Black.svg"
import image_octocat from "@/../public/github/GitHub_Invertocat_Black_Clearspace.svg"
import image_linkedin from "@/../public/InBug-Black.png"

export default function Header({...props }) {
    return (
        <header className="sticky top-0 z-50 flex flex-row w-full justify-between border-slate-200 border-b bg-inherit">
            <Link href="/" className="text-slate-900 hover:text-slate-500">

                <svg viewBox="0 0 24 24" className="flex items-center justify-center h-12 w-12">
                    {/* <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> */}
                        <path d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15"/>
                    {/* </g> */}
                </svg>

                {/* <svg viewBox="0 0 24 24" className="flex items-center justify-center h-12 w-12 ">
                    <path d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15"/>
                </svg> */}

                {/* <svg viewBox="0 0 24 24" className="flex items-center justify-center h-12 w-12 fill-current">
                    <path d="M4 11.4522V16.8002C4 17.9203 4 18.4807 4.21799 18.9086C4.40973 19.2849 4.71547 19.5906 5.0918 19.7823C5.5192 20.0001 6.07899 20.0001 7.19691 20.0001H16.8031C17.921 20.0001 18.48 20.0001 18.9074 19.7823C19.2837 19.5906 19.5905 19.2849 19.7822 18.9086C20 18.4811 20 17.9216 20 16.8037V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522Z"/>
                </svg> */}
            </Link>
            <div className="flex flex-row items-center justify-center">
                <Link href="#start_of_project_cards" className="font-bold text-slate-800 hover:text-slate-500">PROJECTS</Link>
            </div>
            
            <div className="flex flex-row">

                <Link
                    href="https://github.com/jacobrobertpratt?tab=repositories"
                    className="text-slate-900 hover:text-slate-600"
                >
                    <Image
                        src={image_octocat}
                        alt="Octocat Icon"
                        className="w-12 h-12 m-1"
                    />
                </Link>

                <Link
                    href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BY3ufAJUSSFeHg1Q6WZZyeQ%3D%3D"
                    className="text-slate-900 hover:text-slate-600"
                >
                    <Image
                        src={image_linkedin}
                        alt="Linkedin Icon"
                        className="w-12 h-12 m-1"
                    />
                </Link>
            </div>
        </header>
    );
}

