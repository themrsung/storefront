import { useNavigate } from "react-router"
import ClientState from "../../classes/state/ClientState"

export default function HomePage(props: { clientState: ClientState }) {
    const { clientState } = props

    const navigate = useNavigate()

    return (
        <>
            <button
                onClick={() => {
                    clientState.addProduct({
                        id: "product-one",
                        name: "product-one-name",
                        description: "product one description",
                        inStock: 2,
                        price: 2000,
                        imageUrls: [],
                        minimumViewAge: 0,
                        minimumPurchaseAge: 0
                    })
                }}
            >
                add product one
            </button>
            <button
                onClick={() => {
                    navigate("/product/product-one")
                }}
            >
                go to product one
            </button>
        </>
    )
}
