import customerContext from '../images/div.prd-visual-wrapper.png'
import darkModeScreen from '../images/dark-mode-screen.png';
import contentTemplate from '../images/div.prd-visual-wrapper (1).png';
import customPropScreen from '../images/custom-prop-screen.png';

const Features = () => {
    return (
        <div className="w-full relative mt-16 mb-24">
            <div className="relative top-0 w-1/3 text-center mx-auto">
                <h1 className="text-4xl font-bold">Write and organize your PRDs</h1>
                <p className="font-normal text-slate-700 mt-8">All of your customer context, all in your
                    PRDs. No split screen, no tool switching; it's all here.
                </p>
            </div>

            <div className="mx-10 mt-10">
                <div className="mx-8 mt-10 flex">
                    <div className="w-[35%]">
                        <div className="p-10">
                            <h1 className="font-bold text-lg text-center text-slate-800">Customer Context</h1>
                            <p className="font-normal text-slate-600 text-center">Open a product initiative and use the insights pannel on the right to empathize</p>
                        </div>
                        <div className='p-0'>
                            <img src={customerContext} alt="CustomerContext" />
                        </div>
                    </div>
                    <div className="w-[65%]">
                        <div className='w-1/2 py-10 px-5 mx-auto'>
                            <h1 className="font-bold text-lg text-center text-slate-800">Delightfull writing experience</h1>
                            <p className="font-normal text-slate-600 text-center">Enjoy writing product specs with Nexus's full-fledged real-time editor, built for speed and delight.</p>
                        </div>
                        <div className='px-2'>
                            <img className='mx-auto' src={darkModeScreen} alt="darkModeScreen" />
                        </div>
                    </div>
                </div>

                <div className="mx-8 mt-10 flex">
                    <div className="w-[65%]">
                        <div className="w-1/2 py-10 px-5 mx-auto p-10">
                            <h1 className="font-bold text-lg text-center text-slate-800">Content templates</h1>
                            <p className="font-normal text-slate-600 text-center">Content templates help you pre-fill PRDs with the structure and formatting you want.</p>
                        </div>
                        <div className='px-2'>
                            <img src={contentTemplate} alt="CustomerContext" />
                        </div>
                    </div>
                    <div className="w-[35%]">
                        <div className='p-10'>
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