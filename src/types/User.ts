import Address from "./Address"
import CartItem from "./CartItem"
import Order from "./Order"
import PhoneNumber from "./PhoneNumber"

type User = {
    id: string
    name: string
    dateOfBirth: Date
    phone: PhoneNumber
    address: Address
    cart: Array<CartItem>
    orders: Array<Order>
}

export default User
