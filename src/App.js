import './scss/app.scss';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
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
                        <Pizza title={'Неаполитанская пицца'} price={350}/>
                        <Pizza title={'Кальцоне'} price={400}/>
                        <Pizza title={'Римская пицца'} price={250}/>
                        <Pizza title={'Сицилийская пицца'} price={420}/>
                        <Pizza title={'Метровая пицца'} price={700}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
