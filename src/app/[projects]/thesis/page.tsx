
import Image from 'next/image';
import image_dyn_sys_neuro from './images/image_dyn_sys_neuro_sci.jpeg';
import image_iso_phase_plane from './images/iso_phase_planes_crpd.png';

import { Latex } from '@/latex';
import { CodeBlock } from '@/codeblock'
import { Reference } from '@/citation'

const test_python_code_example_1 = String.raw`
# Create internal hopf cell (represents a single timestep )
if self.cell is None:
	self.cell = HopfRNNCellTheta(
		units = self.units,
		activation = self.activation,
		recurrent_weight = self.recurrent_weight,
		input_weight = self.input_weight,
		train_weights = self.train_weights,
		save_weights = self.save_weights,
		dtype = self.dtype,
		name = self.name + '_cell'
	)
`;

const test_python_code_examlpe_2 = String.raw`
def call( self , inputs , states , training = False ):
	z = states[0] if tf.nest.is_nested( states ) else states
	x = inputs[0] if tf.nest.is_nested( inputs ) else inputs
	z0 , z_ = self.split_input( z )
	x0 , x_ = self.split_input( x )
	
	z_i , Az , Bx = self.std_map( self.A , self.B , z_ , x_ )

	if self.activate is not None:
		y_k = self.activate( z_ , z_i ) if self.actinpt_size == 2 else self.activate( z_i )
	else:
		y_k = z_i

	re_j = ( z0 + x0 ) / 2.
	y_t = self.combine_output( re_j , y_k )

	z_k , _ = tf.linalg.normalize( z_ + z_i , ord = 2 )
	z_t = self.combine_output( re_j , z_k )

	z_t = [ z_t ] if tf.nest.is_nested( states ) else z_t

	return y_t , z_t`;


export default async function ThesisPage() {
	
	const test_latex_string = String.raw`\text{This is a test string ... and Math:  } \frac{a}{b} 2`;

	return (
		<div className="flex flex-col items-center justify-center min-h-32 pb-60">
			
			{/* TITLE */}
			<section className="w-5/7 my-10 p-2">
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
			<section className="w-5/7 p-2">

				<h1 className="text-2xl text-slate-900">
					Introduction
				</h1>

				<p className="my-4 text-slate-700">
					This work summarizes my master’s thesis in Computer Science which investigated the feasibility of a complex-valued activation function in recurrent neural networks. The recurrent and oscillatory differences between biological neurons and artificial networks was the driving motivation of the study. The proposed Hopf activation function is based on the Andronov–Hopf bifurcation, whose limit-cycle dynamics provide a natural representation of amplitude and phase in the complex domain.
				</p>

				<Image
					src={image_iso_phase_plane}
					alt="Dyn Sys Neuro - Text"
					className="lg:float-right lg:w-1/3 rounded-lg"
				/>

				<p className="my-4 text-slate-700">
					Implementing this activation function required overcoming several challenges with complex-valued functions, automatic differentiation, and the use of an ODE solver within existing machine-learning frameworks. The function was evaluated using a complex-valued RNN on two datasets, the Mackey–Glass and Copy Memory, and compared with other established complex-valued activation functions. Results showed that the Hopf activation is feasible when appropriate stability constraints are placed on the input coefficients. The configurations evaluated performed equivalent or better than the established functions, particularly on the Mackey–Glass dataset.
				</p>

				<p className="my-4 text-slate-700">
					Overall, this work demonstrates the potential for using the Hopf-bifurcation as a complex-valued activation function. However, there were practical limitations in ODE solver stability, computational cost, and network design. Further research could better isolate the benefits of the Hopf dynamics from those of the ODE solver, allow evaluation on more established network architectures, and determine its applicability to a broader range of problems.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					Motivation
				</h1>

				<p className="my-4 text-slate-700">
					While studying "Neuroscience" by Dale Purves et al. <a href='#ref_neuro_dale_purves' className='text-red-500'> [cite]</a>, a significant difference between biological and artificial neural networks became apparent. That is, biological networks are highly recurrent with information represented as frequency of neuronal firing. Conventional artificial networks instead transform weighted inputs through nonlinear activation functions, with neuronal frequency and phase having no direct analogue in most architectures.
				</p>

				<p className="my-4 text-slate-700">
					Dynamical Systems in Neuroscience by Eugene M. Izhikevich <a href='#ref_neuro_dale_purves' className='text-red-500'> [cite] </a>
					provides another method to model neuronal behavior, as dynamical systems capable of oscillation and repetitive firing. These models involve frequency, amplitude, and phase, and can be represented compactly with complex values.
				</p>

				<p className="my-4 text-slate-700">
					Complex-valued neural networks have been explored previously, with activation functions commonly adapted from real-valued networks or applied separately to real and imaginary components. However, these approaches may not take full advantage of complex-valued dynamics. A neuron model designed specifically around oscillation could instead use complex values to represent amplitude and phase while preserving much of the structure of existing neural-network architectures.
				</p>


				<p className="my-4 text-slate-700">
					Complex-valued mathematics is already fundamental to signal processing, filtering, communications, and related fields through techniques such as Fourier analysis. Despite its usefulness for representing oscillatory behavior, it remains relatively uncommon in mainstream machine learning. This suggests an opportunity to combine dynamical neuron models with complex-valued neural networks to more directly represent the temporal behavior observed in biological systems.
				</p>



				<h1 className="mt-12 text-2xl text-slate-900">
					Challenges
				</h1>

				<p className="my-4 text-slate-700">
					Complex-valued neural networks introduce several challenges beyond those found in conventional real-valued models. Activation functions are particularly difficult because complex numbers have no natural ordering, while functions that are fully complex-differentiable are mathematically restrictive. Backpropagation and optimization also require additional consideration, often using Wirtinger derivatives or treating the real and imaginary components separately. These differences complicate the direct adaptation of common activation functions, optimizers, and training methods.
				</p>

				<p className="my-4 text-slate-700">
					Complex values also introduce additional concerns regarding stability and representation. Weight initialization and normalization must account for both magnitude and phase, while loss functions must ultimately map complex outputs to a real-valued objective. This becomes especially important when phase represents meaningful information, such as the timing or synchronization of neuronal activity, since conventional operations may unintentionally distort these relationships.
				</p>

				<p className="my-4 text-slate-700">
					Finally, practical implementation remains more difficult than with real-valued networks. Machine-learning frameworks provide varying levels of support for complex tensors, and some layers, operations, and hardware optimizations remain oriented toward real-valued computation. Complex arithmetic also carries additional computational and memory costs. Together, these challenges make complex-valued networks more difficult to design and train, even when complex representations are well suited to the underlying problem.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					Background
				</h1>

				<p className="my-4 text-slate-700">
					A dynamical system describes how the state of a system changes over time. It can be defined by three basic components: a state space, an evolution function describing how the state changes, and a time domain over which that change occurs. The evolution function produces trajectories through the state space, often visualized as a phase space. Of particular interest are fixed points, where the state no longer changes; these can be stable, attracting nearby trajectories, or unstable, repelling them.
				</p>

				<p className="my-4 text-slate-700">
					A bifurcation occurs when changing a system parameter causes a qualitative change in the structure or behavior of the dynamical system. For example, a fixed point may appear, disappear, or change stability as a parameter crosses a critical value. Bifurcations can often be represented by simplified differential equations called normal forms, which preserve the essential behavior of the bifurcation while removing unnecessary complexity.
				</p>

				<p className="my-4 text-slate-700">
					A limit cycle is an isolated closed trajectory representing periodic behavior: once a state lies on the cycle, its evolution repeatedly follows the same orbit. Like fixed points, limit cycles can be stable or unstable. A stable limit cycle attracts nearby trajectories and therefore produces a persistent oscillation even when the initial state does not begin exactly on the cycle.
				</p>

				<p className="my-4 text-slate-700">
					The Hopf bifurcation connects these concepts by describing a transition between a fixed point and periodic oscillation as a system parameter changes. This makes it particularly relevant to neuronal dynamics: a resting neuron can be associated with a stable state, while repetitive firing can be represented by oscillatory limit-cycle behavior. Your uploaded thesis uses this structure directly, defining a dynamical system in the complex domain whose evolution follows the Hopf normal form, thereby giving the proposed activation function a limit-cycle structure.
				</p>



				<h1 className="mt-12 text-2xl text-slate-900">
					The Activation Function
				</h1>

				<p className="my-4 text-slate-700">
					The proposed Hopf activation function uses the Poincaré-Andronov-Hopf bifurcation as a nonlinear, complex-valued activation. Rather than directly mapping an input through a static algebraic function, the activation treats the input as the initial state of a dynamical system and uses an ordinary differential equation (ODE) to evolve it over a specified time interval. The underlying Hopf bifurcation is a two-dimensional limit-cycle bifurcation, making the activation naturally capable of representing both radial and rotational behavior in the complex plane.
				</p>

				<p className="my-4 text-slate-700">
					The activation is controlled primarily by two complex coefficients, (\alpha=a+ib) and (\beta=c+id). Their real components determine much of the radial behavior and stability of the system. To ensure a stable limit cycle, the real component (c) of (\beta) is restricted to negative values. Under this restriction, (a\le0) causes the state to converge toward the origin, while (a\gt0) produces a stable limit cycle whose radius depends nonlinearly on (a) and (c). The resulting radial behavior therefore resembles a nonlinear piecewise activation while retaining the dynamics of the Hopf system.
				</p>

				<p className="justify-self-center my-4 text-slate-500">
					<Latex>{test_latex_string}</Latex>
				</p>

				<p className="my-4 text-slate-700">
					The imaginary components (b) and (d) primarily control the angular or rotational behavior of the activation. The value (b) governs rotation inside the limit-cycle radius, while (d) influences rotation outside it. Requiring these components to have compatible signs produces phase uniformity, preventing abrupt changes in rotational direction that can create numerical instability. Consequently, the real and imaginary components of the coefficients provide a degree of separation between the activation's radial stability and its phase or frequency behavior.
				</p>

				<p className="my-4 text-slate-700">
					The resulting Hopf activation combines properties that are normally separated in conventional activation functions: nonlinear amplitude control, stable recurrent behavior, and continuous phase evolution. Simulations in the thesis demonstrate transitions between fixed-point and limit-cycle behavior while also showing that changes to the imaginary coefficients alter the frequency and angular evolution of the state. This allows the activation to operate as a complex-valued dynamical process rather than simply a static transformation of its input.
				</p>




				
				<h1 className="mt-12 text-2xl text-slate-900">
					Implementation
				</h1>

				<p className="my-4 text-slate-700">
					This research was implemented in Python using TensorFlow, TensorFlow Probability, and other supporting libraries. A major component of the implementation was enabled by TensorFlow Probability, which provided a Dormand–Prince (DOPRI) ODE solver with adjoint sensitivity for gradient calculations. This allowed the Hopf activation function to be integrated with automatic differentiation and gradient-based training. The work of Chen et al. (2018), Neural Ordinary Differential Equations, provided the groundwork for applying the adjoint sensitivity method to machine learning with ODE solvers.
				</p>

				<p className="my-4 text-slate-700">
					The network was evaluated using two time-dependent datasets: Mackey–Glass and Copy Memory. Mackey–Glass represents a chaotic time series with nonlinear temporal relationships, while Copy Memory tests the ability of a recurrent network to retain information over many timesteps. Both datasets are commonly used to evaluate recurrent neural networks.
				</p>

				<p className="my-4 text-slate-700">
					Working in the complex-valued domain required several custom implementations. A custom recurrent-network calling function was created as a wrapper around the standard tf.keras.backend.rnn function.
				</p>

				{/* Current Codeblock configuration */}
				<div className="border border-slate-400 rounded-lg bg-[#e9e9e9]">
					<button className="relative float-right text-slate-300 hover:text-slate-700 m-2">
						<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
							/>
						</svg>
					</button>
					<CodeBlock className="text-sm">{test_python_code_examlpe_2}</CodeBlock>
				</div>

				<p className="my-4 text-slate-700">
					A custom RNN layer was implemented to map real-valued inputs into the complex domain and return the resulting complex-valued states to the real domain for output.
				</p>

				<p className="my-4 text-slate-700"> ------- CODE EXAMPLE ------- </p>

				<p className="my-4 text-slate-700">
					A custom RNN unit was implemented to represent a single recurrent step operating in the complex domain.
				</p>

				<p className="my-4 text-slate-700"> ------- CODE EXAMPLE ------- </p>

				<p className="my-4 text-slate-700">
					The specialized Hopf activation function was implemented using TensorFlow Probability's ODE solver. The Hopf evolution equation served as the solver's step function, while complex-valued parameters had to be separated and recombined because the DOPRI implementation did not directly support complex-valued data types.
				</p>

				<p className="my-4 text-slate-700"> ------- CODE EXAMPLE ------- </p>

				<p className="my-4 text-slate-700">
					Unitary, Hermitian, and skew-Hermitian initialization matrices required custom implementations, while standard initialization matrices were converted to the complex64 data type.
				</p>

				<p className="my-4 text-slate-700"> ------- CODE EXAMPLE ------- </p>

				<p className="my-4 text-slate-700">
					Experiments were also conducted using a custom optimization algorithm based on RMSProp. The primary modifications separated gradient updates according to the matrix properties of the parameters being updated.
				</p>

				<p className="my-4 text-slate-700"> ------- CODE EXAMPLE ------- </p>
				
				<p className="my-4 text-slate-700">
					Interestingly, GPU execution resulted in slower performance than CPU execution. The thesis attributes this behavior to the use of complex-valued operations and the RMSProp optimizer, with portions of the model potentially executing on different processors and introducing additional CPU–GPU memory-transfer overhead.
				</p>

				<p className="my-4 text-slate-700">
					Experiments were conducted on an AMD Ryzen 9 7950X 16-Core processor at 4.50 GHz with 64 GB of RAM running Windows 11 Pro. GPU computations used an NVIDIA RTX A4500 with CUDA 11.8 and TensorFlow 2.10.0 with Grappler optimization.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					Results
				</h1>

				<p className="my-4 text-slate-700">
					Different network and dataset sizes were tested against multiple Hopf activation parameter configurations to evaluate the function's feasibility and performance. The parameter experiments evaluated seven configurations of the initial state (\gamma_t_0), linear coefficient (\alpha), and nonlinear coefficient (\beta). Each configuration was compared against a Base model using the identity activation, while the two best Hopf configurations were later compared against established complex-valued activation functions, including CpxCard, splitReLU, modReLU, SigLog, and (\tanh). In total, 168 models and 4,368 training runs were evaluated across the Mackey–Glass and Copy Memory datasets.
				</p>

				<p className="my-4 text-slate-700">
					The parameter experiments found that most Hopf configurations outperformed the Base model, although performance varied with network and input size. Configurations C(2) and C(4) consistently produced the lowest losses and were selected for further evaluation. Both used an initial state of (m_1^+=(1+i0)) and mapped the recurrent-network state (z_\tau+1^\prime\prime) to the linear (\alpha) coefficient. They differed only in the nonlinear (\beta) coefficient: C(2) used the fixed (m_1^-=(-1+i0)), while C(4) used the constrained (m_2) control method.
				</p>

				<p className="my-4 text-slate-700">
					Performance was strongest on the Mackey–Glass time-series problem. C(2) and C(4) substantially reduced evaluation RMSE compared with the identity activation and generally outperformed the established complex-valued activation functions tested. For example, with a window size of 32, C(2) and C(4) achieved average evaluation RMSE values of approximately 0.024, compared with roughly 0.044–0.068 for the established activation functions and 0.197 for the Base model.
				</p>

				<p className="my-4 text-slate-700">
					Results on the Copy Memory problem were less conclusive. Increasing sequence length greatly increased the model parameter count, and the Base model performed similarly to models using the various activation functions. C(2) and C(4) still produced among the lowest losses, but their advantage over the established functions was only a few percent. The document therefore concludes that the Copy Memory results should not be used to draw strong conclusions about relative activation-function performance.
				</p>

				<p className="my-4 text-slate-700">
					Overall, the experiments demonstrated the feasibility of using the Hopf bifurcation as a trainable complex-valued activation function, with C(2) and C(4) emerging as the most effective configurations tested. The results were particularly promising for the continuous, nonlinear temporal relationships of Mackey–Glass, while also showing that performance depends strongly on network topology, dataset characteristics, and the placement of learnable parameters within the Hopf activation.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					Discussion
				</h1>

				<p className="my-4 text-slate-700">
					At a minimum, the results demonstrate that the Hopf activation function is a feasible complex-valued activation with potential for further development. The best configurations performed as well as or better than the established activation functions tested, particularly on the Mackey–Glass dataset. Both configurations used a fixed initial state of (\gamma_t_0=(1+i0)) and applied the recurrent network's linear mapping to the (\alpha) coefficient, suggesting that this arrangement contributed to stability and performance. However, further research is required to determine how much of the observed performance resulted from the Hopf dynamics themselves rather than the ODE solver.
					</p>

				<p className="my-4 text-slate-700">
					The Copy Memory experiments were less conclusive. Models using the Hopf activation performed similarly to the other activation functions and the Base model, with limitations likely arising from the network architecture and dataset representation. In particular, the dense layer required substantially more parameters for Copy Memory, while the DFT input mapping discarded frequency information through cropping. The discrete nature of the dataset may have also introduced difficulties associated with the Gibbs phenomenon. These limitations suggest that the network topology should be improved before drawing stronger conclusions from the Copy Memory results.
				</p>

				<p className="my-4 text-slate-700">
					Practical limitations also arose from using complex values and an ODE solver. Training times were relatively long even for simple models, with smaller networks averaging approximately 20 seconds per epoch and larger networks requiring 45–60 seconds. Interestingly, the best-performing C(2) and C(4) configurations consistently required the longest training times. Numerical instabilities were also encountered, including floating-point precision errors that occasionally caused the ODE solver to fail. These problems were mitigated by up-casting solver inputs from complex64 to complex128 and returning the results to complex64 afterward.
				</p>

				<p className="my-4 text-slate-700">
					Future work includes evaluating the Hopf activation in more established architectures, particularly unitary RNNs, exploring alternative parameter mappings, and testing additional datasets. Extending the Hopf bifurcation into higher-dimensional systems may also provide greater control over activation behavior. Overall, the work demonstrates that a constrained Hopf bifurcation can function as a trainable complex-valued activation, but additional experimentation is needed to better understand its properties, computational costs, and applicability to other neural-network architectures.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					References
				</h1>
				
				{/* <p id='ref_neuro_dale_purves' className="my-4 text-slate-700">
					[1] Neuroscience by Dale Purves
				</p>

				<p className="my-4 text-slate-700">
					[2] Dyn. Sys. In Neuro Science
				</p>

				<p className="my-4 text-slate-700">
					[3] S. Haykin, J. C. Principe, T. J. Sejnowski, and J. Mcwhirter, “What Makes a Dynamical System Computationally Powerful?,” in New Directions in Statistical Signal Processing: From Systems to Brains, MIT Press, 2007, pp. 127–154. Accessed: Sep. 08, 2021. [Online]. Available: https://ieeexplore.ieee.org/document/6282087
				</p>

				<div className="flex flex-row w-full h-auto">
					<div className="justify-left pr-2">[1]</div>
					<div className="text-left pl-2">{String.raw`S. Haykin, J. C. Principe, T. J. Sejnowski, and J. Mcwhirter, “What Makes a Dynamical System Computationally Powerful?,” in New Directions in Statistical Signal Processing: From Systems to Brains, MIT Press, 2007, pp. 127–154. Accessed: Sep. 08, 2021. [Online]. Available: https://ieeexplore.ieee.org/document/6282087`}</div>
				</div>

				<Reference>
					{String.raw`S. Haykin, J. C. Principe, T. J. Sejnowski, and J. Mcwhirter, “What Makes a Dynamical System Computationally Powerful?,” in New Directions in Statistical Signal Processing: From Systems to Brains, MIT Press, 2007, pp. 127–154. Accessed: Sep. 08, 2021. [Online]. Available: https://ieeexplore.ieee.org/document/6282087`}
				</Reference> */}

				<Reference className="my-4">
					{String.raw`S. Haykin, J. C. Principe, T. J. Sejnowski, and J. Mcwhirter, “What Makes a Dynamical System Computationally Powerful?,” in New Directions in Statistical Signal Processing: From Systems to Brains, MIT Press, 2007, pp. 127–154. Accessed: Sep. 08, 2021. [Online]. Available: https://ieeexplore.ieee.org/document/6282087`}
				</Reference>

				{/* Test with other stuff ... or move on and get this page done ...  */}

				<Reference className="my-4">
					{String.raw`K. O’Shea and R. Nash, “An Introduction to Convolutional Neural Networks,” Dec. 02, 2015, arXiv: arXiv:1511.08458. doi: 10.48550/arXiv.1511.08458.`}
				</Reference>

			</section>

			<Image
				src={image_dyn_sys_neuro}
				alt="Dyn Sys Neuro - Text"
				className="float-left mr-6 rounded-lg"
			/>

		</div>

	);
}

