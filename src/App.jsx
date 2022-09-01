import './App.css';
import NavTodoMaderas from './components/navbar/index.jsx';
import ItemListContainer from './containers/itemListContainer.jsx';
import ItemCard from './components/card/card';
import Footer from './components/footer';
import ProductList from './components/productList/productList';
import ProductListContainer from './containers/productListContainer';



function App() {
    return (
        <div className="App">
            <header>
                <NavTodoMaderas />
                <ItemListContainer greeting="Bienvenidos a TodoMaderas" />
            </header>
            <div className='body'>
                <ProductListContainer/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
