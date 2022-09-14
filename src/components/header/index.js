import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from "./styles.module.scss";


const Header = ({ books }) => {
    
    return (
        <div className={classes.header}>
            <div className={classes.title}> <h2>莉莉 Store</h2> </div>
            <div >
                
                <FontAwesomeIcon className={classes.cart} icon={faCartShopping} />
                {books.length} items ({books.reduce((summ, el) => {
                    return summ + el.price
                }, 0)}$)
            </div>

        </div>
    )
}

const mapStateToProps = ({ books }) => {
    return {
        books,
    };
};

export default connect(mapStateToProps)(Header);

