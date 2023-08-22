import product from '../images/product-screen.png';
import airbnb from '../images/airbnb-screen.png';
import liviaCarder from '../images/live-carder.png';
import Card from './Card';
import sync from '../icons/sync-people.svg';
import fastSearch from '../icons/fast-search.svg';
import autoMerge from '../icons/auto-merge.svg';
import feedback from '../icons/link-feedback.svg';
import filterView from '../icons/filter-views.svg';
import customerProfile from '../icons/customer-profiles.svg';

const Product = () => {
    const productItems = [
        {
            logo : sync,
            title : 'Sync People & Companies',
            desc : 'All of your HubSpot, Intercom, and Slack customers, all in one place with a two way sync',
        }, 
        {
            logo : fastSearch,
            title : 'Fast search',
            desc : 'Hit cmd+K and start searching for a customer, whether it be a person or a company.',
        }, 
        {
            logo : autoMerge,
            title : 'Auto Merge',
            desc : 'Got a customer in both Intercom and HubSpot? No worries, they’re automatically merged in Nexus.',
        }, 
        {
            logo : feedback,
            title : 'Link feedback to customers',
            desc : 'Automatically fetch the right customer or create a new one in Nexus.',
        }, 
        {
            logo : filterView,
            title : 'Filter views',
            desc : 'Filter by customer or company to access summary feedback views.',
        }, 
        {
            logo : customerProfile,
            title : 'Customer profiles',
            desc : 'Each customer has a profile that aggregates their feedback and related product initiatives.',
        }, 
    ];

    return (
        <div className="my-10">
            <div className="mx-8 ultra-xs:mx-3">
                <div className="w-3/4 mx-auto text-center ultra-xs:w-full xxs:w-full xs:w-full sm:w-full">
                    <h1 className="text-slate-800 text-4xl font-bold text-center">Sync your customers</h1>
                    <p className="w-1/2 text-center mx-auto mt-4 ultra-xs:w-3/4">Turn Nexus into a CRM for your product team by bringing
                        your customers from HubSpot, Intercom, and Slack.
                    </p>
                </div>

                <div className=" bg-orange-50 rounded-md pt-8 mt-12 relative flex justify-center items-center text-center">
                    <img src={product} alt="ProductScreen" />
                    <img src={liviaCarder} alt="LiviaCarder" className='absolute -bottom-10 -left-7 w-[40%] h-[50%] ultra-xs:-bottom-3 xxs:-bottom-3 xs:-bottom-3' />
                    <img src={ airbnb } alt="Airbnb" className='absolute bottom-24 -right-3 w-[40%] h-[50%] ultra-xs:bottom-5 xxs:bottom-5 xs:bottom-5'/>
                </div>

                <div className='flex justify-evenly items-center flex-wrap p-3 mt-8 ultra-xs:p-0'>
                    { productItems &&
                        productItems.map (product => (
                            <Card key={product.title} logo={product.logo} title={product.title} desc={product.desc} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;