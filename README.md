## This is a Simple Mail client prototype application for test purpose. 

### Used technologies and libraries

#### Languages
- HTML
- CSS
- JavaScript

#### JavaScript Libraries
- React JS
- Axios
- Webpack
- classnames
- Babel
- and more for development purpose


### To Prepare the application please follow steps below
- ```git@github.com:asifsaho/simple-mail-client.git ``` use http link if you don't have *SSH*
- enter to the folder ``cd simple-mail-client``
- Install required libraries ``npm install``


### All set lets run the Application
- From terminal enter to the *simple-mail-client* folder
- Run ``npm start`` and you will see the application on browser, please make sure its running on 3000 port. If something already running on this port please stop it for a while
- If you would like to run in a different URL please update URL in appConfig.js file
- Currently the data source is ***FE_Challenge_messages_sample.json*** file in public directory. If you wish to use different file please place it in public directory and change the name in *appConfig.js* file if need.
- After ``npm start`` you should see the app opened in browser are you are ready to use.

### Development Approach

- Firstly I initialized a empty project with *create-react-app* command line interface.
- I created a config file for holding some metadata for the app which is `appConfig.js`
- I developed two component which are the `MessageList` and `MessageDetails` mounted in `App` Component 
- I have few state in the root component for holding data they are `messages, seenMsgs, openMail`
- Initially the `componentDidMount` lifecycle hook is initiating a ajax request with *axios* to get the contents from our json file which is `FE_Challenge_messages_sample.json` is our case and load it to state callled `messages`
- I have developed two methods to see the details of a message and to remove a message which are respectively `messageOnClick, removeMsg`
- While mounting the components `MessageList` and `MessageDetails` I have passed the state data I have in root component with `props`
- for `MessageList` component as it have two event operation for reading and removing message I have passed those methods in this component. 

##### MessageList Component
- Based on the messages array passed through `source` props it's performing a loop which is map in this case to render message list UI.
- A click event bound to this component to show the details of the message. Currently displaying message ID (uid in our case) takes place in `openMail` state. Also this method is storing the message ids (uid) in another state which are already opened once, in our case it's `seenMsgs`. `messageOnClick`  method is doing this operation.
- It has a remove button and a unseen indicator. If the message is read the indicator will be hidden. `removeMsg` is removing message with an Message ID which is `uid` is our case.

##### MessageDetails Component
- This component accept only two props `source` and `openMail` where source is the messages list and openMail is holding the id (uid) which of the message which is current in open mode.
- Initially it will show a message *"Please click on a message to see the details!"*. When an message id is set to `openMail` state it will render the message body.

##### Cheers!
