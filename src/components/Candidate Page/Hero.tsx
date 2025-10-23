
import { Link } from 'react-router-dom';

const Hero = () => {


  return (
    <>
    <section className="candidate-section">
        {/* Left Content Block */}
        <div className="candidate-content">
          <div className="candidate-frame">
            <h1 className="candidate-heading">
            Your next role, <br />
              <em>intelligently</em> matched
            </h1>
            <p className="candidate-desc">
            No endless job listings. No generic suggestions. We bring you roles that align with your skills, values, and ambition.
            </p>
            
            {/* Email Input Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              
              <Link 
                to="/jobs"
                className="btn-preline-primary px-8 py-4 whitespace-nowrap inline-block"
              >
                Join free. Start matching.
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Collage */}
        <div className="hero-image-container">
            {/* Main Image */}
            <div className="bg-image">
                <img src="/Blue petals.svg" alt="Happy professional woman" className="petal-image"/>
            </div>
            <div className="candidate-image">
                <img src="/hero 2.png" alt="Happy professional woman" />
            </div>
        </div>
      </section>
      </>
    );
  };
  
  export default Hero;
