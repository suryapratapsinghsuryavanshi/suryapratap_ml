import { NextPage } from "next";
import { useState } from "react";
import { FiSend } from 'react-icons/fi';
import axios from 'axios';

const PastWork: NextPage = () => {
    const queryUrl = "https://yourquerys.herokuapp.com/api/send/35e34365-2885-427b-856c-7a8c0babf134";

    const [set, setSend] = useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [query, setQuery] = useState<string>("");

    const sendFeedback = () => {
        let jsonBody = {
            name,
            email,
            phone,
            query
        }
        if (name.length >= 1 && email.length >= 1 && phone.length >= 1 && query.length >= 2) {
            axios.post(queryUrl, jsonBody).then(data => {
                setSend(true);
                setName('');
                setPhone('');
                setEmail('');
                setQuery('');
            }).catch(err => {
                setSend(false);
            })
        } else {
            setSend(false);
        }
    }

    return (
        <>
            <div className="sort_about mt-4 p-4">
                <h2 className='text-3xl heading_2'>Get In touch with Me.</h2>
                <hr className='hr-2' />
                <p className="text-amber-700 md:w-1/2">{"You can connect with a medium I've presented."}</p>
                <div className="mt-4">
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        { !set ?
                            <div>
                                <a>
                                    <h5 style={{ color: "#7d564b" }} className="mb-2 text-2xl font-semibold tracking-tight">Query Form</h5>
                                </a>
                                <div className="grid grid-flow-row-dense md:grid-cols-3 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-amber-700">Full Name</label>
                                        <input value={name} onChange={(e) => {
                                            setName(e.target.value);
                                        }} type="text" id="name" className="bg-gray-50 border border-amber-300 text-amber-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Abc" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-amber-700">Email</label>
                                        <input value={email} onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} type="text" id="email" className="bg-gray-50 border border-amber-300 text-amber-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="abc@gmailc.om" required />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-amber-700">Phone</label>
                                        <input value={phone} onChange={(e) => {
                                            setPhone(e.target.value);
                                        }} type="text" id="phone" className="bg-gray-50 border border-amber-300 text-amber-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="79********" required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="query" className="block mb-2 text-sm font-medium text-amber-700">Query</label>
                                    <input value={query} onChange={(e) => {
                                        setQuery(e.target.value);
                                    }} type="text" id="query" className="block p-4 w-full text-amber-900 bg-gray-50 rounded-lg border border-amber-300 sm:text-md focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" />
                                </div>
                                <div className="mt-4">
                                    <button onClick={sendFeedback} type="button" className="text-white bg-amber-700 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center mr-2">
                                        <FiSend className="text-3xl text-white mb-2 mr-2" />
                                        Submit FeedBack
                                    </button>
                                </div>
                            </div>
                            :
                            <div>
                                <p className="text-amber-700 text-2xl justify-center items-center text-center">Thanks!</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default PastWork;