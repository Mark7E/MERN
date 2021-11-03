import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
    <div className="class-example" style={{width: '300px', height: '150px', backgroundColor: props.message}}></div>
        </>
    );
};
    
export default MessageDisplay;

