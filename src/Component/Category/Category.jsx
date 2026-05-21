import React from 'react';
import Heading from '../Heading/Heading';
import fruitsCat from '../../assets/fruits-and-veggies.png';
import DairyCat from '../../assets/dairy-and-eggs.png';
import SeaFoodCat from '../../assets/meat-and-seafood.png';
import Button from '../Button/Button';

const Category = () => {

    const rendercards = category.map((card) => {
        return (
            // card 
            <div className='flex-1 basis-[300px]' key={card.Id}>
                {/* card Image  */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} className='absolute bottom-0' />
                </div>
                {/* Card content */}

                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl fount-bold'>{card.title}</h3>
                    <p className='text-zince-600 mt-3 mb-9 '>{card.description}</p>
                    <Button content="see all" />
                </div>
            </div>
        );
    });

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="shop" heading="By Category" />

                {/* category cards */}
                <div className='flex flex-wrap  gap-10 mt-15'>
                    {rendercards}
                </div>

            </div>
        </section>
    );
};

export default Category;

const category = [
    {
        Id: 1,
        title: 'Fruits & Vegetables',
        description:'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables',
        image: fruitsCat
    },
    {
        Id: 2,
        title: 'Dairy & Eggs',
        description:'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DairyCat
    },
    {
        Id: 3,
        title: 'meat & SeaFood',
        description:' High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: SeaFoodCat
    }
];