// TODO: create a component that displays a single bakery item
export function BakeryItem({ item, addToCart }) {
    return (
        <li key={item.name} className="BakeryItem">
            <h2>
                {item.name}
            </h2>
            <img src={item.image} />

            <div className="BakeryItemDetails">
                {item.price}
                <p className="Caption">
                    {item.description}
                </p>

                <button onClick={() => addToCart(item.price, item.name)}> Add to Cart</button>
            </div>
        </li>
    )
}
