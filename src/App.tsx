import React from "react"
import ClientState from "./classes/state/ClientState"
import Router from "./components/router/Router"

class App extends React.PureComponent {
    private clientState: ClientState = new ClientState(this)

    componentDidMount(): void {}

    render() {
        return (
            <>
                <Router clientState={this.clientState} />
            </>
        )
    }
}

export default App
