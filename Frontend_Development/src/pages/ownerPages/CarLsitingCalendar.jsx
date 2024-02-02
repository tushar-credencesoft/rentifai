import { useState } from "react";
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import DashboardSidebar from './DashboardSidebar';
import 'react-calendar/dist/Calendar.css';
import "./CarLsitingCalendar.css";

const ValuePiece = Date | null;

const Value = ValuePiece | [ValuePiece, ValuePiece];

const CarListingCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div>
                <div className='flex flex-wrap dashboard-list justify-end'>
                    <DashboardSidebar />
                    <div className="lg:w-[70%] xl:w-[75%] right-sidebar w-full px-5 py-[25px] pt-24 pb-10">
                        <h2 className='text-[26px] leading-8 md:text-[40px] md:leading-10 2xl:text-[58px] uppercase 2xl:leading-[81px] font-bold pb-[5px]'>Calander Overview</h2>
                        <div className='w-full bg-white h-full'>
                            <Calendar onChange={onChange} value={value} allowPartialRange={true} selectRange={true}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarListingCalendar;
