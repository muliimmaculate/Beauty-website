import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    name: 'Signature Facial',
    description: 'A customized facial treatment that addresses your specific skin concerns using natural ingredients.',
    price: 120,
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Deep Tissue Massage',
    description: 'A therapeutic massage that targets deep muscle tension and promotes relaxation.',
    price: 100,
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hair Styling',
    description: 'Professional hair styling services including cuts, color, and treatments.',
    price: 80,
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1560869713-da86a9ec0070?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Manicure & Pedicure',
    description: 'Luxurious nail care treatment for hands and feet with premium products.',
    price: 65,
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1610992015734-11c37ee1ff8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Body Scrub',
    description: 'Exfoliating treatment that leaves your skin smooth and rejuvenated.',
    price: 90,
    category: 'Body',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Anti-Aging Treatment',
    description: 'Advanced facial treatment targeting fine lines and wrinkles.',
    price: 150,
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const categories = ['All', 'Facial', 'Massage', 'Hair', 'Nails', 'Body'];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium beauty and wellness services designed to enhance your natural beauty.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-600"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* Book All Services CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
            Want to Experience All Our Services?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a comprehensive package and save up to 20% on our premium services.
          </p>
          <button className="btn btn-primary">
            View Packages
          </button>
        </div>
      </div>
    </div>
  );
} 