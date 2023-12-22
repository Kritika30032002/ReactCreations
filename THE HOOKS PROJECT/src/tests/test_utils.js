import React from 'react';
import {MemoryRouter} from "react-router";
import {mount as emount} from "enzyme";


export const Router = (props) => {
    return (
        <MemoryRouter initialEntries={[{pathname: "/", key: "testKey"}]}>
            {props.children}
        </MemoryRouter>
    );
};

export const mount = (element) => {
    const childContextTypes = {};

    const context = {};
    return emount.apply(undefined, [element, {context, childContextTypes}]);
};
