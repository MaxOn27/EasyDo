import React, {FC} from 'react';

import {IInputProps} from "../../interface";

const Input:FC<IInputProps> = ({type, placeholder, className, val, id,checked}) => {
    return (
        <input type={type} placeholder={placeholder} value={val} id={id} className={className} checked={checked}/>
    );
};

export default Input;