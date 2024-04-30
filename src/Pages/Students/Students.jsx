import mainimage from '../../assets/Students/mainimage.jpg'
import bg from '../../assets/Students/bg.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../../assets/Students/image1.png'
import image2 from '../../assets/Students/image2.png'
import style from './Students.module.css'
import { useNavigate } from 'react-router-dom';
const Students = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    };
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/StudentsReadmore');
    };
    return (

        <>


            <div>

                <div className='relative'>
                    <img src={mainimage} className='w-full md:mt-0 mt-14' alt='image'/>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <h1 className='text-white text-4xl font-bold'>Students</h1>
                    </div>


                </div>


                <div className="" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>


                    <div className={`${style.styleLarge}`}>
                        <div className='p-52 lg:p-20'>
                            <Slider {...settings}>


                                <div className=''>
                                    <div
                                        className='md:w-[571px] md:h-[779px]  w-[371px] h-[579px] rounded-lg  m-auto flex flex-col justify-center '>
                                        <div><img src={image1} alt='image '/></div>
                                        <div
                                            className='md:h-[405px] h-[555px] bg-amber-50 rounded-b-lg  m-auto flex flex-col justify-center'>
                                            <div className='p-8'>
                                                <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                                    fees
                                                </div>
                                                <div className='text-[#737373] text-base  font-normal  mt-6'>
                                                    Jordan University formed a review committee consisting of seven
                                                    faculty
                                                    members
                                                    from
                                                    the College
                                                    of
                                                    Education to review INTEREDU™. <br/>
                                                    The committee based their evaluation of the scientific content in
                                                    training
                                                    programs,
                                                    methods of
                                                    training
                                                    and training activities on international standards and came to the
                                                    following
                                                    conclusion: <br/>
                                                    <br/>
                                                    The scientific content is modern, linked to the targeted
                                                    competencies,
                                                    easy to
                                                    comprehend,
                                                    compatible
                                                    with the current
                                                </div>

                                            </div>


                                            <button onClick={handleNavigate}
                                                    className='border border-[#58AEDD] px-10 py-3 rounded-lg  m-auto text-[#58AEDD] font-extrabold  text-base mb-8  '>

                                                Read more
                                            </button>


                                        </div>

                                    </div>


                                </div>

                                <div>
                                    <div
                                        className='md:w-[571px] md:h-[779px]  w-[371px] h-[579px] rounded-lg  m-auto flex flex-col justify-center '>
                                        <div><img src={image2} alt='image '/></div>
                                        <div
                                            className='md:h-[405px] h-[555px] bg-amber-50 rounded-b-lg  m-auto flex flex-col justify-center'>
                                            <div className='p-8'>
                                                <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                                    fees
                                                </div>
                                                <div className='text-[#737373] text-base  font-normal  mt-6'>
                                                    Jordan University formed a review committee consisting of seven
                                                    faculty
                                                    members
                                                    from
                                                    the College
                                                    of
                                                    Education to review INTEREDU™. <br/>
                                                    The committee based their evaluation of the scientific content in
                                                    training
                                                    programs,
                                                    methods of
                                                    training
                                                    and training activities on international standards and came to the
                                                    following
                                                    conclusion: <br/>
                                                    <br/>
                                                    The scientific content is modern, linked to the targeted
                                                    competencies,
                                                    easy to
                                                    comprehend,
                                                    compatible
                                                    with the current
                                                </div>

                                            </div>


                                            <button onClick={handleNavigate}
                                                    className='border border-[#58AEDD] px-10 py-3 rounded-lg  m-auto text-[#58AEDD] font-extrabold  text-base mb-8  '>

                                                Read more
                                            </button>


                                        </div>

                                    </div>
                                </div>


                                <div className=''>
                                    <div
                                        className='md:w-[571px] md:h-[779px]  w-[371px] h-[579px] rounded-lg  m-auto flex flex-col justify-center '>
                                        <div><img src={image1} alt='image '/></div>
                                        <div
                                            className='md:h-[405px] h-[555px] bg-amber-50 rounded-b-lg  m-auto flex flex-col justify-center'>
                                            <div className='p-8'>
                                                <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                                    fees
                                                </div>
                                                <div className='text-[#737373] text-base  font-normal  mt-6'>
                                                    Jordan University formed a review committee consisting of seven
                                                    faculty
                                                    members
                                                    from
                                                    the College
                                                    of
                                                    Education to review INTEREDU™. <br/>
                                                    The committee based their evaluation of the scientific content in
                                                    training
                                                    programs,
                                                    methods of
                                                    training
                                                    and training activities on international standards and came to the
                                                    following
                                                    conclusion: <br/>
                                                    <br/>
                                                    The scientific content is modern, linked to the targeted
                                                    competencies,
                                                    easy to
                                                    comprehend,
                                                    compatible
                                                    with the current
                                                </div>

                                            </div>


                                            <button onClick={handleNavigate}
                                                    className='border border-[#58AEDD] px-10 py-3 rounded-lg  m-auto text-[#58AEDD] font-extrabold  text-base mb-8  '>

                                                Read more
                                            </button>


                                        </div>

                                    </div>


                                </div>

                                <div>
                                    <div
                                        className='md:w-[571px] md:h-[779px]  w-[371px] h-[579px] rounded-lg  m-auto flex flex-col justify-center '>
                                        <div><img src={image2} alt='image '/></div>
                                        <div
                                            className='md:h-[405px] h-[555px] bg-amber-50 rounded-b-lg  m-auto flex flex-col justify-center'>
                                            <div className='p-8'>
                                                <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                                    fees
                                                </div>
                                                <div className='text-[#737373] text-base  font-normal  mt-6'>
                                                    Jordan University formed a review committee consisting of seven
                                                    faculty
                                                    members
                                                    from
                                                    the College
                                                    of
                                                    Education to review INTEREDU™. <br/>
                                                    The committee based their evaluation of the scientific content in
                                                    training
                                                    programs,
                                                    methods of
                                                    training
                                                    and training activities on international standards and came to the
                                                    following
                                                    conclusion: <br/>
                                                    <br/>
                                                    The scientific content is modern, linked to the targeted
                                                    competencies,
                                                    easy to
                                                    comprehend,
                                                    compatible
                                                    with the current
                                                </div>

                                            </div>


                                            <button onClick={handleNavigate}
                                                    className='border border-[#58AEDD] px-10 py-3 rounded-lg  m-auto text-[#58AEDD] font-extrabold  text-base mb-8  '>

                                                Read more
                                            </button>


                                        </div>

                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>


                    <div className={`${style.stylesmall}  sm:p-20 p-10 `}>
                        <div className='flex items-center justify-around gap-5 flex-wrap'>


                            <div className='md:w-[571px]  w-[371px]   rounded-lg  flex flex-col justify-center '>
                                <div><img src={image1} alt='image '/></div>
                                <div
                                    className='h-[300px]   bg-amber-50 rounded-b-lg  mx-auto flex flex-col justify-center  '>
                                    <div className='p-8 overflow-y-scroll '>
                                        <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                            fees
                                        </div>
                                        <div className='text-[#737373] text-base  font-normal  mt-6 '>
                                            Jordan University formed a review committee consisting of seven
                                            faculty
                                            members
                                            from
                                            the College
                                            of
                                            Education to review INTEREDU™. <br/>
                                            The committee based their evaluation of the scientific content in
                                            training
                                            programs,
                                            methods of
                                            training
                                            and training activities on international standards and came to the
                                            following
                                            conclusion: <br/>
                                            <br/>
                                            The scientific content is modern, linked to the targeted
                                            competencies,
                                            easy to
                                            comprehend,
                                            compatible
                                            with the current
                                        </div>

                                    </div>


                                    <button onClick={handleNavigate}
                                            className='border border-[#58AEDD] px-10 py-3 rounded-lg  mx-auto text-[#58AEDD] font-extrabold  text-base m-5  '>

                                        Read more
                                    </button>


                                </div>

                            </div>
                            <div className='md:w-[571px]  w-[371px]   rounded-lg  flex flex-col justify-center '>
                                <div><img src={image2} alt='image '/></div>
                                <div
                                    className='h-[300px]   bg-amber-50 rounded-b-lg  mx-auto flex flex-col justify-center  '>
                                    <div className='p-8 overflow-y-scroll '>
                                        <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                            fees
                                        </div>
                                        <div className='text-[#737373] text-base  font-normal  mt-6 '>
                                            Jordan University formed a review committee consisting of seven
                                            faculty
                                            members
                                            from
                                            the College
                                            of
                                            Education to review INTEREDU™. <br/>
                                            The committee based their evaluation of the scientific content in
                                            training
                                            programs,
                                            methods of
                                            training
                                            and training activities on international standards and came to the
                                            following
                                            conclusion: <br/>
                                            <br/>
                                            The scientific content is modern, linked to the targeted
                                            competencies,
                                            easy to
                                            comprehend,
                                            compatible
                                            with the current
                                        </div>

                                    </div>


                                    <button onClick={handleNavigate}
                                            className='border border-[#58AEDD] px-10 py-3 rounded-lg  mx-auto text-[#58AEDD] font-extrabold  text-base m-5  '>

                                        Read more
                                    </button>


                                </div>

                            </div>
                            <div className='md:w-[571px]  w-[371px]   rounded-lg  flex flex-col justify-center '>
                                <div><img src={image1} alt='image '/></div>
                                <div
                                    className='h-[300px]   bg-amber-50 rounded-b-lg  mx-auto flex flex-col justify-center  '>
                                    <div className='p-8 overflow-y-scroll '>
                                        <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                            fees
                                        </div>
                                        <div className='text-[#737373] text-base  font-normal  mt-6 '>
                                            Jordan University formed a review committee consisting of seven
                                            faculty
                                            members
                                            from
                                            the College
                                            of
                                            Education to review INTEREDU™. <br/>
                                            The committee based their evaluation of the scientific content in
                                            training
                                            programs,
                                            methods of
                                            training
                                            and training activities on international standards and came to the
                                            following
                                            conclusion: <br/>
                                            <br/>
                                            The scientific content is modern, linked to the targeted
                                            competencies,
                                            easy to
                                            comprehend,
                                            compatible
                                            with the current
                                        </div>

                                    </div>


                                    <button onClick={handleNavigate}
                                            className='border border-[#58AEDD] px-10 py-3 rounded-lg  mx-auto text-[#58AEDD] font-extrabold  text-base m-5  '>

                                        Read more
                                    </button>


                                </div>

                            </div>
                            <div className='md:w-[571px]  w-[371px]   rounded-lg  flex flex-col justify-center '>
                                <div><img src={image2} alt='image '/></div>
                                <div
                                    className='h-[300px]   bg-amber-50 rounded-b-lg  mx-auto flex flex-col justify-center  '>
                                    <div className='p-8 overflow-y-scroll '>
                                        <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                            fees
                                        </div>
                                        <div className='text-[#737373] text-base  font-normal  mt-6 '>
                                            Jordan University formed a review committee consisting of seven
                                            faculty
                                            members
                                            from
                                            the College
                                            of
                                            Education to review INTEREDU™. <br/>
                                            The committee based their evaluation of the scientific content in
                                            training
                                            programs,
                                            methods of
                                            training
                                            and training activities on international standards and came to the
                                            following
                                            conclusion: <br/>
                                            <br/>
                                            The scientific content is modern, linked to the targeted
                                            competencies,
                                            easy to
                                            comprehend,
                                            compatible
                                            with the current
                                        </div>

                                    </div>


                                    <button onClick={handleNavigate}
                                            className='border border-[#58AEDD] px-10 py-3 rounded-lg  mx-auto text-[#58AEDD] font-extrabold  text-base m-5  '>

                                        Read more
                                    </button>


                                </div>

                            </div>
                            <div className='md:w-[571px]  w-[371px]   rounded-lg  flex flex-col justify-center '>
                                <div><img src={image1} alt='image '/></div>
                                <div
                                    className='h-[300px]   bg-amber-50 rounded-b-lg  mx-auto flex flex-col justify-center  '>
                                    <div className='p-8 overflow-y-scroll '>
                                        <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                            fees
                                        </div>
                                        <div className='text-[#737373] text-base  font-normal  mt-6 '>
                                            Jordan University formed a review committee consisting of seven
                                            faculty
                                            members
                                            from
                                            the College
                                            of
                                            Education to review INTEREDU™. <br/>
                                            The committee based their evaluation of the scientific content in
                                            training
                                            programs,
                                            methods of
                                            training
                                            and training activities on international standards and came to the
                                            following
                                            conclusion: <br/>
                                            <br/>
                                            The scientific content is modern, linked to the targeted
                                            competencies,
                                            easy to
                                            comprehend,
                                            compatible
                                            with the current
                                        </div>

                                    </div>


                                    <button onClick={handleNavigate}
                                            className='border border-[#58AEDD] px-10 py-3 rounded-lg  mx-auto text-[#58AEDD] font-extrabold  text-base m-5  '>

                                        Read more
                                    </button>


                                </div>

                            </div>
                            <div className='md:w-[571px]  w-[371px]   rounded-lg  flex flex-col justify-center '>
                                <div><img src={image2} alt='image '/></div>
                                <div
                                    className='h-[300px]   bg-amber-50 rounded-b-lg  mx-auto flex flex-col justify-center  '>
                                    <div className='p-8 overflow-y-scroll '>
                                        <div className='text-[#235384] font-semibold  text-2xl  '>Tuition and
                                            fees
                                        </div>
                                        <div className='text-[#737373] text-base  font-normal  mt-6 '>
                                            Jordan University formed a review committee consisting of seven
                                            faculty
                                            members
                                            from
                                            the College
                                            of
                                            Education to review INTEREDU™. <br/>
                                            The committee based their evaluation of the scientific content in
                                            training
                                            programs,
                                            methods of
                                            training
                                            and training activities on international standards and came to the
                                            following
                                            conclusion: <br/>
                                            <br/>
                                            The scientific content is modern, linked to the targeted
                                            competencies,
                                            easy to
                                            comprehend,
                                            compatible
                                            with the current
                                        </div>

                                    </div>


                                    <button onClick={handleNavigate}
                                            className='border border-[#58AEDD] px-10 py-3 rounded-lg  mx-auto text-[#58AEDD] font-extrabold  text-base m-5  '>

                                        Read more
                                    </button>


                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </div>


        </>
    );
};

export default Students;