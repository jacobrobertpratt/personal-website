// "use client"

import Link from "next/link";
import type { SVGProps } from "react";

export function ProjectCardLink(props: SVGProps<SVGSVGElement>) {
	let className = "font-bold";
	if (("className" in props) && (typeof props.className === 'string')) {
		className += " " + props.className;
	}
	return (
		<Link
			href="http://localhost:3000/#start_of_project_cards"
			className={className}>
			PROJECTS
		</Link>
	);
}

