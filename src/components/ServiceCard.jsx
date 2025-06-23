import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
          {service.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-primary-600 font-semibold">
            ${service.price}
          </span>
          <Link
            to={`/booking?service=${encodeURIComponent(service.name)}`}
            className="btn btn-primary py-2"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
}; 