import { useParams } from "react-router"
import ClientState from "../../classes/state/ClientState"
import Product from "../../types/Product"

export default function ProductPage(props: { clientState: ClientState }) {
    const { clientState } = props

    const { id } = useParams()
    console.log(id)
    const product: Product = clientState.getProductById(id || "")

    return (
        <>
            <p>name: {product.name}</p>
        </>
    )
}
