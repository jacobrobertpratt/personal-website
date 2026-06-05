
import Link from 'next/link'
import { GLOBAL_APP_COPYWRITE, GLOBAL_APP_TITLE, GlobalLayoutClassNames } from '@/global';

/**
 * TODO:
 *  - make structure that defines class definitions. This would naturally inherit tailwind names ... maybe.
 *  - 
 * */

const CoreLayoutStyles = {
    html: "h-full w-full",
    body: "min-h-full min-w-full",
    main: "min-h-screen min-w-full",
    page: "",
    sect: "h-96",
    head: "sticky top-0 z-50 w-full flex flex-row justify-between",
    foot: "",
    link: "",
    navi: ""
}

export function Html({...props}) {
    props.className = CoreLayoutStyles.html + " " + props.className
    return ( <html {...props}>{props.children}</html> );
}

export function Body({...props}) {
    props.className = CoreLayoutStyles.body + " " + props.className
    return ( <body {...props}>{props.children}</body> );
}

export function Main({...props}) {
    props.className = CoreLayoutStyles.main + " " + props.className
    return ( <main {...props}>{props.children}</main> );
}

export function Page({...props}) {
    props.className = CoreLayoutStyles.page + " " + props.className
    return ( <div {...props}>{props.children}</div> );
}

export function Section({...props}) {
    props.className = CoreLayoutStyles.sect + " " + props.className;
    return ( <section {...props}>{props.children}</section>);
}

export function Header({...props}) {
    props.className = CoreLayoutStyles.head + " " + props.className
    return ( <header {...props}>{props.children}</header>);
}

export function Footer({...props}) {
    props.className = CoreLayoutStyles.foot + " " + props.className
    return ( <footer {...props}>{props.children}</footer>);
}

export function Navi({...props}) {
    props.className = CoreLayoutStyles.navi + " " + props.className
    return ( <nav {...props}>{props.children}</nav> );
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
    return (
        <li>
            <Link href={props.href} {...props}>
                {props.children}
            </Link>
        </li>
    );
}

/**
 * <header class="flex justify-between items-center px-6 py-4 bg-white shadow-md">
  <!-- 1. Left Section (e.g., Logo) -->
  <div class="flex-1">
    <a href="#" class="font-bold text-xl text-gray-800">Brand</a>
  </div>

  <!-- 2. Center Section (e.g., Navigation) -->
  <div class="flex-1 flex justify-center">
    <nav class="space-x-6">
      <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
    </nav>
  </div>

  <!-- 3. Right Section (e.g., Buttons) -->
  <div class="flex-1 flex justify-end">
    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
  </div>
</header>

-------- OLD --------
<NavList className={GlobalLayoutClassNames.root.header.navl}>
    <li><Link href="/" className={GlobalLayoutClassNames.root.header.link}>HOME</Link></li>
    <li><Link href="/projects" className={GlobalLayoutClassNames.root.header.link}>PROJECTS</Link></li>
</NavList>
 */

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
    
    return (
        <Footer className={GlobalLayoutClassNames.root.footer.foot}>
            {buildTitleText()}
            <NavList className={GlobalLayoutClassNames.root.footer.navl}>
                {buildLinkArrayItems({classname: GlobalLayoutClassNames.root.footer.link})}
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