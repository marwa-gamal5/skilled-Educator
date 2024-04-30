import  bg from '../../assets/room.jpg'
// import image1 from '../../assets/events2.png'
// import image2 from '../../assets/TellDetails2.png'
// import image3 from '../../assets/events1.png'
// import image4 from '../../assets/events3.png'
// import image5 from '../../assets/StudentsTestimonials1.png'
// import './Library.css'
// import { initializeSlider } from '../../file.js';
// import {useEffect} from "react";
const Library = () => {
    // useEffect(() => {
    //     initializeSlider();
    // }, []);
    return (
        <>
            <div>
                <div className='relative'>
                    <img src={bg} className='w-full md:mt-0 mt-14' alt='image'/>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <h1 className='text-white text-4xl font-bold'>Articles</h1>
                    </div>


                </div>
                {/*<div>*/}
                {/*    <div className='cc'>*/}
                {/*        <div className='slider'>*/}
                {/*            <div className='slides' style={{backgroundImage: `url(${image1})`}}>*/}
                {/*                <div className='content'></div>*/}

                {/*            </div>*/}
                {/*            <div className='slides' style={{backgroundImage: `url(${image2})`}}>*/}
                {/*                <div className='content'></div>*/}

                {/*            </div>*/}
                {/*            <div className='slides' style={{backgroundImage: `url(${image3})`}}>*/}
                {/*                <div className='content'></div>*/}

                {/*            </div>*/}
                {/*            <div className='slides' style={{backgroundImage: `url(${image4})`}}>*/}
                {/*                <div className='content'></div>*/}

                {/*            </div>*/}
                {/*            <div className='slides' style={{backgroundImage: `url(${image5})`}}>*/}
                {/*                <div className='content'></div>*/}

                {/*            </div>*/}
                {/*            <div className='slides' style={{backgroundImage: `url(${image5})`}}>*/}
                {/*                <div className='content'></div>*/}

                {/*            </div>*/}

                {/*        </div>*/}
                {/*        <div className='buttons'>*/}
                {/*            <span className='prev'></span>*/}
                {/*            <span className='next'></span>*/}
                {/*        </div>*/}


                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </>
    );
};

export default Library;