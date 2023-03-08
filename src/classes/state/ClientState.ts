import User from "../../types/User"

export default class ClientState {
    constructor(component: React.Component) {
        this.reactComponent = component
    }

    //
    //
    //

    private reactComponent: React.Component

    // prettier-ignore
    refresh() { this.reactComponent.forceUpdate() }

    //
    //
    //

    private currentUser: User | null = null

    // prettier-ignore
    getCurrentUser() { return this.currentUser }

    setCurrentUser(user: User) {
        this.currentUser = user
    }

    //
    //
    //
}
