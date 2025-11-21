import { Auth } from "@features/auth";
import { Nav } from "@shared/components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./router/routes";
import { Header } from "@widgets/header";

function App() {
    return (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    );
}

export default App;
