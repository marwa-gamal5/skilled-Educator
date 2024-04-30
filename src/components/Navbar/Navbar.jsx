import { useState,useEffect } from "react"
import { FaAlignJustify } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import './Navbar.css'
import {ChangeLang, Translations} from "../../Store/actions/actions.jsx";
import { axiosInstance } from '../../Network/axiosinstance.jsx';
import { Link } from "react-router-dom";
import Diploma from "../../Pages/Diploma/Diploma.jsx";
function Navbar() {

    const language = useSelector ((state)=>state.lang)
    const Translationss = useSelector ((state)=>state.translations)
    const  dispatch=useDispatch()
    const handleLang =()=>{
        dispatch(ChangeLang(language === "ar" ? "en" : "ar"))

    }
    console.log("lang in nave",language)
    const fetchTranslations = async () => {

        await axiosInstance.get(`/core/webtrans2/?lang_code=${language}`,)
            .then((res) => {

                console.log("res.data.translation",res.data.translation);
                dispatch(Translations(res.data.translation));
                if ('error' in res.data) {
                    console.log("Error");
                }



            })
            .catch((err) => {
                console.log("Error while fetching data:", err);
            });
    }
    const fetchcategories = async () => {

        await axiosInstance.get(`/core/get_complain_categories/?lang_code=${language}`,)
            .then((res) => {

                console.log("resssssss",res);

                if ('error' in res.data) {
                    console.log("Error");
                }



            })
            .catch((err) => {
                console.log("Error while fetching data:", err);
            });
    }

    useEffect(() => {
        fetchcategories()
        fetchTranslations();
    }, [language]);

    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const[isSticky,setIsSticky]=useState(false);
    //set toggle Menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(()=>{
        const handelScroll =() =>{
            if(window.scrollY>100){
                setIsSticky(true);

            }else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handelScroll);
        return()=>{
            window.addEventListener('scroll',handelScroll);
        }
    });
console.log("Translationss",Translationss.AboutUs)

  return (
    <>
        <div dir={language === "ar" ? "rtl" :"ltr"}  >
    <header className="w-full bg-darkMidnightBlue md:bg-transparent fixed right-0 left-0 top-0">
        <div className=' md:flex  hidden justify-between items-center  w-full bg-darkMidnightBlue py-4 lg:px-14 px-4'>

            <div className='flex '>
                <button className='me-10 text-amber-50' onClick={() => {
                    handleLang();
                    // fetchTranslations();
                }}>lang {language}</button>

                <div className='flex align-center '>
                    <div><SlLocationPin className='text-whiteSmoke  text-[15px] mt-[2px]'/></div>
                    <div className='text-whiteSmoke ms-1 text-[14px]'>P.O.Box 4054- Riyadh 12464</div>
                </div>
                <div className='border-l border-whiteSmoke h-6 mx-6'></div>
                <div className='flex align-center '>
                    <div><MdOutlineMailOutline className='text-whiteSmoke  text-[15px] mt-[2px]'/></div>
                    <div className='text-whiteSmoke ms-1 text-[14px]'>INFO@EXAMPLE.COM</div>
                </div>
                <div className='border-l border-whiteSmoke h-6 mx-6'></div>
                <div className='flex align-center '>
                    <div><FiPhone className='text-whiteSmoke  text-[15px] mt-[2px]'/></div>
                    <div className='text-whiteSmoke ms-1 text-[14px]'>+99999999999</div>
                </div>
            </div>
            <div className='flex'>
                <FaFacebookF className='text-whiteSmoke  text-[15px] ms-2'/>
                <FaXTwitter className='text-whiteSmoke  text-[15px] ms-2' />
                <IoLogoGoogleplus className='text-whiteSmoke  text-[15px] ms-2' />
                <FaYoutube className='text-whiteSmoke  text-[15px] ms-2' />

            </div>
        </div>
        <nav
            className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 " : " "}`}>
            <div className="flex justify-between items-center text-base gap-8   ">

                {/* nav items for large devices  */}
                <ul className="md:flex space-x-6 hidden bg-transparent ">

                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/">Home</Link></li>
                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/AboutUs">About Us</Link></li>

                    {/*<li className="block text-2xl text-white font-bold nav-style"><Link to="/AboutUs">{Translationss.AboutUs}  </Link> </li>*/}
                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/Diploma">Diploma</Link>
                    </li>
                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/Students">Students</Link>
                    </li>
                    <li className="block text-2xl text-white font-bold nav-style"><Link
                        to="/Accreditations">Accreditations</Link></li>
                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/Library">Library</Link>
                    </li>
                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/Portal">Portal</Link></li>
                    <li className="block text-2xl text-white font-bold nav-style"><Link to="/ContactUs">Contact
                        Us</Link></li>

                </ul>

                {/* btn for large device */}
                <div className="space-x-12 hidden  lg:flex items-center">
                    <button className='registerbtn'>
                        Register Now
                    </button>

                </div>
                {/* menu btn for only mobile device */}
                <div className="md:hidden ">
                    <button onClick={toggleMenu} className=" text-whiteSmoke focus:outline-none ">
                        {
                            isMenuOpen ? (<IoClose className="h-6 w-6 "/>) : (<FaAlignJustify className="h-6 w-6 "/>)
                        }

                    </button>

                </div>
            </div>
            {/* nav item for mobile device  */}

            <div
                className={`lg:hidden xl:hidden   mt-14 bg-[#02305F]  ${isMenuOpen ? 'bg-navyBlueBlur' : ''} ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                <style jsx>{`
                    .bg-navyBlueBlur {
                        background-color: rgba(35, 83, 132, 0.5); 
                        backdrop-filter: blur(0.2px);
                    }
                `}</style>

                <ul className='bg-[#02305F] px-5'>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/">Home</Link></li>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/AboutUs">About Us  </Link></li>
                    {/*<li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link to="/AboutUs">{Translationss.AboutUs}  </Link></li>*/}
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/Diploma">Diploma</Link></li>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/Students">Students</Link></li>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/Accreditations">Accreditations</Link></li>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/Library">Library</Link></li>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/Portal">Portal</Link></li>
                    <li className="block text-2xl text-white hover:text-skyBlue  hover:text-[25px] "><Link
                        to="/ContactUs">Contact Us</Link></li>
                </ul>
            </div>

        </nav>
    </header>
        </div>
    </>

  )
}

export default Navbar