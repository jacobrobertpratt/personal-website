import Link from "next/link";
import type { SVGProps } from "react";

export function ProjectCardLink(props: SVGProps<SVGSVGElement>) {
	return (
		<a
			href="http://localhost:3000/#start_of_project_cards"
			className="text-gray-600 transition-colors hover:text-gray-900"
		>
			PROJECTS
		</a>
	);
}

