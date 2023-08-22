import './App.css';
import { Navbar, 
        MainPage, 
        Customers,
        Product, 
        CustomersInsights, 
        Features, 
        Personalization, 
        Customization,
        Additional
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
        </div>
    );
}

export default App;
