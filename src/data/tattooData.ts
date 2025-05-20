export interface TattooGalleryItem {
  id: number;
  title: string;
  image: string;
  categories: string[];
  artist: string;
  description: string;
}

export interface Artist {
  id: number;
  name: string;
  image: string;
  role: string;
  bio: string;
  specialties: string[];
  instagram?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

export const categories = [
  'All',
  'Traditional',
  'Neo-Traditional',
  'Realism',
  'Black & Grey',
  'Color',
  'Tribal',
  'Japanese',
  'Geometric',
  'Watercolor',
  'Minimalist',
];

export const tattooGallery: TattooGalleryItem[] = [
  {
    id: 1,
    title: 'Japanese Dragon',
    image: 'https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Japanese', 'Color'],
    artist: 'Alex Chen',
    description: 'Traditional Japanese dragon design with vibrant colors and detailed scales.'
  },
  {
    id: 2,
    title: 'Wolf Portrait',
    image: '/src/assets/t1.jpg',
    categories: ['Realism', 'Black & Grey'],
    artist: 'Maria Rodriguez',
    description: 'Highly detailed wolf portrait with realistic fur textures and shading.'
  },
  {
    id: 3,
    title: 'Geometric Mandala',
    image: '/src/assets/t2.jpg',
    categories: ['Geometric', 'Minimalist'],
    artist: 'Jake Wilson',
    description: 'Precise geometric mandala design with perfect symmetry and clean lines.'
  },
  {
    id: 4,
    title: 'Traditional Rose',
    image: '/src/assets/t3.jpg',
    categories: ['Traditional', 'Color'],
    artist: 'Alex Chen',
    description: 'Classic American traditional rose with bold lines and vibrant colors.'
  },
  {
    id: 5,
    title: 'Watercolor Bird',
    image: '/src/assets/t4.jpg',
    categories: ['Watercolor', 'Color'],
    artist: 'Sarah Phillips',
    description: 'Free-flowing watercolor style bird with abstract color splashes.'
  },
  {
    id: 6,
    title: 'Tribal Sleeve',
    image: 'https://images.pexels.com/photos/2064501/pexels-photo-2064501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Tribal', 'Black & Grey'],
    artist: 'Jack Thompson',
    description: 'Polynesian inspired tribal sleeve design with intricate patterns.'
  },
  {
    id: 7,
    title: 'Neo-Traditional Fox',
    image: 'https://images.pexels.com/photos/4125589/pexels-photo-4125589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Neo-Traditional', 'Color'],
    artist: 'Maria Rodriguez',
    description: 'Colorful neo-traditional fox design with stylized features and bold outlines.'
  },
  {
    id: 8,
    title: 'Minimalist Linework',
    image: 'https://images.pexels.com/photos/5321334/pexels-photo-5321334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Minimalist', 'Black & Grey'],
    artist: 'Sarah Phillips',
    description: 'Clean, simple line work design with minimalist aesthetic.'
  },
  {
    id: 9,
    title: 'Realistic Lion',
    image: 'https://images.pexels.com/photos/3352877/pexels-photo-3352877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Realism', 'Black & Grey'],
    artist: 'Jake Wilson',
    description: 'Photorealistic lion portrait with incredible detail and depth.'
  }
];

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Nitin Nayak',
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'Founder & Master Artist',
    bio: 'With over 4 years of experience, Nitin specializes in Japanese and Traditional styles. His work has been featured in numerous tattoo publications worldwide.',
    specialties: ['Japanese', 'Traditional', 'Color'],
    instagram: 'nyk_tattoo_studio'
  },
 
  
   
  
 

];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aniket panwar',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjUoIDBEurfTIflh3uj597CemQ4lmTFhES6UM0AzzldYA28M7nm31A=w90-h90-p-rp-mo-br100',
    rating: 5,
    text: 'Nitin created an amazing Japanese sleeve for me. The detail and color work is incredible, and the whole experience was professional from start to finish.',
    date: '2023-08-15'
  },
  {
    id: 2,
    name: 'Vedanti kajrekar',
    image: '',
    rating: 5,
    text: 'This was my first tattoo and NYK TATTOO STUDIO got a perfect tattoo done. They got the exact tattoo I wanted. Actually, I was very scared but when they made me understand and made me comfortable, it was a very good experience. They explain very nicely and make the design as per your wish. Thank you so much to NYK TATTOO for the perfect tattoo. This experience was so good that I am now thinking of getting another tattoo done..',
    date: '2023-09-22'
  },
  {
    id: 3,
    name: 'Ritesh Ardekar',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjUuo3KgoJsQ4cMB_YwTosFd005qyBIpBT_SiJ0QDPsHhPAf4osA=w90-h90-p-rp-mo-ba1-br100',
    rating: 5,
    text: 'Recently visit this studio.... The artwork done by Nitin {owner of the studio} was beyond my expectations. He is a very talented and experienced artist as far i think. The studio is also well maintained and clean, any one looking to get them self inked I highly recommend NYK tattoo studio...',
    date: '2023-07-03'
  },
  {
    id: 4,
    name: 'Joshua Dsouza',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVhCajBLRJ5rNPKuOkzh12q8NBspCRLfQHWJnrUNw4jk_WUnhtq=w90-h90-p-rp-mo-ba1-br100',
    rating: 5,
    text: 'A very hygienic place to visit and also the staff is really very good at their work. Thanks to Nitin for been very patient with the design which I showed and very well executed.. would recommend people to visit and get yours done now...',
    date: '2023-10-12'
  }
];