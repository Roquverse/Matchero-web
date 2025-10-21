const BottomSection = () => {
  return (
    <div className="bg-white py-20 bottom-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-display-serif-2 font-regular text-gray-900 mb-6">
          Only roles that matter
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 font-regular leading-relaxed mb-12 max-w-2xl mx-auto">
          Say goodbye to irrelevant job listings. We surface positions <strong>you care about</strong>—right when they're available.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center border-2 border-gray-900 text-gray-900 bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
          Show me roles that fit
        </button>

        {/* Large Image Placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="w-full" style={{ width: '1000px', marginTop: '40px' }}>
            <img 
              src="/button-image.png" 
              alt="Placeholder Image" 
              className="object-cover"
              style={{width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomSection


