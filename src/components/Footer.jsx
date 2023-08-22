import circle from '../images/div.fun-circle-wrapper.png';
import cube from '../images/div.fun-cube-wrapper.png';
import flip from '../images/div.fun-flip-wrapper.png';
import logo from '../icons/logo.svg';
import { FaTwitter } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="w-4/5 mx-auto mt-20">
            <div className="mx-2 bg-blue-600 rounded-md p-28 text-center relative">
                <h1 className="text-3xl font-bold text-white">Try Nexus Today</h1>
                <div className="flex justify-between w-[38%] mx-auto mt-9">
                    <button className="text-blue-600 font-semibold bg-white px-5 py-2 rounded-md">Get started for free</button>
                    <button className="text-white border-2 border-white rounded-md px-4 py-1">Book a demo</button>
                </div>
                <img className='absolute top-7 left-0' src={circle} alt="CircleImg" />
                <img className='absolute -top-12 right-0' src={cube} alt="CubeImg" />
                <img className='absolute -bottom-16 right-16 w-[70px] h-[130px]' src={flip} alt="FlipImg" />
            </div>
            <div className='mx-2 mt-5 pt-16 pb-8 flex gap-2'>
                <div className='flex flex-col justify-between items-start w-[35%]'>
                    <img src={logo} alt="" />
                    <div className='flex justify-between w-2/3 text-xl mt-44 text-slate-800'>
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
                <div className='w-[65%]'>
                    <div className='flex justify-evenly w-4/5'>
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