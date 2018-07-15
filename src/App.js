import React, {Component} from 'react';
import axios from 'axios';
import MessageList from './components/MessageList';
import MessageDetails from './components/MessageDetails';
import appConfig from './appConfig';

class App extends Component {
    constructor() {
        super();

        this.state = {
            messages: [],
            seenMsgs: [],
            openMail: null
        }
    }

    componentDidMount() {
        axios.get(`${appConfig.url}/${appConfig.dataSourceFile}`)
            .then(data => {

                this.setState({
                    messages: data.data.messages
                });

                console.log(this.state.messages)
            })

            .catch(err => console.log(err));
    }


    messageOnClick = (uid) => {
        let newSeenMsgList = this.state.seenMsgs;
        newSeenMsgList.push(uid);

        this.setState({
            seenMsgs: newSeenMsgList,
            openMail: uid
        });
    };

    removeMsg = (uid) => {
        let messages = this.state.messages;

        this.setState({messages: messages.filter(msg => msg.uid != uid)});

        console.log('Message No:' + uid + " is deleted");

        if(this.state.openMail == uid) {
            this.setState({openMail: null});
        }

    };

    render() {
        return (
            <div className="wrapper">
                <MessageList removeMsg={this.removeMsg} openMail={this.state.openMail} msgClick={this.messageOnClick} seenMsgs={this.state.seenMsgs} source={this.state.messages}/>
                <MessageDetails openMail={this.state.openMail} source={this.state.messages}/>
            </div>
        );
    }
}

export default App;
