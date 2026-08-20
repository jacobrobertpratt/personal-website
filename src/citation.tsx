
import { createHash } from 'crypto';

// List of id values specific to the set reference.
let ref_id_list: string[] = [];

export function Cite(
	{...props}
) {
	const item = document.getElementById("");
	console.log('\n item:',item,'\n')

	return (
		<a href='#ref_neuro_dale_purves' className='text-green-500'></a>
	);
}

function hashStringNode(input: string): string {
	return createHash('sha256').update(input).digest('hex');
}

export function Reference(
	{...props},
) {

	// console.log('start -> children:',props.children);
	// console.log("start -> ref_id_list:",ref_id_list);
	
	let unique_ref_id: string = hashStringNode(props.children);
	// console.log("unique_ref_id:",unique_ref_id);

	// If reference has already been added, return nothing.
	const check: boolean = ref_id_list.includes(unique_ref_id);
	// console.log('check:',check);

	if (check === false) { 
		// Add unique reference id to reference list
		ref_id_list.push(unique_ref_id);
	}

	// Get unique id
	const index = ref_id_list.indexOf(unique_ref_id) + 1;
	const className="flex flex-row w-full h-auto " + props.className;
	
	return (
		<div id={unique_ref_id} className={className}>
			<div className="justify-left pr-2">{"["+String(index)+"]"}</div>
			<div className="text-left pl-2">{props.children}</div>
		</div>
	);
}