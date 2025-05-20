import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
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
      <section className="section-padding bg-secondary-900 ink-splash">
        <div className="container-custom">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have questions? We'd love to hear from you. Reach out through any of the methods below." 
            centered 
            light
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white mb-2">Our Location</h3>
                    <address className="text-gray-300 not-italic">
                    Shop No. 7, Upendra CHS, 401202, near Sai baba tempal, Sai Nagar, Vasai West, Vasai-Virar, Maharashtra 401202<br />
                      <br />
                  
                    </address>
                    <p className="text-gray-400 mt-2">
                      <strong className="text-gray-300">Hours:</strong> Monday - Saturday, 10am - 10pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white mb-2">Phone</h3>
                    <p className="text-gray-300">
                      <a href="tel:+11234567890" className="hover:text-primary-400 transition-colors">
                        +91 7983530841
                      </a>
                    </p>
                    <p className="text-gray-400 mt-2">
                      Available during business hours for inquiries and booking
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@inkdynasty.com" className="hover:text-primary-400 transition-colors">
                        info@inkdynasty.com
                      </a>
                    </p>
                    <p className="text-gray-400 mt-2">
                      We'll respond to your email within 24-48 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white mb-2">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href= "" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                        <Instagram size={22} />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                        <Facebook size={22} />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                        <Twitter size={22} />
                      </a>
                    </div>
                    <p className="text-gray-400 mt-2">
                      Follow us for the latest designs and studio updates
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-secondary-800 rounded-lg p-8 shadow-xl">
                {!submitted ? (
                  <>
                    <h3 className="text-2xl font-display text-white mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth 
                        loading={submitting}
                        icon={<Send size={18} />}
                      >
                        Send Message
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out! We've received your message and will get back to you soon.
                    </p>
                    <Button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      variant="secondary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-secondary-950 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279992626!2d-74.11808646136974!3d40.70556255554443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1631379807648!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="NYK Studio Location"
        ></iframe>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our tattoo services." 
            centered 
            light
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-medium text-white mb-3">Do I need to make an appointment?</h3>
              <p className="text-gray-300">
                Yes, we work by appointment only to ensure each client receives our full attention and the best possible experience. You can book through our website or by calling us directly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-medium text-white mb-3">How much does a tattoo cost?</h3>
              <p className="text-gray-300">
                Tattoo pricing varies based on size, complexity, placement, and the artist. We provide personalized quotes during consultations to ensure transparency and fair pricing for your specific design.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-medium text-white mb-3">What should I do before my appointment?</h3>
              <p className="text-gray-300">
                Get plenty of rest, stay hydrated, eat a good meal before coming in, and avoid alcohol for 24 hours prior. Wear comfortable clothing that provides easy access to the tattoo area.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-medium text-white mb-3">How do I care for my new tattoo?</h3>
              <p className="text-gray-300">
                We provide detailed aftercare instructions after your session. Generally, you'll need to keep the area clean, moisturized, protected from the sun, and avoid swimming or soaking for 2-3 weeks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-950">
        <div className="container-custom">
          <motion.div 
            className="bg-primary-900 rounded-xl p-10 md:p-16 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-ink-splash bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">Ready to Begin Your Tattoo Journey?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a consultation today and take the first step toward your custom tattoo masterpiece.
              </p>
              <Button variant="accent" size="lg" >
                Book Your Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;