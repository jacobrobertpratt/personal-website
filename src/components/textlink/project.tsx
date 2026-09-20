// "use client"

import Link from "next/link";

import type { SVGProps } from "react";
import { APP_ROOT_DOMAIN } from "@/common";

export function ProjectTextLink(props: SVGProps<SVGSVGElement>) {

	const urlstr: string = "" + APP_ROOT_DOMAIN + "#start_of_project_cards"

	let className = "font-bold";
	if (("className" in props) && (typeof props.className === 'string')) {
		className += " " + props.className;
	}
	return (
		<Link
			href={urlstr}
			className={className} >
			PROJECTS
		</Link >
	);
}

