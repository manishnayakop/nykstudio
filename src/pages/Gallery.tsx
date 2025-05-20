import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { categories, tattooGallery, TattooGalleryItem } from '../data/tattooData';
import Button from '../components/ui/Button';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedImageId, setExpandedImageId] = useState<number | null>(null);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  // Filter tattoos based on selected category and search term
  const filteredTattoos = tattooGallery.filter((tattoo) => {
    const matchesCategory = selectedCategory === 'All' || tattoo.categories.includes(selectedCategory);
    const matchesSearch = tattoo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tattoo.artist.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (id: number) => {
    setExpandedImageId(id);
  };

  const closeExpandedImage = () => {
    setExpandedImageId(null);
  };

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  // Find the expanded tattoo if there is one
  const expandedTattoo = expandedImageId ? tattooGallery.find(tattoo => tattoo.id === expandedImageId) : null;

  return (
    <div className="pt-20">
      {/* Gallery Hero */}
      <section className="relative py-20 bg-secondary-900">
        <div className="container-custom">
          <SectionHeading 
            title="Tattoo Gallery" 
            subtitle="Browse our extensive collection of custom tattoos created by our talented artists." 
            centered 
            light
          />
          
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by title or artist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-secondary-800 text-white pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="secondary" 
                onClick={toggleFilterMenu}
                className="w-full flex items-center justify-center gap-2"
              >
                <Filter size={20} />
                <span>Filter</span>
              </Button>
            </div>
          </div>
          
          {/* Mobile filter menu */}
          <AnimatePresence>
            {filterMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-secondary-800 rounded-md p-4 mb-6 overflow-hidden"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-white">Filter Categories</h3>
                  <button onClick={toggleFilterMenu} className="text-gray-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setFilterMenuOpen(false);
                      }}
                      className={`px-4 py-2 rounded-full text-sm ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-secondary-700 text-gray-300 hover:bg-secondary-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Desktop category filters */}
          <div className="hidden md:flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-800 text-gray-300 hover:bg-secondary-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid-gallery">
            {filteredTattoos.length > 0 ? (
              filteredTattoos.map((tattoo) => (
                <motion.div 
                  key={tattoo.id}
                  layoutId={`tattoo-${tattoo.id}`}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleImageClick(tattoo.id)}
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
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-400 text-xl">No tattoos found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedTattoo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={closeExpandedImage}
          >
            <motion.div
              layoutId={`tattoo-${expandedTattoo.id}`}
              className="relative max-w-4xl w-full bg-secondary-900 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                onClick={closeExpandedImage}
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img 
                    src={expandedTattoo.image} 
                    alt={expandedTattoo.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-display text-white mb-2">{expandedTattoo.title}</h3>
                  <p className="text-primary-400 mb-4">Artist: {expandedTattoo.artist}</p>
                  <p className="text-gray-300 mb-6">{expandedTattoo.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-white text-lg mb-2">Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {expandedTattoo.categories.map((category, index) => (
                        <span key={index} className="bg-secondary-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    onClick={closeExpandedImage}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;