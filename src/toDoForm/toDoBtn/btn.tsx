import React, {FC} from 'react';

import {IBtnProps} from "../../interface";

const Btn:FC<IBtnProps> = ({onClick, val, className}) => {
    return (
        <button type="submit" onClick={onClick} className={className}>{val}</button>
    );
};

export default Btn;