import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {Pizza} from "./components/Pizza/Pizza";
import {useEffect, useState} from "react";


function App() {
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('https://6342d723ba4478d478437908.mockapi.io/items').then(res => {
            // Это метод переводчик с бэка на front .json()
            return res.json()
        }).then((arr) => {
            // .then((arr) здесь возвращается массив пицц
            setItems(arr)
        })
    }, [])


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
                        {items.map(obj => {
                            return (
                                <Pizza
                                    key={obj.id}
                                    {...obj}
                                    // imageUrl={obj.imageUrl}
                                    // title={obj.title}
                                    // types={obj.types}
                                    // sizes={obj.sizes}
                                    // price={obj.price}
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
