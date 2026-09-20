// 'use client'

import { APP_PROJ_HREF } from "@/common";
import { APP_PATH_ROUTES_MANIFEST } from "next/dist/shared/lib/constants";
import Link from "next/link";
import type { SVGProps } from "react";

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
	const proj_href = "#" + { APP_PROJ_HREF };
	return (
		<Link
			href={proj_href}
			className="flex items-center justify-center"
		>
			<svg
				data-component="Octicon"
				aria-hidden="true"
				focusable="false"
				className="octicon octicon-mark-github"
				viewBox="0 0 16 16"
				width={32}
				height={32}
				fill="currentColor"
				display="inline-block"
				overflow="visible"
				style={{ verticalAlign: "text-bottom" }}
				{...props}
			>
				<path d="M9 4.5L8.25 5.25V7.5H4.5L3.75 8.25V18.75L4.5 19.5H19.5L20.25 18.75V8.25L19.5 7.5H15.75V5.25L15 4.5H9ZM14.25 7.5V6H9.75V7.5H14.25ZM9.75 9H14.25V18H9.75V9ZM8.25 9H5.25V18H8.25V9ZM15.75 18V9H18.75V18H15.75Z" />
			</svg>
		</Link >
	);
}

{/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 4.5L8.25 5.25V7.5H4.5L3.75 8.25V18.75L4.5 19.5H19.5L20.25 18.75V8.25L19.5 7.5H15.75V5.25L15 4.5H9ZM14.25 7.5V6H9.75V7.5H14.25ZM9.75 9H14.25V18H9.75V9ZM8.25 9H5.25V18H8.25V9ZM15.75 18V9H18.75V18H15.75Z"></path> </g></svg> */ }