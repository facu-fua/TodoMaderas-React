import './App.css';
import NavTodoMaderas from './components/navbar/index.jsx';
import ItemListContainer from './containers/itemListContainer.jsx';
import Footer from './components/footer';
import ProductListContainer from './containers/productListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';



function App() {
    return (
        <div className="App">
            <header>
                <NavTodoMaderas />
                <ItemListContainer greeting="Bienvenidos a TodoMaderas" />
            </header>
            <div className='body'>
                {/* <ProductListContainer/> */}
                <ItemDetailContainer/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
