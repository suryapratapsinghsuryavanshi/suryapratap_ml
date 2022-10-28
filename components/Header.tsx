import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/images/logo.png';
import { useEffect, useState } from 'react';
import { myFetch } from '../utils/myFetch';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiChevronDoubleDown } from 'react-icons/hi'

type MyDataType = {
    name: String,
    full_name: String
}

const Header: NextPage = (props: any) => {
    
    const [ myData, setMyData ] = useState<MyDataType>();
    const [ err, setErr ] = useState<any>();
    // target the active link.
    const router = useRouter();

    useEffect(() => {
        myFetch("/api/connect").then(data => {
            setMyData(data);
        }).catch(error => {
            setErr(error);
        });
    }, []);

    return(
        <>
            <Head>
                <title>Suryapratap Singh Suryavanshi | Portfolio</title>
                <link rel="shortcut icon" href="/images/logo.svg" type="image/x-icon"/>
            </Head>
            <div className="header flex flex-col md:flex-row justify-center md:justify-between items-center p-4 z-50" id="header" style={{background: "#fff", color: "#7d564b"}}>
                <div className="left_header_section">
                    <div className="logo flex items-center">
                        <Image alt="logo" className="rounded-full" height={45} width={45} src={Logo}/>
                        <Link href={"/"}>
                            <h1 className="ml-2 text-2xl cursor-pointer font-normal">{myData?.name}</h1>
                        </Link>
                    </div>
                </div>
                <button onClick={() => {
                    if(document.getElementById("navbar-default")?.classList.contains("hidden")) {
                        document.getElementById("navbar-default")?.classList.remove("hidden");
                    }else {
                        document.getElementById("navbar-default")?.classList.add("hidden");
                    }
                }} data-collapse-toggle="navbar-default" type="button" className="mb-2 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <HiChevronDoubleDown/>
                </button>
                <div className="right_header_section hidden md:block h-auto" id="navbar-default">
                    <ul className="flex flex-col md:flex-row" id="menu">
                        <li className={`md:ml-6 hover:text-black text-lg ${router.asPath == '/' && 'text-black'}`}>
                            <Link href={"/"}>
                                <a>Main</a>
                            </Link>
                        </li>
                        <li className={`md:ml-6 hover:text-black text-lg ${router.asPath == '/projects/' && 'text-black'}`}>
                            <Link href={"/projects"}>
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li className={`md:ml-6 hover:text-black text-lg ${router.asPath == '/blogs/' && 'text-black'}`}>
                            <Link href={"/blogs"}>
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li className={`md:ml-6 hover:text-black text-lg ${router.asPath == '/services/' && 'text-black'}`}>
                            <Link href={"/services"}>
                                <a>Services</a>
                            </Link>
                        </li>
                        <li className={`md:ml-6 hover:text-black text-lg ${router.asPath == '/about/' && 'text-black'}`}>
                            <Link href={"/about"}>
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;