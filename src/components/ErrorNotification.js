import React from 'react';

function ErrorNotification({ message }) {
    const messageStyle = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 20,
        background: 'lightGrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (message === null) {
        return null
    }
    return (
        <div style={messageStyle}>
            {message}
        </div>
    );
}

export default ErrorNotification;