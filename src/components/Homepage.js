import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import '../Styles/homepage.css'

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage