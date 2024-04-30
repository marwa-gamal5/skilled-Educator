// CustomLoader.jsx


import './CustomLoader.css';
import logo from '../assets/PNG SE Logo .png'
const CustomLoader = () => {
    return (
        <div className="custom-loader flex flex-col items-center justify-center  ">
            <div ><img src={logo} className='w-[100px] h-[100px]  '/></div>

            <div className="loadingio-spinner-spinner-977el9wwy2v">
                <div className="ldio-4j5ay0xf86g">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default CustomLoader;
