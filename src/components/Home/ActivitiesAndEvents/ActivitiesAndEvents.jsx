import events1 from '../../../assets/events1.png'
import events2 from '../../../assets/events2.png'
import events3 from '../../../assets/events3.png'
import './ActivitiesAndEvents.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#58AEDD" ,borderRadius: "50%"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#58AEDD",borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const ActivitiesAndEvents = () => {

    const settings = {

        infinite: true,

        slidesToShow: 3,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,


        responsive: [
            {
                breakpoint: 1564,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    arrows:true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 2000,

                    arrows:false,

                }
            },

            {
                breakpoint: 865,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows:false,
                }
            },

        ]

    };

    return (
        <>

            <div className='text-center md:text-5xl text-3xl font-semibold md:p-16 p-6'>Activities and events</div>
            <div>
                <div className=' p-10 xl:px-52 lg:px-32 md:px-5 '>
                    <form className="flex items-start max-w-lg ">
                        <label htmlFor="date-search" className="sr-only">Search</label>
                        <div className="relative w-full">

                            <input type="date" id="date-search "
                                   className="bg-gray-50 border border-2  border-[#58aedd] text-gray-900 text-sm rounded-lg focus:ring-[#58aedd] focus:border-[#58aedd] block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#58aedd] dark:focus:border-[#58aedd]"
                                   placeholder="Search..." required/>

                        </div>
                        <button type="submit"
                                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            Search
                        </button>
                    </form>
                </div>


            </div>
            <div className=' '>
                {/*      <div className='xl:px-40 lg:px-32 md:px-5 sm:px-24 mx-auto items-center' >*/}
                <div className='   slidersize ' >
                <Slider  {...settings}>
                    <div>
                        <div className='md:p-10 md:px-24  p-6 '>
                            <div className='md:w-[400px] w-[350px] h-[400px] border-[3px] border-[#58AEDD] rounded-[24px] '
                                 style={{background: 'linear-gradient(135deg, #aad1e9 0%, #f3f9fd 100%)'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={events1} alt='events1'/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '89%',
                                        left: '77%',
                                        width: '72px',
                                        height: '57px',
                                        border: '1px solid #def1ff',
                                        background: 'rgba(55, 130, 187, 0.9)',
                                        zIndex: '1',
                                        borderRadius: '10px',
                                    }}>
                                        <div className='px-1 py-2'>
                                            <div className='text-white text-sm font-bold'>05</div>
                                            <div className='text-white text-sm '>jun 2024</div>
                                        </div>

                                    </div>
                                    <svg style={{position: 'absolute', top: '87%', left: '85%', zIndex: '2'}} width="50%"
                                         height="50%">
                                        {/* This is the SVG element for drawing lines */}
                                        <line x1="0" y1="0" x2="0" y2="15%" style={{stroke: '#def1ff', strokeWidth: '3'}}/>
                                        <line x1="10" y1="0" x2="10" y2="15%"
                                              style={{stroke: '#def1ff', strokeWidth: '2'}}/>
                                    </svg>
                                </div>
                                <div className='p-5'>
                                    <div className='font-semibold text-2xl'>Holistic Education</div>
                                    <div className='font-normal text-base text-[#2A506D]'>
                                        Our school believes in fostering the overall development of students. Alongside
                                        academi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:p-10 md:px-24  p-5'>
                            <div className='md:w-[400px] w-[350px] h-[400px] border-[3px] border-[#58AEDD] rounded-[24px] '
                                 style={{background: 'linear-gradient(135deg, #aad1e9 0%, #f3f9fd 100%)'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={events2} alt='events2'/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '89%',
                                        left: '77%',
                                        width: '72px',
                                        height: '57px',
                                        border: '1px solid #def1ff',
                                        background: 'rgba(55, 130, 187, 0.9)',
                                        zIndex: '1',
                                        borderRadius: '10px',
                                    }}>
                                        <div className='px-1 py-2'>
                                            <div className='text-white text-sm font-bold'>05</div>
                                            <div className='text-white text-sm '>jun 2024</div>
                                        </div>

                                    </div>
                                    <svg style={{position: 'absolute', top: '87%', left: '85%', zIndex: '2'}} width="50%"
                                         height="50%">
                                        {/* This is the SVG element for drawing lines */}
                                        <line x1="0" y1="0" x2="0" y2="15%" style={{stroke: '#def1ff', strokeWidth: '3'}}/>
                                        <line x1="10" y1="0" x2="10" y2="15%"
                                              style={{stroke: '#def1ff', strokeWidth: '2'}}/>
                                    </svg>
                                </div>
                                <div className='p-5'>
                                    <div className='font-semibold text-2xl'>Holistic Education</div>
                                    <div className='font-normal text-base text-[#2A506D]'>
                                        Our school believes in fostering the overall development of students. Alongside
                                        academi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:p-10 md:px-24  p-6'>
                            <div className='md:w-[400px] w-[350px] h-[400px] border-[3px] border-[#58AEDD] rounded-[24px] '
                                 style={{background: 'linear-gradient(135deg, #aad1e9 0%, #f3f9fd 100%)'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={events3} className='rounded-[24px]' alt='events3'/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '89%',
                                        left: '77%',
                                        width: '72px',
                                        height: '57px',
                                        border: '1px solid #def1ff',
                                        background: 'rgba(55, 130, 187, 0.9)',
                                        zIndex: '1',
                                        borderRadius: '10px',
                                    }}>
                                        <div className='px-1 py-2'>
                                            <div className='text-white text-sm font-bold'>05</div>
                                            <div className='text-white text-sm '>jun 2024</div>
                                        </div>

                                    </div>
                                    <svg style={{position: 'absolute', top: '87%', left: '85%', zIndex: '2'}} width="50%"
                                         height="50%">
                                        {/* This is the SVG element for drawing lines */}
                                        <line x1="0" y1="0" x2="0" y2="15%" style={{stroke: '#def1ff', strokeWidth: '3'}}/>
                                        <line x1="10" y1="0" x2="10" y2="15%"
                                              style={{stroke: '#def1ff', strokeWidth: '2'}}/>
                                    </svg>
                                </div>
                                <div className='p-5'>
                                    <div className='font-semibold text-2xl'>Holistic Education</div>
                                    <div className='font-normal text-base text-[#2A506D]'>
                                        Our school believes in fostering the overall development of students. Alongside
                                        academi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:p-10 md:px-24  p-6'>
                            <div className='md:w-[400px] w-[350px] h-[400px] border-[3px] border-[#58AEDD] rounded-[24px] '
                                 style={{background: 'linear-gradient(135deg, #aad1e9 0%, #f3f9fd 100%)'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={events1} alt='events1'/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '89%',
                                        left: '77%',
                                        width: '72px',
                                        height: '57px',
                                        border: '1px solid #def1ff',
                                        background: 'rgba(55, 130, 187, 0.9)',
                                        zIndex: '1',
                                        borderRadius: '10px',
                                    }}>
                                        <div className='px-1 py-2'>
                                            <div className='text-white text-sm font-bold'>05</div>
                                            <div className='text-white text-sm '>jun 2024</div>
                                        </div>

                                    </div>
                                    <svg style={{position: 'absolute', top: '87%', left: '85%', zIndex: '2'}} width="50%"
                                         height="50%">
                                        {/* This is the SVG element for drawing lines */}
                                        <line x1="0" y1="0" x2="0" y2="15%" style={{stroke: '#def1ff', strokeWidth: '3'}}/>
                                        <line x1="10" y1="0" x2="10" y2="15%"
                                              style={{stroke: '#def1ff', strokeWidth: '2'}}/>
                                    </svg>
                                </div>
                                <div className='p-5'>
                                    <div className='font-semibold text-2xl'>Holistic Education</div>
                                    <div className='font-normal text-base text-[#2A506D]'>
                                        Our school believes in fostering the overall development of students. Alongside
                                        academi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:p-10 md:px-24  p-6'>
                            <div className='md:w-[400px] w-[350px] h-[400px] border-[3px] border-[#58AEDD] rounded-[24px] '
                                 style={{background: 'linear-gradient(135deg, #aad1e9 0%, #f3f9fd 100%)'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={events2} alt='events2'/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '89%',
                                        left: '77%',
                                        width: '72px',
                                        height: '57px',
                                        border: '1px solid #def1ff',
                                        background: 'rgba(55, 130, 187, 0.9)',
                                        zIndex: '1',
                                        borderRadius: '10px',
                                    }}>
                                        <div className='px-1 py-2'>
                                            <div className='text-white text-sm font-bold'>05</div>
                                            <div className='text-white text-sm '>jun 2024</div>
                                        </div>

                                    </div>
                                    <svg style={{position: 'absolute', top: '87%', left: '85%', zIndex: '2'}} width="50%"
                                         height="50%">
                                        {/* This is the SVG element for drawing lines */}
                                        <line x1="0" y1="0" x2="0" y2="15%" style={{stroke: '#def1ff', strokeWidth: '3'}}/>
                                        <line x1="10" y1="0" x2="10" y2="15%"
                                              style={{stroke: '#def1ff', strokeWidth: '2'}}/>
                                    </svg>
                                </div>
                                <div className='p-5'>
                                    <div className='font-semibold text-2xl'>Holistic Education</div>
                                    <div className='font-normal text-base text-[#2A506D]'>
                                        Our school believes in fostering the overall development of students. Alongside
                                        academi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='md:p-10 md:px-24  p-6'>
                            <div className='md:w-[400px] w-[350px] h-[400px] border-[3px] border-[#58AEDD] rounded-[24px] '
                                 style={{background: 'linear-gradient(135deg, #aad1e9 0%, #f3f9fd 100%)'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={events3} className='rounded-[24px]' alt='events3'/>
                                    <div style={{
                                        position: 'absolute',
                                        top: '89%',
                                        left: '77%',
                                        width: '72px',
                                        height: '57px',
                                        border: '1px solid #def1ff',
                                        background: 'rgba(55, 130, 187, 0.9)',
                                        zIndex: '1',
                                        borderRadius: '10px',
                                    }}>
                                        <div className='px-1 py-2'>
                                            <div className='text-white text-sm font-bold'>05</div>
                                            <div className='text-white text-sm '>jun 2024</div>
                                        </div>

                                    </div>
                                    <svg style={{position: 'absolute', top: '87%', left: '85%', zIndex: '2'}} width="50%"
                                         height="50%">
                                        {/* This is the SVG element for drawing lines */}
                                        <line x1="0" y1="0" x2="0" y2="15%" style={{stroke: '#def1ff', strokeWidth: '3'}}/>
                                        <line x1="10" y1="0" x2="10" y2="15%"
                                              style={{stroke: '#def1ff', strokeWidth: '2'}}/>
                                    </svg>
                                </div>
                                <div className='p-5'>
                                    <div className='font-semibold text-2xl'>Holistic Education</div>
                                    <div className='font-normal text-base text-[#2A506D]'>
                                        Our school believes in fostering the overall development of students. Alongside
                                        academi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>



        </>
    );
};

export default ActivitiesAndEvents;