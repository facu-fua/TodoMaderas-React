import './App.css';
import NavTodoMaderas from './components/navbar/index.jsx';
import ItemListContainer from './containers/itemListContainer.jsx';
import ItemCard from './components/card/card';
import Footer from './components/footer';



function App() {
    return (
        <div className="App">
            <header>
                <NavTodoMaderas />
                <ItemListContainer greeting="Bienvenidos a TodoMaderas" />
            </header>
            <body className='body'>
                <ItemCard img="/assets/images/madera.png"/>
                <Footer/>
            </body>
        </div>
    );
}

export default App;
