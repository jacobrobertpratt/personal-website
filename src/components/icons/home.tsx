// "use client"

import type { SVGProps } from "react";

import type { Icon } from "next/dist/lib/metadata/types/metadata-types";

import { APP_ROOT_HREF } from "@/common"; APP_ROOT_HREF

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<a
			href={APP_ROOT_HREF}
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
				<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z" fill="#080341" />

			</svg>
		</a>
	);
}