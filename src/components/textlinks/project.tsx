
import type { SVGProps } from "react";

export function ProjectCardLink(props: SVGProps<SVGSVGElement>) {
	let className = "font-bold";
	if (("className" in props) && (typeof props.className === 'string')) {
		className += " " + props.className;
	}
	return (
		<a
			href="http://localhost:3000/#start_of_project_cards"
			className={className} //"font-bold"// hover:text-slate-500"
		>
			PROJECTS
		</a >
	);
}

