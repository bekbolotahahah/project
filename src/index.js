import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './redux';
import BooksContext from './components/context';
import BookService from "./services";
import App from './components/app';

const booksService = new BookService();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BooksContext.Provider value={booksService}>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </BooksContext.Provider>
  </React.StrictMode>
);
