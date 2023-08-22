import { BiSolidChevronDown } from 'react-icons/bi';
import { useStateContext } from '../context/appContext';

const ResponsiveNav = () => {
    const link = 'www.google.com';
    const { isClicked } = useStateContext();

    return (
        <div className={`bg-white w-full absolute top-13 z-10 ${ isClicked ? 'visible' : 'hidden' } transition-effect p-6`}>
            <div className='w-1/2 mx-auto flex flex-col items-center lg:hidden xl:hidden 2xl:hidden'>
                <div className='flex justify-around w-fit items-center cursor-pointer p-4'>
                    <a href={link}>Product</a>
                    {<BiSolidChevronDown />}
                </div>
                <a className='p-4' href={link}>Changelog</a>
                <a className='p-4' href={link}>Manifesto</a>
                <a className='p-4' href={link}>Pricing</a>
                <div className='flex justify-around items-center cursor-pointer p-4'>
                    <a href={link}>Resources</a>
                    {<BiSolidChevronDown />}
                </div>
            </div>


            <div className='flex flex-col items-center lg:hidden xl:hidden 2xl:hidden'>
                <button className='px-6 py-2 font-normal text-md text-slate-500 border-none outline-none bg-none'>Login</button>
                <button className='px-6 py-1 font-medium text-md text-white bg-blue-600 rounded-lg mt-4'>Get Started</button>
            </div>
        </div>
    )
};

export default ResponsiveNav;