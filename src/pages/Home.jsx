import React, {useEffect, useState} from 'react';
import {Categories} from "../components/Categories/Categories";
import {Sort} from "../components/Sort/Sort";
import {PleaseHolder} from "../components/Block/PleaseHolder";
import {Pizza} from "../components/Block/Pizza/Pizza";
import {Pagination} from "../Pagination/Pagination";


const Home = ({searchValue}) => {
        const [items, setItems] = useState([])
        const [isLoading, setLoading] = useState(true)
        const [categoryId, setCategoryId] = useState(0)
        const [currentPage, setCurrentPage] = useState(1)
        const [sort, setSort] = useState(
            {
                name: 'популярности',
                sortProperty: 'rating'
            },)


        useEffect(() => {
            setLoading(true)

            const sortBy = sort.sortProperty.replace('-', '')
            const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
            const category = categoryId > 0 ? `category =${categoryId}` : '';

            fetch(
                `https://63441448b9ab4243cadecf75.mockapi.io/items?page=${currentPage}&limit=4${category}
            &sortBy =${sortBy}&order=${order}`,
            )
                .then(res => res.json())
                .then((arr) => {
                    setItems(arr)
                    setLoading(false)
                })
            window.scrollTo(0, 0)
        }, [categoryId, sort,currentPage])

        const onClickCategory = (index) => {
            setCategoryId(index)
        }

        const onClickSort = (index) => {
            setSort(index)
        }


        const skeletons = [...new Array(6)].map((_, index) => <PleaseHolder key={index}/>);

        const pizzas = items.filter(obj => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            return false
        }).map((obj) => <Pizza key={obj.id}{...obj}/>)

        // const pizzas = items.filter(obj => (obj.title.toLowerCase().includes(searchValue.toLowerCase())) ? obj.map((el) =>
        //     <Pizza
        //         key={el.id}{...el}/>) : '')

        return (<>
                <div className="container">
                    <div className="content__top">
                        <Categories categoryId={categoryId} onClickCategory={onClickCategory}/>
                        <Sort sort={sort} onClickSort={onClickSort}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {isLoading ? skeletons : pizzas}
                    </div>
                    <Pagination onChangePage ={number=>setCurrentPage(number)}/>
                </div>
            </>
        );
    }
;

export default Home;