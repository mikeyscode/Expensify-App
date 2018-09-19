import React from 'react';

const Option = (props) => {
    return (
        <li>
            <span>{props.option}</span>
            <button onClick={(e) => {
                props.handleDeleteOption(props.option);
            }}>Remove</button>
        </li>
    );
};

export default Option;