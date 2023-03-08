import CartItem from "../types/CartItem"
import OrderItem from "../types/OrderItem"
import Product from "../types/Product"
import ClientState from "./state/ClientState"

export default class ItemConversions {
    static ProductToCartItem(product: Product, quantity: number) {
        const cartItem: CartItem = {
            productId: product.id,
            quantity: quantity
        }

        return cartItem
    }

    static ProductToOrderItem(product: Product, quantity: number) {
        const orderItem: OrderItem = {
            productId: product.id,
            price: product.price,
            quantity: quantity,
            totalPrice: product.price * quantity
        }

        return orderItem
    }

    static CartItemToOrderItem(cartItem: CartItem, clientState: ClientState) {
        const product = clientState.getProductById(cartItem.productId)
        return ItemConversions.ProductToOrderItem(product, cartItem.quantity)
    }
}
