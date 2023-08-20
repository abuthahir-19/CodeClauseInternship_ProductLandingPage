import './App.css';
import { Navbar, MainPage, Customers, Product, CustomersInsights, Features } from './components';

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainPage />
            <Customers />
            <Product />
            <CustomersInsights />
            <Features />
        </div>
    );
}

export default App;
