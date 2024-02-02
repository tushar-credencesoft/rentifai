import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SharingEarning = () => {
    const navigate = useNavigate();



    return (

        <div>

<section className="relative overflow-hidden mb-20">

<div className="md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  relative">
        <p className='text-center text-[37px] lg:text-[65px] font-Bebas'>3 STEPS TO START <span className='text-purple-500'>SHARING AND EARNING</span> </p>
        <div className="relative mt-12 lg:mt-12 top-10">

            <div className="absolute inset-x-0 hidden xl:px-44 top-[15px] md:block md:px-20 lg:px-28 ">
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48" fill="none">
                    <path d="M0 48H875" stroke="rgb(0 0 0)" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
                </svg>
            </div>

            <div
                className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-16 ">
                <div>
                    <div
                        className="flex items-center justify-center w-[8rem] h-[8rem] mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                        {/* <span className="text-xl font-semibold text-gray-700 dark:text-gray-200 p-10">1</span> */}

                        <img
                            
                            src="/assets/images/starter_page_images/Group 123.png"
                            alt=""
                        />
                    </div>
                    <h3
                        className="mt-4 sm:mt-2  text-xl font-bold leading-tight text-gray-900 dark:text-white md:mt-10">
                        Install Host app
                    </h3>

                    <p className="mt-3 sm:mt-2 text-base text-gray-600 dark:text-gray-400 text-sm text-xl">
                        Become the rentifai host by installing our app
                    </p>

                    <button className="bg-purple-500 hover:bg-black text-white px-4 rounded mt-2 text-xl">
                        DOWNLOAD APP
                    </button>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center w-[8rem] h-[8rem] mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                        {/* <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">2</span> */}

                        <img
                            
                            src="/assets/images/starter_page_images/Group 125.png"
                            alt=""
                        />
                    </div>
                    <h3
                        className="mt-4 sm:mt-6 text-xl font-bold leading-tight text-gray-900 dark:text-white md:mt-10">
                        Setup for sharing
                    </h3>
                    <p className="mt-3 sm:mt-2 text-base text-gray-600 dark:text-gray-400 text-sm px-4 text-xl">
                        Signup on the app and provide us car, address and bank details and now you are ready to share your car
                    </p>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center w-[8rem] h-[8rem] mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                        {/* <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">3</span> */}
                        <img
                            
                            src="/assets/images/starter_page_images/Group 126.png"
                            alt=""
                        />
                    </div>
                    <h3
                        className="mt-4 sm:mt-6 text-xl font-bold leading-tight text-gray-900 dark:text-white md:mt-10">
                        Share and earn
                    </h3>
                    <p className="mt-3 sm:mt-2 text-base text-gray-600 dark:text-gray-400 text-sm px-4  text-xl mb-10">
                        Select the sharing dates for your car. our experts will visit you and
                        install the safety device and then you are ready to share
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
        </div>

    );
};

export default SharingEarning;