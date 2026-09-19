// "use client"

import Link from "next/link";
import type { SVGProps } from "react";

export function HomeLink(props: SVGProps<SVGSVGElement>) {
	let className = "font-bold";
	if (("className" in props) && (typeof props.className === 'string')) {
		className += " " + props.className;
	}
	return (
		<Link
			href="https://www.jacobrobertpratt.com/"
			className={className}>
			HOME
		</Link>
	);
}

