'use client'

//  //
import { usePathname } from 'next/navigation';
import { HeaderTitleStyle } from '@/global';

// Standard Imports //
import Link from 'next/link';
import Image from 'next/image';

// Images //
import SiteIcon from '@/../public/site-icons.svg';
import BackArrow from '@/../public/back-arrow.svg';
import MenuIcon from "@/../public/menu-icon.svg"

// import { Button } from './widgets';

let isActive = false;

// const pathname_to_titles: {string: string} = {
//     '/':'HOME',
//     '/projects':'PROJECTS'
// }

const WidgetLayoutStyles = {
    button: ""
}

export function Button({...props}) {
    props.className = WidgetLayoutStyles.button + " " + props.className
    return ( <button {...props}>{props.children}</button> );
}

export function ClickButton({...props}) {

    const handleClick = () => {
        if (isActive) {
            isActive = false
        } else {
            isActive = true
        }
    };

    let to_return = (
        <Button onClick={handleClick} className="p-2">
            <Image src={MenuIcon} alt="MENU" width={36} height={36} />
        </Button>
    );

    if (isActive) {
        to_return = (
            <Button onClick={handleClick} className="p-2">
                Nothing
            </Button>
        );
    }
    
    return ( to_return );

}

// export function HeaderTitle({...props}) {

//     // const pathname: string = usePathname();
//     // let title: string = "";
//     // if (pathname in pathname_to_titles) {
//     //     title = pathname_to_titles[pathname]; // TODO: need to fix red squiggle.
//     // }
    
//     props.className = HeaderTitleStyle.classname + " " + props.className;
//     return (
//         <h1 className="text-4xl font-bold">
//             {title}
//         </h1>
//     );
    
// }

export function HeaderIcon({...props}) {
    // Should change between 

    const pathname: string = usePathname();
    // console.log("Path Name: "+pathname);

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