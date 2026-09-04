import { Section } from '@/gui/section'
import ProjectCard from '@/gui/components/projectcard';

import image_hopf_act_crop from '@/app/[projects]/thesis/images/hopf_activation_function_crop.png'
import Link from 'next/link';


const thesis_text = "This work summarizes my master’s thesis in Computer Science which investigated the feasibility of a complex-valued activation function in recurrent neural networks. The recurrent and oscillatory differences between biological neurons and artificial networks was the driving motivation of the study. The proposed Hopf activation function is based on the Andronov–Hopf bifurcation, whose limit-cycle dynamics provide a natural representation of amplitude and phase in the complex domain.";

// const stuffs_text = "This page has a bunch of stuffs on it. There is other stuffs on this as well, but yeah you know. Hopefully there will be more and more stuffs on this later as well. This page has a bunch of stuffs on it. There is other stuffs on this as well, but yeah you know. Hopefully there will be more and more stuffs on this later as well. This page has a bunch of stuffs on it. There is other stuffs on this as well, but yeah you know. Hopefully there will be more and more stuffs on this later as well. This page has a bunch of stuffs on it. There is other stuffs on this as well, but yeah you know. Hopefully there will be more and more stuffs on this later as well.";

export default function HomePage() {
    return (
        <div className='flex flex-col justify-center items-center'>

            {/* Navigation Header that will become it's own container. */}

            <Section className="min-h-dvh">
                <div className='flex flex-col'>
                    <h1 className="text-xl font-bold">scroll for</h1>
                    <div className="flex h-au">
                        <h1 className="text-5xl font-bold">PROJECTS</h1>
                        <Link href="/#test_project_cards" className="hover:text-slate-500">
                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                <path d="M19.71,13.29a1,1,0,0,0-1.42,0L13,18.59V3a1,1,0,0,0-2,0V18.59l-5.29-5.3a1,1,0,0,0-1.42,1.42l7,7a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,19.71,13.29Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </Section>

            <ProjectCard
                id="test_project_cards"
                href="./projects/thesis"
                title="Masters Thesis"
                image={image_hopf_act_crop}
                alt="Hopf Activation Cropped">
                    {thesis_text}
            </ProjectCard>

            {/* <ProjectCard href="/projects/stuffs" title="Stuffs Page" >{stuffs_text}</ProjectCard> */}

            <Section />

        </div>
    );
}

// <Section className="bg-slate-500 gap-y-52" >This is the FIRST Section on my Home Page ...</Section>
// <Section className="bg-blue-500" >This is the SECOND Section on my Home Page ...</Section>
// <Section className="bg-orange-500" >This is the THIRD Section on my Home Page ...</Section>

/*
<Card href='/projects' title='Projects'>
                This is my application text ...
            </Card>

<Link href="/projects" className="p-1">
    <div className="bg-white hover:shadow-md border border-slate-200 rounded-lg p-2">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            Projects
        </h5>
        <p className="text-slate-600 leading-normal font-light">
            A summary of my Computer Science Masters Thesis to at home experiments.
        </p>
    </div>
</Link>

<Link href="/experiences" className="p-1">
    <div className="bg-white hover:shadow-md border border-slate-200 rounded-lg p-2">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            Experiences
        </h5>
        <p className="text-slate-600 leading-normal font-light">
Software engineer with experience building scalable web applications and improving user-focused digital experiences. Worked across frontend and backend systems, collaborating with cross-functional teams to deliver reliable features, optimize performance, and maintain clean, efficient codebases. Demonstrated ability to adapt to evolving project requirements while contributing to product development, technical problem-solving, and team success.
        </p>
    </div>
</Link>
*/

//The war began when Nazi Germany, led by Adolf Hitler, invaded Poland, prompting Britain and France to declare war. Axis expansion included German advances across Europe, Italy’s campaigns in Africa, and Japan’s military actions in East Asia and the Pacific. The conflict was characterized by widespread destruction, strategic bombing, and the systematic genocide of six million Jews and millions of other victims in the Holocaust. Key turning points included Germany’s defeat at Stalingrad, the Allied invasion of Normandy on D-Day, and major naval battles in the Pacific such as Midway. The United States entered the war after Japan’s attack on Pearl Harbor in 1941, significantly strengthening the Allied war effort. The war in Europe ended in May 1945 after Germany’s surrender, while the Pacific conflict concluded in August 1945 after the United States dropped atomic bombs on Hiroshima and Nagasaki, leading to Japan’s surrender. World War II resulted in an estimated 70–85 million deaths and reshaped global power structures, contributing to the emergence of the United States and the Soviet Union as superpowers and initiating the Cold War.
//
//<div className="relative flex flex-col max-w-auto rounded overflow-hidden shadow-lg">
//    <Link href="/projects">
//        <div className="px-6 py-4">
//            <div className="font-bold text-xl mb-2">Master's Thesis</div>
//            <p className="text-gray-700 text-base">
//                This study introduces a novel activation function that leverages the structural properties of the Hopf bifurcation.
//            </p>
//        </div>
//    </Link>
//    <div className="flex justify-center py-1">
//        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-auto font-semibold text-gray-700 mr-2 mb-2">
//            <Link href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function" target="_blank">
//                Github
//            </Link>
//        </span>
//        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-auto font-semibold text-gray-700 mr-2 mb-2">
//            <Link href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function" target="_blank">
//                Paper
//            </Link>
//        </span>
//    </div>
//</div>
//
//<div className="relative flex flex-col max-w-auto rounded overflow-hidden shadow-lg">
//    <Link href="/projects">
//        <div className="px-6 py-4">
//            <div className="font-bold text-xl mb-2">Master's Thesis</div>
//            <p className="text-gray-700 text-base">
//                This study introduces a novel activation function that leverages the structural properties of the Hopf bifurcation.
//            </p>
//        </div>
//    </Link>
//    <div className="flex justify-center py-1">
//        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-auto font-semibold text-gray-700 mr-2 mb-2">
//            <Link href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function" target="_blank">
//                Github
//            </Link>
//        </span>
//        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-auto font-semibold text-gray-700 mr-2 mb-2">
//            <Link href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function" target="_blank">
//                Paper
//            </Link>
//        </span>
//    </div>
//</div>
//
//</div>
//
//<footer className="flex flex-row flex-wrap items-center justify-center w-full py-6 px-20 text-center border-t gap-y-6 gap-x-12 border-slate-200 md:justify-between">
//<p className="block text-slate-800 font-semibold text-sm">
//  Material Tailwind
//</p>
//<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
//<li>
//  <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
//    About Us
//  </a>
//</li>
//<li>
//  <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
//    License
//  </a>
//</li>
//<li>
//  <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
//    Contribute
//  </a>
//</li>
//<li>
//  <a href="#" className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
//    Contact Us
//  </a>
//</li>
//</ul>
//</footer>

//<button className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//  Read more
//</button>

//<Link
//    href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function"
//    className="px-6 pt-4 pb-2 hover:"
//    target="_blank" >
//        <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
//</Link>

//<Link href="https://github.com/jacobrobertpratt/Masters-Thesis-Hopf-bifurcation-as-an-Activation-Function"  className="px-6 pt-4 pb-2">
//  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Github</span>
//  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//</Link>

//<nav className="sticky top-0 w-full bg-white border-b shadow-sm z-50">
//    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
//        <div className="flex space-x-8 font-medium">
//            <a href="/" className="hover:text-blue-600 transition">Home</a>
//            <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
//            <a href="#" className="hover:text-blue-600 transition">Pricing</a>
//            <a href="#" className="hover:text-blue-600 transition">About</a>
//        </div>
//    </div>
//</nav>

//<h1 className="max-w-xs text-4xl items-center justify-center font-semibold leading-20 tracking-loose">
//    Home
//</h1>

// <a href="#" aria-current="page" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
// <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
// <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>

//export default function Home() {
//  return (
//    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//        <Image
//          className="dark:invert"
//          src="/next.svg"
//          alt="Next.js logo"
//          width={100}
//          height={20}
//          priority
//        />
//        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//            To get started, edit the page.tsx file.
//          </h1>
//          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//            Looking for a starting point or more instructions? Head over to{" "}
//            <a
//              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//              className="font-medium text-zinc-950 dark:text-zinc-50"
//            >
//              Templates
//            </a>{" "}
//            or the{" "}
//            <a
//              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//              className="font-medium text-zinc-950 dark:text-zinc-50"
//            >
//              Learning
//            </a>{" "}
//            center.
//          </p>
//        </div>
//        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//          <a
//            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            <Image
//              className="dark:invert"
//              src="/vercel.svg"
//              alt="Vercel logomark"
//              width={16}
//              height={16}
//            />
//            Deploy Now
//          </a>
//          <a
//            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Documentation
//          </a>
//        </div>
//      </main>
//    </div>
//  );
//}
