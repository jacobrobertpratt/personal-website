
import Image from 'next/image';
import image_neuron_synapse from './images/neuron_synapse_sketch.png'
import image_neocortex_layers from './images/neocortex_layers_sketch.png'
import image_dyn_sys_neuro from './images/image_dyn_sys_neuro_sci.jpeg'
import image_neuro_purves from './images/neuroscience_dale_purves.jpg'

export default function ThesisPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-32 bg-inherit">
		{/* <div className="flex flex-wrap md:max-w-3/4 sm:max-w-11/12 bg-inherit"> */}
			
		
		{/* TITLE */}
		<section className="max-w-3/4 my-10 p-2">
		{/* <Section className="border-black border-2" > */}
			<ul className="flex flex-wrap justify-start">
				<div className="text-slate-900 md:text-5xl text-3xl">
					Study <b/> of the Hopf Bifurcation as a Complex Activation Function
				</div>
				<div className="text-slate-700 md:text-2xl text-xl my-4">
					Summary of M.S. Thesis in Computer Science
				</div>
			</ul>
		</section>

		{/* OVERVIEW */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				What is on this page?
			</h1>

			<p className="my-4 text-slate-700">
				I present a summarized version of my master's thesis, which attempts to introduce a new complex-valued activation function 
			</p>
			
		</section>

		</div>

	);
}