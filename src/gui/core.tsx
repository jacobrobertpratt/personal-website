
const CoreLayoutStyles = {
    sect: "flex flex-wrap items-center justify-center min-h-32 bg-inherit",
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