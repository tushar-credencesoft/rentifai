import React from 'react';



const WhyShareCar = () => {


    return (
        <div className='py-[75px] '>
        <div className="container px-[20px] xl:px-[70px]">
          <div className="flex flex-wrap items-center">
            <div className='xl:w-1/4 w-full mb-6 xl:mb-0'>
              <h2 className='text-[50px] leading-[55px] lg:text-[76px] lg:leading-[87px] font-Bebas text-center xl:text-start w-full xl:w-[279px]'>WHY Share your car<br /><span className='text-[#A64AC9]'> with us?</span></h2>
            </div>
            <div className='xl:w-3/4 w-full'>
              <div className='flex flex-wrap items-center justify-between'>
                <div className='w-full md:w-1/2 2xl:w-[223px] text-center xl:text-start mb-6 2xl:m-0 xl:pe-6 2xl:pe-0 px-4'>
                  <img src={"/car-insurance.png"} className='pb-2 h-[94px] w-[94px] object-contain mx-auto xl:m-0' />
                  <h6 className='pb-6 md:pb-9 text-[22px] leading-[25px] font-bold'>Damage Control</h6>
                  <p className='text-xl text-[#707070]'>Your car's safety is our responsibility</p>
                </div>
                <div className="w-full md:w-1/2 2xl:w-[315px] text-center xl:text-start mb-6 2xl:m-0 xl:pe-6 2xl:pe-0 px-4">
                  <img src={"/save-money.png"} className='pb-2 h-[94px] w-[94px] object-contain mx-auto xl:m-0' />
                  <h6 className='pb-6 md:pb-9 text-[22px] leading-[25px] font-bold'>Track your earnings</h6>
                  <p className='text-xl text-[#707070]'>Track your earnings in real time with our App</p>
                </div>
                <div className='w-full md:w-1/2 2xl:w-[269px] text-center xl:text-start mb-6 2xl:m-0 xl:pe-6 2xl:pe-0 px-4'>
                  <img src={"/calendar.png"} className='pb-2 h-[94px] w-[94px] object-contain mx-auto xl:m-0' />
                  <h6 className='pb-6 md:pb-9 text-[22px] leading-[25px] font-bold'>End to end control</h6>
                  <p className='text-xl text-[#707070]'>You decide when you want to share your car</p>
                </div>
                <div className='w-full md:w-1/2 2xl:w-[200px] text-center xl:text-start mb-6 2xl:m-0 xl:pe-6 2xl:pe-0 px-4'>
                  <img src={"/car.png"} className='pb-2 h-[94px] w-[94px] object-contain mx-auto xl:m-0' />
                  <h6 className='pb-6 md:pb-9 text-[22px] leading-[25px] font-bold'>Comfort</h6>
                  <p className='text-xl text-[#707070]'>Share your car from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default WhyShareCar;