import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StudentGift from "./components/Sections/StudentGift/StudentApp";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StudentGift/>
    </StrictMode>
)