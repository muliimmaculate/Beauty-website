import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Lead Aesthetician',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80',
    alt: 'Sarah Johnson, founder and lead aesthetician, smiling in a spa setting',
    bio: 'With over 15 years of experience in the beauty industry, Sarah founded Beauty with a vision to provide natural and effective beauty treatments.',
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Emily Davis',
    role: 'Senior Massage Therapist',
    image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4f31?auto=format&fit=facearea&w=400&q=80',
    alt: 'Emily Davis, senior massage therapist, giving a relaxing massage',
    bio: 'Emily specializes in therapeutic massage and has helped countless clients find relief from chronic pain and stress.',
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Hair Stylist',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80',
    alt: "Michael Chen, hair stylist, working on a client's hair",
    bio: 'Michael brings creativity and precision to every haircut, helping clients achieve their perfect look.',
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
];

const values = [
  {
    title: 'Natural Beauty',
    description: 'We believe in enhancing your natural beauty using organic and sustainable products.',
  },
  {
    title: 'Expert Care',
    description: 'Our team of certified professionals is dedicated to providing the highest quality of care.',
  },
  {
    title: 'Personalized Service',
    description: 'Every treatment is tailored to meet your unique needs and preferences.',
  },
  {
    title: 'Sustainable Practices',
    description: 'We are committed to using eco-friendly products and reducing our environmental impact.',
  },
];

export default function About() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Founded in 2020, Beauty has grown from a small local salon to a premier destination for natural beauty and wellness treatments. Our journey is built on a foundation of trust, expertise, and dedication to our clients' well-being.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label={member.name + "'s Instagram"}
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label={member.name + "'s LinkedIn"}
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                      aria-label={member.name + "'s Twitter"}
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}