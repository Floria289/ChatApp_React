import { ChatEngine } from "react-chat-engine";

import ChatFeed from './Components/ChatFeed'
import './App.css';

const App = () => {



    return (
        <ChatEngine 
            height="100vh"
            projectID="ffd31cba-4dd8-40c4-a703-8063ea2c471b"
            userName="floria289"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;