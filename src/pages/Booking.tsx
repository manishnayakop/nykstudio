import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Upload, User, Mail, Phone, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

type BookingStep = 'personalInfo' | 'tattooDetails' | 'confirmation';

function Booking() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('personalInfo');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tattooType: '',
    placement: '',
    size: '',
    description: '',
    referenceImage: null as File | null,
    preferredDate: '',
    preferredTime: '',
    additionalInfo: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, referenceImage: e.target.files[0] });
    }
  };

  const nextStep = () => {
    if (currentStep === 'personalInfo') {
      setCurrentStep('tattooDetails');
    } else if (currentStep === 'tattooDetails') {
      setCurrentStep('confirmation');
    }
  };

  const prevStep = () => {
    if (currentStep === 'tattooDetails') {
      setCurrentStep('personalInfo');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('tattooDetails');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="section-padding relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-ink-splash bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="Book Your Appointment" 
            subtitle="Fill out the form below to schedule a consultation with one of our talented artists." 
            centered 
            light
          />
          
          {!submitted ? (
            <div className="max-w-3xl mx-auto bg-secondary-800 rounded-lg shadow-xl overflow-hidden">
              {/* Progress Steps */}
              <div className="bg-secondary-900 p-4">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === 'personalInfo' || currentStep === 'tattooDetails' || currentStep === 'confirmation' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-700 text-gray-400'
                    }`}>
                      <User size={16} />
                    </div>
                    <span className={`ml-2 text-sm ${
                      currentStep === 'personalInfo' ? 'text-white font-medium' : 'text-gray-400'
                    }`}>
                      Personal Info
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === 'tattooDetails' || currentStep === 'confirmation' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-700 text-gray-400'
                    }`}>
                      <MessageSquare size={16} />
                    </div>
                    <span className={`ml-2 text-sm ${
                      currentStep === 'tattooDetails' ? 'text-white font-medium' : 'text-gray-400'
                    }`}>
                      Tattoo Details
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === 'confirmation' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-700 text-gray-400'
                    }`}>
                      <Calendar size={16} />
                    </div>
                    <span className={`ml-2 text-sm ${
                      currentStep === 'confirmation' ? 'text-white font-medium' : 'text-gray-400'
                    }`}>
                      Confirmation
                    </span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 'personalInfo' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-medium text-white mb-6">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address*
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number*
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="button" onClick={nextStep}>
                        Next: Tattoo Details
                      </Button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 2: Tattoo Details */}
                {currentStep === 'tattooDetails' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-medium text-white mb-6">Tattoo Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="tattooType" className="block text-sm font-medium text-gray-300 mb-1">
                          Tattoo Style*
                        </label>
                        <select
                          id="tattooType"
                          name="tattooType"
                          value={formData.tattooType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">Select a style</option>
                          <option value="Traditional">Traditional</option>
                          <option value="Neo-Traditional">Neo-Traditional</option>
                          <option value="Realism">Realism</option>
                          <option value="Black & Grey">Black & Grey</option>
                          <option value="Japanese">Japanese</option>
                          <option value="Tribal">Tribal</option>
                          <option value="Geometric">Geometric</option>
                          <option value="Watercolor">Watercolor</option>
                          <option value="Minimalist">Minimalist</option>
                          <option value="Other">Other (describe below)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="placement" className="block text-sm font-medium text-gray-300 mb-1">
                          Placement on Body*
                        </label>
                        <input
                          type="text"
                          id="placement"
                          name="placement"
                          value={formData.placement}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., Forearm, Back, Leg"
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-gray-300 mb-1">
                        Approximate Size*
                      </label>
                      <input
                        type="text"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., 3x5 inches, Half sleeve, Full back"
                        className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                        Tattoo Description*
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Describe your tattoo idea in detail..."
                        className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Reference Image (Optional)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-secondary-600 rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload size={24} className="mx-auto text-gray-400" />
                          <div className="flex text-sm text-gray-400">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md font-medium text-primary-400 hover:text-primary-300 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                accept="image/*"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                          {formData.referenceImage && (
                            <p className="text-sm text-primary-400">
                              {formData.referenceImage.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="secondary" type="button" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="button" onClick={nextStep}>
                        Next: Scheduling
                      </Button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Confirmation */}
                {currentStep === 'confirmation' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-medium text-white mb-6">Schedule Your Appointment</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-1">
                          Preferred Date*
                        </label>
                        <div className="relative">
                          <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-1">
                          Preferred Time*
                        </label>
                        <div className="relative">
                          <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="">Select a time</option>
                            <option value="Morning (10am-12pm)">Morning (10am-12pm)</option>
                            <option value="Early Afternoon (12pm-2pm)">Early Afternoon (12pm-2pm)</option>
                            <option value="Late Afternoon (2pm-5pm)">Late Afternoon (2pm-5pm)</option>
                            <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-1">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Any other details you'd like us to know..."
                        className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      ></textarea>
                    </div>
                    
                    <div className="bg-secondary-900 p-4 rounded-md">
                      <h4 className="text-white font-medium mb-2">What happens next?</h4>
                      <p className="text-gray-400 text-sm">
                        After you submit this form, we'll review your tattoo request and contact you within 24-48 hours to confirm your appointment and discuss any details. A deposit may be required to secure your booking.
                      </p>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="secondary" type="button" onClick={prevStep}>
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        variant="primary"
                        loading={submitting}
                      >
                        Submit Booking Request
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto bg-secondary-800 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-display text-white mb-4">Booking Request Submitted!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your booking request, {formData.firstName}! We've received your information and will contact you within 24-48 hours at {formData.email} to confirm your appointment.
              </p>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={20} className="text-primary-500" />
                  <span>Requested Date: {formData.preferredDate}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={20} className="text-primary-500" />
                  <span>Requested Time: {formData.preferredTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-primary-500" />
                  <span>123 Ink Street, Tattoo District, New York, NY 10001</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Booking;