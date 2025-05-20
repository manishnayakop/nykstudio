import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { artists } from '../data/tattooData';

function About() {
  return (
    <div className="pt-20">
      {/* Studio Story */}
      <section className="section-padding bg-secondary-900 ink-splash">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/4125616/pexels-photo-4125616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our tattoo studio interior" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Story"
                subtitle="How NYK Tattoo Studio became a premier tattoo destination"
                light
              />
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2015 by master tattoo artist Alex Chen, NYK Studio was born from a passion for creating meaningful, high-quality tattoo art that tells stories and celebrates individuality.
                </p>
                <p>
                  What began as a small studio with just two artists has grown into a premier tattoo destination, known for exceptional craftsmanship, innovative designs, and a welcoming atmosphere that puts clients at ease.
                </p>
                <p>
                  Our journey has been guided by a commitment to artistic excellence, strict health and safety standards, and a client-first approach. We believe every tattoo should be as unique as the person wearing it.
                </p>
                <p>
                  Today, NYK Studio is home to a diverse team of talented artists, each bringing their own unique style and expertise to create custom tattoos that our clients wear with pride.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary-900 relative">
        <div className="absolute inset-0 bg-ink-splash bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-200 italic">
              "To create exceptional tattoo art that transforms ideas into lifelong expressions, 
              delivered with the highest standards of artistic integrity, technical precision, 
              and client care in a safe, welcoming environment."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="section-padding bg-secondary-950">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Artists" 
            subtitle="The talented team behind NYK Studio's exceptional tattoo art." 
            centered 
            light
          />
          
          <div className="space-y-24 mt-16">
            {artists.map((artist, index) => (
              <motion.div 
                key={artist.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="rounded-lg shadow-2xl h-96 w-full object-cover object-center"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-3xl font-display text-white mb-2">{artist.name}</h3>
                  <p className="text-primary-400 text-lg mb-6">{artist.role}</p>
                  
                  <div className="space-y-4 text-gray-300 mb-8">
                    <p>{artist.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty, i) => (
                        <span 
                          key={i} 
                          className="bg-secondary-800 px-3 py-1 rounded-full text-gray-300 text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {artist.instagram && (
                    <a 
                      href={`https://instagram.com/${artist.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <Instagram size={20} className="mr-2" />
                      @{artist.instagram}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Values */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom">
          <SectionHeading 
            title="Our Values" 
            subtitle="The principles that guide our work and client relationships." 
            centered 
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div 
              className="bg-secondary-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-white mb-3">Artistic Excellence</h3>
              <p className="text-gray-400">
                We pursue continuous growth and improvement in our craft, staying at the forefront of tattoo artistry.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-white mb-3">Client Collaboration</h3>
              <p className="text-gray-400">
                We listen carefully to our clients' ideas and work together to create tattoos that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-white mb-3">Safety First</h3>
              <p className="text-gray-400">
                We maintain the highest standards of cleanliness, sterilization, and safety in every aspect of our practice.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary-800 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-display text-white mb-3">Community</h3>
              <p className="text-gray-400">
                We foster an inclusive environment where everyone is welcome and creativity is celebrated.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;