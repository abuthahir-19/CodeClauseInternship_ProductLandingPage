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

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainPage />
            <Customers />
            <Product />
            <CustomersInsights />
            <Features />
            <Personalization />
            <Customization />
            <Additional />
            <Footer />
        </div>
    );
}

export default App;
