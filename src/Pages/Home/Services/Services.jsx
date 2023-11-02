// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services = useServices()
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctor-server-psi-tawny.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-orange-500">Services</h1>
                <h2 className="text-5xl font-bold">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;