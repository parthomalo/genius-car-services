import React from 'react';
import useServices from '../Hook/useHook';

const ManageServices = () => {
    const [services] = useServices()
    
    return (
        <div>
            <h1>This is ManageServices!!</h1>
        </div>
    );
};

export default ManageServices;