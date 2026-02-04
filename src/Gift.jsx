import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OrderGift } from "./components/Sections/OrderGift/OrderGift";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <OrderGift/>
    </StrictMode>
)