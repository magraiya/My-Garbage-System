import Header from './Header';
import '../Styles/services.css';

const Services = () => {
    const services = [
        {
            title: "Door-to-Door Collection",
            description: "Regular scheduled waste pickup from your doorstep"
        },
        {
            title: "Waste Segregation",
            description: "Professional sorting of recyclable and non-recyclable waste"
        },
        {
            title: "Smart Monitoring",
            description: "Real-time tracking of collection status and schedule"
        }
    ];

    return (
        <div className="services-page">
            <Header />
            <main className="services-container">
                <h1 className="services-title">Our Services</h1>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Services;