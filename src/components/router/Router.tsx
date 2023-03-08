import { BrowserRouter, Routes, Route } from "react-router-dom"
import ClientState from "../../classes/state/ClientState"
import RouterPaths from "../../enums/RouterPaths"
import Home from "../../pages/home/Home"

export default function Router(props: { clientState: ClientState }) {
    const { clientState } = props

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouterPaths.Home} element={<Home clientState={clientState} />} />
            </Routes>
        </BrowserRouter>
    )
}
