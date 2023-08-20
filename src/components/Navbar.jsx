import Logo from '../icons/logo.svg';
import { BiSolidChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const link = 'https://google.com';

    return (
        <div className="w-[85%] mx-auto">
            <header className='flex justify-between items-center p-3'>
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
                <div className='w-1/2 flex justify-around'>
                    <div className='flex justify-around w-fit items-center cursor-pointer'>
                        <a href={link}>Product</a>
                        { <BiSolidChevronDown /> }
                    </div>
                    <a href={link}>Changelog</a>
                    <a href={link}>Manifesto</a>
                    <a href={link}>Pricing</a>
                    <div className='flex justify-around items-center cursor-pointer'>
                        <a href={link}>Resources</a>
                        { <BiSolidChevronDown /> }
                    </div>
                </div>


                <div className='flex justify-around'>
                    <button className='px-6 py-2 font-normal text-md text-slate-500 border-none outline-none bg-none'>Login</button>
                    <button className='px-6 py-2 font-medium text-md text-white bg-blue-600 rounded-lg'>Get Started</button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;