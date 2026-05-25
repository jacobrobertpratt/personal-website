
import Link from 'next/link'
import { GLOBAL_APP_COPYWRITE, GLOBAL_APP_TITLE } from '@/global';

/**
 * TODO:
 *  - make structure that defines class definitions. This would naturally inherit tailwind names ... maybe.
 *  - 
 * */
// interface PropsTypeInter {
//     color?: string | '',
//     shape?: string | '',
//     active?: string | '',
//     hover?: string | '',
//     size?: string | '',
//     dark?: string | ''
// }

// const classmain: PropsTypeInter = {
//     color:'bg-slate-400',
//     hover:'bg-slate-800'
// }

export function Body({...props}) {
    return ( <body {...props}>{props.children}</body> );
}

export function Main({...props}) {
    // props.className = classmain.color+' '+{...props.className};
    return ( <main {...props}>{props.children}</main> );
}

export function Page({...props}) {
    return ( <div {...props}>{props.children}</div> );
}

export function Section({...props}) {
    return ( <section {...props}>{props.children}</section>);
}

export function Header({...props}) {
    return ( <header {...props}>{props.children}</header>);
}

export function Footer({...props}) {
    return ( <footer {...props}>{props.children}</footer>);
}

export function NavList({...props}) {
    return (
    <nav {...props}>
        <ul className="flex space-x-6">
            {props.children}
        </ul>
    </nav>);
}

export function NavItem({...props}) {
    const link_classname = "";
    return (
        <li>
            <Link href={props.href} {...props}>
                {props.children}
            </Link>
        </li>
    );
}

/** -------------- ROOT HEADER -------------- */

export function RootHeader({...props}) {
    const head_classname: string = "sticky top-0 z-50 w-full bg-green-500";
    const nav_classname: string = "container mx-auto flex items-center justify-center";
    const link_classname: string = "hover:text-blue-500 text-white font-bold text-lg";
    return (
        <Header className={head_classname}>
            <NavList className={nav_classname}>
                <li><Link href="/" className={link_classname}>HOME</Link></li>
                <li><Link href="/projects" className={link_classname}>PROJECTS</Link></li>
            </NavList>
        </Header>
    );
}


/** -------------- ROOT FOOTER -------------- */

// List of links to use -> move to global.tsx (or better just build based on locaiton).
const links: {href:string,text:string}[] = [
    { href:'/',text:'Home'},
    { href:'/',text:'About'},
    { href:'/',text:'Contact'}
];

function buildTitleText() {
    return (
        <div className="mb-4 md:mb-0 justify-left">
            <span className="text-xl font-bold">
                {GLOBAL_APP_TITLE}
            </span>
        </div>
    );
}

function buildCopyWriteText() {
    return (
        <div className="mt-4 md:mt-0 text-sm text-gray-400 text-right">
            {GLOBAL_APP_COPYWRITE}
        </div>
    );
}

function buildLinkArrayItems({
    classname
}: {
    classname: string
}) {
    return (
        links.map((link,idx:number) => (
            <li key={idx+1}>
                <Link href={link.href} className={classname}>{link.text}</Link>
            </li>
        ))
    );
}

export function RootFooter({...props}) {
    const footer_classname: string ="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center";
    const nav_classname: string = "flex space-x-6 text-sm";
    const link_classname: string = "hover:text-gray-400 p-2";
    return (
        <Footer className={footer_classname}>
            {buildTitleText()}
            <NavList className={nav_classname}>
                {buildLinkArrayItems({classname: link_classname})}
            </NavList>
            {/* {buildFooterLinks()} */}
            {buildCopyWriteText()}
        </Footer>
    );
}


// ---------------------- HELPER EXAMPLES ---------------------- //

// interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// interface CustomTagProps extends React.HTMLAttributes<React.HTMLElementType> {
//     active?: 'yes' | 'no';
// }

// type ClassNameType = {
//     tag: string
// }

// class ClassName {
//     constructor(classname: ClassNameType){
//         self.classname = classname;
//     }
// }

// const ClassName = {

// }



// import React from 'react';

// // 1. Define custom props and extend standard HTML button attributes
// interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// const CustomButton = ({ variant = 'primary', ...props }: CustomButtonProps) => {
//   // 2. Destructure custom props and spread the rest onto the HTML element
//   const className = variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500';

//   return (
//     <button className={className} {...props}>
//       {props.children}
//     </button>
//   );
// };

// // Usage in a Next.js page
// export default function Page() {
//   return (
//     <CustomButton 
//       variant="primary" 
//       onClick={() => console.log('Clicked!')} 
//       type="submit"
//     >
//       Submit
//     </CustomButton>
//   );
// }