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
            <Product title="Logitech MX Master Mouse" idx={0} />
            <Product title="Apple Pencil (2nd Generation)" idx={1} />
            <Product title="boAt Rockerz Earphones" idx={2} />
            <Product title="Mivi Bluetooth Speaker" idx={3} />
        </div>
    )
}

export default ProductTab;
