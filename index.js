/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React, { useEffect } from 'react'
import App from './App';
import { name as appName } from './app.json';

const Main = () => {
    const store = useGlobalState();
    return (
        <Context.Provider value={store}>
            <App />
        </Context.Provider>

    )
}

AppRegistry.registerComponent(appName, () => App);

