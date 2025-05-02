import { Link } from "react-router-dom"
import { Truck, Phone, Mail } from "lucide-react"
import WhatsAppButton from "../components/whatsapp-button"
import TruckTypeCard from "../components/truck-type-card"
import AnimatedSection from "../components/animated-section"

export default function HomePage() {
  const truckTypes = [
    {
      id: 1,
      name: "Box Truck",
      description: "Ideal for local deliveries and small to medium cargo.",
      image: "/images/box-truck.png",
    },
    {
      id: 2,
      name: "Dry Van",
      description: "Perfect for shipping palletized, boxed, or loose freight.",
      image: "/images/dry-van.png",
    },
    {
      id: 3,
      name: "Flatbed",
      description: "Great for oversized or oddly shaped cargo that needs open access.",
      image: "/images/flatbed.png",
    },
    {
      id: 4,
      name: "Reefer",
      description: "Temperature-controlled trailers for perishable goods.",
      image: "/images/reefer.png",
    },
    {
      id: 5,
      name: "Hot Shot",
      description: "Expedited deliveries with medium-duty trucks for time-sensitive loads.",
      image: "/images/hot-shot.png",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="/images/hero-truck.png"
          alt="Truck on highway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Truck Dispatching Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Connecting carriers with shippers for efficient and reliable freight transportation
            </p>
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Dispatching Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Load Matching</h3>
                <p className="text-gray-600 text-center">
                  We find the best loads for your trucks based on location, equipment, and preferences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-center">
                  Our team is available around the clock to handle any issues that may arise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Paperwork Management</h3>
                <p className="text-gray-600 text-center">
                  We handle all the paperwork, invoicing, and administrative tasks for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Truck Types Section */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Truck Types We Dispatch</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We specialize in dispatching various types of trucks to meet all your freight needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {truckTypes.map((truck) => (
                <TruckTypeCard key={truck.id} truck={truck} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Trucking Operations?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our network of carriers and experience hassle-free dispatching services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-gray-600 text-sm">Owner-Operator</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Since working with this dispatching service, I've seen a 30% increase in my revenue. They always find
                  me the best loads and handle all the paperwork."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">Fleet Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Their 24/7 support has been a game-changer for our fleet. Any issues that arise are handled promptly
                  and professionally."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Mike Davis</h4>
                    <p className="text-gray-600 text-sm">Small Fleet Owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I've been able to focus on growing my business instead of worrying about finding loads. Their
                  dispatching service is worth every penny."
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <WhatsAppButton />
    </main>
  )
}
