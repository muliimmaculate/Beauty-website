import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM'
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Get service from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceFromUrl = params.get('service');
    if (serviceFromUrl) {
      // You could set this in a form field or state
      console.log('Selected service:', serviceFromUrl);
    }
  }, [location]);

  const onSubmit = (data) => {
    console.log('Form submitted:', { ...data, date: selectedDate, time: selectedTime });
    // Here you would typically send this to your backend
    alert('Booking submitted successfully!');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-serif font-bold mb-6">Select Date</h2>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(31)].map((_, i) => {
                const date = new Date(2024, 1, i + 1);
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                    className={`p-4 rounded-lg border transition-colors ${
                      selectedDate === date.toISOString().split('T')[0]
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'hover:border-primary-600'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-serif font-bold mb-6">Select Time</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-4 rounded-lg border transition-colors ${
                    selectedTime === time
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'hover:border-primary-600'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-serif font-bold mb-6">Your Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="John Doe"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="(123) 456-7890"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Special Requests</label>
                <textarea
                  {...register('notes')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-600"
                  rows="4"
                  placeholder="Any special requests or notes..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-gray-600">
            Select your preferred date and time for your beauty treatment.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-primary-600 text-white' : 'bg-gray-200'
                }`}
              >
                {stepNumber === 1 && <FaCalendar />}
                {stepNumber === 2 && <FaClock />}
                {stepNumber === 3 && <FaUser />}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-20 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="btn btn-outline"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              onClick={() => setStep(step + 1)}
              className="btn btn-primary ml-auto"
              disabled={
                (step === 1 && !selectedDate) ||
                (step === 2 && !selectedTime)
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 