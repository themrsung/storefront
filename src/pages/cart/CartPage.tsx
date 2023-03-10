import ClientState from "../../classes/state/ClientState"
import CartItem from "../../types/CartItem"

export default function CartPage(props: { clientState: ClientState }) {
    const { clientState } = props

    const cart: Array<CartItem> = clientState.getCart()

    const modifyQuantity: (item: CartItem) => void = (item: CartItem) => {
        const isPositive = item.quantity > 0

        if (isPositive) clientState.addProductToCart(item)
        else clientState.removeProductFromCart(item)
    }

    return (
        <>
            {cart.map(ci => (
                <div key={ci.productId}>
                    {ci.productId} - {ci.quantity}
                </div>
            ))}
        </>
    )
}
