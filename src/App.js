import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router-dom"; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
 import './App.css'; // This is the main stylesheet
 import Login from './components/Login'


const App = () => {
  
  const features = [
    { title: 'Door-to-Door Collection', description: 'Convenient and scheduled waste pickup.' },
    { title: 'Recycling Services', description: 'Proper segregation and processing of recyclables.' },
    { title: 'Community Awareness', description: 'Empowering communities through education.' },
    { title: 'Eco-Friendly Disposals', description: 'Sustainable methods for waste treatment.' },
  ];
  const router = createBrowserRouter([
  { 
    path: "/login", 
    element: <Login/>
   },
]);
 
  return (
    <>
     <div className="app"> 
      <Header/>
      <RouterProvider router={router} />
      <main>
        <HeroSection />
        <section className="features-section container" id="services">
          <h2>Our Services</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
          
  );
};
export default App;