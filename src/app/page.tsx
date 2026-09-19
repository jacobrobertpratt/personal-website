
import { Section } from '@/components/section'
import ProjectCard from '@/components/projectcard';

import image_hopf_act_crop from '@/app/[projects]/thesis/images/hopf_activation_function_crop.png'

const thesis_text = "This work summarizes my master’s thesis in Computer Science which investigated the feasibility of a complex-valued activation function in recurrent neural networks. The recurrent and oscillatory differences between biological neurons and artificial networks was the driving motivation of the study. The proposed Hopf activation function is based on the Andronov–Hopf bifurcation, whose limit-cycle dynamics provide a natural representation of amplitude and phase in the complex domain.";

export default function HomePage() {
    return (

        <div className='flex flex-col justify-center'>

            <Section className="min-h-dvh">
                <div className='flex flex-col'>
                    <h1 className="text-xl font-bold">scroll for</h1>
                    <div className="flex">
                        <h1 className="text-5xl font-bold">PROJECTS</h1>
                        <a
                            href="https://www.jacobrobertpratt.com/#start_of_project_cards"
                            className="text-slate-800 hover:text-slate-500">
                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                <path d="M19.71,13.29a1,1,0,0,0-1.42,0L13,18.59V3a1,1,0,0,0-2,0V18.59l-5.29-5.3a1,1,0,0,0-1.42,1.42l7,7a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,19.71,13.29Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </Section>

            <div
                id="start_of_project_cards"
                className="flex flex-col justify-center items-center w-auto scroll-mt-18">
                <ProjectCard
                    href="./projects/thesis"
                    title="Masters Thesis"
                    image={image_hopf_act_crop}
                    alt="Hopf Activation Cropped">
                    {thesis_text}
                </ProjectCard>
            </div>

            <Section />

        </div>
    );
}