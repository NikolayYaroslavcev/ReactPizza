import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import {PleaseHolder} from "../components/Block/PleaseHolder";
import {Pizza} from "../components/Block/Pizza/Pizza";

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://6342d723ba4478d478437908.mockapi.io/items').then(res => {
            // Это метод переводчик с бэка на front .json()
            return res.json()
        }).then((arr) => {
            // .then((arr) здесь возвращается массив пицц
            setItems(arr)
            setLoading(false)
        })
        /// это нужно для авто скролла вверх при переходе с корзины на главную window.scrollTo(0,0)
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ?
                        [...new Array(6)].map((_, index) => <PleaseHolder key={index}/>) : items.map((obj) => <Pizza
                            key={obj.id}{...obj}/>)}
                </div>
            </div>
        </>
    );
};

export default Home;