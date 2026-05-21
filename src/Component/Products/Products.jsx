import { useState } from "react";
import Heading from "../Heading/Heading";
import Cards from "../Cards/Cards";
import products from '../ProductList/ProductList';
import Button from "../Button/Button";

const Products = () => {

    const categories = ['all', 'fruits', 'vegetables', 'dairy', 'seafood'];

    const [activeTabs, setActiveTabs] = useState('all');

    let filteredItems = activeTabs === 'all'
        ? products
        : products.filter((item) => item.category === activeTabs);

    const renderCards = filteredItems
        .slice(0, 8)
        .map((product) => {
            return (
                <Cards
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            );
        });

    return (
        <section>

            <div className="max-w-[1400px] mx-auto px-10 py-20">

                <Heading highlight="our" heading="Products" />

                {/* tabs */}
                <div className="flex  flex-wrap gap-3 mt-10 flex-wrap justify-center">

                    {categories.map((category) => {
                        return (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-lg capitalize ${
                                    activeTabs === category
                                        ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                                        : 'bg-zinc-100'
                                }`}
                                onClick={() => setActiveTabs(category)}
                            >
                                {category}
                            </button>
                        );
                    })}

                </div>

                {/* product listing */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
                    {renderCards}
                </div>

                <div className="mt-15 mx-auto w-fit">
                    <Button content="View All" />
                </div>

            </div>

        </section>
    );
};

export default Products;