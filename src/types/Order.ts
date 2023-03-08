import OrderStatus from "../enums/OrderStatus"
import Address from "./Address"
import OrderItem from "./OrderItem"

type Order = {
    id: string
    userId: string
    date: Date
    address: Address
    products: Array<OrderItem>
    priceTotal: number
    shippingCost: number
    totalCost: number
    status: OrderStatus
}

export default Order
