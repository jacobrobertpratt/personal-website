
export function Section({...props}) {
    props.className = "flex flex-wrap items-center justify-center min-h-96 bg-inherit " + props.className;
    return ( <section {...props}>{props.children}</section>);
}