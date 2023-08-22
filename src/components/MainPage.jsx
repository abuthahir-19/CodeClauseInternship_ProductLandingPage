const MainPage = () => {
    return (
        <div className="mx-8 mt-4 ultra-xs:mx-0">
            <div className="mx-4 mt-20 ultra-xs:mx-0">
                <h1 className=" text-5xl text-slate-800 w-1/2 font-bold text-center mx-auto ultra-xs:w-4/5 ultra-xs:text-4xl xxs:w-4/5 xxs:text-4xl xs:w-full sm:w-full md:w-4/5">Collect all your product feedback <span className="text-blue-600">in one location</span></h1>
                <div className="mt-14">
                    <p className="text-slate-700 font-normal w-1/3 text-lg mx-auto text-center ultra-xs:w-4/5 xxs:w-4/5 xs:w-full sm:w-full md:w-4/5">Nexus is the most delightful way to capture
                        feedback, extract insights, create roadmaps, and
                        communicate your releases.
                    </p>
                </div>
                <div className="w-3/4 mx-auto mt-14 ultra-xs:w-[90%] xxs:w-full xs:w-full md:w-full lg:w-full">
                    <div className="w-1/3 flex justify-between mx-auto ultra-xs:w-full xxs:w-full xs:w-4/5 sm:w-4/5 md:w-2/5 lg:w-2/5">
                        <button className="px-6 py-2 border-2 border-blue-600 bg-blue-600 rounded-md text-white">Get Started</button>
                        <button className="px-6 py-2 border-2 border-blue-600  rounded-md text-blue-600 font-medium ">Book a demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;