import React from "react";
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App/App";
import store from "./store/store";


const AppWrapper = () => {
        return (
                <Provider
                        store={store}>
                        <App />
                </Provider>
        )
}

const container = document.getElementById('react-app');

if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<AppWrapper />)
}