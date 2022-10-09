import {useState} from "react";

export const Categories = () => {

    const [active, setActive] = useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const onClickHandler = (index) => {
        setActive(index)
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((ct, index) => {
                    return (
                        <li key={index}
                            onClick={() => onClickHandler(index)}
                            className={active === index ? "active" : ""}>
                            {ct}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}