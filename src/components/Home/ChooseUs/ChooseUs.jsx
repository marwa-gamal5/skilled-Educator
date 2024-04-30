import WhyChooseUs from '../../../assets/WhyChooseUs.png'
import whyChooseusbg from '../../../assets/WhyChooseUsbg.png'
import { HiMiniCheckBadge } from "react-icons/hi2";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import './ChooseUs.css'
const ChooseUs = () => {
    return (
        <div className=''>

            <div className=' inset-0 w-full  h-[100%] bg-cover'
                style={{backgroundImage: `url(${whyChooseusbg})`}}>


    <div className='flex justify-between  z-10 md:px-8 '>
        <div className='md:p-16 p-5 ' >
        <div className='font-semibold md:text-5xl text-4xl  leading-tight'>Why Choose Us</div>
                    <div className='md:text-xl text-[17px] font-normal'>Together we learn, develop and influence</div>
                    <div className='mt-10'>
                        <div className='flex justify-between  justify-center '>
                            <div>
                                <HiMiniCheckBadge className='text-iconcolor text-3xl '/>
                                <div className='mt-3 font-semibold md:text-2xl text-[17px] leading-7 '>Holistic Education</div>
                                <div className='text-secondaryTextColor text-[15px] mt-2 font-normal'>Our school believes
                                    in fostering
                                    the
                                    overall development of students. Alongside
                                    academics, we focus on character-building
                                </div>
                            </div>
                            <div className='md:ms-10 ms-5'>
                                <AiOutlineGlobal  className='text-iconcolor text-3xl '/>
                                <div className='mt-3 font-semibold md:text-2xl text-[17px] leading-7 '>Global Perspective</div>
                                <div className='text-secondaryTextColor text-[15px] mt-2 font-normal '>Our curriculum is
                                    designed to foster global
                                    citizenship, promoting cultural understanding, and
                                    providing opportunities
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between justify-center mt-10'>
                            <div>
                                <FaUniversity className='text-iconcolor text-3xl '/>
                                <div className='mt-3 font-semibold md:text-2xl text-[17px]  leading-7 '>Character Education</div>
                                <div className='text-secondaryTextColor text-[15px] mt-2 font-normal'>
                                    We emphasize the importance of character development, instilling values such as integrity, empathy, and responsibility
                                </div>
                            </div>
                            <div className='md:ms-10 ms-5 '>
                                <CgGirl className='text-iconcolor text-3xl   '/>
                                <div className='mt-3 font-semibold md:text-2xl text-[17px] leading-7 '>Career Guidance</div>
                                <div className='text-secondaryTextColor text-[15px] mt-2 font-normal '>
                                    As students progress through their academic
                                    journey, we provide comprehensive career
                                    guidance and counseling
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <img src={WhyChooseUs} className='imageshow' style={{marginTop: '-108px'}} alt='WhyChooseUs'/>
            </div>
            </div>

        </div>

    );
};

export default ChooseUs;