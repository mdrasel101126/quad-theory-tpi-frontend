import Image from 'next/image';
import homeBannarImage from '../../../assets/Image1.png';

const HomePageBanner = () => {
    return (
        <div className="md:bg-[#FFAC1C] rounded-xl flex flex-col md:flex-row  mt-20 mx-3 relative">
            <div className="md:w-1/2 md:pl-14 md:py-14 text-center md:text-left">
                <h1 className="md:text-white text-5xl font-bold leading-[55px]">Deliver Food To Your  Door Step|</h1>
                <p className="text-lg text-slate-500 md:text-slate-200 mt-8">Authentic Food|,Quick Service,Fast Delivery</p>
            </div>
            <div className="w-full md:w-1/2 mx-auto bg-[#EC8F5E] md:bg-[#FFAC1C] rounded-xl h-56 md:h-auto relative mt-24">
                <div className='max-w-[510px] mx-auto md:w-full absolute bottom-0'>
                   <Image src={homeBannarImage} width={500} height={260} alt='home-page-bannar-image'/>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;