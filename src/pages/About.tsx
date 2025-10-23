const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          About Matchero
        </h1>
        
        <div className="card mb-8">
          <p className="text-xl-2-regular text-gray-700 mb-4 ">
            <b>Matchero</b> is a modern platform designed to help teams collaborate and achieve their goals efficiently.
          </p>
          <p className="text-xl-2-regular text-gray-700 mb-4">
            Our mission is to provide powerful tools that make work easier, faster, and more enjoyable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h3 className="text-heading-3-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To create a world where teams can focus on what matters most - bringing their ideas to life without being held back by tools or technology.
            </p>
          </div>

          <div className="card">
            <h3 className="text-heading-3-bold text-gray-900 mb-3">Our Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Innovation & Excellence</li>
              <li>✓ User-Centric Design</li>
              <li>✓ Transparency & Trust</li>
              <li>✓ Continuous Improvement</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl-2-regular text-gray-600 mb-8">
            We're constantly improving and would love to hear from you.
          </p>
          <button className="btn btn-primary text-base-semibold px-8 py-3">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default About








