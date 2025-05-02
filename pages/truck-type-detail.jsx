"use client"

import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Truck, Weight, Ruler, Package } from "lucide-react"
import AnimatedSection from "../components/animated-section"

export default function TruckTypeDetailPage() {
  const params = useParams()
  const navigate = useNavigate()
  const id = Number(params.id)

  const truckTypes = [
    {
      id: 1,
      name: "Box Truck",
      description: "Ideal for local deliveries and small to medium cargo.",
      image: "/images/box-truck.png",
      details:
        "Box trucks feature an enclosed cargo area with a roll-up door. They typically range from 12 to 26 feet in length and can carry up to 10,000 pounds of cargo. Perfect for urban deliveries, furniture, and appliances.",
      specs: {
        capacity: "Up to 10,000 lbs",
        length: "12-26 feet",
        bestFor: "Urban deliveries, furniture, appliances",
        features: "Enclosed cargo area, roll-up door, liftgate options",
      },
    },
    {
      id: 2,
      name: "Dry Van",
      description: "Perfect for shipping palletized, boxed, or loose freight.",
      image: "/images/dry-van.png",
      details:
        "Dry vans are the most common type of trailers on the road. They're fully enclosed, weather-resistant, and typically 53 feet long. They can haul up to 45,000 pounds of non-perishable goods like clothing, electronics, and packaged foods.",
      specs: {
        capacity: "Up to 45,000 lbs",
        length: "48-53 feet",
        bestFor: "Palletized goods, boxed items, non-perishables",
        features: "Fully enclosed, weather-resistant, loading dock compatible",
      },
    },
    {
      id: 3,
      name: "Flatbed",
      description: "Great for oversized or oddly shaped cargo that needs open access.",
      image: "/images/flatbed.png",
      details:
        "Flatbed trailers have no sides or roof, allowing for loading from all angles. They're ideal for construction materials, machinery, and other items that don't require protection from the elements. Standard flatbeds are 48-53 feet long.",
      specs: {
        capacity: "Up to 48,000 lbs",
        length: "48-53 feet",
        bestFor: "Construction materials, machinery, oversized items",
        features: "Open design, multi-angle loading, tarping options",
      },
    },
    {
      id: 4,
      name: "Reefer",
      description: "Temperature-controlled trailers for perishable goods.",
      image: "/images/reefer.png",
      details:
        "Refrigerated trailers (reefers) maintain specific temperatures for transporting perishable items like food, pharmaceuticals, and chemicals. They have built-in refrigeration units and can maintain temperatures from -20°F to 70°F.",
      specs: {
        capacity: "Up to 44,000 lbs",
        length: "48-53 feet",
        bestFor: "Food, pharmaceuticals, temperature-sensitive items",
        features: "Temperature control (-20°F to 70°F), insulated walls, monitoring systems",
      },
    },
    {
      id: 5,
      name: "Hot Shot",
      description: "Expedited deliveries with medium-duty trucks for time-sensitive loads.",
      image: "/images/hot-shot.png",
      details:
        "Hot shot trucking uses medium-duty trucks (typically Class 3-5) with flatbed trailers for expedited, time-sensitive deliveries. They're more cost-effective than full-sized semis for smaller loads that need to be delivered quickly.",
      specs: {
        capacity: "Up to 15,000 lbs",
        length: "20-40 feet",
        bestFor: "Time-sensitive deliveries, smaller loads, expedited freight",
        features: "Faster delivery, more cost-effective for smaller loads",
      },
    },
  ]

  const truckType = truckTypes.find((truck) => truck.id === id)

  // Redirect to truck types page if truck not found
  React.useEffect(() => {
    if (!truckType) {
      navigate("/truck-types")
    }
  }, [truckType, navigate])

  if (!truckType) {
    return null
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={truckType.image || "/placeholder.svg"}
          alt={truckType.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{truckType.name}</h1>
          <p className="text-xl max-w-3xl">{truckType.description}</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/truck-types"
          className="inline-flex items-center text-gray-600 hover:text-yellow-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Truck Types
        </Link>
      </div>

      {/* Truck Details */}
      <AnimatedSection>
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6">About {truckType.name}s</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{truckType.details}</p>

                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Weight className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Capacity</h4>
                        <p className="text-gray-600">{truckType.specs.capacity}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ruler className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Length</h4>
                        <p className="text-gray-600">{truckType.specs.length}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Package className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Best For</h4>
                        <p className="text-gray-600">{truckType.specs.bestFor}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Features</h4>
                        <p className="text-gray-600">{truckType.specs.features}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] lg:h-auto">
                  <img
                    src={truckType.image || "/placeholder.svg"}
                    alt={truckType.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book a {truckType.name}?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our dispatching team to get started with your {truckType.name.toLowerCase()} freight
              transportation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/truck-types"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                View Other Truck Types
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
