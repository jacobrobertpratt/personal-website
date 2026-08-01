
import { Section } from '@/gui/core'

export default function ThesisPage() {
    return (
        <div className="flex flex-wrap items-center justify-center min-h-32 bg-inherit">
        {/* <div className="flex flex-wrap md:max-w-3/4 sm:max-w-11/12 bg-inherit"> */}
            
        
        {/* TITLE */}
        <section className="md:w-3/4 sm:max-w-11/12 my-12 p-2">
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
        <section className="md:w-3/4 sm:max-w-11/12 m-2 p-2">

            <h1 className="flex justify-left text-2xl text-slate-900">
                What is on this page?
            </h1>
            
            <p className="flex m-2 text-slate-700">

                {/* What you'll see on this page?*/}

                This project presents my Master's Thesis in Computer Science while at Iowa State University.
                
                My degree was in Computer Science, however my focus included neurscience, machine learning, 
                and dynamical systems, all in a complex-valued space. Most of this work was self taught, driven by my passion to explore 
                multiple discaplines, but in hindsite was more valuable than the degree that was its result.

            </p>

            <p className="flex m-2 text-slate-700">
                I intend for this page to present a summary of the works in my thesis, in addition to the more personal aspects that 
                drove me to focus in this area. The research is better discussed in in my actual thesis (link: here), so I'll refrain 
                from repeating it word-for-word. Additionally, I expand on where I intended the research to go and looking back on how 
                it turned out.
            </p>

        </section>

        {/* MOTIVATION */}
        <section className="md:w-3/4 sm:max-w-11/12 m-2 p-2">

            <h1 className="flex justify-left text-2xl text-slate-900">
                Our Neurological Model
            </h1>

            <p className="flex m-2 text-slate-700">
                I was motivated to study Neurocience at the beginning of my masters.
                
                Many CS research is cross discepline.

                Artificial intelligence has motivated computer scientist and might even be why the field was founded. Allen Turin.

                Understanding neurscience and human cognition is a natural field to gain insights to improve current 
                machine learning models. 

                I began working on my Masters by studying human conginiton, believing the insite could reveal a new method which that 
                could imporove machine learning models.

                I began studing Neuroscience to better understand how humans became more intelligent.
                
                This lead me to , leading me to a frequency-based neuronal activation model, and eventually representing activation 
                functions as dynamical systems. 
            </p>

            <p className="flex m-2 text-slate-700">
                The brain consists of ## trillion neurons which make up our nervous system.

                The neocortex consists of many layers.

                Neurons are connected in groups called 'nuclei'. Nuclei are both inter connected in the same layer and 
                connected between layers by long string neurons. 

                The primary input to the neocortex occurs in layer 4.

                There are 10x more neurons propagating from the neocortex than to the neocortex.

                Hebbian learning is the idea of 'fire to gether implies wire together'. I believe a different idea 
                can be generated along the same lines which is justified by syncrony.
            </p>

            <p className="flex m-2 text-slate-700">
                A connectionists approach to information transfer via neuronal circuits.

                Lets assume that neurons transfer some type of information to the neurons their axons are connected with, observed as 
                a spike in potassium-ions. 

                A single neuron can receive many neurons on their dendrites; however, the axon more distant and generally further away.

                A nuclei (collection) of neurons must receive external information to begin activating and also send information externally 
                after being activated. This assumes nuclei are well connected with-in their connectome.
            </p>
            
            <p className="flex m-2 text-slate-700">
                Neurons in themselves are very complicated cells.

                Hebbian Learning was observed by ____ early in squid neurons.

                Cyclic pattern of neuronal firing is observed in cells, given a select subset of input is provided at a given time.

                Similar to an engine, the input must be in-sync with the previous firing sequences, else it will eventually stop.

                Since more neurons are interconnected than connected externally, we can assume by the pigeon-hole principle that neurons form 
                cycles.
                
                We can also conclude that since neurons form cycles then some of their information output eventually returns. 

                However, I was not the only one to generate this conclusion and later stumbled on a book called "Dynamical Systems in Neuroscience".
            </p>

            <p className="flex m-2 text-slate-700">
                This involved a well known Neuroscience textbook by Dale Purves (cite/link), which helped me to 
                understand the functionality of neurons and the brain. Further investigation led me to the works of 
                Izhikevich (cite) who proposes that neurons act as resonators and the input frequency plays a critical 
                role in neuronal activation. This leads to activations resembling a limit-cycle and can be modeled 
            </p>

        </section>

        {/* INTRODUCTION */}
        <section className="md:w-3/4 sm:max-w-11/12 m-2 p-2">
            <h1 className="flex justify-left text-2xl text-slate-900">
                Introduction
            </h1>
            <p className="flex m-2 text-slate-700">
                TODO: ...
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