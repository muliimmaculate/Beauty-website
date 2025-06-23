import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    name: 'Signature Facial',
    description: 'A customized facial treatment that addresses your specific skin concerns using natural ingredients.',
    price: 120,
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Deep Tissue Massage',
    description: 'A therapeutic massage that targets deep muscle tension and promotes relaxation.',
    price: 100,
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4f31?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Hair Styling',
    description: 'Professional hair styling services including cuts, color, and treatments.',
    price: 80,
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Manicure & Pedicure',
    description: 'Luxurious nail care treatment for hands and feet with premium products.',
    price: 65,
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Body Scrub',
    description: 'Exfoliating treatment that leaves your skin smooth and rejuvenated.',
    price: 90,
    category: 'Body',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Anti-Aging Treatment',
    description: 'Advanced facial treatment targeting fine lines and wrinkles.',
    price: 150,
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
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
    <div className="py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 min-h-screen">
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
                className={`px-4 py-2 rounded-full transition-colors font-semibold shadow-sm ${
                  selectedCategory === category
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent-100 hover:text-accent-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 shadow-sm"
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
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border-t-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              style={{ borderColor: service.category === 'Facial' ? '#f97316' : service.category === 'Massage' ? '#0ea5e9' : service.category === 'Hair' ? '#a18072' : service.category === 'Nails' ? '#f43f5e' : '#38bdf8' }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
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
          <button className="btn btn-primary bg-gradient-to-r from-accent-500 to-primary-600 border-0">
            View Packages
          </button>
        </div>
      </div>
    </div>
  );
} 