import React from "react";
import reactDom from "react-dom";
import App from './App'
import './index.css';
import{ StateProvider} from './components/StateProvider'
import  reducer,{initialState} from './components/reducer'


reactDom.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
)