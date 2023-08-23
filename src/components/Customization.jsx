import CustomizationScreen from '../images/customization-screen.png';
import createViews from '../images/create-views.png';

const Customization = () => {
    return (
        <div className="px-5 py-10">
            <div>
                <div className="w-1/2 mx-auto text-center ultra-xs:w-full xxs:w-full xs:w-4/5 xs:mx-auto sm:w-4/5 sm:mx-auto">
                    <h1 className="text-4xl font-bold text-slate-800 ultra-xs:text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl">Make it infinitely yours</h1>
                    <p className="w-1/2 mx-auto mt-7 font-normal text-slate-600 ultra-xs:w-4/5 xxs:w-4/5 xs:w-full sm:w-full">Your way of working shouldn’t depend
                        on your tools, you can set up Nexus to
                        match your unique needs.</p>
                </div>

                <div className="mx-5 mt-4 flex ultra-xs:flex-col xxs:flex-col xs:flex-col sm:flex-col">
                    <div className="w-1/2 ultra-xs:w-full ultra-xs:text-center xxs:w-full xxs:text-center xs:w-full xs:text-center sm:w-full sm:text-center">
                        <div className='my-28 ultra-xs:my-14 xxs:my-14 xs:my-14 sm:my-14'>
                            <p className='text-slate-800 font-bold text-2xl'>Customize your data model</p>
                            <p className='w-3/4 text-slate-600 mt-4 ultra-xs:text-justify ultra-xs:w-full xxs:text-justify xxs:w-full xs:text-justify xs:w-full sm:text-justify sm:w-full'>Nexus's atomic unit is a natively collaborative doc. Docs are organized
                                into doc types, which you can customize without limits. For each doc type, 
                                define your own <span className=' bg-yellow-400 rounded-md px-1 font-semibold'>Terminology</span>, <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Properties</span>, <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Hierarchy rules</span>,
                                <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Workflows</span>, and <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Content templates</span>. Doc types can be seen as flexible databases with 
                                shared properties, hierarchical relationships, and integrated workflows.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 ultra-xs:w-full xxs:w-full xs:w-full sm:w-full">
                        <div className='my-14 ultra-xs:my-7 xxs:my-7'>
                            <img src={ CustomizationScreen } alt="CustomizationScreen" />
                        </div>
                    </div>
                </div>

                <div className="mx-5 mt-4 flex ultra-xs:flex-col-reverse xxs:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse">
                    <div className='w-1/2 mx-auto ultra-xs:w-full xxs:w-full xs:w-full sm:w-full'>
                        <img className='mx-auto' src={ createViews } alt="createViews" />
                    </div>
                    <div className='w-1/2 ultra-xs:w-full ultra-xs:text-center xxs:w-full xxs:text-center xs:w-full xs:text-center sm:w-full sm:text-center'>
                        <div className=' my-40 ml-14 ultra-xs:my-10 ultra-xs:ml-0 xxs:my-10 xxs:ml-0 xs:my-10 xs:ml-0 sm:my-10 sm:ml-0'>
                            <p className='text-slate-800 font-bold text-2xl'>Create your own views</p>
                            <p className='w-3/4 text-slate-600 mt-4 ultra-xs:text-justify ultra-xs:w-full xxs:text-justify xxs:w-full xs:text-justify xs:w-full sm:text-justify sm:w-full'>Create filtered views of your Nexus docs with 
                            a set of powerful building blocks: <span className=' bg-yellow-400 rounded-md px-1 font-semibold'>Doc types</span>, <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Kanban boards</span>, <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Lists</span>,
                                <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Groups</span>, <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Swimlanes</span>, and <span className='font-semibold text-slate-700 bg-slate-300 px-1 rounded-md'>Filters</span>. You can iterate on your processes by
                                simply adding and editing these blocks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customization;