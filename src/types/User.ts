import Address from "./Address"
import CartItem from "./CartItem"
import PhoneNumber from "./PhoneNumber"

type User = {
    id: string
    name: string
    dateOfBirth: Date
    phone: PhoneNumber
    address: Address
    cart: Array<CartItem>
}

export default User
