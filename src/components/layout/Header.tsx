import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary-950/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Feather className="h-8 w-8 text-primary-500" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-display tracking-wider">NYK TATTOO STUDIO</span>
            <span className="text-xs text-gray-400 tracking-wider">PREMIUM TATTOO STUDIO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          <NavLink to="/booking" className="nav-link">Booking</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <Link to="/booking" className="btn-primary text-sm px-5 py-2 rounded">Book Now</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 bg-secondary-950/95 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6 p-8">
              <NavLink to="/" className="nav-link text-xl" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/gallery" className="nav-link text-xl" onClick={closeMenu}>Gallery</NavLink>
              <NavLink to="/booking" className="nav-link text-xl" onClick={closeMenu}>Booking</NavLink>
              <NavLink to="/about" className="nav-link text-xl" onClick={closeMenu}>About</NavLink>
              <NavLink to="/contact" className="nav-link text-xl" onClick={closeMenu}>Contact</NavLink>
              <Link to="/booking" className="btn-primary mt-4" onClick={closeMenu}>Book Now</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;