import React from 'react';

function Notification({ message }) {
    const messageStyle = {
        color: 'green',
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

export default Notification;