import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const services = [
  
  {
    name: 'Deep Tissue Massage',
    description: 'A therapeutic massage that targets deep muscle tension and promotes relaxation.',
    price: 100,
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Massage therapist performing a deep tissue massage on a client',
  },
  {
    name: 'Pedicure ',
    description: 'Luxurious nail care treatment for feet with premium products.',
    price: 65,
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1519419451778-14599a49ec41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlZGljdXJlfGVufDB8fDB8fHww',
    alt: 'Close-up of a feet during a manicure',
  },
  {
    name: 'Hair Styling',
    description: 'Professional hair styling services including cuts, color, and treatments.',
    price: 80,
    category: 'Hair',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: "Hair stylist blow drying a woman's hair in a salon",
  },
  {
    name: 'Manicure ',
    description: 'Luxurious nail care treatment for hands and feet with premium products.',
    price: 65,
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmljdXJlfGVufDB8fDB8fHww',
    alt: 'Close-up of a hand with painted nails during a manicure',
  },
  {
    name: 'Body Scrub',
    description: 'Exfoliating treatment that leaves your skin smooth and rejuvenated.',
    price: 90,
    category: 'Body',
    image: 'https://images.unsplash.com/photo-1677769237703-629d082d89bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Qm9keSUyMHNjcnVifGVufDB8fDB8fHww',
    alt: 'Spa therapist applying a body scrub to a client',
  },
  {
    name: 'Anti-Aging Treatment',
    description: 'Advanced facial treatment targeting fine lines and wrinkles.',
    price: 150,
    category: 'Facial',
    image: 'https://images.unsplash.com/photo-1643123158509-b07b9fd5e802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
    alt: 'anti aging serum',
  },
];

const categories = ['All', 'Facial', 'Massage', 'Hair', 'Nails', 'Body'];

const packages = [
  {
    name: 'Luxury Spa Day',
    image: 'https://images.unsplash.com/photo-1610289982320-3891f7c9fd6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhJTIwZGF5fGVufDB8fDB8fHww',
    services: ['Signature Facial', 'Deep Tissue Massage', 'Manicure', 'Pedicure'],
    price: 220,
    oldPrice: 280,
    description: 'A full day of pampering with our most popular treatments.',
  },
  {
    name: 'Bridal Beauty',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJyaWRhbCUyMG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D',
    services: ['Hair Styling', 'Signature Facial', 'Manicure', 'Body Scrub'],
    price: 180,
    oldPrice: 230,
    description: 'Perfect for brides or special occasions. Look and feel your best!',
  },
  {
    name: 'Relax & Renew',
    image: 'https://images.unsplash.com/photo-1506003094589-53954a26283f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNwYXxlbnwwfHwwfHx8MA%3D%3D',
    services: ['Deep Tissue Massage', 'Body Scrub', 'Anti-Aging Treatment'],
    price: 160,
    oldPrice: 200,
    description: 'Unwind and rejuvenate with this relaxing package.',
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showPackages, setShowPackages] = useState(false);

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
              <div className="bg-white">
                <img src={service.image} alt={service.alt} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">${service.price}</span>
                    <button className="btn btn-primary bg-gradient-to-r from-accent-500 to-primary-600 border-0 py-2">Book Now</button>
                  </div>
                </div>
              </div>
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
          <button
            className="btn btn-primary bg-gradient-to-r from-accent-500 to-primary-600 border-0"
            onClick={() => setShowPackages(true)}
          >
            View Packages
          </button>
        </div>

        {/* Packages Modal */}
        <AnimatePresence>
          {showPackages && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative"
                initial={{ scale: 0.95, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 40 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-primary-600 text-2xl font-bold"
                  onClick={() => setShowPackages(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 className="text-3xl font-serif font-bold text-center mb-8 text-primary-700">Our Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <div key={pkg.name} className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 rounded-xl shadow p-4 flex flex-col items-center">
                      <img src={pkg.image} alt={pkg.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-accent-200" />
                      <h4 className="text-xl font-bold font-serif mb-2 text-accent-700">{pkg.name}</h4>
                      <p className="text-gray-600 text-sm mb-2 text-center">{pkg.description}</p>
                      <ul className="mb-4 text-sm text-gray-700 list-disc list-inside">
                        {pkg.services.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-primary-700 mr-2">${pkg.price}</span>
                        <span className="text-gray-400 line-through">${pkg.oldPrice}</span>
                      </div>
                      <Link
                        to={`/booking?package=${encodeURIComponent(pkg.name)}`}
                        className="btn btn-primary w-full text-center"
                        onClick={() => setShowPackages(false)}
                      >
                        Book Now
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 