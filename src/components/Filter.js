import React from 'react';

const Filter = (props) => {
    console.log(props);
    const { onChange, value } = props
    return (
        <div>
            <h5>filter shown with: <input {...onChange} {...value} /></h5>
        </div>
    );
};

export default Filter;