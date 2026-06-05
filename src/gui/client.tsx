'use client'

import { usePathname } from 'next/navigation';
import { HeaderTitleStyle } from '@/global';

// Standard Imports //
import Link from 'next/link';
import Image from 'next/image';

// Images //
import SiteIcon from '@/../public/site-icons.svg';
import BackArrow from '@/../public/back-arrow.svg';


const pathname_to_titles = {    // path mapped text
    '/':'HOME',
    '/projects':'PROJECTS'
}


export function HeaderTitle({...props}) {

    const pathname: string = usePathname();
    console.log("Path Name: "+pathname);

    props.className = HeaderTitleStyle.classname + " " + props.className;
    const title: string = pathname_to_titles[ pathname ];

    return (
        <h1 className="text-4xl font-bold">
            {title}
        </h1>
    );
    
}


export function HeaderIcon({...props}) {
    // Should change between 

    const pathname: string = usePathname();
    console.log("Path Name: "+pathname);

    props.className = HeaderTitleStyle.classname + " " + props.className;
    let icon_value = SiteIcon;
    if (pathname != '/') {
        icon_value = BackArrow;
    }

    return (
        // <a href="/" className="font-bold text-xl text-gray-800">{icon_value}</a>
        <Link href="/" {...props} >
            <Image src={icon_value} alt="ICON" width={48} height={48} />
        </Link>
    );
}