import React from "react";
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import Nav from "./nav/Nav";
import Main from "./main/Main";
const engine = new Styletron();

const App = () => {
    return (
        <StyletronProvider value={engine} style={{ width: '100%' }}>
            <Nav />
            <Main />
        </StyletronProvider>
    );
};

export default App;