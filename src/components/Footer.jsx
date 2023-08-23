import circle from '../images/div.fun-circle-wrapper.png';
import cube from '../images/div.fun-cube-wrapper.png';
import flip from '../images/div.fun-flip-wrapper.png';
import logo from '../icons/logo.svg';
import { FaTwitter } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="w-4/5 mx-auto mt-20 ultra-xs:w-full xxs:w-full xs:w-full sm:w-full md:w-full">
            <div className="mx-2 bg-blue-600 rounded-md py-28 text-center relative">
                <h1 className="text-3xl font-bold text-white">Try Nexus Today</h1>
                <div className="flex justify-between w-[38%] mx-auto mt-9 ultra-xs:w-3/4 ultra-xs:flex-col ultra-xs:gap-3 xxs:w-3/4 xxs:flex-col xxs:gap-3 xs:w-3/4 xs:flex-col xs:gap-3 sm:w-3/4 sm:flex-col sm:gap-3 md:w-3/4 md:flex-col md:gap-3">
                    <button className="text-blue-600 font-semibold bg-white px-5 py-2 rounded-md ultra-xs:text-sm xxs:text-sm xs:text-sm sm:text-base md:text-base">Get started for free</button>
                    <button className="text-white border-2 border-white rounded-md px-4 py-1 ultra-xs:text-sm xxs:text-sm xs:text-sm sm:text-base md:text-base">Book a demo</button>
                </div>
                <img className='absolute top-7 left-0 ultra-xs:hidden xxs:hidden xs:hidden sm:hidden md:hidden' src={circle} alt="CircleImg" />
                <img className='absolute -top-12 right-0 ultra-xs:w-[100px] ultra-xs:h-[100px] xxs:w-[100px] xxs:h-[100px] xs:w-[100px] xs:h-[100px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px]' src={cube} alt="CubeImg" />
                <img className='absolute -bottom-10 right-16 w-[70px] h-[130px] ultra-xs:w-[40px] ultra-xs:h-[90px] xxs:w-[40px] xxs:h-[80px] xs:w-[40px] xs:h-[80px] sm:w-[40px] sm:h-[80px] md:w-[40px] md:h-[80px]' src={flip} alt="FlipImg" />
            </div>
            <div className='mx-2 mt-5 pt-16 pb-8 flex gap-2 ultra-xs:flex-col xxs:flex-col xs:flex-col sm:flex-col md:flex-col'>
                <div className='flex flex-col justify-between items-start w-[35%] ultra-xs:flex-row ultra-xs:w-full xxs:flex-row xxs:w-full xs:flex-row xs:w-full sm:flex-row sm:w-full md:flex-row md:w-full'>
                    <img src={logo} alt="" />
                    <div className='flex justify-between w-1/2 text-xl mt-44 text-slate-800 ultra-xs:mt-0 xxs:mt-0 xs:mt-0 sm:mt-0 md:mt-0 md:w-1/4'>
                        <div className='p-2 border-2 border-slate-300 rounded-full' >
                            <FaTwitter />
                        </div>
                        <div className='p-2 border-2 border-slate-300 rounded-full' >
                            <TbWorldWww />
                        </div>
                        <div className='p-2 border-2 border-slate-300 rounded-full' >
                            <BiLogoLinkedin />
                        </div>
                    </div>
                </div>
                <div className='w-[65%] ultra-xs:w-full ultra-xs:mt-3 xxs:w-full xxs:mt-3 xs:w-full xs:mt-3 sm:w-full sm:mt-3 md:w-full md:mt-6'>
                    <div className='flex justify-evenly w-4/5 ultra-xs:flex-wrap ultra-xs:justify-between ultra-xs:mx-auto xxs:flex-wrap xxs:justify-between xxs:mx-auto xs:flex-wrap xs:justify-between xs:mx-auto sm:flex-wrap sm:justify-between sm:mx-auto md:flex-wrap md:justify-between md:mx-auto'>
                        <div className='w-fit m-0'>
                            <h1 className='text-lg text-slate-800 font-semibold p-2'>Explore</h1>
                            <div className='flex flex-col gap-1 p-2 text-slate-500 font-medium justify-start'>
                                <p className='cursor-pointer'>Docs</p>
                                <p className='cursor-pointer'>Integrations</p>
                                <p className='cursor-pointer'>Slack</p>
                                <p className='cursor-pointer'>Pricing</p>
                                <p className='cursor-pointer'>Changelog</p>
                                <p className='cursor-pointer'>Blog</p>
                            </div>
                        </div>
                        <div className='w-fit m-0'>
                            <h1 className='text-lg text-slate-800 font-semibold p-2'>Company</h1>
                            <div className='flex flex-col gap-1 p-2 text-slate-500 font-medium justify-start'>
                                <p className='cursor-pointer'>Manifesto</p>
                                <p className='cursor-pointer'>Press Kit</p>
                                <p className='cursor-pointer'>Status</p>
                            </div>
                        </div>
                        <div className='w-fit m-0'>
                            <h1 className='text-lg text-slate-800 font-semibold p-2'>Legal</h1>
                            <div className='flex flex-col gap-1 p-2 text-slate-500 font-medium justify-start'>
                                <p className='cursor-pointer'>Terms of Service</p>
                                <p className='cursor-pointer'>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;