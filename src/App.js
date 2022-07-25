import StartScreen from './StartScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './Body';


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/Body" element={<Body />} />
            </Routes>
        </BrowserRouter>
    );
}