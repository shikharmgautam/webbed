import React from 'react';
import { Rocket, Globe, Navigation, Shield, ChevronRight, Menu } from 'lucide-react';
import Mars3D from './components/Mars3D';
import Moon3D from './components/Moon3D';
import Jupiter3D from './components/Jupiter3D';

const topPicks = [
  {
    title: "Galactic Cruise",
    description: "Experience the ultimate luxury cruise through the Milky Way.",
    image: ""
  },
  {
    title: "Asteroid Mining",
    description: "Join our mining expedition and discover precious minerals.",
    image: "https://example.com/asteroid-mining.jpg"
  },
  {
    title: "Space Walk",
    description: "Take a walk in space and enjoy the breathtaking views of Earth.",
    image: "https://example.com/space-walk.jpg"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                STELLAR VOYAGES
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="hover:text-blue-400 transition-colors">Destinations</a>
              <a href="#experiences" className="hover:text-blue-400 transition-colors">Experiences</a>
              <a href="#technology" className="hover:text-blue-400 transition-colors">Technology</a>
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full flex items-center transition-all">
                Book Flight <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Your Journey to the
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Stars Begins Here
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience luxury space travel with cutting-edge technology and unparalleled safety.
              Discover the cosmos like never before.
            </p>
            <div className="flex space-x-4">
              <a href="#destinations" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center transition-all text-lg">
                Explore Destinations <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full transition-all text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exotic Destinations</h3>
              <p className="text-gray-400">
                From lunar bases to Martian colonies, explore the most breathtaking locations in our solar system.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <Navigation className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Navigation</h3>
              <p className="text-gray-400">
                State-of-the-art guidance systems ensure precise and efficient space travel.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maximum Safety</h3>
              <p className="text-gray-400">
                Your safety is our priority with redundant systems and experienced crew.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div id="destinations" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Moon Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
            <div className="flex-1">
              <Moon3D />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lunar Gateway
                <span className="block text-gray-400">Earth's Celestial Companion</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Experience the breathtaking views of Earth from our lunar resort. Walk where astronauts
                first stepped and enjoy luxury accommodations with Earth-rise views every morning.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center transition-all text-lg">
                Book Lunar Experience <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mars Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Mars
                <span className="block text-red-500">The Red Planet Awaits</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Be among the first to experience our luxury Mars resort. With pressurized domes,
                artificial gravity, and panoramic views of Olympus Mons, your stay will be unforgettable.
              </p>
              <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full flex items-center transition-all text-lg">
                Book Mars Experience <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="flex-1">
              <Mars3D />
            </div>
          </div>

          {/* Jupiter Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Jupiter3D />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Jupiter Orbital
                <span className="block text-orange-500">Giant of the Solar System</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Witness the grandeur of our solar system's largest planet from our orbital station.
                Watch the Great Red Spot and dance of Jupiter's moons from unprecedented proximity.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full flex items-center transition-all text-lg">
                Book Jupiter Experience <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div id="experiences" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Experiences
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Discover unique and unforgettable experiences that await you in space.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {topPicks.map((pick, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <img src={pick.image} alt={pick.title} className="w-full h-48 object-cover rounded-t-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{pick.title}</h3>
                <p className="text-gray-400">{pick.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div id="technology" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Technology
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Learn about the cutting-edge technology that powers our space voyages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <img src="https://example.com/tech1.jpg" alt="Tech 1" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hyperdrive Engines</h3>
              <p className="text-gray-400">
                Our hyperdrive engines allow for faster-than-light travel, making interstellar journeys possible.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <img src="https://example.com/tech2.jpg" alt="Tech 2" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Artificial Gravity</h3>
              <p className="text-gray-400">
                Experience the comfort of Earth-like gravity on our spacecraft with advanced artificial gravity systems.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <img src="https://example.com/tech3.jpg" alt="Tech 3" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quantum Communication</h3>
              <p className="text-gray-400">
                Stay connected with real-time communication across vast distances using quantum entanglement technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Top Picks
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Discover our most popular experiences and adventures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {topPicks.map((pick, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <img src={pick.image} alt={pick.title} className="w-full h-48 object-cover rounded-t-2xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{pick.title}</h3>
                <p className="text-gray-400">{pick.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;