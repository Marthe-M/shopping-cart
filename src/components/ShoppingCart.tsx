import React, { useContext } from 'react';
import ShoppingItem from './ShoppingItem'
import { AppContext } from '../state/context';
import { resetList } from '../state/reducer';


const ShoppingCart = () => {
    const { state, dispatch } = useContext(AppContext);

    let newPriceArray = state.products.map(product => { return { ...product, totalPrice: product.amount * product.price } })
    let priceArray = newPriceArray.map(item => item.totalPrice)
    let sumPrice = priceArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )

    let totalAmount = state.products.map(item => item.amount)
    let sumAmount = totalAmount.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    )

    return <ul className="shopping--container">
        <h3>Shopping Cart</h3>
        <div className="shopping--line"></div>
        {state.products && state.products.map((item: ShoppingType) => (
            <ShoppingItem key={item.id} item={item} />
        ))}
        <p>Number of products: {sumAmount}</p>
        <p>Total price: {sumPrice},-</p>
        <p><button className="shopping--button delete" onClick={() => dispatch(resetList())}>Clear Shopping Cart</button></p>
        <p><button className="shopping--button checkout" onClick={() => alert('This prototype has no checkout function!')}>Check-out</button></p>
    </ul>;
};

export default ShoppingCart;
