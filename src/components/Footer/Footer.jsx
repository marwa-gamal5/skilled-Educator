import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { ImGoogle2 } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import logo from '../../assets/Logo.png'
const Footerr = () => {
    return (
        <>


            <footer className="font-[sans-serif] bg-[#235384] p-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 md:gap-8">
                    <div className="xl:col-span-2  ">
                        <a href='javascript:void(0)'><img src={logo} alt="logo"
                                                          className='w-24 ms-16 '/></a>
                        <ul className="mt-10 flex lg:space-x-6 space-x-2 bg-transparent">
                            <li>
                                <a href='javascript:void(0)'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         className="fill-gray-300 hover:fill-white w-6 h-6"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         className="fill-gray-300 hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         className="fill-gray-300 hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                                        <path
                                            d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         className="fill-gray-300 hover:fill-white w-6 h-6" viewBox="0 0 24 24">
                                        <path
                                            d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'>
                                         <div className=' text-gray-300 hover:text-white text-xl'><ImGoogle2/></div>

                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'>
                                    <div className=' text-gray-300 hover:text-white text-xl'><IoLogoYoutube/></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-2'>
                        <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">Quick Links <svg
                            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]" viewBox="0 0 24 24">
                            <path
                                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                data-name="16" data-original="#000000"></path>
                        </svg>
                        </h4>
                        <ul className="mt-4 space-y-5 bg-transparent ">
                            <li>
                                <a href='javascript:void(0)'
                                   className='hover:text-white text-gray-300 text-sm'>About</a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'
                                   className='hover:text-white text-gray-300 text-sm'>SCIENTIFIC REFEREEING</a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'
                                   className='hover:text-white text-gray-300 text-sm'>CURRICULUM</a>
                            </li>
                            <li>
                                <a href='javascript:void(0)' className='hover:text-white text-gray-300 text-sm'>PORTAL
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='mt-2 '>
                        <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">Keep in Touch <svg
                            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                            className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]" viewBox="0 0 24 24">
                            <path
                                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                data-name="16" data-original="#000000"></path>
                        </svg>
                        </h4>
                        <ul className="mt-4 space-y-5 bg-transparent  ">
                            <li>
                                <a href='javascript:void(0)'
                                  >
                                    <div className='flex lg:flex-row flex-col '>
                                        <div className='flex hover:text-white text-gray-300 text-sm '>
                                            <div><MdOutlinePhoneInTalk className='mt-1'/></div>
                                            <div className='ms-2 '>+ 966 11 415 0206</div>
                                        </div>
                                        <div className='flex lg:ms-5  lg:ms-0 lg:mt-0 mt-2  hover:text-white text-gray-300 text-sm'>
                                            <div><MdOutlinePhoneInTalk className='mt-1'/></div>
                                            <div className='ms-2 '>+ 966 50 310 8367</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'>
                                    <div className='flex lg:flex-row flex-col  '>
                                        <div className='flex hover:text-white text-gray-300 text-sm '>
                                            <div><MdOutlinePhoneInTalk className='mt-1'/></div>
                                            <div className='ms-2 '>+ 966 11 207 1607</div>
                                        </div>
                                        <div className='flex lg:ms-5  lg:ms-0 lg:mt-0 mt-2  hover:text-white text-gray-300 text-sm'>
                                            <div><RiWhatsappFill className='mt-1'/></div>
                                            <div className='ms-2  '> + 966 55 855 4910</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)'
                                   className='hover:text-white text-gray-300 text-sm'>
                                    <div className='flex'>
                                        <div><IoMdMail className='mt-1'/></div>
                                        <div className='ms-2 '> info@interedu.sa</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:void(0)' className='hover:text-white text-gray-300 text-sm'>
                                    <div className='flex'>
                                        <div><FaLocationDot className='mt-1'/></div>
                                        <div className='ms-2 '> Knowledge Pioneers for Training and Education, P.O.Box 4054- Riyadh 12464</div>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>


                </div>
                <hr className="mt-8 border-gray-300"/>
                <div className="md:flex md:item-center justify-between  mt-8">
                    <ul className="md:flex md:space-x-5 max-md:space-y-2 bg-transparent">
                        <li>
                            <a href='javascript:void(0)' className='hover:text-white text-gray-300 text-sm'>Privacy
                                policy</a>
                        </li>
                        <li>
                            <a href='javascript:void(0)' className='hover:text-white text-gray-300 text-sm'>Terms of
                                Use</a>
                        </li>

                    </ul>
                    <div className='hover:text-white text-gray-300  '>
                        <p className=' text-gray-300 text-sm      max-md:mt-5 '>Power By<a
                            href='https://www.alrowadit.com/'
                            target='_blank' className="hover:underline mx-1 hover:text-white text-gray-300 ">AlRowad</a>
                        </p>
                    </div>
                    <p className='text-gray-300 text-sm max-md:mt-5 '>© 2024, All Rights Reserved</p>


                </div>

            </footer>

        </>
    );
};

export default Footerr;