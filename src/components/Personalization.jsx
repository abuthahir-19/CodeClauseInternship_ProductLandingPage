import CloseLoopScreen from '../images/close-the-loop.png';
import CloseLoopIcon from '../icons/close-the-loop.svg';
import personalNotification from '../icons/personalized-notification.svg';
import recruitPeople from '../icons/recruit-people.svg';

const Personalization = () => {
    return (
        <div className=" bg-pink-100 text-center pt-14 pb-5 my-16">
            <div className="w-[42%] mx-auto p-5">
                <h1 className="text-4xl font-bold text-slate-800">Close the loop with customers at each release</h1>
                <p className="w-7/12 mx-auto mt-7 font-normal text-slate-600">Just shipped a cool feature? Use Nexus to get back to folks who requested it.</p>
            </div>
            <div className='flex gap-2 mt-10'>
                <div className='w-3/4'>
                    <img src={CloseLoopScreen} alt="CloseLoopScreen" />
                </div>
                <div className='pl-32'>
                    <div className='flex flex-col gap-10'>
                        <div className='w-[63%] text-left'>
                            <img src={personalNotification} alt="PersonalNotification" />
                            <p className='font-bold fontstyle text-2xl mt-5 text-slate-700'>Personal notifications</p>
                            <p className='text-slate-600 mt-3 text-lg'>Get notified in Slack or via email when there’s
                                an update on an initiative you showed interest
                                in.</p>
                        </div>
                        <div className='w-[63%] text-left'>
                            <img src={CloseLoopIcon} alt="ClosetheloopIcon" />
                            <p className='font-bold text-2xl mt-5 text-slate-700'>Close the Loop</p>
                            <p className='text-slate-600 mt-3 text-lg'>Communicatte with customers in the
                                right source and with the right message when you ship something they asked.
                            </p>
                        </div>
                        <div className='w-[63%] text-left'>
                            <img src={recruitPeople} alt="RecruitPeople" />
                            <p className='font-bold text-2xl mt-5 text-slate-700'>Recruit people for user research</p>
                            <p className='text-slate-600 mt-3 text-lg'>Reach out to the right folks when you start
                                thinking about a new feature - if they gave you feedback about it, they're likely to care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personalization;