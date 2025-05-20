import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { artists, tattooGallery, testimonials } from '../data/tattooData';

function Home() {
  // Show only 6 featured tattoos on home page
const featuredTattoos = tattooGallery.slice(0, 6);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/90 via-secondary-950/70 to-secondary-950/90"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-display mb-6 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NYK STUDIO
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium custom tattoos created by master artists. 
            Your vision, our expertise.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/gallery">
              <Button variant="primary" size="lg">
                View Our Gallery
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" size="lg">
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => {
            
          }}
        >
          <a 
            href="#about"
            className="inline-flex items-center text-white hover:text-primary-400 transition-colors"
          >
            <span className="mr-2">Scroll Down</span>
            <ChevronRight size={20} className="rotate-90" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding ink-splash bg-secondary-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/4125618/pexels-photo-4125618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Tattoo artist at work" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-display mb-6 text-white">Our Studio</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2022, NYK Studio has established itself as a premier tattoo destination, 
                known for exceptional artistry and a commitment to creating custom, meaningful tattoos.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of skilled artists specializes in a wide range of styles, from traditional to 
                contemporary, ensuring that every client receives a unique piece that reflects their vision.
              </p>
              <p className="text-gray-300 mb-8">
                We pride ourselves on our clean, welcoming studio environment and our dedication to the 
                highest standards of safety and hygiene.
              </p>
              <Link to="/about">
                <Button variant="primary">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="section-padding bg-secondary-950">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Designs" 
            subtitle="Explore our diverse portfolio of custom tattoos created by our talented artists." 
            centered 
            light
          />
          
          <div className="grid-gallery mb-12">
            {featuredTattoos.map((tattoo) => (
              <motion.div 
                key={tattoo.id}
                className="group relative aspect-square overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={tattoo.image} 
                  alt={tattoo.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-display text-white mb-1">{tattoo.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">by {tattoo.artist}</p>
                  <div className="flex flex-wrap gap-2">
                    {tattoo.categories.map((category, index) => (
                      <span key={index} className="text-xs bg-primary-600/80 px-2 py-1 rounded text-white">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/gallery">
              <Button variant="primary" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="section-padding bg-secondary-900 ink-splash">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Artists" 
            subtitle="Professional tattoo artists with years of experience and passion for their craft." 
            centered 
            light
          />
          
          <div className="flex items-center justify-center">
            {artists.map((artist) => (
              <motion.div 
                key={artist.id}
                className="bg-secondary-800 rounded-lg overflow-hidden shadow-xl w-96"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display text-white mb-1">{artist.name}</h3>
                  <p className="text-primary-400 text-sm mb-3">{artist.role}</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{artist.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="text-xs bg-secondary-700 px-2 py-1 rounded text-gray-300">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  {artist.instagram && (
                    <a 
                      href={`https://instagram.com/${artist.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 text-sm flex items-center"
                    >
                      @{artist.instagram}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="primary">
                More About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary-950">
        <div className="container-custom">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Hear what our clients have to say about their experiences with NYK Studio." 
            centered 
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 4).map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-secondary-900 p-6 rounded-lg shadow-lg border border-secondary-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-white">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                          className={i < testimonial.rating ? "text-yellow-500" : "text-gray-400"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <p className="text-xs text-gray-500 mt-4">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900">
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
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">Ready For Your Next Tattoo?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your consultation today and take the first step toward your next custom tattoo masterpiece.
              </p>
              <Link to="/booking">
                <Button variant="accent" size="lg">
                  Book Your Appointment
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;