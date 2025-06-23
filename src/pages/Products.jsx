import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar, FaFilter } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Natural Face Cream',
    description: 'Hydrating face cream with natural ingredients for all skin types.',
    price: 49.99,
    category: 'Skincare',
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=600&q=80', // face cream
    alt: 'Jar of natural face cream on a table',
  },
  {
    id: 2,
    name: 'Organic Shampoo',
    description: 'Gentle cleansing shampoo made with organic ingredients.',
    price: 24.99,
    category: 'Hair Care',
    rating: 4.6,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', // shampoo
    alt: 'Bottle of organic shampoo with green leaves',
  },
  {
    id: 3,
    name: 'Essential Oil Set',
    description: 'Collection of pure essential oils for aromatherapy.',
    price: 39.99,
    category: 'Aromatherapy',
    rating: 4.9,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80', // essential oils
    alt: 'Set of essential oil bottles for aromatherapy',
  },
  {
    id: 4,
    name: 'Body Lotion',
    description: 'Moisturizing body lotion with natural oils and vitamins.',
    price: 29.99,
    category: 'Body Care',
    rating: 4.7,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80', // body lotion
    alt: 'Bottle of moisturizing body lotion',
  },
];

const categories = ['All', 'Skincare', 'Hair Care', 'Aromatherapy', 'Body Care'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="py-20 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of premium beauty products made with natural ingredients.
          </p>
        </div>

        {/* Filters and Cart Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <FaFilter className="text-accent-400" />
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
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 shadow-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-accent-600 hover:text-accent-700"
            >
              <FaShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              style={{ borderColor: product.category === 'Skincare' ? '#f97316' : product.category === 'Hair Care' ? '#a18072' : product.category === 'Aromatherapy' ? '#0ea5e9' : '#38bdf8' }}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-48 object-cover border-b-4 border-accent-100"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-accent-600 font-semibold">${product.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary bg-accent-500 border-0 py-2 px-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shopping Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif font-bold">Shopping Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                {cart.length === 0 ? (
                  <p className="text-gray-600">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.alt}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-4">
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-600">${item.price}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium">Total:</span>
                        <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                      </div>
                      <button className="w-full btn btn-primary bg-accent-500 border-0">
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 