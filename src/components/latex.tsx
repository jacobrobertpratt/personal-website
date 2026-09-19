'use client'

import katex from "katex";
import "katex/dist/katex.min.css";

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function Latex({...props}) {
    
	const html = katex.renderToString(
		props.children,
		{
			displayMode: false,
			throwOnError: false, // Prevents app crashes if LaTeX string has a typo
	  	});
	return (
		<span
			className={props.className}
			dangerouslySetInnerHTML={{__html: html}}
		/>
	);
}
