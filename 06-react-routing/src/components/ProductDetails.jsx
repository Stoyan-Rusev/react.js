import { StarIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));

    }, [id])

    return (
        <div className="bg-gray-900 text-white pt-20">
            <div className="pt-6">

                {/* Image */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 flex justify-center">
                    <img
                        alt={product.title}
                        src={product.image}
                        className="max-h-[400px] w-auto object-contain sm:rounded-lg"
                    />
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{product.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight">{product.price} $</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[...Array(Math.round(product.rating?.rate || 0))].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            aria-hidden="true"
                                            className="size-5 shrink-0"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <form className="mt-10">
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                            >
                                Add to bag
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        {/* Description and details */}
                        <div>
                            <div className="space-y-6">
                                <p className="text-base"><b>Category:</b> {product.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}