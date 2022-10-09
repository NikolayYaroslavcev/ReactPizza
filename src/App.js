import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import pizzas from './assets/pizzas.json'
import {Pizza} from "./components/Pizza/Pizza";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map(obj => {
                            return (
                                <Pizza
                                    key={obj.id}
                                    imageUrl={obj.imageUrl}
                                    title={obj.title}
                                    types={obj.types}
                                    sizes={obj.sizes}
                                    price={obj.price}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
