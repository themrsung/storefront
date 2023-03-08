import Product from "../../types/Product"
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

    setCurrentUser(user: User): void {
        this.currentUser = user
        this.refresh()
    }

    //
    //
    //

    private products: Array<Product> = []

    // prettier-ignore
    getProducts() { return this.products }

    getProductById(id: string) {
        const matchingProducts = this.products.filter(p => p.id === id)
        return matchingProducts[0]
    }

    setProducts(products: Array<Product>): void {
        this.products = products
        this.refresh()
    }

    addProduct(product: Product): void {
        this.products.push(product)
        this.refresh()
    }

    removeProduct(product: Product): void {
        this.products = this.products.filter(p => p !== product)
        this.refresh()
    }

    removeProductById(id: string): void {
        this.products = this.products.filter(p => p.id !== id)
        this.refresh()
    }
}
