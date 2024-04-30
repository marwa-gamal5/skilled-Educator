import ContactUss from '../../assets/contactus.png'
import TellDetails from "../../components/Home/TellDetails/TellDetails.jsx";
import { Label, Select } from "flowbite-react";
import contact from "../../assets/contact.png";
import bg from "../../assets/bgContactus.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from "../../assets/TellDetails2.png";
const ContactUs = () => {


    return (
        <>
            <div >
                <img className='w-full  mt-14'  src={ContactUss} alt='image ' />

                <div>
                    <div className=' inset-0 w-full   h-[100%] bg-cover'
                         style={{backgroundImage: `url(${bg})`}}>
                        <div className='flex items-center justify-center mt-[-26%] md:mx-14  p-3   '>
                            <iframe
                                className="gmap_iframe border-8 border-white rounded-xl md:w-[938px] md:h-[604px] h-[350px] w-[450px]  "
                                width="100%" frameBorder={0} scrolling="no" marginHeight={0}
                                marginWidth={0}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28992.65454846482!2d46.60391677672797!3d24.724071193164452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d87a42c25d9%3A0xb7bc9ced1525d129!2sKing%20Saud%20University%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1713961513066!5m2!1sen!2seg"/>




                        </div>
                        <div className='xl:p-20 sm:p-10 p-0  '>
                            <div className='flex md:flex-row flex-col items-center justify-around'>

                                <div className='md:mt-0 mt-20 '>
                                    <div className='flex items-center '>
                                        <div className=''>
                                            <FaLocationDot className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px] leading-[20px] font-medium ms-2 '>Knowledge
                                            Pioneers for Training and <br/> Education, P.O.Box 4054- Riyadh 12464
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <FaPhoneAlt className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>+990732229
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <MdEmail className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>info@SE.sa
                                        </div>
                                    </div>
                                </div>
                                <div className='md:mt-0 mt-20 '>
                                    <div className='flex items-center '>
                                        <div className=''>
                                            <FaLocationDot className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>Knowledge
                                            Pioneers for Training and <br/> Education, P.O.Box 4054- Riyadh 12464
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <FaPhoneAlt className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>+990732229
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <MdEmail className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>info@SE.sa
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col items-center justify-around md:mt-40 mt-20'>

                                <div className='md:mt-0 mt-20 '>
                                    <div className='flex items-center '>
                                        <div className=''>
                                            <FaLocationDot className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>Knowledge
                                            Pioneers for Training and <br/> Education, P.O.Box 4054- Riyadh 12464
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <FaPhoneAlt className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>+990732229
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <MdEmail className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>info@SE.sa
                                        </div>
                                    </div>
                                </div>
                                <div className='md:mt-0 mt-20 '>
                                    <div className='flex items-center '>
                                        <div className=''>
                                            <FaLocationDot className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>Knowledge
                                            Pioneers for Training and <br/> Education, P.O.Box 4054- Riyadh 12464
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <FaPhoneAlt className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>+990732229
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-5 '>
                                        <div className=''>
                                            <MdEmail className='text-[#235384] text-2xl'/>
                                        </div>
                                        <div
                                            className='text-[#0069B5] text-[18px]  leading-[20px] font-medium ms-2 '>info@SE.sa
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className='  '>
                        <div className='flex justify-around  lg:flex-row flex-col   '>

                            <div className='lg:hidden block '>
                            <img alt="TellDetails1" src={contact} className='rounded-2xl w-[100%] me-5  '/>
                            </div>
                            <div className='  lg:w-[60%]  mt-10 p-16'>


                                <div className='font-semibold text-center lg:text-5xl text-2xl  mt-3'>Complaints and
                                    Suggestions
                                </div>
                                <div className='mt-10'>

                                    <div className='lg:px-20 lg:px-8'>
                                        <form>


                                            <div className="mb-6">
                                                <label htmlFor="message"
                                                       className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">
                                                    Category </label>
                                                <Select id="countries" required>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </Select>
                                            </div>
                                            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                                <div>
                                                    <label htmlFor="first_name"
                                                           className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">
                                                        name</label>
                                                    <input type="text" id="first_name"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#58aedd] focus:border-[#58aedd] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Type here..." required/>
                                                </div>

                                                <div>
                                                    <label htmlFor="email"
                                                           className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">Email
                                                        address</label>
                                                    <input type="email" id="email"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#58aedd] focus:border-[#58aedd] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                           placeholder="Type here..." required/>
                                                </div>


                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="message"
                                                       className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">
                                                    Message</label>
                                                <textarea id="message" rows="4"
                                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#58aedd] focus:border-[#58aedd] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                          placeholder="Write your thoughts here..."></textarea>
                                            </div>

                                            <div className='flex justify-center items-center'>
                                                <button type="button"
                                                        className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            <div className='lg:block hidden  '>
                                <img alt="TellDetails1" src={contact}
                                     className='rounded-2xl  me-5 mt-[167px]  lg:w-[120%]      '/>
                            </div>

                        </div>
                    </div>
                </div>


                <TellDetails/>


            </div>
        </>
    );
};

export default ContactUs;