import React, { useEffect, useState } from "react";
import { ArrowLeft } from 'lucide-react'

import { useParams } from "react-router-dom";


const Github = () => {

    const [data, setData] = useState([]);

    const {gid} = useParams();

    useEffect(() => {
        fetch('https://api.github.com/users/aaadityag')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])

    return(
        <>
            <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
                <div className="lg:flex lg:items-center lg:space-x-10">
                <img
                    src="https://illustrations.popsy.co/amber/app-launch.svg"
                    alt="question-mark"
                    className="h-[300px] w-auto"
                />
                <div>
                    {/* <p className="mt-6 text-sm font-semibold text-black">404 error</p> */}
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                    {data.login}'s Github Followers : {data.followers}
                    </h1>
                    <p className="mt-4 text-gray-500">
                    Above is No. of github followers and username fetched dynamically!
                    </p>
                    <div className="mt-6 flex items-center space-x-3">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Go back
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Contact us
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <hr />
        </>
    );
}


export default Github;