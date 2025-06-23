import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-primary-600">
              Beauty
            </Link>
            <p className="text-gray-500 mt-4">
              Your destination for natural beauty and wellness. Experience the transformation with our premium services and products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-500 hover:text-primary-600 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Services</h3>
            <ul className="space-y-3">
              {['Facial Treatment', 'Body Treatment', 'Massage', 'Hair Care', 'Nail Care'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-500 hover:text-primary-600 transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Newsletter</h3>
            <p className="text-gray-500 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-600"
              />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2024 Beauty. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                { Icon: FaFacebook, label: 'Facebook' },
                { Icon: FaInstagram, label: 'Instagram' },
                { Icon: FaTwitter, label: 'Twitter' },
                { Icon: FaPinterest, label: 'Pinterest' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-400 hover:text-primary-600 transition"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 