import React from 'react';
import { Link } from "react-router-dom"; 

const CarAtFingertips = () => {


    return (
        <div className='bg-[#70707014] text-center py-[75px] md:pt-[152px] md:pb-[152px]'>
            <div className="container px-[20px] xl:px-[70px]">
            <h2 className='text-[50px] leading-[55px] lg:text-[114px] lg:leading-[122px] font-Bebas text-center pb-6  sm:pb-[30px]'>Always A Car At Your<span className='text-[#A64AC9]'> Fingertips</span></h2>
            <p className='text-[20px] leading-[24px] md:text-[25px] md:leading-[30px] lg:text-[31px] xl:leading-[37px] sm:w-[54%] w-full mx-auto'>Discover the many benefits of the app yourself! Around 1 million satisfied users have already done so.</p>
            <div className='flex flex-wrap justify-center pt-6 sm:pt-16'>
                <Link to="/" target="_blank" className='md:w-1/2 w-full mb-6 md:m-0' rel="noopener noreferrer"><img src={"/app-store.svg"} className='mx-auto md:ms-auto md:mr-[15px] max-w-[200px] md:max-w-[250px] lg:max-w-[320px]' /></Link>
                <Link to="/" target="_blank" className='md:w-1/2 w-full' rel="noopener noreferrer"><img src={"/play-store.svg"} className='mx-auto md:ml-[15px] max-w-[200px] md:max-w-[250px] lg:max-w-[320px]' /></Link>
            </div>
            </div>
      </div>
    );

}

export default CarAtFingertips;