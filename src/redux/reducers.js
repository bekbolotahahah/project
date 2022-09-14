import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_FINALLY, FETCH_BOOKS_SUCCESS, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, BOOK_DELETED_FROM_CART } from "./types";

const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    orderTotal: 0,
};



const updateCartItems = (cartItems, idx, item) => {
    if (item.count === 0) {
        return [...cartItems.filter((el) => el.id !== item.id)]
    }
    if (idx === -1) {
        return [...cartItems, item];
    }

    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const createCartItem = (book, item = {}, quantity) => {
    const {id=book.id, count = 0, name = book.title, total = 0} = item;

    return {
        id, 
        name,
        count: count + quantity,
        total: total + quantity * book.price,
    };
};

const updateOrder = (state, bookId, quantity) => {
    const {cartItems, books, orderTotal} = state;
   
    const book = books.find(({id}) => id===bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const cartBook = cartItems[itemIndex];

    const newItem = createCartItem(book, cartBook, quantity);
    const element = orderTotal;

    for (let index = 0; index < cartItems.length; index++) {
        const element = cartItems.book[index] * createCartItem.item;
        console.log(element);
    }

    // v cartItemse est vse books my mojem ymnojit vse books na total cherez zikl

    return {
        ...state,
        cartItems: updateCartItems(cartItems, itemIndex, newItem),
        element
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                error: false,
                books: action.payload,
            };
        case FETCH_BOOKS_FAILURE:
            return{
                ...state,
                error: action.payload,
            }
        case FETCH_BOOKS_FINALLY:
            return{
                ...state,
                loading: false
            }
        case FETCH_BOOKS_REQUEST:
            return{
                ...state,
                loading: true,
                error: false,
            }
        case BOOK_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1)

        case BOOK_REMOVED_FROM_CART: 
            return updateOrder(state, action.payload, -1)
        
        case BOOK_DELETED_FROM_CART:
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)
        default: 
            return state;
    }
}

export default reducer;