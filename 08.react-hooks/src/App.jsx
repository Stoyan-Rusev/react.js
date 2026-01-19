import { Spin } from 'antd';
import Chat from "./components/Chat";
import { useFetch } from "./hooks/useFetch"

function App() {
    const url = 'http://localhost:3030/jsonstore/messages'
    const [pending, messages] = useFetch(url);

    return (
        <>  
            {pending
            ? <Spin spinning={pending} />
            : <Chat messages={messages}/>
            }    
        </>
    )
}

export default App
