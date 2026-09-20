// "use client"

import Link from "next/link";

import type { SVGProps } from "react";
import { APP_ROOT_DOMAIN } from "@/common";


export function HomeLink(props: SVGProps<SVGSVGElement>) {
	let className = "font-bold";
	if (("className" in props) && (typeof props.className === 'string')) {
		className += " " + props.className;
	}
	return (
		<Link
			href={APP_ROOT_DOMAIN}
			className={className}>
			HOME
		</Link>
	);
}

