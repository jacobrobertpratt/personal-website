// 'use client'

import Link from "next/link";
import type { SVGProps } from "react";

import { APP_PROJ_ID, APP_ROOT_HREF } from "@/common";


export function FolderIcon(props: SVGProps<SVGSVGElement>) {
	const urlhref: string = APP_ROOT_HREF + "#" + APP_PROJ_ID;
	return (
		<Link
			href={urlhref}
			className="flex items-center justify-center">
			<svg
				data-component="Octicon"
				aria-hidden="true"
				focusable="false"
				className="octicon octicon-mark-github"
				viewBox="0 0 24 24"
				width={32}
				height={32}
				fill="currentColor"
				display="inline-block"
				overflow="visible"
				style={{ verticalAlign: "text-bottom" }}
				{...props}>
				<path fillRule="evenodd" clipRule="evenodd" d="M9.31066 4.5H3V18.75L3.75 19.5H20.25L21 18.75V6H10.8107L10.2804 5.46968L10.2804 5.4697L9.31066 4.5ZM10.1894 7.5H10.1893L8.68934 6H4.5V18H19.5V9.75001H12.4394L10.1894 7.5ZM19.5 8.25001V7.5H12.3107L13.0607 8.25001H19.5Z" />
			</svg>

		</Link >
	);
}
