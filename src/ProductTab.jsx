import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={styles}>
            <Product title="Logitech max master" idx={0} />
            <Product title="Apple pencil" idx={1} />
            <Product title="boat earphone" idx={2} />
            <Product title="mivi speakers" idx={3} />
        </div>
    )
}

export default ProductTab;