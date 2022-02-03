import React, { useContext } from 'react';
import { AppContext } from '../state/context'
import { decreaseItem, increaseItem, removeItem } from '../state/reducer';
import { AiFillMinusCircle, AiFillPlusCircle, AiFillCloseSquare } from 'react-icons/ai';

const Item: React.FC<ShoppingItemProps> = ({ item }) => {
    const { dispatch } = useContext(AppContext);
    return (
        <li className="shopping--item">
            <span className="shopping--span"><h3>{item.name}</h3><img src={item.imageUrl} alt={item.name} /></span>
            <p>Price: {item.price},-</p>
            <span className="shopping--span"><p>Amount: {item.amount}</p><button className="shopping--button" onClick={() => dispatch(decreaseItem(item))}><AiFillMinusCircle /></button>
                <button className="shopping--button" onClick={() => dispatch(increaseItem(item))}><AiFillPlusCircle /></button><button className="shopping--button dark" onClick={() => dispatch(removeItem(item))}><AiFillCloseSquare /></button></span>
            <div className="shopping--line"></div>
        </li>
    )
};

export default Item;
