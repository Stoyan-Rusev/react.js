import { useEffect, useState } from "react";
import { Link } from "react-router"

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
        console.log(products)
    }, []);


    return (
        <div className="bg-gray-900 text-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} to={`/catalog/${product.id}`} className="group">
                            <img
                                alt={product.title}
                                src={product.image}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-white text-gray-700">{product.title}</h3>
                            <p className="mt-1 text-white font-medium text-gray-900">{product.price} $</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}