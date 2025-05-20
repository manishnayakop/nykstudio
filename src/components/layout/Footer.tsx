import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Feather } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Feather className="h-8 w-8 text-primary-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-display tracking-wider text-white">NYK STUDIO</span>
                <span className="text-xs tracking-wider">PREMIUM TATTOO STUDIO</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Creating custom, high-quality tattoos that tell your unique story. 
              Professional artists, exceptional designs, lifelong memories.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/nyk_tattoo_studio" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-500 transition-colors" 
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-500 transition-colors" 
                aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-500 transition-colors" 
                aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary-500 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-primary-500 transition-colors">Book Appointment</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Custom Tattoo Design</li>
              <li className="text-gray-400">Cover-Up Tattoos</li>
              <li className="text-gray-400">Color & Black/Grey</li>
              <li className="text-gray-400">Fine Line & Portrait</li>
              <li className="text-gray-400">Traditional & Neo-Traditional</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Shop No. 7, Upendra CHS, 401202, near Sai baba tempal, Sai Nagar, Vasai West, Vasai-Virar, Maharashtra 401202</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +91 7983530841
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@inkdynasty.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@inkdynasty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} NYK Tattoo Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;