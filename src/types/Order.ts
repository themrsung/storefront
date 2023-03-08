import OrderStatus from "../enums/OrderStatus"
import Address from "./Address"
import CartItem from "./CartItem"

type Order = {
    id: string
    userId: string
    date: Date
    address: Address
    products: Array<CartItem>
    status: OrderStatus
}

export default Order
