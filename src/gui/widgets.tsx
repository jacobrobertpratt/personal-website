
import Image from "next/image"

import MenuIcon from "@/../public/menu-icon.svg"

export function Menu({...props}) {    
    return ( <Image src={MenuIcon} alt="MENU" width={36} height={36} /> );
}

