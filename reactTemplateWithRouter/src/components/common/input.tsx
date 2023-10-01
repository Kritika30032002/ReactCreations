import React from 'react';

    interface InputProps {
        name?: string;
        label?: string;
        error?: object;
        type?: string;
    }
 
const Input: React.FC<InputProps> = ({name, label, error, ...rest}) => {
        return (
            <div className={"from-group"}>
                <label htmlFor={name}>{label}</label>
                <input {...rest} id={name} name={name} className={"form-control"}/>
                {error && <span className={"text-danger"}>{error}</span>}
            </div>
        );
}

export default Input;