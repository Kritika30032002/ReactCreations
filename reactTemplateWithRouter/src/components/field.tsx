import React from "react";

interface Props {
    text: string;
}

export const TextField: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <h2>Hello from modern field!</h2>
        </React.Fragment>
    );
};

export const TextFieldTest: React.FC<Props> = ({text}) => {
    return (
        <React.Fragment>
            <h2>{text}</h2>
        </React.Fragment>
    );
};

// export {TextField};