import React from 'react';

const Option = (props) => (
    <li>
        <span>{props.option}</span>
        <button onClick={(e) => {
            props.handleDeleteOption(props.option);
        }}>Remove</button>
    </li>
);

export default Option;