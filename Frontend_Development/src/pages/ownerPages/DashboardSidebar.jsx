import { useState } from 'react'
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    const currPath = window.location.pathname;
    const [state, setState] = useState({
        openDropwDown: "dropdown",
    });

    function openDropwDown() {
        let value = "dropdown open";
        if (state.openDropwDown === "dropdown open") {
            value = "dropdown";
        }
        setState((prev) => {
            return { ...prev, openDropwDown: value }
        });
    }

    return (
        <>
            <div className={'bg-white absolute top-0 left-0 right-0 custom-hamburger block lg:hidden w-full py-4 px-5 shadow-[3px_3px_6px_#00000029] z-10 ' + state.openDropwDown}>
                <div className='bg-[#A64AC9] w-[45px] h-[45px] flex items-center justify-center rounded-[10px] cursor-pointer ' onClick={openDropwDown}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='close hidden' width="35" height="35" fill="#fff"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
                </div>
            </div>
            <div className='w-1/3 lg:w-[30%] xl:w-[25%] left-sidebar hidden lg:block 2xl:overflow-auto overflow-scroll shadow-[3px_3px_6px_#00000029] no-scrollbar absolute left-0 h-screen'>
                <div className='px-9 h-full'>
                    <div className='flex flex-wrap 2xl:block items-center justify-between'>
                        <h2 className='logo-txt text-[35px] md:text-[41px] text-[#023863] leading-[44px] font-bold pt-8 pb-7 text-center'>
                            <Link to="/">
                                RENTIF <span className='inner-txt bg-[#A64AC9] leading-[40px] rounded-[10px] inline-block text-white'>AI</span></Link>
                        </h2>
                        <div className={'custom-hamburger block lg:hidden ' + state.openDropwDown}>
                            <div className='bg-[#A64AC9] w-[45px] h-[45px] flex items-center justify-center rounded-[10px] ' onClick={openDropwDown}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='close hidden' width="35" height="35" fill="#fff"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
                            </div>
                        </div>
                    </div>
                    <h6 className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[30px]'>List your car</h6>
                    <ul className='ps-5 sidebar'>
                        <li className={'text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px] ' + (currPath == '/owner-list/dashboard' ? 'active' : '')}>
                            <Link to="/owner-list/dashboard" className='flex items-center'>
                                <img src={"/home.png"} className='gray-img' /><img src={"/home-color.png"} className='color-img hidden' /><span className='ps-4'>Dashboard</span>
                            </Link>
                        </li>
                        <li className={'text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px] ' + (currPath == '/owner-list/dashboard/carlist-calendar' ? 'active' : '')}>
                            <Link to="/owner-list/dashboard/carlist-calendar" className='flex items-center'>
                                <img src={"/calender.png"} className='gray-img' /><img src={"/calender-color.png"} className='color-img hidden' /><span className='ps-4'>Calandar</span>
                            </Link>
                        </li>
                        <li className={'text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px] '+ (currPath == '/owner-list/dashboard/car-listing' ? 'active' : '')}>
                            <Link to="/owner-list/dashboard/car-listing" className='flex items-center'>
                                <img src={"/list.png"} className='gray-img' /><img src={"/list-color.png"} className='color-img hidden' /><span className='ps-4'>Car Listings</span>
                            </Link>
                        </li>
                        <li className={'text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px] '+ (currPath == '/owner-list/dashboard/transaction-details' ? 'active' : '')}>
                            <Link to="/owner-list/dashboard/transaction-details" className='flex items-center'>
                                <img src={"/card.png"} className='gray-img' /><img src={"/card-color.png"} className='color-img hidden' /><span className='ps-4'>Transactions</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[30px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/car-key.png"} className='gray-img' /><img src={"/car-key-color.png"} className='color-img hidden' /><span className='ps-4'>List now</span>
                            </Link>
                        </li>
                    </ul>
                    <h6 className='text-[21px] leading-[23px] text-[#707070] font-bold pb-9'>Rent a car</h6>
                    <ul className='ps-5 border-b-[1px] border-[#707070] pb-[26px] sidebar'>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/home.png"} className='gray-img' /><img src={"/home-color.png"} className='color-img hidden' /><span className='ps-4'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/calender.png"} className='gray-img' /><img src={"/calender-color.png"} className='color-img hidden' /><span className='ps-4'>Calandar</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/card.png"} className='gray-img' /><img src={"/card-color.png"} className='color-img hidden' /><span className='ps-4'>Transactions</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/rent-a-car.png"} className='gray-img' /><img src={"/rent-a-car-color.png"} className='color-img hidden' /><span className='ps-4'>Rent now</span>
                            </Link>
                        </li>
                    </ul>
                    <h6 className='text-[21px] leading-[23px] text-[#707070] font-bold pb-9 pt-[15px]'>Report</h6>
                    <ul className='ps-5 sidebar pb-[100px]'>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/report.png"} className='gray-img' /><img src={"/report-color.png"} className='color-img hidden' /><span className='ps-4'>Car Reports</span>
                            </Link>
                        </li>
                    </ul>
                    <Link to="#" className='flex items-center log-out transition-all ease-in-out duration-[300ms] inline-block pb-3.5 bg-white'>
                        <img src={"/log-out.png"} className='gray-img' /><img src={"/log-out-color.png"} className='color-img hidden' /><span className='text-[red] text-[21px] leading-[23px] font-bold'>Log Out</span>
                    </Link>
                </div>
            </div>
            <div className={'w-1/3 w-[20.1%] hidden lg:block 2xl:overflow-auto z-50 overflow-scroll shadow-[3px_3px_6px_#00000029] mobile-menu no-scrollbar  ' + state.openDropwDown}>
                <div className='px-9 h-full'>
                    <div className='flex flex-wrap 2xl:block items-center justify-between'>
                        <h2 className='logo-txt text-[35px] md:text-[41px] text-[#023863] leading-[44px] font-bold pt-8 pb-7 text-center'>
                            <Link to="/">
                                RENTIF <span className='inner-txt bg-[#A64AC9] leading-[40px] rounded-[10px] inline-block text-white'>AI</span></Link>
                        </h2>
                        <div className={'custom-hamburger block 2xl:hidden ' + state.openDropwDown}>
                            <div className='bg-[#A64AC9] w-[45px] h-[45px] cursor-pointer flex items-center justify-center rounded-[10px] ' onClick={openDropwDown}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='close hidden' width="35" height="35" fill="#fff"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
                            </div>
                        </div>
                    </div>
                    <h6 className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[30px]'>List your car</h6>
                    <ul className='ps-5 sidebar'>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px] active'>
                            <Link to="/owner-list/dashboard" className='flex items-center'>
                                <img src={"/home.png"} className='gray-img' /><img src={"/home-color.png"} className='color-img hidden' /><span className='ps-4'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="/owner-list/dashboard/carlist-calendar" className='flex items-center'>
                                <img src={"/calender.png"} className='gray-img' /><img src={"/calender-color.png"} className='color-img hidden' /><span className='ps-4'>Calandar</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="/owner-list/dashboard/car-listing" className='flex items-center'>
                                <img src={"/list.png"} className='gray-img' /><img src={"/list-color.png"} className='color-img hidden' /><span className='ps-4'>Car Listings</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="/owner-list/dashboard/transaction-details" className='flex items-center'>
                                <img src={"/card.png"} className='gray-img' /><img src={"/card-color.png"} className='color-img hidden' /><span className='ps-4'>Transactions</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[30px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/car-key.png"} className='gray-img' /><img src={"/car-key-color.png"} className='color-img hidden' /><span className='ps-4'>List now</span>
                            </Link>
                        </li>
                    </ul>
                    <h6 className='text-[21px] leading-[23px] text-[#707070] font-bold pb-9'>Rent a car</h6>
                    <ul className='ps-5 border-b-[1px] border-[#707070] pb-[26px] sidebar'>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/home.png"} className='gray-img' /><img src={"/home-color.png"} className='color-img hidden' /><span className='ps-4'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/calender.png"} className='gray-img' /><img src={"/calender-color.png"} className='color-img hidden' /><span className='ps-4'>Calandar</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/card.png"} className='gray-img' /><img src={"/card-color.png"} className='color-img hidden' /><span className='ps-4'>Transactions</span>
                            </Link>
                        </li>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/rent-a-car.png"} className='gray-img' /><img src={"/rent-a-car-color.png"} className='color-img hidden' /><span className='ps-4'>Rent now</span>
                            </Link>
                        </li>
                    </ul>
                    <h6 className='text-[21px] leading-[23px] text-[#707070] font-bold pb-9 pt-[15px]'>Report</h6>
                    <ul className='ps-5 sidebar pb-[100px]'>
                        <li className='text-[21px] leading-[23px] text-[#707070] font-bold pb-[25px]'>
                            <Link to="#" className='flex items-center'>
                                <img src={"/report.png"} className='gray-img' /><img src={"/report-color.png"} className='color-img hidden' /><span className='ps-4'>Car Reports</span>
                            </Link>
                        </li>
                    </ul>
                    <Link to="#" className='flex items-center log-out transition-all ease-in-out duration-[300ms] inline-block pb-3.5 bg-white'>
                        <img src={"/log-out.png"} className='gray-img' /><img src={"/log-out-color.png"} className='color-img hidden' /><span className='text-[red] text-[21px] leading-[23px] font-bold'>Log Out</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default DashboardSidebar;