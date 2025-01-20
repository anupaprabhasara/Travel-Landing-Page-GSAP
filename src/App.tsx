import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import {
  Plane,
  MapPin,
  Calendar,
  Star,
  Users,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Search,
  Menu,
} from 'lucide-react';
import Santorini from './assets/santorini.avif';
import Bali from './assets/bali.avif';
import Maldives from './assets/maldives.avif';
import Hero from './assets/hero.avif';

gsap.registerPlugin(ScrollTrigger);

const FlyingPlane: React.FC = () => {
  const { scene } = useGLTF('/src/assets/plane.glb');
  const planeRef = useRef<THREE.Object3D>();

  useEffect(() => {
    const plane = planeRef.current;

    if (plane) {
      plane.rotation.y = -100;
      gsap.fromTo(
        plane.position,
        { x: -45, y: 0, z: -75 },
        {
          x: 5,
          y: 0,
          z: 12,
          duration: 10,
          repeat: -1,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return <primitive ref={planeRef} object={scene} />;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <span className="text-lg sm:text-xl font-bold text-blue-600">
                TravelEase
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a
                href="#destinations"
                className="text-gray-600 hover:text-blue-600"
              >
                Destinations
              </a>
              <a href="#tours" className="text-gray-600 hover:text-blue-600">
                Tours
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </nav>
            <button className="hidden md:block bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Home
                </a>
                <a
                  href="#destinations"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Destinations
                </a>
                <a href="#tours" className="text-gray-600 hover:text-blue-600">
                  Tours
                </a>
                <a href="#about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full">
                  Book Now
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        {/* 3D Flying Plane Canvas */}
        <Canvas className="absolute inset-0 z-10 pointer-events-none h-full w-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <FlyingPlane /> {/* Use the renamed component */}
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories
              with our curated travel experiences
            </p>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span className="text-sm sm:text-base">Destination</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full p-2 border rounded text-sm sm:text-base text-gray-400"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span className="text-sm sm:text-base">Date</span>
                  </div>
                  <input
                    type="date"
                    className="w-full p-2 border rounded text-sm sm:text-base text-gray-400"
                  />
                </div>
                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-700 text-sm sm:text-base">
                  <Search className="h-4 sm:h-5 w-4 sm:w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Santorini, Greece',
                image: Santorini,
                price: '$1,299',
              },
              {
                title: 'Bali, Indonesia',
                image: Bali,
                price: '$899',
              },
              {
                title: 'Maldives',
                image: Maldives,
                price: '$1,499',
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {destination.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">
                      {destination.price}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-blue-600" />,
                title: 'Best Experiences',
                description: 'Curated experiences that exceed expectations',
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Expert Guides',
                description: 'Professional local guides for authentic experiences',
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: 'Flexible Booking',
                description: 'Easy booking process with free cancellation',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'New York, USA',
                text: 'Amazing experience! The tour was well organized and our guide was knowledgeable and friendly.',
              },
              {
                name: 'Mark Wilson',
                location: 'London, UK',
                text: 'Exceeded all expectations. Will definitely book another tour with TravelEase.',
              },
              {
                name: 'Emma Davis',
                location: 'Sydney, Australia',
                text: 'Perfect way to explore new destinations. Everything was taken care of!',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Plane className="h-5 sm:h-6 w-5 sm:w-6 text-blue-400" />
                <span className="text-lg sm:text-xl font-bold">TravelEase</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
                Making your travel dreams come true with unforgettable experiences
                around the globe.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Destinations', 'Tours', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base flex items-center"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Contact Info</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base flex items-center space-x-2"
                  >
                    <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span>+1 234 567 890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@travelease.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base flex items-center space-x-2"
                  >
                    <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span>info@travelease.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
                  { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    label: 'Instagram',
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Stay updated with our latest offers and travel tips
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;