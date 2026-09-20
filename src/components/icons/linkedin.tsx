// 'use client'

import Link from "next/link";
import type { SVGProps } from "react";

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<Link
			href="https://www.linkedin.com/in/jacobrobertpratt/"
			target="_blank"
			rel="noopener noreferrer"
			className="flex"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				viewBox="0 0 34 34"
				width={24}
				height={24}
				fill="currentColor"
				display="inline-block"
				overflow="visible"
				style={{ verticalAlign: "text-bottom" }}
				{...props} >
				<path d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z" />
			</svg>
		</Link>
	);
}