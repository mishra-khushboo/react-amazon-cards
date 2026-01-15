import "./Product.css";
import Price from "./Price";

function Product({ title,idx }) {
    let oldPrices = ["4500","4856","4899","8910"];
    let newPrices = ["4000", "4500", "3500", "5000"];
    let description = ["great product with affordable price range","quality pencil with so many features","you can get it in different colors","a good speaker "]
    return (<>
        <div className="Product">
            <h4>{ title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
    </>)
}

export default Product;