import { useState } from 'react';
import logo1 from '../../assets/AboutPage/logo1.png';
import logo2 from '../../assets/AboutPage/logo2.png';
import logo3 from '../../assets/AboutPage/logo3.png';
import logo4 from '../../assets/AboutPage/logo4.png';
import  image from '../../assets/AboutPage/AU1.jpg'
const SectionOne = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <>

            <div className='h-[900px] flex flex-col justify-center items-center' style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
                <div className=' grid lg:grid-cols-4 grid-cols-2 justify-center items-center sm:gap-10 gap-5 '>
                    <a href='https://arrowad.sa/'  target="_blank" >
                        <div
                            className={`sm:w-[220px] sm:h-[191px] w-[160px] h-[131px]  rounded-[48px] border-2 border-white bg-[#B8E1F399] bg-opacity-60 flex justify-center items-center ${hoveredImage && hoveredImage !== 1 && 'filter blur-[1px]'}`}
                            onMouseEnter={() => setHoveredImage(1)}
                            onMouseLeave={() => setHoveredImage(null)}>

                            <img src={logo1} alt={logo1}
                                 className='hover:scale-[1.08] w-[90px] h-[90px] sm:h-[120px] sm:w-[120px] '/>
                        </div>
                    </a>
                    <a href='https://jad-edu.com ' target="_blank"  >
                        <div className={`sm:w-[220px] sm:h-[191px] w-[160px] h-[131px]  rounded-[48px] border-2 border-white bg-[#B8E1F399] bg-opacity-60 flex justify-center items-center ${hoveredImage && hoveredImage !== 2 && 'filter blur-[1px]'}`}
                            onMouseEnter={() => setHoveredImage(2)}
                            onMouseLeave={() => setHoveredImage(null)}
                        ><img src={logo2} alt={logo2}
                              className='hover:scale-[1.08] w-[90px] h-[90px] sm:h-[120px] sm:w-[120px]'/>

                        </div>
                    </a>

                        <a href='https://www.ju.edu.jo/Home.aspx' target="_blank"  >
                            <div
                                className={`sm:w-[220px] sm:h-[191px] w-[160px] h-[131px]   rounded-[48px] border-2 border-white bg-[#B8E1F399] bg-opacity-60 flex justify-center items-center ${hoveredImage && hoveredImage !== 3 && 'filter blur-[1px]'}`}
                                onMouseEnter={() => setHoveredImage(3)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <img src={logo3} alt={logo3}
                                     className='hover:scale-[1.08] w-[90px] h-[90px] sm:h-[120px] sm:w-[120px] '/>
                            </div>
                        </a>


                        <a href='https://www.ksu.edu.sa/' target="_blank"  >
                            <div
                                className={`sm:w-[220px] sm:h-[191px] w-[160px] h-[131px]   rounded-[48px] border-2 border-white bg-[#B8E1F399] bg-opacity-60 flex justify-center items-center ${hoveredImage && hoveredImage !== 4 && 'filter blur-[1px]'}`}
                                onMouseEnter={() => setHoveredImage(4)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <img src={logo4} alt={logo4}
                                     className='hover:scale-[1.08] w-[90px] h-[90px] sm:h-[120px] sm:w-[120px] '/>
                            </div>
                        </a>
                </div>


                <div className='mt-10 sm:text-5xl text-white font-bold text-3xl '>
                    About Partners
                </div>
            </div>


        </>
    );
};

export default SectionOne;
