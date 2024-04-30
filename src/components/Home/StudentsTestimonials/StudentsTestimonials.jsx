
import StudentsTestimonialsbg from '../../../assets/StudentsTestimonialsBg.jpg'
import StudentsTestimonials1 from '../../../assets/StudentsTestimonials1.png';
import { LuQuote } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import style from './StudentsTestimonials.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#58AEDD" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#58AEDD" }}
            onClick={onClick}
        />
    );
}

const StudentsTestimonials = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <>
        <div className='  inset-0 w-full  h-[100%] bg-cover mt-10 '
             style={{backgroundImage: `url(${StudentsTestimonialsbg})`}}>
           <div className='text-center  p-16'>
               <div>Our Students Testimonials</div>
               <div className='font-semibold lg:text-5xl  md:text-3xl text-2xl mt-3 '>Students Say’s About Oue University</div>
               <Slider
                   ref={slider => {
                       sliderRef = slider;
                   }}
                   {...settings}
               >
                   <div key={1}>
                       <div className='flex flex-col lg:flex-row justify-between items-center mt-10'>
                           <img src={StudentsTestimonials1}  alt='user'/>
                           <div className='md:x-32 md:px-10  mt-5'>

                               <LuQuote className='rotate-180 text-white text-7xl mt-2 '/>
                               <div className='text-lg text-[#3C5C7C]  font-semibold text-left mt-5 '>" Quickly maximize
                                   visionary solutions after mission critical action item productivity
                                   premium portals for impactful -services inactively negotiate enabled niche markets
                                   via growth
                                   strategies. University is accredited by the Higher Learning Commission and holds
                                   various
                                   program-specific accreditations, ensuring that the institution meets rigorous
                                   standards of
                                   academic quality and integrity.”
                               </div>

                               <div className="border-t border-2  border-white mt-5"></div>
                               <div className='text-left font-semibold text-xl mt-5'>student name</div>
                               <div className='text-left font-normal text-sm mt-1 '>Student</div>


                           </div>
                       </div>
                   </div>
                   <div key={2}>
                       <div className='flex flex-col lg:flex-row justify-between items-center mt-10'>
                           <img src={StudentsTestimonials1} alt='user'/>
                           <div className='md:px-32 md:px-10'>

                               <LuQuote className='rotate-180 text-white text-7xl '/>
                               <div className='text-lg text-[#3C5C7C]  font-semibold text-left mt-5 '>" Quickly maximize
                                   visionary solutions after mission critical action item productivity
                                   premium portals for impactful -services inactively negotiate enabled niche markets
                                   via growth
                                   strategies. University is accredited by the Higher Learning Commission and holds
                                   various
                                   program-specific accreditations, ensuring that the institution meets rigorous
                                   standards of
                                   academic quality and integrity.”
                               </div>

                               <div className="border-t border-2  border-white mt-5"></div>
                               <div className='text-left font-semibold text-xl mt-5'>student name</div>
                               <div className='text-left font-normal text-sm mt-1 '>Student</div>

                           </div>
                       </div>
                   </div>
                   <div key={3}>
                       <div className='flex flex-col lg:flex-row  justify-between items-center mt-10'>
                           <img className=' ' src={StudentsTestimonials1} alt='user'/>
                           <div className='md:px-32 md:px-10'>

                               <LuQuote className='rotate-180 text-white text-7xl '/>
                               <div className='text-lg text-[#3C5C7C]  font-semibold text-left mt-5 '>" Quickly maximize
                                   visionary solutions after mission critical action item productivity
                                   premium portals for impactful -services inactively negotiate enabled niche markets
                                   via growth
                                   strategies. University is accredited by the Higher Learning Commission and holds
                                   various
                                   program-specific accreditations, ensuring that the institution meets rigorous
                                   standards of
                                   academic quality and integrity.”
                               </div>

                               <div className="border-t border-2  border-white mt-5"></div>
                               <div className='text-left font-semibold text-xl mt-5'>student name</div>
                               <div className='text-left font-normal text-sm mt-1 '>Student</div>

                           </div>
                       </div>
                   </div>

               </Slider>
               <div style={{textAlign: "right"}}>
                   <button className="button" onClick={previous}>
                       <IoIosArrowDropleft className='text-white text-4xl' />
                   </button>
                   <button className="button" onClick={next}>
                       <IoIosArrowDropright  className='text-white text-4xl'/>
                   </button>
               </div>

               <div>

               </div>
           </div>
        </div>


        </>

    );
};

export default StudentsTestimonials;