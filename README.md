## Simple Mail Client
This is a simple mail client application prototype for test purpose. This application has two sections. Left section contains messages list with meta information and the right section to show message body. There is a JSON file in public directory which contains messages. The application load the messages and shows in User Interface. It's possible to remove message virtually and see unread sign. Clicking on any message at left section will expose the message body in right section.  


### To run the application please follow some simple steps below
- You need `Node JS` and `npm` to run this, if you don't have it please download from `https://nodejs.org/en/` 
- clone this repo ```git@github.com:asifsaho/simple-mail-client.git ``` use http link if you don't have `SSH`
- enter to the folder ``cd simple-mail-client``
- Install required libraries ``npm install``
- Run ``npm start`` and you will see the application on browser, please make sure its running on 3000 port. If something already running on this port please stop it for a while
- Currently the data source is ***FE_Challenge_messages_sample.json*** file in public directory. If you wish to use different file please place it in public directory and change the name in *appConfig.js* file if need.


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
- Babel and more for development purpose


### Development Approach

#### Structure
- I initialized a empty project with *create-react-app* command line interface.
- I created a config file for holding some metadata for the app which is `appConfig.js`
- There are three components which are the `MessageList`, `MessageDetails` and `App`, `App` component is mounting other two components 

#### App Component
App component is the top level component for this application. It contains the application states, data and methods. 
- States: `messages, seenMsgs, openMail`
- Initially the `componentDidMount` lifecycle hook is initiating a ajax request with *axios* to get the contents from our json file which is `FE_Challenge_messages_sample.json` is our case and load it to state called `messages`
- I have developed two methods to see the details of a message and to remove a message which are respectively `messageOnClick, removeMsg`
- While mounting the components `MessageList` and `MessageDetails` I have passed the state data I have in root component using `props`
- For `MessageList` component as it has two event operation for reading and removing message I have passed those methods in this component. 

##### MessageList Component
- Based on the messages array passed through `source` props it's performing a loop which is `map` in this case to render message list UI.
- A click event bound to this component to show the details of the message. Currently displaying message ID (uid in our case) takes place in `openMail` state. Also this method is storing the message ids (uid) in another state which are already opened once, in our case it's `seenMsgs`. `messageOnClick`  method is doing this operation.
- It has a remove button and an unseen indicator. If the message is not clicked the indicator will be shown. `removeMsg` is removing message with an Message ID which is `uid` is our case.

##### MessageDetails Component
- This component accept only two props `source` and `openMail` where `source` contains all data about messages and `openMail` is holding the id (uid) of the message which is currently in open mode.
- Initially it will show a message *"Please click on a message to see the details!"*. When an message is clicked as a result the message id (uid) is set to `openMail` state it will be rendered in messageDetails body.

##### Cheers!
