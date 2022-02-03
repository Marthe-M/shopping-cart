import React, { useContext } from 'react';
import { AppContext } from '../state/context'
import Item from './Item'

const Products = () => {
    const { state } = useContext(AppContext);
    return (
        <div className="overview--container">
            <ul className="product--container">

                {state.overview && state.overview.map((item: ProductType) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
};

export default Products