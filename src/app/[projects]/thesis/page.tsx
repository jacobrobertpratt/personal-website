
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

        {/* INTRODUCTION */}
        <section className="md:w-3/4 sm:max-w-11/12 m-2 p-2">
            <h1 className="flex justify-left text-2xl text-slate-900">
                Overview
            </h1>
            <p className="flex m-2 text-slate-700">
                This project presents my Master's Thesis while at Iowa State University. My degree was in Computer Science, however my focus included neurscience, machine learning, and dynamical systems, all in a complex-valued sub-space. Most of this work was self taught, which in hindsite was more valuable thany any degree. I began working on my Masters by studying human conginiton, believing the insite gained could reveal some unknown or overlooked method to imporove machine learning models. This involved a well known Neuroscience textbook by Dale Purves (cite/link), which helped me to understand the functionality of neurons and the brain. 
            </p>
        </section>

        <section className="m-2 p-2 w-3/4">
            <h1 className="flex justify-left text-2xl text-slate-900">
                Introduction
            </h1>
            <p className="flex m-2 text-slate-700">
                
            </p>
        </section>
        
        </div>

    );
}