import './App.css';
import { Navbar, 
        MainPage, 
        Customers,
        Product, 
        CustomersInsights, 
        Features, 
        Personalization, 
        Customization,
        Additional,
        Footer
} from './components';
import ResponsiveNav from './components/ResponsiveNav';

function App() {
    return (
        <div className="App relative">
            <Navbar />
            <ResponsiveNav />
            <MainPage />
            <Customers />
            <Product />
            {/*<CustomersInsights />
            <Features />
            <Personalization />
            <Customization />
            <Additional />
            <Footer /> */}
        </div>
    );
}

export default App;
