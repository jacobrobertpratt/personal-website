
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
				Welcome
			</h1>
			
			<p className="my-4 text-slate-700">
				I started this research as I do all projects, by selecting the most difficult path and proceeding to blindly sprint down it until I get confused. Instead of selecting a well-studied area of machine learning, understanding the sub-discipline, assessing how to improve on an idea, and setting up clear obtainable goals; I proceeded to self-study neuroscience to gain insight into how human cognition works. It seemed logical to study our human mechanism that gives us intelligence, if I were to improve on the desired artificial version. This path led me to the importance of frequencies, recurrency, and dynamical systems, all of which play a critical role in human intelligence and is barely studied in machine learning, oh joy! But wait! How did I get to this conclusion?
			</p>

		</section>

		{/* MOTIVATION */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				Our Neurological Model
			</h1>

			<p className="my-4 text-slate-700">
				Join me for a short introduction into neuroscience at the cellular and structural levels, and was gathered mostly from cite: Neuroscience Textbook by Dale Purves, a great introduction textbook.
			</p>

						<div className='flex flex-wrap items-center justify-center my-4'>
				<Image
					className='lg:max-w-1/2'
					src={image_neuro_purves}
					alt="Neuroscience Textbook Image"
				/>
			</div>

			<p className="my-4 text-slate-700">
				Biologically, a neuron consists of dendritic and axonal connections, representing the input and output of information, respectively. Neurons transfer information through an electrochemical exchange at these synapses, where neurotransmitters trigger special ion channels to open, producing an influx of ionized molecules into the cell which change the cells voltage potential. Thousands of neurons can be connected to the dendrites of a single neuron. The collective cellular effect is integrated, or summed, when there are simultaneous voltage potential spikes. Once the internal voltage potential of the neuron surpasses a threshold, a chain reaction triggers a current through the axon and releasing neurotransmitters on a different neuron.
			</p>
		
			<div className='flex flex-wrap items-center justify-center my-4'>
				<Image
					className='lg:max-w-1/2'
					src={image_neuron_synapse}
					alt="Neuron & Synapse"
				/>
			</div>

			<p className="my-4 text-slate-700">
				The neocortex, responsible for higher-order cognitive functions, is located on the outer-most section and consists of 6-layers, distinguished by their cell and connection types. Connections going into the neocortex occur primarily in layer 4, with layers 2 and 3 containing intercortical connections, and layers 5 and 6 extending out of the neocortex. Columns of neurons traverse between layers, connecting radially aligned groups of cells sharing common functionality. Additionally, interneurons extend horizontally within the same layers, connecting areas with common functionality. The cerebral cortex, which is 90% neocortex, is radially grouped into different functional areas, for example the visual cortex, frontal association cortex, or motor cortex to name a few.
			</p>

			<div className='flex flex-wrap items-center justify-center my-4'>
				<Image
					className='lg:max-w-1/2'
					src={image_neocortex_layers}
					alt="Six Neocortex Layers"
				/>
			</div>

			<p className="my-4 text-slate-700">
				Now where is all this intuition I was supposed to find?
			</p>

			<p className="my-4 text-slate-700">
				State of the art artificial neural networks encompass many of these primary functions found above. Biological neurons can be simplified down to a weighted independent variable summation, bounded by a type of threshold function. Each layer in an ANN acts like a single neuron. The weight values represent the strength of the synapse for that particular input, while a non-linear function acts similar to a neuron’s threshold. Biologically, learning occurs via secondary messenger that are released and fed backward to the presynapse, provided the postsynaptic neuron action potential is triggered. Artificially, this occurs across the entire network once the output value is evaluated. They both tend to follows the same principle of strengthening important connections and diminishing unimportant connections.
			</p>

			<p className="my-4 text-slate-700">
				Structurally, the neocortex shares a common architecture. This can be replicated if only we could account for the sheer size and diversity used biologically. I’m of course referring the hundreds of different types and functions of neurons and the numerous neurotransmitters that exist. The artificial models are diverse in their structures with some commonality based on function. Hence, for machine translation the transformer models have really catapulted the field of machine learning to new heights. Visually, convolutional models have controlled most of the subspace with different down and up sampling structures.
			</p>


			<p className="my-4 text-slate-700">
				It was about this time I started to observe some interesting patterns.
			</p>

			<p className="my-4 text-slate-700">
				First, most connections stay with-in a local area, which implies there are a significant amount recurrent nuronal connection, both internal to and between the neocortical layers. Second, “Neurons that fire together wire together,” and is known as Hebb’s postulate and corelates the similarities of cellular firing with neuronal connection strength. This implies the motivation of neurons to syncronize and form recurrent networks. Third, neuron action potentials are all-or-none, meaning they occur completely or not at all. The amplitude of this action potential is independent of the current that invokes them. Cite: Perves – Neuroscience book, pg. 35. It follows that the transfer of information between neurons is encoded in the frequency rather than amplitude of neuronal activation. Finally, most neurons exhibit a cyclic, or periodic, firing pattern of their activations, trivially inherent given the previously described system, and leading to the phenomenon of synchrony.
			</p>

			<p className="my-4 text-slate-700">
				The machine learning field has had multiple network models with a similar focus. First up, the recurrent neural networks RNN. These networks contain a type of state in addition to the feedforward weight and activation functions. They would “unravel” across the time dimension in a single pass, essentially being treated like a deep neural network DNN. The network would stabilize or explode provided the weights and activation type you choose. Additional problems came with the training method, where gradient updates would explode or vanish as they were propagated backwards in the network. This was known as the exploding-vanishing gradient problem EVGP. Second, spiking neural networks SNN which attempt to better replicate the biological equivalent. SNNs also keep a state of action potentials and are constantly outputting values in what is called a spike train or pulse train. The activation functions vary, but follow a summation and threshold-based approach. SNNs have not gained traction like feed forward networks due to their implementation, interpretation, and training complexities. The third network type, which is similar to SNN, are the reservoir computing networks. These are the Echo State Machine and Liquid State Machines. Both define a state that is fed inputs and produces outputs in the form of temporal train of values. Their major difference is that the Echo State Machine is discrete, while the Liquid State Machine is continuous and real-valued. The Liquid State Machine is presented as more theoretical and considered the state to be like a volume of changing liquid. Of these networks the best performing and adopted was the RNN models, which had the benefit adoption into popular auto-differentiation frameworks.
			</p>
			<p className="my-4 text-slate-700">
				Viewing biological networks as facilitating the organized interaction of information signals allows us to represent our artificial neurons as frequencies and amplitudes. This aligns with the current biological. Using complex-values could accomplish this representation and allow current network model architectures to be used. Different approaches using complex-values have been tried and work well on problems involving signal processing, frequency, and oscillations. However, the common approaches to an activation function have generally been adopted from the real-value domain, possibly reducing their potential. 
			</p>

			<p className="my-4 text-slate-700">
				The text written by Eugene M. Izhikevish titled, “Dynamical Systems in Neuroscience,” covers dynamical systems which model neurons and other cognitive functions. One of these is a two-dimensional dynamical system that contains a stable limit-cycle called the Andronov-Hopf Bifurcation, or Hopf bifurcation, and represents the resting and excited states of a spiking neuron exceptionally well.
			</p>

			<div className='flex flex-wrap items-center justify-center my-4'>
				<Image
					className='lg:max-w-1/2'
					src={image_dyn_sys_neuro}
					alt="Dynamical Systems in Neuroscience"
				/>
			</div>

			<p className="my-4 text-slate-700">
				But wait! This is where we wanted to end up?
			</p>

			<p className="my-4 text-slate-700">
				Honestly, I didn’t really know where I was going. Seems like there are more questions than answers at this point in my research. To summarize my current path: I would need to relearn the properties of complex-values, teach myself dynamical systems and differential equations, develop a backpropagation method for a differential equation solver, implement custom optimization, activation, and metric/loss functions, and all in a machine learning framework I had no experience using. All because complex-valued functions differentiate like a piecewise sack of potatoes and my Nvidia GPU is haunted by René Descartes ...
			</p>

			
			<p className="my-4 text-slate-700">
				So I got started learning TensorFlow.
			</p>

			<p className="my-4 text-slate-700">
				The remainder on this page summarizes the research.
			</p>

		</section>

		{/* INTRODUCTION */}
		<section className="max-w-3/4 p-2">

			<h1 className="my-4 text-2xl text-slate-900">
				Project Challenges
			</h1>

			<p className="my-4 text-slate-700">
				A primary challenge this project faced was inherent in complex-values. First, complex-valued functions are not differentiable in the common sense, and an alternative calculus is needed. This poses a problem in machine learning because differentiation is how gradiant changes are determined. Additionally, the main feature of these major frameworks is their automatic differentiation, so any uncommon differentation will require customization. You know that long painful road I mentioned before? This is what it looks like.
			</p>

			<p className="my-4 text-slate-700">
				Complex-valued functions are not differentiable but are sudo-differentiable using Wertinger calculus. 
			</p>

			<p className="my-4 text-slate-700">
				The choice to use TensorFlow / Keras was because they allowed low-level customization while maintainging high-level training functionality, and are widely adopted across research and industry. At this time, PyTorch was just becoming popular. The TensorFlow implementation used only expected real-values so the built-in optimization, initialization, and general models needed to be rewritten.
			</p>
			
		</section>

		{/* BACKGROUND */}

		{/* RELATED WORKS */}

		{/* METHOD */}

		{/* RESULTS */}

		{/* DISCUSSION */}

		</div>

	);
}