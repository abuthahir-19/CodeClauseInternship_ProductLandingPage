import './App.css';
import Customers from './components/Customers';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainPage />
            <Customers />
            <Product />
        </div>
    );
}

export default App;
