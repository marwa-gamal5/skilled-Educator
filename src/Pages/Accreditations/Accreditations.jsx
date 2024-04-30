
import  bg from '../../assets/Accreditationsbg.jpg'
import image from '../../assets/Accreditations.png'
const Accreditations = () => {
    return (
        <>
            <img src={bg} alt='image' className='w-full md:mt-0 mt-14'/>
            <div className='lg:grid lg:grid-cols-3 lg:p-20  py-5  ' >
                <div className='flex items-center justify-center mx-4' >
                    <img src={image} alt='image'/>
                </div>

                <div className='col-span-2 p-20 '>
                    <div className='font-semibold  lg:text-[40px] text-[25px] '>
                        Electronic credits and professional acknowledgments.
                    </div>
                    <div className='font-medium lg:text-lg text-[16px] mt-5'>And he avoids feeling happiness, but thanks to those people
                        who do not realize that happiness must be felt more rationally and logically, they expose
                        themselves to facing painful circumstances. I repeat that no one desires love and fulfillment
                        and delights in pain. Pain is pain, but as a result of certain circumstances, happiness may lie
                        in what we endure of toil and sorrow. A vivid example of this, who among us has not endured
                        strenuous physical effort for the sake of gaining an advantage or benefit?
                        But who has the right to criticize someone who wanted to feel unadulterated happiness
                    </div>
                </div>
            </div>

        </>
    );
};

export default Accreditations;