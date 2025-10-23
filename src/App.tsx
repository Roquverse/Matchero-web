import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Candidate from './pages/Candidate'
import Jobs from './pages/Jobs'
import JobDetailPage from './pages/JobDetail'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="candidate" element={<Candidate />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:jobId" element={<JobDetailPage />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App



