import React from 'react';
import classes from "./styles.module.scss";
import {connect} from "react-redux";
import { addBookToCart, removeBookFromCart, deleteBookFromCart } from '../../redux';


const ShopCartTable = ({orderTotal, items, addBook, removeBook, deleteBook}) => {
    const renderItems = ({id,name,count,total}, idx) => {
        return (
            <tr key={`shop-item-${id}`}>
                <td>{idx + 1} </td>
                <td>{name} </td>
                <td>{count} </td>
                <td>{total} </td>
                <td>
                    <button onClick={() => addBook(id)} className='btn btn-outline-success btn-sm'>
                        <i className='fa fa-plus-circle'></i>
                    </button>
                    <button onClick={() => removeBook(id)} className='btn btn-outline-warning btn-sm'>
                        <i className='fa fa-minus-circle'></i>
                    </button>
                    <button onClick={()=>deleteBook(id)} className='btn btn-outline-danger btn-sm'>
                        <i className='fa fa-trash'></i>
                    </button>
                </td>
            </tr>
        )
    }
  return (
    <div className={classes.cart_table}>
        <h2>Your order</h2>
        <table className="table">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Item</td>
                    <td>Count</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {items.map(renderItems)}
            </tbody>
        </table>
        <div className={classes.cart_table_total}>Total: {orderTotal}$ </div>
    </div>
  )
}

const mapStateToProps = ({orderTotal, cartItems}) => {
    return {
        orderTotal,
        items: cartItems,
    }
}

const mapDispatchToProps = {
    addBook: addBookToCart,
    removeBook: removeBookFromCart,
    deleteBook: deleteBookFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps) (ShopCartTable);
