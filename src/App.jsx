import './App.css';
import NavTodoMaderas from './components/navbar/index.jsx';
import ItemListContainer from './containers/itemListContainer.jsx';
import Footer from './components/footer';
import ProductListContainer from './containers/productListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <NavTodoMaderas />
                    <ItemListContainer greeting="Bienvenidos a TodoMaderas" />
                </header>
                <div className='body'>
                    <Routes>
                        <Route path="/category/:categoryId" element={<ProductListContainer />} />
                        <Route path="/" element={<ProductListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
