import { useEffect } from 'react'
// import Header from '../components/Candidate Page/Header'
import Hero from '../components/Candidate Page/Hero'
import HowItWorks from '../components/Candidate Page/HowItWorks'
import BottomSection from '../components/Candidate Page/BottomSection'
import NextSection from '../components/Candidate Page/NextSection'
// import Footer from '../components/Candidate Page/Footer'
import CandidateSection from '../components/Candidate Page/CandidateSection'
import "../components/Candidate Page/index.css"

const Candidate = () => {
    useEffect(() => {
      // Initialize Preline components
      if (typeof window !== 'undefined') {
        import('preline/preline').then(() => {
          // @ts-ignore - Preline adds HSStaticMethods to window
          window.HSStaticMethods?.autoInit()
        })
      }
    }, [])
  
    return (
      <>
        {/* <Header /> */}
        <div className="petals">
           <Hero />
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDF0F6" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,106.7C960,128,1200,192,1320,224L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" className='wave-hero'></path></svg>
        <img src="/Blue petals.svg" alt="Hero Image" className='vector-hero' />
        <BottomSection />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CDF0F6" fill-opacity="1" d="M0,192L120,202.7C240,213,480,235,720,213.3C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" className='wave-hero'></path></svg>
       
        </div>
        <HowItWorks />
        <NextSection />
        <CandidateSection />
        {/* <Footer /> */}
      </>
    )
};

export default Candidate;

