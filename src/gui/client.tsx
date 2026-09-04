'use client'

// Standard Imports //
import Image from 'next/image';

// Images //
import MenuIcon from "@/../public/menu-icon.svg";

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
