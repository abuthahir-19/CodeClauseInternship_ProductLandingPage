import customerContext from '../images/div.prd-visual-wrapper.png'
import darkModeScreen from '../images/dark-mode-screen.png';
import contentTemplate from '../images/div.prd-visual-wrapper (1).png';
import customPropScreen from '../images/custom-prop-screen.png';

const Features = () => {
    return (
        <div className="w-full relative mt-16 mb-24">
            <div className="relative top-0 w-1/3 text-center mx-auto ultra-xs:w-full ultra-xs:px-5 xxs:w-full xs:w-full sm:w-3/4 md:w-1/2">
                <h1 className="text-slate-800 text-4xl font-bold ultra-xs:text-3xl">Write and organize your PRDs</h1>
                <p className="font-normal text-slate-700 mt-8 xs:w-4/5 xs:mx-auto xs:text-center sm:w-3/4 sm:mx-auto sm:text-center">All of your customer context, all in your
                    PRDs. No split screen, no tool switching; it's all here.
                </p>
            </div>

            <div className="mx-10 mt-10 ultra-xs:mx-0">
                <div className="mx-8 mt-10 flex ultra-xs:flex-col ultra-xs:mx-2 xxs:flex-col xxs:mx-2 xs:flex-col xs:mx-2 sm:flex-col sm:mx-2 md:flex-col md:mx-2">
                    <div className="w-[35%] ultra-xs:w-full xxs:w-full xs:w-full sm:w-4/5 sm:mx-auto md:w-4/5 md:mx-auto">
                        <div className="p-10 ultra-xs:px-0 xxs:px-0">
                            <h1 className="font-bold text-lg text-center text-slate-800">Customer Context</h1>
                            <p className="font-normal text-slate-600 text-center">Open a product initiative and use the insights pannel on the right to empathize</p>
                        </div>
                        <div className='p-0'>
                            <img src={customerContext} alt="CustomerContext" />
                        </div>
                    </div>
                    <div className="w-[65%] ultra-xs:w-full xxs:w-full xs:w-full sm:w-4/5 sm:mx-auto md:w-4/5 md:mx-auto">
                        <div className='w-1/2 py-10 px-5 mx-auto ultra-xs:w-full xxs:w-full ultra-xs:px-0 xxs:px-0 xs:w-full sm:w-full md:w-full'>
                            <h1 className="font-bold text-lg text-center text-slate-800">Delightfull writing experience</h1>
                            <p className="font-normal text-slate-600 text-center">Enjoy writing product specs with Nexus's full-fledged real-time editor, built for speed and delight.</p>
                        </div>
                        <div className='px-2'>
                            <img className='mx-auto' src={darkModeScreen} alt="darkModeScreen" />
                        </div>
                    </div>
                </div>

                <div className="mx-8 mt-10 flex ultra-xs:flex-col ultra-xs:mx-2 xxs:flex-col xxs:mx-2 xs:flex-col xs:mx-2 sm:flex-col sm:mx-2 md:flex-col md:mx-2">
                    <div className="w-[65%] ultra-xs:w-full xxs:w-full xs:w-full sm:w-4/5 sm:mx-auto md:w-4/5 md:mx-auto">
                        <div className="w-1/2 py-10 px-5 mx-auto p-10 ultra-xs:w-full ultra-xs:px-0 xxs:w-full xxs:px-0 xs:w-full xs:px-0 sm:w-full sm:px-0 md:w-full">
                            <h1 className="font-bold text-lg text-center text-slate-800">Content templates</h1>
                            <p className="font-normal text-slate-600 text-center">Content templates help you pre-fill PRDs with the structure and formatting you want.</p>
                        </div>
                        <div className='px-2'>
                            <img src={contentTemplate} alt="CustomerContext" />
                        </div>
                    </div>
                    <div className="w-[35%] ultra-xs:w-full xxs:w-full xs:w-full sm:w-4/5 sm:mx-auto md:w-4/5 md:mx-auto">
                        <div className='p-10 ultra-xs:px-0 xxs:px-0'>
                            <h1 className="font-bold text-lg text-center text-slate-800">Custom properties</h1>
                            <p className="font-normal text-slate-600 text-center">Add custom properties to your product initiatives. Use them to organize your roadmap.</p>
                        </div>
                        <div className='p-0'>
                            <img className='mx-auto' src={customPropScreen} alt="darkModeScreen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;