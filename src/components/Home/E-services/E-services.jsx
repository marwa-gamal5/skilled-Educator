import Eservices from "../../../assets/Eservices.png";

import { MdAssignmentAdd } from "react-icons/md";
import './E-services.css'
const EServices = () => {
    return (
        <>
            <div className=' inset-0 w-full  h-[100%] bg-cover mt-10'  style={{backgroundImage: `url(${Eservices})`}}>
                    <div className='p-16'>
                        <div className='text-center md:text-5xl text-4xl font-semibold '>E-services</div>
                        <div className='flex lg:flex-row flex-col  justify-around items-center md:my-24  my-14 '>
                            <div className='w-[350px] lg:w-[280px] xl:w-[400px]  h-[220px] bg-[#fff]  rounded-lg p-7 hover:bg-[#58aedd] maindev mt-5 '>

                                <div
                                    className='w-[80px] h-[80px] bg-[#DEF1FF] h rounded-full text-center flex justify-center items-center circle '>
                                    <MdAssignmentAdd className='text-[#3782BB] text-5xl  '/></div>
                                <div
                                    className='font-medium xl:text-xl lg:text-[17.3px] text-xl  text-[#3782BB] mt-5 textin maintext  '>Submitting
                                    your papers to register
                                    for the diploma
                                </div>
                            </div>
                            <div className='w-[350px] lg:w-[280px]  xl:w-[400px] h-[220px] bg-[#fff]  rounded-lg p-7  hover:bg-[#58aedd] maindev mt-5'>

                                <div
                                    className='w-[80px] h-[80px] bg-[#DEF1FF] h rounded-full text-center flex justify-center items-center circle '>
                                    <MdAssignmentAdd className='text-[#3782BB] text-5xl  '/></div>
                                <div
                                    className='font-medium xl:text-xl lg:text-[17.3px] text-xl text-[#3782BB] mt-5 textin maintext  '>Submitting
                                    your papers to register
                                    for the diploma
                                </div>
                            </div>
                            <div className='w-[350px] lg:w-[280px]    xl:w-[400px]  h-[220px] bg-[#fff]  rounded-lg p-7  hover:bg-[#58aedd] maindev mt-5 '>

                                <div
                                    className='w-[80px] h-[80px] bg-[#DEF1FF] h rounded-full text-center flex justify-center items-center circle '>
                                    <MdAssignmentAdd className='text-[#3782BB] text-5xl  '/></div>
                                <div
                                    className='font-medium xl:text-xl lg:text-[17.3px] text-xl   text-[#3782BB] mt-5 textin maintext  '>Submitting
                                    your papers to register
                                    for the diploma
                                </div>
                            </div>


                        </div>


                    </div>

            </div>
        </>
    );
};

export default EServices;