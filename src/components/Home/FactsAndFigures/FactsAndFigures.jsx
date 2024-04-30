import React from "react";
import './FactsAndFigures.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FactsAndFigures = () => {
    const settings = {

        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },


            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            }
        ]

    };
    return (
        <>
            <div className='md:p-24 py-16 mb-20 '>
                <div className=' flex justify-center md:px-4 items-center font-semibold md:text-5xl text-4xl mb-14  '>Facts and Figures</div>
                <div className='ff ' >

                    <Slider {...settings}>
                        <div>
                            <div style={{background: 'radial-gradient(circle, #58aedd, #e6f3fa 150px)'}}
                                 className='w-[240px] h-[240px] rounded-[57px] flex flex-col justify-center items-center ms-5 border border-4 border-[#58AEDD]'>
                                <div className='font-bold text-5xl text-navyBlue '>100+</div>
                                <div className='text-[#5687AD] text-center text-base font-semibold '>Number of
                                    universities
                                    that offer diplomas.
                                </div>

                            </div>
                        </div>
                        <div>
                            <div style={{background: 'radial-gradient(circle, #58aedd, #e6f3fa 150px)'}}
                                 className='w-[240px] h-[240px] rounded-[57px] flex flex-col justify-center items-center ms-5 border border-4 border-[#58AEDD]'>
                                <div className='font-bold text-5xl text-navyBlue '>50+</div>
                                <div className='text-[#5687AD] text-center text-base font-semibold '>Number of
                                    universities
                                    that offer diplomas.
                                </div>

                            </div>
                        </div>
                        <div>
                            <div style={{background: 'radial-gradient(circle, #58aedd, #e6f3fa 150px)'}}
                                 className='w-[240px] h-[240px] rounded-[57px] flex flex-col justify-center items-center ms-5 border border-4 border-[#58AEDD]'>
                                <div className='font-bold text-5xl text-navyBlue '>14+</div>
                                <div className='text-[#5687AD] text-center text-base font-semibold '>Number of
                                    universities
                                    that offer diplomas.
                                </div>

                            </div>
                        </div>
                        <div>
                            <div style={{background: 'radial-gradient(circle, #58aedd, #e6f3fa 150px)'}}
                                 className='w-[240px] h-[240px] rounded-[57px] flex flex-col justify-center items-center ms-5 border border-4 border-[#58AEDD]'>
                                <div className='font-bold text-5xl text-navyBlue '>150+</div>
                                <div className='text-[#5687AD] text-center text-base font-semibold '>Number of
                                    universities
                                    that offer diplomas.
                                </div>

                            </div>
                        </div>
                        <div>
                            <div style={{background: 'radial-gradient(circle, #58aedd, #e6f3fa 150px)'}}
                                 className='w-[240px] h-[240px] rounded-[57px] flex flex-col justify-center items-center ms-5 border border-4 border-[#58AEDD]'>
                                <div className='font-bold text-5xl text-navyBlue '>200+</div>
                                <div className='text-[#5687AD] text-center text-base font-semibold '>Number of
                                    universities
                                    that offer diplomas.
                                </div>

                            </div>
                        </div>
                        <div>
                            <div style={{background: 'radial-gradient(circle, #58aedd, #e6f3fa 150px)'}}
                                 className='w-[240px] h-[240px] rounded-[57px] flex flex-col justify-center items-center ms-5 border border-4 border-[#58AEDD]'>
                                <div className='font-bold text-5xl text-navyBlue '>30+</div>
                                <div className='text-[#5687AD] text-center text-base font-semibold '>Number of
                                    universities
                                    that offer diplomas.
                                </div>

                            </div>
                        </div>

                    </Slider>
                </div>

            </div>


        </>
    );
};

export default FactsAndFigures;