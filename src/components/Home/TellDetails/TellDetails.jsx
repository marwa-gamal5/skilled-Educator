import TellDetails1 from "../../../assets/TellDetails.png";
import imagee from '../../../assets/TellDetails2.png'

const TellDetails = () => {
    return (
       <>
           <div className=''>
               <div className=' inset-0 w-full  h-[100%] bg-cover' style={{backgroundImage: `url(${TellDetails1})`}}>
                   <div className='flex justify-between  md:flex-row flex-col  p-16 '>

                       <div >
                           <img alt="TellDetails1" src={imagee} className='rounded-2xl w-[100%] me-5  '/>
                       </div>
                       <div className='  md:w-[60%]  mt-10'>

                               <div className='font-medium text-lg text-center text-[#58AEDD]'>Let’s Talk</div>
                               <div className='font-semibold text-center lg:text-5xl text-2xl  mt-3'>Tell us all the details</div>
                           <div className='mt-10'>

<div className='lg:px-20 md:px-8'>
                               <form>
                                   <div className="grid gap-6 mb-6 md:grid-cols-2">
                                       <div>
                                           <label htmlFor="first_name"
                                                  className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">
                                               name</label>
                                           <input type="text" id="first_name"
                                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#58aedd] focus:border-[#58aedd] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                  placeholder="Type here..." required/>
                                       </div>

                                       <div>
                                           <label htmlFor="email"
                                                  className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">Email
                                               address</label>
                                           <input type="email" id="email"
                                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#58aedd] focus:border-[#58aedd] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                  placeholder="Type here..." required/>
                                       </div>


                                   </div>
                                   <div className="mb-6">
                                       <label htmlFor="message"
                                              className="block mb-2 text-sm font-medium text-[#235384] dark:text-white">
                                           Message</label>
                                       <textarea id="message" rows="4"
                                                 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#58aedd] focus:border-[#58aedd] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                 placeholder="Write your thoughts here..."></textarea>
                                   </div>


                                   <button type="submit"
                                           className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                                   </button>
                               </form>
                           </div>

                           </div>
                       </div>

                   </div>
               </div>
           </div>

       </>
    );
};

export default TellDetails;