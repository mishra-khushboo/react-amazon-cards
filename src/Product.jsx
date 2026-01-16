import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["4500", "4856", "4899", "8910"];
    let newPrices = ["4000", "4500", "3500", "5000"];

    let description = [
        [
            "Ergonomic wireless mouse with advanced precision",
            "Perfect for long working hours"
        ],
        [
            "High-precision stylus for iPad users",
            "Smooth writing and drawing experience"
        ],
        [
            "Powerful bass with crystal clear sound",
            "Lightweight and stylish design"
        ],
        [
            "Portable Bluetooth speaker with deep sound",
            "Available in multiple sizes"
        ]
    ];

    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
