import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const PromoteApplication = () => {


  return (
    <div className='text-7xl text-center py-[75px] xl:pt-[45px] xl:pb-[40px]'>
      <div className="container px-[20px] xl:px-[70px]">
        <div className='flex flex-wrap'>
          <div className='xl:w-2/5 w-full w-[670px]  rounded-[86px] border-[6px] border-[#00000014]'>
            <div className='2xl:px-[50px] 2xl:py-[115px] sm:py-[80px] sm:px-[30px] py-[70px] px-[20px] shadow-[6px_6px_6px_#00000029] rounded-[86px]'>
              <h2 className='sm:text-[46px] text-[30px] font-Bebas text-center xl:text-start'>How much could you earn by sharing<br /><span className='text-[#A64AC9]'> your car?</span></h2>
              <div className='flex flex-wrap 2xl:mt-[85px] 2xl:mb-[57px] sm:mt-[40px] sm:mb-[25px] mt-[25px] mb-[25px]'>
                <div className='w-full sm:w-1/2 text-start inline-flex'>
                  <div className='w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex'>
                    <select name="" id="" className='rounded-[17px] bg-white border-[1px] bg-[url("/chevron-down.svg")] bg-no-repeat bg-[95%_55%] bg-[length:23px] border-[#707070] h-[50px] w-full text-[20px] px-[18px] focus:outline-0' style={{ appearance: "none" }}>
                      <option value="">Car Brand</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Audi">Audi</option>
                      <option value="Mercedes">Mercedes</option>
                      <option value="Porsche">Porsche</option>
                    </select>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 text-end inline-flex'>
                  <div className='w-full ms-0 sm:ms-4 inline-flex'>
                    <select name="" id="" className='rounded-[17px] bg-white border-[1px] bg-[url("/chevron-down.svg")] bg-no-repeat bg-[95%_55%] bg-[length:23px] border-[#707070] h-[50px] w-full text-[20px] px-4 focus:outline-0' style={{ appearance: "none" }}>
                      <option value="">Model</option>
                      <option value="A3">A3</option>
                      <option value="A4">A4</option>
                      <option value="Q3">Q3</option>
                      <option value="Q5">Q5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap 2xl:mt-[43px] 2xl:mb-[85px] sm:mt-[40px] sm:mb-[25px] mt-[25px] mb-[25px]'>
                <div className='w-full sm:w-1/2 text-end inline-flex'>
                  <div className='w-full ms-0 sm:me-4 mb-6 inline-flex'>
                    <select name="" id="" className='rounded-[17px] bg-white border-[1px] bg-[url("/chevron-down.svg")] bg-no-repeat bg-[95%_55%] bg-[length:23px] border-[#707070] h-[50px] w-full text-[20px] px-4 focus:outline-0' style={{ appearance: "none" }}>
                      <option value="">Make</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                    </select>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 text-start inline-flex'>
                  <div className='w-full me-0 sm:ms-4 sm:mb-0 inline-flex'>
                    <select name="" id="" className='rounded-[17px] bg-white border-[1px] bg-[url("/chevron-down.svg")] bg-no-repeat bg-[95%_55%] bg-[length:23px] border-[#707070] h-[50px] w-full text-[20px] px-[18px] focus:outline-0' style={{ appearance: "none" }}>
                      <option value="">Driven Km</option>
                      <option value="4418">4,418 km</option>
                      <option value="5748">5,748 km</option>
                      <option value="3875">3,875 km</option>
                      <option value="6894">6,894 km</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='hidden'>
                <div className='relative'>
                  <input type="text" id="floating_outlined" className='block px-[18px] pb-2.5 pt-4 w-full text-xl text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer border-[1px] border-[#707070] h-[74px] rounded-[18px]' placeholder=" " />
                  <label htmlFor='floating_outlined' className='absolute text-xl text-black text-500 dark:text-400 duration-300 transform top-0 z-10 origin-[0]  dark:bg-gray-900 px-[18px] peer-focus:px-[18px] peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0  peer-focus:-translate-y-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'>Address</label>
                </div>
              </div>
              <h5 className='text-[24px] text-start mt-[30px] sm:mt-[50px]'>Sharing Days</h5>
              <Box sx={{ maxWidth: 568, margin: '0 auto', color: '#08648B' }}>
                <Slider defaultValue={50} min={1} max={30} aria-label="Days" valueLabelDisplay="on" />
              </Box>
              <div className='sm:mt-11 mt-[10px]'>
                <p className='font-Bebas text-[#A64AC9] text-[31px] leading-[37px] mb-5'>Potential Monthly earnings</p>
                <h5 className='font-Bebas text-[40px] sm:text-[65px]'>$ 25,000 - $ 30,000</h5>
                <ul className='text-[19px] pt-6 sm:pt-11 inline-block'>
                  <li className='pb-1 text-[#707070] leading-[29px] text-start flex items-start'><img src={"/dot.svg"} className='h-[12px] pr-1.5 mt-2' />Considering your car has a rating of more than 4.7</li>
                  <li className='pb-1 text-[#707070] leading-[29px] text-start flex items-start'><img src={"/dot.svg"} className='h-[12px] pr-1.5 mt-2' />As the car's rating improves, earnings gradually rise.</li>
                  <li className='text-[#707070] leading-[29px] text-start flex items-start'><img src={"/dot.svg"} className='h-[12px] pr-1.5 mt-2' />Better car ratings will result in higher earnings.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='xl:w-3/5 ms-auto w-full mt-10 xl:mt-0'>
            <div className='ps-0 xl:ps-[30px] 2xl:ps-[60px] h-full'>
              <img src={"/place-img.jpg"} className='h-full object-cover w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default PromoteApplication;