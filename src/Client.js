/* eslint-disable import/namespace */
/* eslint-disable import/named */

import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'

// The stuffs that need to be done in the browser

hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
)
