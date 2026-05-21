import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import { FaStar } from 'react-icons/fa';
const customers = [
  {
    name: "Emily Johnson",
    role: "Food Blogger",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "FreshBasket is my go-to store for all grocery needs.",
  },

  {
    name: "David Smith",
    role: "Chef",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Highly recommended for fresh vegetables and fruits.",
  },

  {
    name: "Alya Zahra",
    role: "Model",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Amazing quality and affordable prices.",
  },

  {
    name: "John Carter",
    role: "Developer",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Best grocery website design and smooth experience.",
  },

  {
    name: "Sophia Lee",
    role: "Designer",
    image:
      "https://randomuser.me/api/portraits/women/50.jpg",
    review:
      "UI is amazing and delivery service is fast.",
  },
];

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? customers.length - 3 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= customers.length - 3 ? 0 : prev + 1
    );
  };

  const visibleCustomers = customers.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1400px] mx-auto px-10">

        {/* Heading */}
        <div className="flex items-center justify-between">

          <Heading highlight="Customers" heading="Saying" />

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-orange-500 text-white text-2xl hover:bg-orange-600 duration-300"
            >
              &lt;
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-orange-500 text-white text-2xl hover:bg-orange-600 duration-300"
            >
              &gt;
            </button>

          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {visibleCustomers.map((customer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 duration-300"
            >

              {/* User Info */}
              <div className="flex items-center gap-4 mb-15">

                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {customer.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {customer.role}
                  </p>

                 <div className="flex text-yellow-400 mt-1 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                </div>

              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 text-sm">
                {customer.review}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;