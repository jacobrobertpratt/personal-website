
import Image from 'next/image';
import image_neuron_synapse from './images/neuron_synapse_sketch.png'

export default function ThesisPage() {
    return (
        <div className="flex flex-wrap items-center justify-center min-h-32 bg-inherit">
        {/* <div className="flex flex-wrap md:max-w-3/4 sm:max-w-11/12 bg-inherit"> */}
            
        
        {/* TITLE */}
        <section className="max-w-11/12 my-10 p-2">
        {/* <Section className="border-black border-2" > */}
            <ul className="flex flex-wrap items-center">
                <div className="justify-center items-center text-slate-900 md:text-5xl text-3xl">
                    Study <b/> of the Hopf Bifurcation as a Complex Activation Function
                </div>
                <div className="justify-center items-center text-slate-700 md:text-2xl text-xl m-2">
                    Summary of M.S. Thesis in Computer Science
                </div>
            </ul>
        </section>

        {/* OVERVIEW */}
        <section className="max-w-11/12 p-2">

            <h1 className="justify-left text-2xl text-slate-900">
                Welcome
            </h1>
            
            <p className="m-2 text-slate-700">
                I started this research as I do all projects. I selected the most difficult path conceivable and blindly sprinting down it until I get lost and angry. Instead of selecting a well-studied area of machine learning, understanding the sub-discipline, assessing how to improve on an idea, and setting up clear obtainable goals; I proceeded to self-study neuroscience to gain insight into how human cognition works. It seemed logical to study our human mechanism that gives us intelligence, if I were to improve on the desired artificial version. This path led me to the importance of frequencies, recurrency, and synchrony, all of which play a critical role in human intelligence and is barely studied in machine learning, oh joy! But wait! How did I get to this conclusion?
            </p>

        </section>

        {/* MOTIVATION */}
        <section className="max-w-11/12 p-2">

            <h1 className="m-2 text-2xl text-slate-900">
                Our Neurological Model
            </h1>

            <p className="m-2 text-slate-700">
                Join me for a short introduction into neuroscience at the cellular and structural levels, and was gathered mostly from cite: Neuroscience Textbook by Dale Purves, a great introduction textbook.
            </p>

            <p className="m-2 text-slate-700">
                Biologically, a neuron consists of dendritic and axonal connections, representing the input and output of information, respectively. Neurons transfer information through an electrochemical exchange at these synapses, where neurotransmitters trigger special ion channels to open, producing an influx of ionized molecules into the cell which change the cells voltage potential. Thousands of neurons can be connected to the dendrites of a single neuron. The collective cellular effect is integrated, or summed, when there are simultaneous voltage potential spikes. Once the internal voltage potential of the neuron surpasses a threshold, a chain reaction triggers a current down the axon sheath releasing neurotransmitters on a different neuron.
            </p>
        
            <Image
                className='m-2 object-scale-down'
                src={image_neuron_synapse}
                alt="Neuron & Synapse"
            />

            <p className="m-2 text-slate-700">
                The neocortex, responsible for higher-order brain function, is located on the outer-most section and consists of 6-layers, distinguished by their cell and connection types. Connections going into the neocortex occur primarily in layer 4, with layers 2 and 3 containing intercortical connections, and layers 5 and 6 extending out of the neocortex. Columns of neurons traverse between layers, connecting radially aligned groups of cells sharing common functionality. Additionally, interneurons extend horizontally within the same layers, connecting areas with common functionality. The cerebral cortex, which is 90% neocortex, is radially grouped into different functional areas, for example the visual cortex, frontal association cortex, or motor cortex to name a few.
            </p>
            

            <p className="m-2 text-slate-700"></p>
            <p className="m-2 text-slate-700"></p>
            <p className="m-2 text-slate-700"></p>
            <p className="m-2 text-slate-700"></p>


            

        </section>

        {/* INTRODUCTION */}
        
        {/* BACKGROUND */}

        {/* RELATED WORKS */}

        {/* METHOD */}

        {/* RESULTS */}

        {/* DISCUSSION */}

        </div>

    );
}