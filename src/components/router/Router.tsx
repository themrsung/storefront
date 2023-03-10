import { BrowserRouter, Routes, Route } from "react-router-dom"
import ClientState from "../../classes/state/ClientState"
import RouterPaths from "../../enums/RouterPaths"
import CartPage from "../../pages/cart/CartPage"
import HomePage from "../../pages/home/HomePage"
import ProductPage from "../../pages/product/ProductPage"

export default function Router(props: { clientState: ClientState }) {
    const { clientState } = props

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouterPaths.Home} element={<HomePage clientState={clientState} />} />
                <Route path={RouterPaths.Product + "/:id"} element={<ProductPage clientState={clientState} />} />
                <Route path={RouterPaths.Cart} element={<CartPage clientState={clientState} />} />
            </Routes>
        </BrowserRouter>
    )
}
