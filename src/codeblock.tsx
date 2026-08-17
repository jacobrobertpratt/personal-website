
import { JSX, Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'

import { codeToHast } from 'shiki';

import type { Root, RootContent } from 'hast';

/*
WARNING: Might not want to have this async since it is an HTML tag-class
	There should inherently be syncronous functions ... but maybe not on the server side?
	Unsure ...
 */
export async function CodeBlock(
	{...props},
	language: string='python'
) {

	let code_string: string = String.raw``;
	let className: string = "";
	
	// Set local variables to add to HTML 
	if (('children' in props) && (typeof props.children === 'string')) { code_string = " " + props.children; }
	if (("className" in props)&& (typeof props.className === 'string')) { className = " " + props.className; }

	// Generate HTML Abstract Syntax Tree -> HAST
	const hast: Root = await codeToHast(
		code_string,
		{
			lang: 'python',
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			},
			// optional customizations
			defaultColor: 'light'
		}
	);

	console.log('hast:',hast);

	// Update class and style properties of 'pre' to manipulate codeblock functionality
	if ("children" in hast) {		
		let child: RootContent = hast.children[0];
		if ("tagName" in child) {
			if (child.tagName === 'pre') {
				// Manipulate className information //
				child.properties.class += "w-auto h-auto overflow-auto px-4 bg-inherit" + className;
				child.properties.style = undefined; // Update the style here.
			}
		}
	}

	// Build a JSX Runtime Element 
	return toJsxRuntime(
			hast,
			{
				Fragment,
				jsx,
				jsxs
			}
		) as JSX.Element;
}
