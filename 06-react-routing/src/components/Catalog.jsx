import { useEffect, useState } from "react";
import { Link } from "react-router"

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
        console.log(products)
    }, []);


    return (
        <>
            <div className="bg-gray-900 text-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    
                    <div className="flex justify-end px-4 lg:px-8 mb-6">
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="group inline-flex justify-end text-sm font-medium text-white hover:text-gray-300">
                            Sort
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                            />
                        </MenuButton>

                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <div className="py-1">
                                {sortOptions.map((option) => (
                                    <MenuItem key={option.name}>
                                        <a
                                            href={option.href}
                                            className={classNames(
                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                            )}
                                        >
                                            {option.name}
                                        </a>
                                    </MenuItem>
                                ))}
                            </div>
                        </MenuItems>
                    </Menu>
                    </div>

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
        </>
    )
}