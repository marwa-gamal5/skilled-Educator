import bg from '../../assets/AnnualReports.jpg';

const Portal = () => {
    return (
        <>
        <div>
        <div className='relative'>
            <img src={bg} className='w-full md:mt-0 mt-14' alt='image' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-white text-4xl font-bold'>Annual Reports</h1>
            </div>
        </div>


        </div>

        </>
    );
};

export default Portal;
