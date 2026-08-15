
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
					Summary of M.S. Thesis - Computer Science
				</div>
			</ul>
		</section>

		{/* INTRODUCTION */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				Introduction
			</h1>

			<p className="my-4 text-slate-700">
				I present a summarized version of my master's thesis in Computer Science. The work attempts to introduce and study the feasibility of a new complex-valued activation function. My motivation for this project came from self-studying neuroscience and noticing a major difference between our current machine learning models and our biological counterparts. There were many complications but mostly they focused on complex-valued functions and our current machine learning frameworks. These were overcome, and I introduced a complex-valued activation function modeled after an Andronov-Hopf bifurcation. The remainder of this page presents a less formal summary of my research. 
			</p>
			
		</section>

		{/* MOTIVATION */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				Motivation
			</h1>

			<p className="my-4 text-slate-700">
				When lightly studying neuroscience, it became apparent that the current machine learning models, although originally motivated by biology, were very different. The most prominent difference is that biological neurons transfer information by activation frequency, while machine learning models are passed through simple non-linear functions. I was introduced to the book, “Dynamical Systems in Neuroscience” which proposes a new neuron model and one that could be introduced to current machine learning models using complex-values.
			</p>

			<p className="my-4 text-slate-700">
				Complex-valued neural networks had been attempted and different activation functions have ben studied. Hence, it has been previously studied. Moreover, complex activation functions have been used in many neural networks. These functions have commonly been transcendental, split in to their real and imaginary elements, or used an amplitude-phase approach.
			</p>

			<p className="my-4 text-slate-700">
				Complex-valued functions have benefited humanity in ways most people don’t understand. They play a large role in video, image, and audio compression algorithms. Along with image filtering and signal processing. However, they are commonly avoided due to being a difficult concept to grasp.
			</p>

		</section>

		{/* CHALLENGES */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				Challenges
			</h1>

			<p className="my-4 text-slate-700">
				Complex-valued functions are not differentiable in the standard way so they pose a problem to the core automatic differentiation feature in machine learning frameworks. Additionally, common functions in these frameworks have not been adopted for complex-values and would need to be altered. This essentially required excessive time commitment learning and building many core features in the TensorFlow framework.
			</p>

			<p className="my-4 text-slate-700">
				The Hopf bifurcation is represented as a pair of differential equations and can be solved computationally using a differential equation solver. However, it wasn’t until recently an approach was introduced that auto-differentiated these solvers, providing the gradient update required for neural networks.
			</p>

		</section>

		{/* BACKGROUND */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				Background
			</h1>

			<h2 className="my-4 font-bold text-slate-700">
				Dynamical Systems, Bifurcations, & Limit-cycles
			</h2>

			<p className="my-4 text-slate-700">
				Dynamical Systems are defined by a state space, evolution equation, and time interval. Solutions are found for dynamical systems by integrating from the initial time to final time, where the state evolves by way of the evolution equation. These equations that govern the state evolution are commonly differential equations.
			</p>

			<p className="my-4 text-slate-700">
				Some systems have changing evolutions which are triggered when specific properties are met. These can lead to bifurcations in the phase space, where points of attraction or repulsion exist. A special type of bifurcation is called a limit-cycle where instead of a point, a cyclic trajectory appears that attract or repels. This is where the Hopf bifurcation lives.
			</p>

			<p className="my-4 text-slate-700">
				The normal forms equations are the simplest differential equations that preserves the bifurcation functionality.
			</p>

		</section>

		{/* ACTIVATION FUNCTION */}
		<section className="max-w-3/4 p-2">
			<h1 className="my-4 text-2xl text-slate-900">
				The Activation Function
			</h1>

			<p className="my-4 text-slate-700">
				The activation function is an element-wise multi-variable complex-valued activation function, defined as a dynamical system. The function’s components are a complex-valued state space x, positive real-valued time interval t_0 – t_1, and complex-valued input coefficients 𝛼 and 𝛽.
			</p>

			<p className="my-4 text-slate-700">
				------- ADD EQUATIONS HERE -------
			</p>

			<p className="my-4 text-slate-700">
				However, without restrictions the activation function would exhibit instability and inhibit the usefulness of our function; hence, two additional requirements are placed on the 𝛼 and 𝛽 coefficients.
			</p>

			<p className="my-4 text-slate-700"></p>

		</section>

		{/* IMPLEMENTATION */}
		<section className="max-w-3/4 p-2">
			<h1 className="my-4 text-2xl text-slate-900">
				Implementation
			</h1>
			<p className="my-4 text-slate-700"></p>
		</section>

		{/* RESULTS */}
		<section className="max-w-3/4 p-2">
			<h1 className="my-4 text-2xl text-slate-900">
				Results
			</h1>
			<p className="my-4 text-slate-700"></p>
		</section>

		{/* CONCLUSION */}
		<section className="max-w-3/4 p-2">
			<h1 className="my-4 text-2xl text-slate-900">
				Conclusion
			</h1>
			<p className="my-4 text-slate-700"></p>
		</section>

		{/* REFERENCES */}
		<section className="max-w-3/4 p-2">
			<h1 className="my-4 text-2xl text-slate-900">
				References
			</h1>
			<p className="my-4 text-slate-700"></p>
		</section>

		</div>

	);
}