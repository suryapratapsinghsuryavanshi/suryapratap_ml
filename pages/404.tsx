import Link from 'next/link'

export default function FourOhFour() {
    return <div className="h-screen flex flex-col justify-center items-center">
        <h2 className='text-3xl heading_2 mb-2'>Page under construction!</h2>
        <hr className='hr-2' />
        <p className="text-amber-700">I will do my best to show this page as soon as possible.</p>
        <Link href="/">
            <a className='text-amber-900 text-lg font-bold underline mt-3'>
                Go back to Main
            </a>
        </Link>
    </div>
}