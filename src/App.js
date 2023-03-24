import './App.css';
import {Button} from "./components/Button/Button";
import Box from "./components/Box/Box";
import {useState} from "react";

function App() {
    const [active, setActive] = useState(true)
    const [animateTime, setAnimateTime] = useState(0)


    return (
        <div className="App">
            <div className={'wrapperBtn'}>
                <Box active={true}>1</Box>
                <Box active={false}>2</Box>
            </div>

            <Button active={active}
                    setActive={setActive}
            >START</Button>
        </div>
    );
}

export default App;
