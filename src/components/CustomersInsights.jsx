import Inbox from '../images/Inbox.png';
import feedbackCapture from '../icons/feedback-capture.svg';
import productInsights from '../icons/product-insights.svg';
import inboxDesign from '../images/inbox-design-feature.png';

const CustomersInsights = () => {
    return (
        <div className="my-14 mx-12">
            <div className="flex gap-2 relative">
                <div className='w-1/2 px-5 py-14 '>
                    <h1 className="text-4xl font-bold text-slate-800 w-3/4 text-left">Capture feedback from many sources</h1>
                    <p className="w-1/2 text-left mt-5 text-slate-700">All of your feedback, all in one place.
                        User interviews, NPS surveys... Bring them
                        all into Nexus.
                    </p>

                    <div className='mt-20'>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 border-2 border-slate-300'>Bring it all in your inbox</p>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Customize feedback form</p>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Capture with context</p>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Document rich user interviews</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={Inbox} alt="InboxScreen" />
                </div>
                <div className='absolute -top-16 right-0'>
                    <img src={feedbackCapture} alt="feedBackCapture" />
                </div>
            </div>
            <div className="flex flex-row-reverse gap-2 relative mt-16">
                <div className='w-1/2 px-5 pt-14 '>
                    <h1 className="text-4xl font-bold text-slate-800 w-3/4 text-left">Extract product insights in your inbox</h1>
                    <p className="w-1/2 text-left mt-5 text-slate-700 font-normal">
                        Fly through your feedback with intuitive keyboard
                        shortcuts, extract product insights and get to Inbox
                        zero in no time.
                    </p>

                    <div className='mt-32'>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2 border-2 border-slate-300'>Split inbox into views</p>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Get to inbox zero</p>
                        <p className='text-slate-500 text-xl font-medium p-3 cursor-pointer shadow-effect rounded-md m-2'>Extract insights from feedback</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={inboxDesign} alt="InboxScreen" />
                </div>
                <div className='absolute -top-14 left-0'>
                    <img src={productInsights} alt="feedBackCapture" />
                </div>
            </div>
        </div>
    );
};

export default CustomersInsights;