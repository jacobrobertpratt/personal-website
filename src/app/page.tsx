
import { Section } from '@/components/section'

import ProjectCard from "@/components/cards/project";

import image_hopf_act_crop from '@/app/[projects]/thesis/images/hopf_activation_function_crop.png'

import { APP_PROJ_ID } from "@/common";

function LandingSection() {
    return (<Section />);
}

function ProjectCardsList() {

    const thesis_text = "This work summarizes my master’s thesis in Computer Science which investigated the feasibility of a complex-valued activation function in recurrent neural networks. The recurrent and oscillatory differences between biological neurons and artificial networks was the driving motivation of the study. The proposed Hopf activation function is based on the Andronov–Hopf bifurcation, whose limit-cycle dynamics provide a natural representation of amplitude and phase in the complex domain.";

    return (
        <div
            id={APP_PROJ_ID}
            className="flex flex-col items-center justify-center w-3/4 h-96 space-t-24">
            <ProjectCard
                href="./projects/thesis"
                title="A Hopf Bifurcation as a Complex Activation Function"
                image={image_hopf_act_crop}
                alt="Hopf Activation Cropped">
                {thesis_text}
            </ProjectCard>
        </div>
    );
}

export default function HomePage() {

    return (

        <div className='flex flex-col items-center justify-center'>

            <Section />

            <ProjectCardsList />

            <Section />

        </div >

    );
}