import  bg from '../../assets/room.jpg'
import image from '../../assets/events2.png'
import './Library.css'
import { initializeSlider } from '../../file.js';
import {useEffect} from "react";
const Library = () => {
    useEffect(() => {
        initializeSlider();
    }, []);
    return (
        <>
            <div>
                <div className='relative'>
                    <img src={bg} className='w-full md:mt-0 mt-14' alt='image'/>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <h1 className='text-white text-4xl font-bold'>Articles</h1>
                    </div>


                </div>
                <div>
                    <>

                        <div className="slider">
                            <div className="list">
                                <div className="item">
                                    <img src={image} alt=""/>
                                    <div className="content">
                                        <div className="title">MAGIC SLIDER</div>
                                        <div className="type">FLOWER</div>
                                        <div className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                            temporibus quis eum consequuntur voluptate quae doloribus
                                            distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sequi, aut.
                                        </div>
                                        <div className="button">
                                            <button>SEE MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={image} alt=""/>
                                    <div className="content">
                                        <div className="title">MAGIC SLIDER</div>
                                        <div className="type">NATURE</div>
                                        <div className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                            temporibus quis eum consequuntur voluptate quae doloribus
                                            distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sequi, aut.
                                        </div>
                                        <div className="button">
                                            <button>SEE MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={image} alt=""/>
                                    <div className="content">
                                        <div className="title">MAGIC SLIDER</div>
                                        <div className="type">PLANT</div>
                                        <div className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                            temporibus quis eum consequuntur voluptate quae doloribus
                                            distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sequi, aut.
                                        </div>
                                        <div className="button">
                                            <button>SEE MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={image} alt=""/>
                                    <div className="content">
                                        <div className="title">MAGIC SLIDER</div>
                                        <div className="type">NATURE</div>
                                        <div className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                                            temporibus quis eum consequuntur voluptate quae doloribus
                                            distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sequi, aut.
                                        </div>
                                        <div className="button">
                                            <button>SEE MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="thumbnail">
                                <div className="item">
                                    <img src={image} alt=""/>
                                </div>
                                <div className="item">
                                    <img src={image} alt=""/>
                                </div>
                                <div className="item">
                                    <img src={image} alt=""/>
                                </div>
                                <div className="item">
                                    <img src={image} alt=""/>
                                </div>
                            </div>
                            <div className="nextPrevArrows">
                                <button className="prev"> &lt; </button>
                                <button className="next"> &gt; </button>
                            </div>
                        </div>
                    </>

                </div>
            </div>
        </>
    );
};

export default Library;