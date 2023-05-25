import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BasketReducer from './components/store/BasketReducer.js';

const store = createStore(BasketReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
