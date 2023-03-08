import Country from "../enums/Country"
import User from "../types/User"

export default class UserApi {
    static fetchUser(id: string) {
        const user: User = {
            id: id,
            name: "Mr. MMMM YYY",
            dateOfBirth: new Date(),
            phone: {
                countryCode: 82,
                number: 1012345678
            },
            address: {
                streetOne: "Room 9000, Olympic-ro 300",
                streetTwo: "Songpa-gu",
                city: "Seoul",
                country: Country.Korea,
                postalCode: 0o5551
            },
            cart: []
        }

        return user
    }
}
