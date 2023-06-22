import { ChatEngine } from "react-chat-engine";
import ChatFeed from './Components/ChatFeed'
import './App.css';
import LoginForm from "./Components/LoginForm";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine 
            height="100vh"
            projectID="ffd31cba-4dd8-40c4-a703-8063ea2c471b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;