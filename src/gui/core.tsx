
const CoreLayoutStyles = {
    sect: "flex flex-wrap items-center justify-center",
    head: "sticky top-0 z-50 w-full flex flex-row justify-between",
    foot: ""
}


export function Section({...props}) {
    props.className = CoreLayoutStyles.sect + " " + props.className;
    return ( <section {...props}>{props.children}</section>);
}

export function Header({...props}) {
    props.className = CoreLayoutStyles.head + " " + props.className;
    return ( <header {...props}>{props.children}</header>);
}

export function Footer({...props}) {
    props.className = CoreLayoutStyles.foot + " " + props.className;
    return ( <footer {...props}>{props.children}</footer>);
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