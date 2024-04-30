import bg from '../../assets/room.jpg'
import image from '../../assets/TellDetails2.png'
import {useNavigate} from "react-router-dom";

const StudentsReadmore = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Students');
    };

    return (
     <>
         <div>
             <img className='w-full md:mt-0 mt-10' src={bg} alt='image' />

             <div className='bg-[#eaf5fd]'>
                 <div className=' flex items-center justify-center mt-[-26%] md:mx-14 mx-28   ' >
                 <img className='border-8 border-white rounded-xl md:w-[798px] md:h-[582px]'  src={image} alt='image'/></div>

             <div>
                 <div className='text-[#235384] md:text-4xl text-2xl font-semibold text-center  mt-14'>Unveiling the Enigmatic Cryp Chronicles:<br/>
                     A Journey into Fictitious Realms
                 </div>
                 <div className='container mx-auto items-center pt-10  mb-[200px] text-[#667085] font-bold  md:text-[28px] text-[18px] px-5 '>
                     "Cultivating the Leaders of Tomorrow: An Extensive Exploration of Diploma Education's Far-Reaching Influence on Individual Empowerment, Socioeconomic Mobility, and Global Competitiveness, Unraveling its Intricate Tapestry of Experiential Learning, Skill Acquisition, and Ethical Development, While Probing its Nuanced Interplay with Technological Advancements, Cultural Diversity, and Sustainable Development Goals in the Complex Fabric of the Modern Educational Paradigm""Unlocking Potential: A Comprehensive Examination of Diploma Education's Multifaceted Impact on Personal Growth, Professional Development, and Societal Progress, Delving into its Role as a Catalyst for Innovation, Equity, and Global Competitiveness in the Contemporary Educational Landscape"
                 </div>
             </div>
                 <div className='flex items-center justify-center pb-[100px]'>
                     <button onClick={handleNavigate} className='bg-[#58AEDD] text-white rounded-xl px-[45px] py-[10px]'>Return</button>
                 </div>
             </div>
         </div>
     </>
    );
};

export default StudentsReadmore;