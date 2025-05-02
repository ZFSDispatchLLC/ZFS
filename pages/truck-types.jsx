import { Link } from "react-router-dom"
import AnimatedSection from "../components/animated-section"

export default function TruckTypesPage() {
  const truckTypes = [
    {
      id: 1,
      name: "Box Truck",
      description: "Ideal for local deliveries and small to medium cargo.",
      image: "/images/box-truck.png",
      details:
        "Box trucks feature an enclosed cargo area with a roll-up door. They typically range from 12 to 26 feet in length and can carry up to 10,000 pounds of cargo. Perfect for urban deliveries, furniture, and appliances.",
    },
    {
      id: 2,
      name: "Dry Van",
      description: "Perfect for shipping palletized, boxed, or loose freight.",
      image: "/images/dry-van.png",
      details:
        "Dry vans are the most common type of trailers on the road. They're fully enclosed, weather-resistant, and typically 53 feet long. They can haul up to 45,000 pounds of non-perishable goods like clothing, electronics, and packaged foods.",
    },
    {
      id: 3,
      name: "Flatbed",
      description: "Great for oversized or oddly shaped cargo that needs open access.",
      image: "/images/flatbed.png",
      details:
        "Flatbed trailers have no sides or roof, allowing for loading from all angles. They're ideal for construction materials, machinery, and other items that don't require protection from the elements. Standard flatbeds are 48-53 feet long.",
    },
    {
      id: 4,
      name: "Reefer",
      description: "Temperature-controlled trailers for perishable goods.",
      image: "/images/reefer.png",
      details:
        "Refrigerated trailers (reefers) maintain specific temperatures for transporting perishable items like food, pharmaceuticals, and chemicals. They have built-in refrigeration units and can maintain temperatures from -20°F to 70°F.",
    },
    {
      id: 5,
      name: "Hot Shot",
      description: "Expedited deliveries with medium-duty trucks for time-sensitive loads.",
      image: "/images/hot-shot.png",
      details:
        "Hot shot trucking uses medium-duty trucks (typically Class 3-5) with flatbed trailers for expedited, time-sensitive deliveries. They're more cost-effective than full-sized semis for smaller loads that need to be delivered quickly.",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <img
          src="/images/truck-types-hero.png"
          alt="Various truck types"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Truck Types We Dispatch</h1>
          <p className="text-xl max-w-3xl">
            We specialize in dispatching various types of trucks to meet all your freight needs
          </p>
        </div>
      </section>

      {/* Truck Types Grid */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {truckTypes.map((truck) => (
                <Link to={`/truck-types/${truck.id}`} key={truck.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
                    <div className="relative h-48 w-full">
                      <img
                        src={truck.image || "/placeholder.svg"}
                        alt={truck.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                        {truck.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{truck.description}</p>
                      <div className="text-yellow-500 font-medium flex items-center">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1 group-hover:ml-2 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Truck?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our dispatching experts can help you select the best truck type for your specific freight needs
            </p>
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
