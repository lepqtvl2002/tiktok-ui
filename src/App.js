import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouters } from "~/routers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRouters.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
