import Inbox from '../images/Inbox.png';
import feedbackCapture from '../icons/feedback-capture.svg';
import productInsights from '../icons/product-insights.svg';
import inboxDesign from '../images/inbox-design-feature.png';

const CustomersInsights = () => {
    return (
        <div className="my-14 mx-12 xxs:mx-5 ultra-xs:mx-0">
            <div className="flex gap-2 relative md:flex-col md:items-center sm:flex-col sm:items-center xs:flex-col xs:items-center xxs:flex-col xxs:items-center ultra-xs:flex-col ultra-xs:items-center">
                <div className='w-1/2 px-5 py-14 md:w-3/4 xs:w-full xxs:w-full ultra-xs:w-full sm:w-full'>
                    <h1 className="text-4xl font-bold text-slate-800 w-3/4 text-left lg:text-3xl md:text-3xl md:text-center md:mx-auto sm:text-3xl sm:mx-auto sm:text-center xs:text-2xl xs:w-4/5 xs:mx-auto xs:text-center xxs:text-2xl xxs:w-4/5 xxs:text-center xxs:mx-auto ultra-xs:text-2xl ultra-xs:w-full ultra-xs:text-center">Capture feedback from many sources</h1>
                    <p className="w-2/3 text-left mt-5 text-slate-700 ultra-xs:w-full ultra-xs:text-center xxs:text-center xxs:w-full xs:text-center xs:w-full sm:text-center sm:w-4/5 sm:mx-auto md:w-4/5 md:mx-auto md:text-center lg:w-3/4">All of your feedback, all in one place.
                        User interviews, NPS surveys... Bring them
                        all into Nexus.
                    </p>

                    <div className='mt-20 text-xl lg:text-lg ultra-xs:text-base xxs:text-base xs:text-lg sm:text-lg'>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 border-2 border-slate-300'>Bring it all in your inbox</p>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 '>Customize feedback form</p>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 '>Capture with context</p>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 '>Document rich user interviews</p>
                    </div>
                </div>
                <div className='w-1/2 lg:w-3/4 ultra-xs:w-full xxs:w-full xs:w-4/5 sm:w-4/5 md:w-4/5'>
                    <img src={Inbox} alt="InboxScreen" />
                </div>
                <div className='absolute -top-16 right-0'>
                    <img className='ultra-xs:w-[90px] ultra-xs:h-[90px] xxs:w-[90px] xxs:h-[90px] xs:w-[90px] xs:h-[90px] sm:w-[90px] sm:h-[90px] md:w-[90px] md:h-[90px]' src={feedbackCapture} alt="feedBackCapture" />
                </div>
            </div>
            <div className="flex flex-row-reverse gap-2 relative mt-16 md:flex-col md:items-center sm:flex-col sm:items-center xs:flex-col xs:items-center ultra-xs:flex-col ultra-xs:items-center xxs:flex-col xxs:items-center">
                <div className='w-1/2 px-5 pt-14 md:w-3/4 ultra-xs:w-full xxs:w-full xs:w-full sm:w-full'>
                    <h1 className="text-4xl font-bold text-slate-800 w-3/4 text-left lg:text-3xl ultra-xs:text-2xl ultra-xs:w-full ultra-xs:text-center xxs:text-2xl xxs:w-4/5 xxs:text-center xxs:mx-auto xs:text-2xl xs:w-4/5 xs:mx-auto xs:text-center sm:text-3xl sm:mx-auto sm:text-center md:text-3xl md:text-center md:mx-auto lg:w-4/5">Extract product insights in your inbox</h1>
                    <p className="w-2/3 text-left mt-5 text-slate-700 font-normal ultra-xs:w-full ultra-xs:text-center xxs:w-full xxs:text-center xs:text-center xs:w-full sm:text-center sm:w-4/5 sm:mx-auto md:w-4/5 md:mx-auto md:text-center lg:w-3/4">
                        Fly through your feedback with intuitive keyboard
                        shortcuts, extract product insights and get to Inbox
                        zero in no time.
                    </p>

                    <div className='mt-32 lg:text-lg ultra-xs:text-base xxs:text-base xs:text-lg sm:text-lg'>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 border-2 border-slate-300'>Split inbox into views</p>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Get to inbox zero</p>
                        <p className='text-slate-500 font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Extract insights from feedback</p>
                    </div>
                </div>
                <div className='w-1/2 lg:w-3/4 md:w-4/5 ultra-xs:w-full xxs:w-full xs:w-4/5 sm:w-4/5'>
                    <img src={inboxDesign} alt="InboxScreen" />
                </div>
                <div className='absolute -top-14 left-0'>
                    <img className='ultra-xs:w-[90px] ultra-xs:h-[90px] xxs:w-[90px] xxs:h-[90px] xs:w-[90px] xs:h-[90px] sm:w-[90px] sm:h-[90px] md:w-[90px] md:h-[90px]' src={productInsights} alt="feedBackCapture" />
                </div>
            </div>
        </div>
    );
};

export default CustomersInsights;