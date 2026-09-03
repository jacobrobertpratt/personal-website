
import Image from 'next/image';
import image_dyn_sys_neuro from './images/image_dyn_sys_neuro_sci.jpeg';
import image_iso_phase_plane from './images/iso_phase_planes_crpd.png';
import image_unstable_phase_space from './images/dyn_sys_example_unstable_fixed_point_phase_space.png'
import image_stable_fixed_point from './images/dyn_sys_stable_fixed_point.png'
import image_limit_cycle from './images/dyn_sys_limit_cycle_example.png'

import { Latex } from '@/latex';
import { CodeBlock } from '@/codeblock'
import { Reference } from '@/citation'
import Link from "next/link";

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
	
	return (
		<div className="flex flex-col items-center justify-center min-h-32 pb-60">
			
			{/* TITLE */}
			<section className="w-9/11 my-10 p-2">
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
			<section className="w-9/11 p-2">

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
					While studying "Neuroscience" by Dale Purves et al. 
					<a href='#ref_purves_1' className='text-slate-500 hover:text-black'> [1]</a>, 
					an obvious difference between biological and artificial neural networks became apparent. That is, biological networks are highly recurrent with information encoded as frequencies of neuronal firing, while artificial networks transform weighted inputs via nonlinear activation functions. The neuronal frequency and phase having no direct analogue in most architectures.
				</p>

				<p className="my-4 text-slate-700">
					Dynamical Systems in Neuroscience by Eugene M. Izhikevich 
					<a href='#ref_izhikevich_2' className='text-slate-500 hover:text-black'> [2] </a>
					provides another method to model neuronal behavior, as dynamical systems capable of oscillation and repetitive firing. These models involve frequency, amplitude, and phase, and can be represented compactly with complex values.
				</p>

				<p className="my-4 text-slate-700">
					Artificial networks using complex-values has previously been explored. Activation functions used in these networks are adapted from functions used in real-valued networks. Adaptations include applying a real-valeud activations independently to the real and imaginary components or amplitude and phase elements. A small fraction stay with-in the complex domian, and even those approaches don't take full advantage of complex-valued dynamics. One goal of this work was to stay completely with-in the complex subspace.
				</p>


				<p className="my-4 text-slate-700">
					Complex-valued mathematics is fundamental to many technologies we take for granted today, including signal processing, filtering, communication, and digital compression. Despite its usefulness, it remains relatively uncommon in mainstream machine learning primarily due to it being mathematically unintuitive and lacking framekwork and hardware support. That being said, an opportunity exhists to combine dynamical neuron models with complex-valued neural networks to more directly represent the temporal behavior observed in biological systems.
				</p>
				



				<h1 className="mt-12 text-2xl text-slate-900">
					Challenges
				</h1>

				<p className="my-4 text-slate-700">
					Complex-valued networks introduce difficult challenges beyond those found in conventional models. This is due to the complex numbers not having a natural ordering, leading to their functions not being differentiable in the same way as their real-valued counterparts. Hence, network optimization requires additional considerations. For example, during backpropagation we must use Wirtinger derivatives or treating the real and imaginary components separately. These differences complicate the direct adaptation of common activation functions, optimizers, and training methods. Additionally, the network weights must be initialized as complex-values and map following complex-valued rules. Finally, complex arithmetic carries additional computational and memory costs, which heavily effected network training times.
				</p>

				<p className="my-4 text-slate-700">
					Essentially, a practical implementation remains more difficult for complex-valued networks than with real-valued. Machine-learning frameworks provide varying levels of support for complex tensors, but most layers, operations, and hardware optimizations remain oriented toward real-valued computation. Together, these challenges make complex-valued networks more difficult to design and train, even when complex representations are well suited to the underlying problem.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					Background
				</h1>

				<p className="my-4 text-slate-700">
					Here we lightly introduce some of the mathematical background used for the activation function. The best formulation to understand the properties of the activation function is through the lense of dynamical systems. This section evolves to cover the Andronov-Hopf bifurcation, the basis of our function.
				</p>

				<p className="my-4 text-slate-700">
					A dynamical system describes the change of a state over an interval of time that is governed by an evolution equations. This system can be defined with these three basic components: a state space <Latex>x_i</Latex>, an evolution function <Latex>{String.raw`\frac{dx}{dt}`}</Latex>, and a time domain <Latex>t_0 - t_n</Latex>. The evolution function produces trajectories through the state space, often visualized as a phase space. In this phase space, and of particular interest, are fixed locations, where the state no longer changes. These points can be stable, attracting nearby trajectories, or unstable, repelling them. 
				</p>

				<Image
					src={image_limit_cycle}
					alt="Phase space: stable limit cycle"
					className="lg:float-left lg:w-1/3 rounded-lg mr-4"
				/>

				<p className="my-4 text-slate-700">
					A bifurcation occurs when the coefficients of a system cause a qualitative change in the structure or behavior of the phase space. For example, a fixed point may appear, disappear, or change stability if coefficients crosse a critical value. Bifurcations can often be represented by simplified differential equations called normal forms, which preserve the essential behavior of the bifurcation while removing unnecessary complexity.
				</p>
				
				{/* <a href='#ref_han_3' className='text-red-500'> [3]</a> */}

				<p className="my-4 text-slate-700">
					A limit cycle is an isolated closed trajectory representing periodic behavior: once a state lies on the cycle, its evolution repeatedly follows the same orbit. Like fixed points, limit cycles can be stable or unstable. A stable limit cycle attracts nearby trajectories and therefore produces a persistent oscillation even when the initial state does not begin exactly on the cycle.
				</p>

				<p className="my-4 text-slate-700">
					The Poincaré-Andronov-Hopf bifurcation, or simply Hopf bifurcation, is a limit-cycle bifurcation which occurs when a dynamical system of degree two or greater while containing two strictly imaginary conjugate eigenvalues, and all other eigenvalues having a negative real part. This unique bifurcation can be easily adapted to neuronal firing, as described by Izhikevich
					<a href='#ref_izhikevich_2' className='text-slate-500 hover:text-black'> [2]</a>,
					becuase it can reprsent both the resting and excited states of a neuron.
				</p>

				<h1 className="mt-12 text-2xl text-slate-900">
					The Activation Function
				</h1>

				<p className="my-4 text-slate-700">
					The proposed Hopf activation function uses the Poincaré-Andronov-Hopf bifurcation as a nonlinear, complex-valued activation. Rather than directly mapping an input through a static algebraic function an ordinary differential equation (ODE) sover is used to to generate the function output. The underlying function takes multiple inputs, which is opposed to a single floating point value. Gradient changes are generated for the input coefficients and state values supplied to the network. This method allows better control of the activation outputs and stability.
				</p>

				{/* --------------- TODO: Add Hopf Activatio function here. --------------- */}

				<p className="my-4 text-slate-700">
					The activation functon coefficients are two complex-valued coefficients, <Latex>\alpha=(a+ib)</Latex> and <Latex>\beta=(c+id)</Latex>, where <Latex>{String.raw`\alpha,\beta \in \mathbb{C}`}</Latex>. Their real components determine much of the radial behavior and stability of the system. To ensure a stable limit cycle, the real component <Latex>c</Latex> of <Latex>\beta</Latex> is restricted to negative values. Under this restriction, <Latex>a \le 0</Latex> causes the state to converge toward the origin, while <Latex>a \gt 0</Latex> produces a stable limit cycle whose radius depends nonlinearly on <Latex>a</Latex> and <Latex>c</Latex>. The resulting radial behavior therefore is a nonlinear piecewise activation retaining the dynamics of the Hopf system.
				</p>

				{/* ---------------  ADD Image showing limit cycle coefficients --------------- */}

				<p className="my-4 text-slate-700">
					The imaginary components <Latex>b</Latex> and <Latex>d</Latex> primarily control the angular or rotational behavior of the activation. The value <Latex>b</Latex> governs rotation inside the limit-cycle radius, while <Latex>d</Latex> influences rotation outside. Requiring these components to have compatible signs produces phase uniformity and prevents abrupt changes in rotational direction that causes solver instability. Consequently, the real and imaginary components of the coefficients provide a degree of separation between the activation's radial stability and its frequency behavior.
				</p>



				
				<h1 className="mt-12 text-2xl text-slate-900">
					Implementation
				</h1>

				<p className="my-4 text-slate-700">
					This research was implemented in Python using TensorFlow <a href="#ref_4_tens_flow" className="text-slate-500 hover:text-black">[4]</a>, TensorFlow Probability <a href="#ref_5_tfp" className="text-slate-500 hover:text-black">[5]</a>, and other supporting libraries. A critical implementation feature was provided by the TensorFlow Probability library, providing the Dormand–Prince (DOPRI) ODE solver with the adjoint sensitivity gradient calculation included. This allowed the Hopf activation function to be integrated with automatic differentiation and gradient-based training. The work of Chen et al. (2018) <a href="#ref_8_neural_ode" className="text-slate-500 hover:text-black">[8]</a>, Neural Ordinary Differential Equations, provided the groundwork for applying the adjoint sensitivity method to machine learning with ODE solvers.
				</p>				

				<p className="my-4 text-slate-700">
					Working with TensorFlow's Keras in the complex-valued domain required several custom  implementations. First was defining a single RNN operation in a new tf.keras.layer, called a 'cell'. Below is a simplified example of the implementation. 
				</p>

				{/* Current Codeblock configuration */}
				<div className="border border-slate-400 rounded-lg bg-[#e9e9e9]">
					{/* Copy button that needs to be in the client window -> TODO!! */}
					{/* <button className="relative float-right text-slate-300 hover:text-slate-700 m-2">
							<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
								/>
							</svg>
						</button> */}
					<CodeBlock className="text-sm">{
						String.raw`
@tf.keras.utils.register_keras_serializable( 'hopf_theta_cell' )
class HopfRNNCellTheta( tf.keras.layers.Layer ):
	
	# RNNCell processes one timestep of a Hopf-Bifurcation recurrent network. #

	def __init__( self, units, **kwargs):
		super( HopfRNNCellTheta , self ).__init__( **kwargs )
		self.units = units

    def build( self , input_shape ):

        inshp = list( input_shape )
        self.bsz = inshp[0]
        self.isz = inshp[-1]
        
        wgtnme = 'u' + str( self.units ) + '_' + self.name.split('_')[0]
        self.A = self.add_weight(
            shape = ( self.units , self.units ),
            initializer = self.recwgt( name = self.rwgtnme + '_' + wgtnme , save = do_save ),
            trainable = do_train,
            dtype = self.dtype,
            name = 'A_' + wgtnme
        )
        
        self.B = self.add_weight(
            shape = ( self.units , self.units ),
            initializer = self.inpwgt( name = self.iwgtnme + '_' + wgtnme , save = do_save ),
            trainable = do_train,
            dtype = self.dtype,
            name = 'B_' + wgtnme
        )
        
        super( HopfRNNCellTheta , self ).build( input_shape )
        
        self.built = True

    def split_input( self , v ):
        vstk = tf.unstack( v , axis = -1 )
        return tf.expand_dims( vstk[0] , -1 ) , tf.stack( vstk[1::] , axis = -1 )

    def combine_output( self , v0 , v_ ):
        vlst = [ tf.squeeze( v0 , -1 ) ] + tf.unstack( v_ , axis = -1 )
        return tf.stack( vlst , axis = -1 )

    def std_map( self , A , B , v1 , v2 ):
        Av1 = tf.linalg.matmul( v1 , A )
        Bv2 = tf.linalg.matmul( v2 , B )
        return Av1 + Bv2 , Av1 , Bv2

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
        
        return y_t , z_t
		`}
					</CodeBlock>
				</div>

				<p className="my-4 text-slate-700">
					A custom RNN layer was implemented to map real-valued inputs into the complex domain and return the resulting complex-valued states to the real domain for output. Internally it passed the 'cell' layer to an internal rnn function, an example of this is shown below.
				</p>

				{/* Current Codeblock configuration */}
				<div className="border border-slate-400 rounded-lg bg-[#e9e9e9]">
					{/* Copy button that needs to be in the client window -> TODO!! */}
					{/* <button className="relative float-right text-slate-300 hover:text-slate-700 m-2">
							<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
								/>
							</svg>
						</button> */}
					<CodeBlock className="text-sm">{
						String.raw`
@tf.keras.utils.register_keras_serializable( 'hopf_theta_layer' )
class HopfRNNLayerTheta( tf.keras.layers.Layer ):
    
    def __init__( self, units, **kwargs):
        
        super( HopfRNNLayerTheta , self ).__init__( **kwargs )
        
        self.cell = None
        self.units = units

		...

		Other parameters
        
        
    def build( self , input_shape ):
        
        # Create internal hopf cell #
        if self.cell is None:
            self.cell = HopfRNNCellTheta(
                units = self.units,
                dtype = self.dtype,
                name = self.name + '_cell'
            )
		
        super( HopfRNNLayerTheta , self ).build( input_shape )
        
        self.built = True
        
    def fft_input( self , val ):
        return tf.signal.rfft( val , fft_length = [ self.seqlen ] )[::,::,0:self.usz] / self.fftnorm 

    def fft_output( self , val ):
        return tf.signal.irfft( val * self.fftnorm , fft_length = [ self.seqlen ] )[::,0:self.isz,0:self.osz]

    def call( self , inputs , training = False ):
        
        _input = self.fft_input( inputs )
        
		# Internal call to manage backend rnn function #
        rnn_return = self.rnn_call(
            self.cell,
            _input,
            self.state,
            training = training # bool -> to train or to run.
        )
        _clast , _cout , _cstate = rnn_return
        
        if self.stateful: self.state.assign( _cstate )
        
        _output = self.fft_output( _cout )
        
        if not self.return_sequences: _output = _output[::,-1,::]
        
        return tf.cast( _output , inputs.dtype )
		`}
					</CodeBlock>
				</div>

				<p className="my-4 text-slate-700">
					The Hopf activation function was implemented in its own custom layer. The Hopf evolution equation served as the solver's step function, while complex-valued parameters had to be separated and recombined because the DOPRI implementation did not directly support complex-valued data types.
				</p>

				{/* Current Codeblock configuration */}
				<div className="border border-slate-400 rounded-lg bg-[#e9e9e9]">
					{/* Copy button that needs to be in the client window -> TODO!! */}
					{/* <button className="relative float-right text-slate-300 hover:text-slate-700 m-2">
						<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
							/>
						</svg>
					</button> */}
					<CodeBlock className="text-sm">{
						String.raw`
@tf.keras.utils.register_keras_serializable( 'activations' )
class HopfActCpx( tf.keras.layers.Layer ):
    
    def __init__( self, **kwargs):
        
        self.dopri = tfp.math.ode.DormandPrince()
        
        super( HopfActCpx , self ).__init__( **kwargs )
        
    def build( self , input_shape ):
        
        super( HopfActCpx , self ).__init__()
        
        self.built = True
        
    def cpx_hopf_DiffEQ( self , t , z_stk , re_a , im_a , re_b , im_b ):
        
        re_z , im_z = tf.unstack( z_stk )
        z = tf.complex( re_z , im_z )
        a = tf.complex( re_a , im_a )
        b = tf.complex( re_b , im_b )
        
        def hopf_map( z , a , b ):
            zz = tf.cast( tf.math.pow( tf.math.abs( z ) , 2 ) , dtype = z.dtype )
            bzz = tf.math.multiply( b , zz )
            w = a + bzz
            dz = tf.math.multiply( w , z )
            return dz
        
        dz = hopf_map( z , a , b )
        
        return tf.stack( [ tf.math.real( dz ) , tf.math.imag( dz ) ] )
    
    def cpx_hopf_ODE( self , z , a , b ):
        
        t_0 = 0.
        t_n = 2*np.pi
        t_n = tf.linspace( t_0 , t_n , num = 12 )
        
        re_a , im_a = tf.math.real( a ) , tf.math.imag( a )
        re_b , im_b = tf.math.real( b ) , tf.math.imag( b )
        
        state = tf.stack( [ tf.math.real( z ) , tf.math.imag( z ) ] )
        const = { 're_a' : re_a , 'im_a' : im_a , 're_b' : re_b , 'im_b' : im_b }
        ode = self.dopri.solve(
            self.cpx_hopf_DiffEQ,
            t_0,
            state,
            solution_times = t_n,
            constants = const
        )
        re_zt , im_zt = tf.unstack( ode.states[-1] )
        return tf.complex( re_zt , im_zt )
        
    def call( self , z , a , b ):
        z_0 , a_0 , b_0 = tf.cast( z , dtype = tf.complex128 ) , tf.cast( a , dtype = tf.complex128 ) , tf.cast( b , dtype = tf.complex128 )
        z_t = self.cpx_hopf_ODE( z_0 , a_0 , b_0 )
        return tf.cast( z_t , dtype = z.dtype )
		`
					}
					</CodeBlock>
				</div>

				<p className="my-4 text-slate-700">
					Other custom implementations can be seen in my repostiory, at <a href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function" className="text-slate-500 hover:text-black">Github</a>.
				</p>

				<p className="my-4 text-slate-700">
					Interestingly, GPU execution resulted in slower performance than CPU execution. The could have been attributed to the use of complex-valued operations and the RMSProp optimizer, with portions of the model potentially introducing additional CPU–GPU memory-transfer overhead.
				</p>

				<p className="my-4 text-slate-700">
					Experiments were conducted on an AMD Ryzen 9 7950X 16-Core processor at 4.50 GHz with 64 GB of RAM running Windows 11 Pro. GPU computations used an NVIDIA RTX A4500 with CUDA 11.8 and TensorFlow 2.10.0 with Grappler optimization.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					Results & Discussion
				</h1>

				<p className="my-4 text-slate-700">
					The network was evaluated using the Mackey–Glass <a href="#ref_6_mky_gls" className="text-slate-500 hover:text-black">[6]</a> and Copy Memory <a href="#ref_7_cpy_mem" className="text-slate-500 hover:text-black">[7]</a> time-dependent datasets. The Mackey–Glass represents a chaotic time series with nonlinear temporal relationships, while the Copy Memory tests the ability of a recurrent network to retain information over many timesteps. Both datasets are commonly used to evaluate recurrent neural networks.
				</p>

				{/* ------------------ Add image of Copy Memory dataset here ------------------ */}

				<p className="my-4 text-slate-700">
					Different network and dataset sizes were tested against multiple Hopf activation parameters to evaluate the function's performance. These experiments evaluated seven configurations of the initial state <Latex>{String.raw`\gamma_{t_0}`}</Latex>, linear coefficient <Latex>\alpha</Latex>, and nonlinear coefficient <Latex>\beta</Latex>. Each configuration was compared against a Base model using the identity activation and more established complex-valued activation functions, including CpxCard, splitReLU, modReLU, SigLog, and <Latex>{String.raw`\tanh`}</Latex>. In total, 168 models and 4,368 training runs were evaluated across the the two datasets.
				</p>

				<p className="my-4 text-slate-700">
					The parameter experiments found that most Hopf configurations outperformed the Base model, although performance varied with network and input size. Performance was strongest on the Mackey–Glass time-series problem. Two configurations were found that generally outperformed the established complex-valued activation functions tested. Results on the Copy Memory problem were less conclusive and increasing the problems sequence length greatly increased the model's parameters. This lead to compuational and runtime limitations.
				</p>

				{/* ------------------ EDITING HERE ------------------ */}

				<p className="my-4 text-slate-700">
					At a minimum, the results demonstrate that the Hopf activation function is a feasible complex-valued activation. However, further research is required to determine exstensive viability. Practical limitations arose from using complex values and an ODE solver. Training times were relatively long even for simple models, with smaller networks averaging approximately 20 seconds per epoch and larger networks requiring 45–60 seconds. Interestingly, the best-performing configurations consistently required the longest training times. Numerical instabilities were also encountered, including floating-point precision errors that occasionally caused the ODE solver to fail. These problems were mitigated by up-casting solver inputs from complex64 to complex128 and returning the results to complex64 afterward.
				</p>

				<p className="my-4 text-slate-700">
					Future work includes evaluating the Hopf activation in more established architectures, particularly unitary RNNs, exploring alternative parameter mappings, and testing additional datasets. Extending the Hopf bifurcation into higher-dimensional systems may also provide greater control over activation behavior. Overall, the work demonstrates that a constrained Hopf bifurcation can function as a trainable complex-valued activation, but additional experimentation is needed to better understand its properties, computational costs, and applicability to other neural-network architectures.
				</p>




				<h1 className="mt-12 text-2xl text-slate-900">
					References
				</h1>

				<div id="ref_purves_1" className="flex flex-row my-4">
					<div className="justify-left pr-2">[1]</div>
					<div className="text-left pl-2">D. Purves et al., Eds., Neuroscience. New York Oxford: Sinauer Associates is an imprint of Oxford University Press, 2018.</div>
				</div>

				<div id="ref_izhikevich_2" className="flex flex-row my-4"> 	
					<div className="justify-left pr-2">[2]</div>
					<div className="text-left pl-2">
						E. M. Izhikevich, Dynamical Systems in Neuroscience: The Geometry of Excitability and Bursting. in Computational Neuroscience Series. Cambridge, MA, USA: MIT Press, 2006.
					</div>
				</div>

				<div id="ref_han_3" className="flex flex-row my-4">
					<div className="justify-left pr-2">[3]</div>
					<div className="text-left pl-2">
						Han, M., Yu, P., 2012. Normal Forms, Melnikov Functions and Bifurcations of Limit Cycles, Applied Mathematical Sciences. Springer, London. https://doi.org/10.1007/978-1-4471-2918-9
					</div>
				</div>

				<div id="ref_4_tens_flow" className="flex flex-row my-4">
					<div className="justify-left pr-2">[4]</div>
					<div className="text-left pl-2">
						TensorFlow Developers, “TensorFlow.” Mar. 08, 2024. doi: 10.5281/ZENODO.4724125.
					</div>
				</div>

				<div id="ref_5_tfp" className="flex flex-row my-4">
					<div className="justify-left pr-2">[5]</div>
					<div className="text-left pl-2">
						“TensorFlow Probability,” TensorFlow. Accessed: Mar. 21, 2024. [Online]. Available: https://www.tensorflow.org/probability
					</div>
				</div>

				<div id="ref_6_mky_gls" className="flex flex-row my-4">
					<div className="justify-left pr-2">[6]</div>
					<div className="text-left pl-2">
						M. C. Mackey and L. Glass, “Oscillation and Chaos in Physiological Control Systems,” Science, vol. 197, no. 4300, pp. 287–289, Jul. 1977, doi: 10.1126/science.267326.
					</div>
				</div>

				<div id="ref_7_cpy_mem" className="flex flex-row my-4">
					<div className="justify-left pr-2">[7]</div>
					<div className="text-left pl-2">
						S. Hochreiter, “The Vanishing Gradient Problem During Learning Recurrent Neural Nets and Problem Solutions,” Int. J. Uncertain. Fuzziness Knowl.-Based Syst., vol. 6, pp. 107–116, Apr. 1998, doi: 10.1142/S0218488598000094.
					</div>
				</div>

				<div id="ref_8_neural_ode" className="flex flex-row my-4">
					<div className="justify-left pr-2">[8]</div>
					<div className="text-left pl-2">
						R. T. Q. Chen, Y. Rubanova, J. Bettencourt, and D. K. Duvenaud, “Neural Ordinary Differential Equations,” in Advances in Neural Information Processing Systems, Curran Associates, Inc., 2018, pp. 6572–6583. Accessed: Mar. 20, 2024. [Online]. Available: https://proceedings.neurips.cc/paper_files/paper/2018/hash/69386f6bb1dfed68692a24c8686939b9-Abstract.html
					</div>
				</div>

			</section>

			{/* <Image
				src={image_dyn_sys_neuro}
				alt="Dyn Sys Neuro - Text"
				className="float-left mr-6 rounded-lg"
			/> */}

		</div>

	);
}

