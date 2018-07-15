import React, {Component} from 'react';
import classNames from 'classnames'
import helpers from '../helpers';

class MessageList extends Component {
    constructor(props){
        super(props)
    }

    deleteOperation = (event) => {
        event.stopPropagation();
        event.preventDefault();

        let deleteId = event.target.attributes.getNamedItem('data-delete-ref').value;

        this.props.removeMsg(deleteId);

    };

    render(){
        return(
            <div className="msg-list">
                {this.props.source.map(msg =>
                    <div className={classNames({'item open': (this.props.openMail == msg.uid), 'item': true})} key={msg.uid} onClick={() => this.props.msgClick(+msg.uid)}>
                        {!(this.props.seenMsgs.indexOf(Number(msg.uid)) + 1) ? <div className="not-seen"/> : null}

                        <a className="delete" data-delete-ref={msg.uid} onClick={this.deleteOperation}/>

                        <p className="text-ellipsis bold">{msg.sender}</p>
                        <p><em>{helpers.dateFormat(msg.time_sent)}</em></p>
                        <p className="text-ellipsis"><strong>Subject:</strong> {msg.subject}</p>
                    </div>)}
            </div>
        );
    }
}

export default MessageList;