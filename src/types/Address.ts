import { Country } from "../enums/Country"

type Address = {
    streetOne: string
    streetTwo: string
    city: string
    country: Country
    postalCode: number
}

export default Address
