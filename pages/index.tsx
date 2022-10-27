import type { NextPage } from 'next';
import { camelToCapital } from 'case-shift';
import { useState } from 'react';
import HeroBackground from '../components/Hero_Background';
import HomeStyle from '../styles/Home.module.css';
import { myFetch } from '../utils/myFetch';
import PastWork from '../components/PastWork';
import FeedBack from '../components/FeedBack';

type indexType = {
    data: any,
    projects: [{
        id: number,
        name: string,
        desc: string,
        link: string
    }]
}

const Home: NextPage<indexType> = ({ data, projects }) => {

    const [social, setSocial] = useState(data);

    return (
        <>
            <div className={`h-screen ${HomeStyle.sideBySide} main`}>
                <span id='backSp'>
                    <div className="h-screen cursor-move" id="back">
                        <HeroBackground />
                    </div>
                </span>
                <div className="tags p-4" style={{ background: "#fff" }}>
                    <h2 className="text-3xl mt-4" style={{color: '#7d564b'}}>Connect With Me.</h2>
                    {social !== null && social !== undefined &&
                        Object.keys(social).map(key => {
                            return <a key={key.toString()} rel="noreferrer" target='_blank' href={social[key]} className="ease-in-out">
                                <div className="bg-yellow-400 rounded-lg p-2 m-2 shadow-lg mt-5 md-5 hover:scale-105">
                                    by {camelToCapital(key.toString())}
                                </div>
                            </a>
                        })
                    }
                </div>
            </div>
            <div className="sort_about mt-4 p-4">
                <h2 className='text-3xl heading_2'>Who am I?</h2>
                <hr className='hr-2' />
                <p className="text-amber-700 w-1/2">{"My name is Suryapratap Singh, and I am getting my Bachelor of Technology degree in Information Technology from IGEC Sagar, I am very interested in developing products that solve some real-world problems, and I have those types of products as follows But as far as the user-base aspect, I haven't had success, so I think if I have in the well-known company I can get a bigger user base to test the product and improve them Is. If you hired me I would do my best to build that product and make a real impact on the community and customers."}</p>
            </div>
            <div className="sort_about mt-4 p-4">
                <h2 className='text-3xl heading_2'>My Journey</h2>
                <hr className='hr-2 mb-4' />
                <ol className="relative border-l ml-4 border-amber-600 dark:border-amber-700">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-amber-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-amber-700 w-1/2">2017</time>
                        <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Started my journey</h3>
                        <p className="mb-4 text-base font-normal text-amber-700 w-1/2 dark:text-amber-400">This year I found something I was looking for.</p>
                        {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-amber-900 bg-white rounded-lg border border-amber-600 hover:bg-amber-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-amber-600 focus:text-blue-700 dark:bg-amber-800 dark:text-amber-400 dark:border-amber-600 dark:hover:text-white dark:hover:bg-amber-700 dark:focus:ring-amber-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/6000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-amber-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-amber-700 w-1/2">2018</time>
                        <h3 className="text-lg font-semibold text-amber-900 dark:text-white">I proceeded with my interest</h3>
                        <p className="text-base font-normal text-amber-700 w-1/2 dark:text-amber-400">Worked as a freelancer technical assistant, in my village with some of my friends.</p>
                    </li>
                    <li className="ml-4 mb-10">
                        <div className="absolute w-3 h-3 bg-amber-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-amber-700 w-1/2">2019</time>
                        <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Started, a new journey</h3>
                        <p className="text-base font-normal text-amber-700 w-1/2 dark:text-amber-400">A lot happened this year, and in the bowels of the year, I had become an engineering student.</p>
                    </li>
                    <li className="ml-4 mb-10">
                        <div className="absolute w-3 h-3 bg-amber-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-amber-700 w-1/2">2020</time>
                        <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Learn, Break, Learn phase</h3>
                        <p className="text-base font-normal text-amber-700 w-1/2 dark:text-amber-400">I learned most of the engineering stuff as well as my areas of interest like programming, designing, etc.</p>
                    </li>
                    <li className="ml-4 mb-10">
                        <div className="absolute w-3 h-3 bg-amber-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-amber-700 w-1/2">2021</time>
                        <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Freelancing start</h3>
                        <p className="text-base font-normal text-amber-700 w-1/2 dark:text-amber-400">I did some freelance development work as well as some technical stuff.</p>
                    </li>
                    <li className="ml-4">
                        <div className="absolute w-3 h-3 bg-amber-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-amber-700 w-1/2">2022</time>
                        <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Learning, Building, and Writing</h3>
                        <p className="text-base font-normal text-amber-700 w-1/2 dark:text-amber-400">{"I think it's going to be an interesting year because this year I tried to do all the things I had to do."}</p>
                    </li>
                </ol>
            </div>
            <PastWork projects={projects}/>
            <FeedBack/>
        </>
    );
}

export async function getServerSideProps(context: any) {
    const res = await myFetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/social");
    const projects = await myFetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/projects");

    return {
        props: {
            data: res,
            projects
        }
    }
}

export default Home;
