import AnimatedSection from "../components/animated-section"

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img src="/images/about-hero.png" alt="Truck fleet" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl">Your trusted partner in truck dispatching services</p>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, TruckDispatch began with a simple mission: to bridge the gap between carriers and
                  shippers in the trucking industry. What started as a small operation has grown into a nationwide
                  service trusted by hundreds of carriers.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, having spent years as a truck driver, understood the challenges faced by carriers in
                  finding consistent, well-paying loads. This firsthand experience shaped our approach to dispatching,
                  focusing on fair rates, timely payments, and excellent customer service.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be one of the leading dispatching services in the country, helping carriers of
                  all sizes maximize their profits and streamline their operations.
                </p>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="/images/about-story.png"
                  alt="Company history"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Rest of the About page content... */}
      {/* Values, Team, Call to Action sections would go here */}
    </main>
  )
}
