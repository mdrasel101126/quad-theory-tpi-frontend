import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle,FaTwitter,FaInstagram  } from "react-icons/fa";
import footerImage from '../../assets/Image2.png';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#FFAC1C] w-full">
                <div className="max-w-[1200px] mx-auto flex flex-row pb-24">
                    <div className="w-full mx-6 md:w-3/5 rounded-xl">
                        <div className="bg-white w-full md:w-5/6 flex flex-row justify-between items-center rounded-xl mt-20" >
                            <input type="email" className="outline-none px-5 py-4  placeholder:text-slate-500 w-full rounded-xl" placeholder="Enter Your Email"/>
                            <button className="flex flex-row justify-center items-center md:bg-orange-500 pl-8 py-3 mr-2 rounded-xl"><p className="text-orange-600 md:text-white font-semibold">Subscribe</p> <span className="text-orange-600 md:text-white text-xl font-semibold px-2"><FaArrowRightLong/></span></button>
                        </div>
                        <div className="mt-16 mb:mt-32">
                            <h2 className="text-2xl font-bold hidden md:block">pti<span className="text-orange-500">.</span></h2>
                            <div className="md:flex md:flex-row md:justify-between items-center ml-1">
                                <h3 className=" font-bold hidden md:block">Copyright&copy;Tripp.All right reserved.</h3>
                                <div className="flex flex-row justify-center w-full md:w-auto gap-x-2">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white md:bg-orange-200 md:text-orange-500 flex flex-row justify-center items-center">
                                    <FaGoogle/>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white md:bg-orange-200 md:text-orange-500 flex flex-row justify-center items-center">
                                    <FaTwitter/>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white md:bg-orange-200 md:text-orange-500 flex flex-row justify-center items-center">
                                    <FaInstagram/>
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold  md:hidden text-center mt-10">pti<span className="text-orange-500">.</span></h2>
                                <h3 className="font-bold md:hidden text-center mt-6">Copyright&copy;Tripp.All right reserved.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto hidden md:block">
                        <Image src={footerImage} width={350} height={300} alt="footer-image"/>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;