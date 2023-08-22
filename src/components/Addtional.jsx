import imgIllustration from '../images/image-illustion.png';
import { AiOutlinePlus } from 'react-icons/ai';
import quickReviews from '../icons/quick-review.svg';
import green from '../icons/green-arrow.svg';
import yellow from '../icons/yellow-arrow.svg';
import blue from '../icons/blue-arrow.svg';

const Additional = () => {
    return (
        <div className="px-5 py-10">
            <div>
                <div className="w-3/4 mx-auto flex flex-col justify-center">
                    <div className="w-1/2 mx-auto text-center">
                        <h1 className="text-4xl font-bold text-slate-800">And there's even more...</h1>
                        <p className="font-normal text-slate-600 w-2/3 mt-5 text-center mx-auto">Nexus is full of delightful details that will make you enjoy the ride.</p>
                    </div>

                    <div className="border-2 border-slate-200 rounded-2xl flex items-center p-9 mt-16">
                        <div className="w-[30%] relative">
                            <div className="relative -bottom-6 w-3/4">
                                <h1 className="text-xl font-bold text-slate-800">Cover pictures</h1>
                                <p className="text-slate-600 font-normal mt-4">Drag & drop images or GIFs to create
                                    beautiful cover pictures.
                                </p>
                            </div>
                        </div>
                        <div className=" w-[70%] flex items-center">
                            <div>
                                <img className='w-4/5 h-4/5' src={imgIllustration} alt="ImageIllustration" />
                            </div>
                            <div className='flex justify-center w-[90%] items-center p-10 border-2 border-dashed rounded-2xl border-slate-200 text-4xl'>
                                    <AiOutlinePlus className='text-slate-400' />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mt-5'>
                        <div className='flex flex-col border-2 border-slate-200 rounded-xl p-2 w-[25%]'>
                            <img src={ quickReviews } alt="QuickReviews" />
                            <div>
                                <h1 className='text-lg text-slate-800 font-bold'>Quick previews</h1>
                                <p className='text-slate-600 font-normal'>Hold shift + space to quickly preview docs from anywhere</p>
                            </div>
                        </div>
                        <div className='flex border-2 border-slate-200 rounded-xl w-[75%]'>
                            <div className='w-1/2 h-[191px] p-2 relative'>
                                <div className='absolute top-0 left-10 w-[90px] h-[90px]'>
                                    <img src={ green } alt="green-arrow" />
                                </div>
                                <div className='absolute -bottom-6 left-10 w-[90px] h-[90px]'>
                                    <img src={ blue } alt="yellow-arrow" />
                                </div>
                                <div className='absolute top-10 right-10 w-[90px] h-[90px]'>
                                    <img  src={ yellow } alt="blue-arrow" />
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='w-7/12 mx-auto mt-3'>
                                    <h1 className='text-3xl text-slate-800 font-bold'>Real-time collaboration</h1>
                                    <p className='text-slate-600 font-normal'>Work together in real-time and easily join your teammates by clicking on thier avatars</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Additional;