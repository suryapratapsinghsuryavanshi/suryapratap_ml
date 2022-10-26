import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../public/images/logo.png';
import Link from 'next/link';

const Footer: NextPage = (props: any) => {
    return(
        <>
            <div className="py-4 border-t-2 border-t-amber-500" style={{background: "#fff", color: "#7d564b"}}>
                <p className="text-center text-lg">Made With <span>❤️</span> By <a className="font-bold underline" href="https://suryapratap.ml/">Suryapratap Singh Suryavanshi</a></p>
            </div>
        </>
    );
}

export default Footer;