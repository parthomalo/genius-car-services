import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({});

useEffect(()=>{
    fetch(`http://localhost:5000/services/${serviceId}`)
    .then(res => res.json())
    .then(data => setService(data))
},[])
    return (
        <div>
            <h1>You about the book: {service.name}</h1>
            <div className='text-center'>
                <Link to ='/checkout'>
                    <button className='btn btn-primary mb-5'> Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;