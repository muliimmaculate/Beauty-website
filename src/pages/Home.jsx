import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSpa, FaLeaf, FaHeart, FaGift, FaSmile } from 'react-icons/fa';

const features = [
  {
    icon: FaSpa,
    title: 'Natural Products',
    description: 'We use only the finest natural and organic ingredients in our treatments.',
  },
  {
    icon: FaLeaf,
    title: 'Expert Care',
    description: 'Our certified specialists provide personalized care for your unique needs.',
  },
  {
    icon: FaHeart,
    title: 'Relaxing Environment',
    description: 'Experience tranquility in our peaceful and luxurious spa setting.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Client',
    content: 'The facial treatment was amazing! My skin has never felt better. The staff is professional and caring.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&q=80',
    alt: 'Sarah Johnson, happy client after facial treatment',
  },
  {
    name: 'Emily Davis',
    role: 'Beauty Enthusiast',
    content: 'I love their natural approach to beauty. The products they use are top-notch and the results are incredible.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=facearea&w=128&q=80',
    alt: 'Emily Davis, beauty enthusiast, smiling with glowing skin',
  },
];

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Massage therapist performing a deep tissue massage on a client',
  },
  {
    src: 'https://images.unsplash.com/photo-1519419451778-14599a49ec41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlZGljdXJlfGVufDB8fDB8fHww',
    alt: 'Close-up of a feet during a pedicure',
  },
  {
    src: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: "Hair stylist blow drying a woman's hair in a salon",
  },
  {
    src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmljdXJlfGVufDB8fDB8fHww',
    alt: 'Close-up of a hand with painted nails during a manicure',
  },
  {
    src: 'https://images.unsplash.com/photo-1677769237703-629d082d89bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Qm9keSUyMHNjcnVifGVufDB8fDB8fHww',
    alt: 'Spa therapist applying a body scrub to a client',
  },
  {
    src: 'https://images.unsplash.com/photo-1643123158509-b07b9fd5e802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
    alt: 'anti aging serum',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with Gradient and Accent Shape */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-100 via-accent-100 to-secondary-100 overflow-hidden">
        {/* Decorative Accent Shape */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent-200 rounded-full opacity-30 blur-2xl z-0" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                Care Your Skin <span className="text-accent-600">with Color</span> &amp; Natural Ingredients
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience the transformation with our premium beauty services and natural skincare products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn btn-primary bg-gradient-to-r from-accent-500 to-primary-600 border-0">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn btn-outline border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white">
                  View Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjaWFsJTIwdHJlYXRtZW50fGVufDB8fDB8fHww"
                alt="Woman enjoying a relaxing facial treatment in a spa"
                className="rounded-lg shadow-xl border-8 border-accent-100"
              />
              {/* Floating Icon */}
              <FaGift className="absolute -top-8 -right-8 w-16 h-16 text-accent-400 animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Offer Section */}
      <section className="py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-gradient-to-r from-secondary-100 via-accent-100 to-primary-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg border border-accent-200"
          >
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80"
              alt="Featured Glow Facial product with spa background"
              className="w-32 h-32 rounded-full object-cover border-4 border-accent-300 shadow-md"
            />
            <div>
              <h3 className="text-2xl font-serif font-bold text-accent-700 mb-2">Today's Special: Glow Facial</h3>
              <p className="text-gray-700 mb-2">Get a radiant look with our signature Glow Facial, now <span className="text-highlight font-bold">20% OFF</span> for first-time clients!</p>
              <Link to="/booking" className="btn btn-primary bg-accent-500 border-0 mt-2">Claim Offer</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best beauty and wellness experience with our expert team and premium services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border-t-4"
                style={{ borderColor: index === 0 ? '#f97316' : index === 1 ? '#0ea5e9' : '#f43f5e' }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4" style={{ color: index === 0 ? '#f97316' : index === 1 ? '#0ea5e9' : '#f43f5e' }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-50 via-primary-50 to-accent-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">
            Our Colorful Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                whileHover={{ scale: 1.07, rotate: i % 2 === 0 ? 2 : -2 }}
                className="overflow-hidden rounded-xl shadow-lg border-4 border-accent-100 hover:border-accent-400 transition-all duration-300"
              >
                <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-highlight text-white rounded-2xl p-8 flex items-center gap-6 shadow-lg"
          >
            <FaSmile className="w-16 h-16 text-white opacity-80" />
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Did You Know?</h3>
              <p className="text-lg">Regular facials can boost your skin's health and your mood! Treat yourself to a spa day—you deserve it.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent-400"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Experience the Transformation?
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your appointment today and let us help you achieve your beauty goals with our premium services and expert care.
            </p>
            <Link to="/booking" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 