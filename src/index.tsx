import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { offers, fullOffers, reviews } from './mock/offers.ts';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction, getOffersAction } from './store/api-actions.ts';

store.dispatch(checkAuthAction());
store.dispatch(getOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ToastContainer/>
      <App
        offers={ offers }
        fullOffers={ fullOffers }
        reviews={ reviews }
      />
    </Provider>
  </React.StrictMode>
);
