import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers";

const stringMiddleware = () => (next) => (action) => {
    
    if (typeof action === "string") {
        return next ({
            type: action
        });
    }

    return next(action);
};

const logMiddleware = (store) => (next) => (action) => {
    
    console.log(action, store.getState());
    return next(action)
   
}

const store = createStore(reducer, applyMiddleware(stringMiddleware,logMiddleware));

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;

//     store.dispatch = (action) => {
//         if (typeof action === "string") {
//             return originalDispatch ({
//                 type: action
//             })
//         }

//         return originalDispatch(action)
//     }

//     return store
// };

// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action, store.getState());

//         return originalDispatch(action)
//     }

//     return store

// }

// const store = createStore(reducer, compose(enhancer,logEnhancer));

store.dispatch("HELLO")

export default store;