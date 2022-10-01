import './App.css';
import NavTodoMaderas from './components/navbar/navbar.jsx';
import ItemListContainer from './containers/itemListContainer.jsx';
import Footer from './components/footer/footer';
import ProductListContainer from './containers/productListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/nosotros/nosotros';
import Carrito from './components/carrito/carrito';
import { CartContextProvider } from './context/cartContext'
import { ProductosProvider } from './context/productosContext'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CartContextProvider>
                    <header>
                        <NavTodoMaderas />
                        <ItemListContainer greeting="Bienvenidos a TodoMaderas" />
                    </header>
                    <div className='body'>
                        <ProductosProvider>
                            <Routes>
                                <Route path="/category/:categoryId" element={<ProductListContainer />} />
                                <Route path="/" element={<ProductListContainer />} />
                                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                                <Route path="/nosotros" element={<Nosotros />} />
                                <Route path="/cart" element={<Carrito />} />
                            </Routes>
                        </ProductosProvider>
                        <Footer />
                    </div>
                </CartContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
