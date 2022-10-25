import { NextPage } from "next";
import { useState } from "react";
import { CgSun } from 'react-icons/cg';
import { randomChoice } from 'solverjs';

type pastWorkType = {
    projects: [{
        id: number,
        name: string,
        desc: string,
        link: string
    }]
}

const PastWork: NextPage<pastWorkType> = ({ projects }) => {
    const [ data, setData ] = useState(projects);

    const getRandomIcon = () => {
        let icons = [ "CgYinyang", "CgWebsite", "CgTikcode", "CgSupport" , "CgSmartphoneChip", "CgShortcut", "CgPokemon", "CgMediaLive", "CgLivePhoto", "CgInfinity", "CgSun" ];
        return randomChoice(icons);
    }

    return (
        <>
            <div className="sort_about mt-4 p-4">
                <h2 className='text-3xl heading_2'>Interesting, things I've done in the past!</h2>
                <hr className='hr-2' />
                <p className="text-amber-700 w-1/2">I am a tech enthusiast who loves to use new technology with my passion. I spend most of the time learning things and applying them to something valuable.</p>
                <div className="grid grid-cols-3 justify-items-center">
                    {
                        data.length >= 1 ?
                            data.map(work => {
                                return <div key={work.id} className="mt-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <CgSun className="text-4xl text-amber-600 mb-2"/>
                                    <a href={work.link}>
                                        <h5 style={{ color: "#7d564b" }} className="mb-2 text-2xl font-semibold tracking-tight">{work.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{work.desc}</p>
                                    <a href={work.link} className="inline-flex items-center text-amber-700 hover:underline">
                                        Visit
                                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            })
                        : <p>No Projects are added.</p>
                    }
                </div>
            </div>
        </>
    );
}

export default PastWork;