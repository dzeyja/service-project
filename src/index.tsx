import App from "app/App";
import React from "react";
import { render } from "react-dom";
import 'app/styles/index.scss'
import { StoreProvider } from "app/providers/StoreProvider";


render(
    <StoreProvider>
        <App />
    </StoreProvider>, 
    document.getElementById('root')
)