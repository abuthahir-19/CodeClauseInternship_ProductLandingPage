import './App.css';
import { Navbar, 
        MainPage, 
        Customers,
        Product, 
        CustomersInsights, 
        Features, 
        Personalization, 
        Customization
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
        </div>
    );
}

export default App;
