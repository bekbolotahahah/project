

const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks,
    };
};

const booksError =(error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error,
    };
}

const booksFinally =() => {
    return{
        type: "FETCH_BOOKS_FINALLY"
    }
}

const fetchBooks = (dispatch, service) => {
    dispatch(booksRequested());
    service()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
    .finally(() => dispatch(booksFinally()))
}

const addBookToCart = (bookid) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookid
    }
}

const removeBookFromCart = (bookid) => {
    return {
        type: "BOOK_REMOVED_FROM_CART",
        payload: bookid
    }
}

const deleteBookFromCart = (bookid) => {
    return {
        type: "BOOK_DELETED_FROM_CART",
        payload: bookid
    }
}


export {fetchBooks, addBookToCart, removeBookFromCart, deleteBookFromCart};