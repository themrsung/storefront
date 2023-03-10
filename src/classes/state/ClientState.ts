import Auth from "../../api/Auth"
import CartItem from "../../types/CartItem"
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
    getCurrentUser(): User | null { return this.currentUser }

    setCurrentUser(user: User): void {
        this.currentUser = user
        this.refresh()
    }

    //
    //
    //

    private products: Array<Product> = []

    // prettier-ignore
    getProducts() : Array<Product> { return this.products }

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

    //
    //
    //

    private guestCart: Array<CartItem> = []

    // prettier-ignore
    getGuestCart(): Array<CartItem> { return this.guestCart }

    setGuestCart(cart: Array<CartItem>): void {
        this.guestCart = cart
        this.refresh()
    }

    //
    //
    //

    getCart(): Array<CartItem> {
        if (!this.currentUser) return this.guestCart
        else return this.currentUser.cart
    }

    addProductToCart(item: CartItem): void {
        const cart: Array<CartItem> = this.currentUser ? this.currentUser.cart : this.guestCart

        const matchingItems: Array<CartItem> = cart.filter(ci => ci.productId === item.productId)

        if (matchingItems.length > 0) {
            matchingItems[0].quantity += item.quantity
        } else {
            cart.push(item)
        }
    }

    removeProductFromCart(item: CartItem): void {
        const cart: Array<CartItem> = this.currentUser ? this.currentUser.cart : this.guestCart
        const setCart = (c: Array<CartItem>): void => {
            if (this.currentUser) {
                this.currentUser.cart = c
            } else {
                this.guestCart = c
            }
        }

        const matchingItems: Array<CartItem> = cart.filter(ci => ci.productId === item.productId)

        if (matchingItems.length > 0) {
            const quantity = matchingItems[0].quantity

            matchingItems[0].quantity = Math.max(quantity - item.quantity, 0)

            if (matchingItems[0].quantity <= 0) {
                const itemToRemove = matchingItems[0]
                setCart(cart.filter(ci => ci.productId !== itemToRemove.productId))
            }
        }
    }

    //
    //
    //

    async login(id: string, passwordRaw: string): Promise<boolean> {
        const response = await Auth.login(id, passwordRaw)

        if (response) {
            this.currentUser = response

            const cart: Array<CartItem> = this.guestCart
            for (let i = 0; i < cart.length; i++) {
                this.addProductToCart(cart[0])
            }

            this.guestCart = []

            this.refresh()

            return true
        } else return false
    }

    async logout(): Promise<void> {
        if (this.currentUser) {
            await Auth.logout(this.currentUser.id)

            this.currentUser = null

            this.refresh()
        }
    }

    async changePassword(passwordRaw: string, newPasswordRaw: string): Promise<boolean> {
        if (this.currentUser) {
            return Auth.changePassword(this.currentUser?.id, passwordRaw, newPasswordRaw)
        } else return false
    }
}
