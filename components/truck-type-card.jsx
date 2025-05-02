"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function TruckTypeCard({ truck }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link to={`/truck-types/${truck.id}`} className="block">
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: truck.id * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full">
          <img
            src={truck.image || "/placeholder.svg"}
            alt={truck.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">{truck.name}</h3>
          <p className="text-gray-600">{truck.description}</p>
          <div className="text-yellow-500 font-medium flex items-center mt-3">
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
      </motion.div>
    </Link>
  )
}
