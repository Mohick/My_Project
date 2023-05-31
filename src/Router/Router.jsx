import { Route, Routes } from "react-router-dom";
import MainPage from '../Main_Page/MainPage'
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    )
}