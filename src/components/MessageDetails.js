import React from 'react';


const MessageDetails = (props) => {
    return (
        <div className="msg-details">
            {props.source.map((msg, index) =>
                (props.openMail == msg.uid) ?
                    <div key={index}>
                        <p>{msg.message}</p>
                    </div> : null)}

            {!props.openMail ? <p>Please click on a message to see the details!</p> : null}
        </div>
    )
}

export default MessageDetails;