import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const StillQuestions = () => {
    const [open, setOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);

    const handleToggleOne = () => {
        setOpenOne((prevOpen) => !prevOpen);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleToggleTwo = () => {
        setOpenTwo((prevOpen) => !prevOpen);
    };

    const handleToggleThree = () => {
        setOpenThree((prevOpen) => !prevOpen);
    };

    const handleToggleFour = () => {
        setOpenFour((prevOpen) => !prevOpen);
    };

    const handleToggleFive = () => {
        setOpenFive((prevOpen) => !prevOpen);
    };


    return (

        <div>

            <p className='text-center text-[37px] lg:text-[65px] font-Bebas mb-[66px] mt-[157px]'>
                STILL HAVE <span className='text-purple-500'>QUESTIONS?</span> </p>




            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-[30px] mr-[20px] mb-[30px]">


                <div >
                    <div onClick={handleToggleThree} className='shadow rounded-xl px-1 py-2 border border-[#707070] flex justify-between items-center' >
                        <div className="flex items-center gap-4">
                        <img
                               
                                src="/assets/images/starter_page_images/still-questions6.png"
                                className="h-6 w-6 ml-2"
                                alt=""
                            />
                           
                            <h4 className="font-medium text-sm text-black">How much will I earn ?</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <Transition in={openThree} timeout={300} unmountOnExit>
                        {(state) => (
                            <div
                                onClick={() => setOpenThree(false)}
                                className={`\bg-white p-4 transition-opacity ease-out duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h4 className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem incidunt consequuntur sequi veritatis laborum est deleniti,
                                    necessitatibus sunt delectus! Quam quisquam numquam sapiente similique quaerat? Molestiae ad quisquam recusandae?</h4>
                            </div>
                        )}
                    </Transition>
                </div>


                <div>
                    <div onClick={handleToggleTwo} className='shadow rounded-xl px-1 py-2 border border-[#707070] flex justify-between items-center' >
                        <div className="flex items-center gap-4">
                        <img
                               
                               src="/assets/images/starter_page_images/still-questions3.png"
                               className="h-6 w-6 ml-2"
                               alt=""
                           />
                           
                            <h4 className="font-medium text-sm text-black">Do I need meet the guest of my car?</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <Transition in={openTwo} timeout={300} unmountOnExit>
                        {(state) => (
                            <div
                                onClick={() => setOpenTwo(false)}
                                className={`\bg-white p-4 transition-opacity ease-out duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h4 className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem incidunt consequuntur sequi veritatis laborum est deleniti,
                                    necessitatibus sunt delectus! Quam quisquam numquam sapiente similique quaerat? Molestiae ad quisquam recusandae?</h4>
                            </div>
                        )}
                    </Transition>
                </div>

                <div>
                    <div onClick={handleToggleFour} className='shadow rounded-xl px-1 py-2 border border-[#707070] flex justify-between items-center' >
                        <div className="flex items-center gap-4">
                        <img
                               
                               src="/assets/images/starter_page_images/still-questions5.png"
                               className="h-6 w-6 ml-2"
                               alt=""
                           />
                            <h4 className="font-medium text-sm text-black"> How is the price of my decided ?</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <Transition in={openFour} timeout={300} unmountOnExit>
                        {(state) => (
                            <div
                                onClick={() => setOpenFour(false)}
                                className={`\bg-white p-4 transition-opacity ease-out duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h4 className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem incidunt consequuntur sequi veritatis laborum est deleniti,
                                    necessitatibus sunt delectus! Quam quisquam numquam sapiente similique quaerat? Molestiae ad quisquam recusandae?</h4>
                            </div>
                        )}
                    </Transition>

                </div>


                <div>
                    <div className='shadow rounded-xl px-1 py-2 border border-[#707070] flex justify-between items-center' >
                        <div onClick={handleToggleOne} className="flex items-center gap-4">
                        <img
                               
                               src="/assets/images/starter_page_images/still-questions2.png"
                               className="h-6 w-6 ml-2"
                               alt=""
                           />
                            <h4 className="font-medium text-sm text-black"> How will I get paid ? </h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>


                    </div>

                    <Transition in={openOne} timeout={300} unmountOnExit>
                        {(state) => (
                            <div
                                onClick={() => setOpenOne(false)}
                                className={`\bg-white p-4 transition-opacity ease-out duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h4 className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem incidunt consequuntur sequi veritatis laborum est deleniti,
                                    necessitatibus sunt delectus! Quam quisquam numquam sapiente similique quaerat? Molestiae ad quisquam recusandae?</h4>
                            </div>
                        )}
                    </Transition>
                </div>


                <div onClick={handleToggle} >
                    <div className='shadow rounded-xl px-1 py-2 border border-[#707070] flex justify-between items-center' >
                        <div className="flex items-center gap-4">
                        <img
                               
                               src="/assets/images/starter_page_images/still-questions4.png"
                               className="h-6 w-6 ml-2"
                               alt=""
                           />
                            <h4 className="font-medium text-sm text-black">Why are safety devices installed?</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <Transition in={open} timeout={300} unmountOnExit>
                        {(state) => (
                            <div
                                onClick={() => setOpen(false)}
                                className={` bg-white p-4 transition-opacity ease-out duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h4 className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem incidunt consequuntur sequi veritatis laborum est deleniti,
                                    necessitatibus sunt delectus! Quam quisquam numquam sapiente similique quaerat? Molestiae ad quisquam recusandae?</h4>

                            </div>
                        )}
                    </Transition>

                </div>

                <div onClick={handleToggleFive} >
                    <div className='shadow rounded-xl px-1 py-2 border border-[#707070] flex justify-between items-center' >
                        <div className="flex items-center gap-4 ">
                            
                        <img
                               
                               src="/assets/images/starter_page_images/still-questions1.png"
                               className="h-6 w-6 ml-2"
                               alt=""
                           />

                            <h4 className="font-medium text-sm text-black w-[219px] lg:w-full">What happens if my car gets traffic line while being shared ?</h4>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <Transition in={openFive} timeout={300} unmountOnExit>
                        {(state) => (
                            <div
                                onClick={() => setOpenFive(false)}
                                className={` bg-white p-4 transition-opacity ease-out duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h4 className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem incidunt consequuntur sequi veritatis laborum est deleniti,
                                    necessitatibus sunt delectus! Quam quisquam numquam sapiente similique quaerat? Molestiae ad quisquam recusandae?</h4>

                            </div>
                        )}
                    </Transition>

                </div>



            </div>
            <div className='ml-[30px] mb-[50px] mt-[80px]'>
                <h2 className=' font-bold text-[#707070] text-[25px] mb-[10px]'>Still Confused ?</h2>
                <p className='text-[18px] font-bold mb-[10px]' > We are here to help !</p>
                <h2 className='font-Bebas text-[#A64AC9] text-[28px] '>FAQs</h2>
            </div>



        </div>
    );
};

export default StillQuestions;






