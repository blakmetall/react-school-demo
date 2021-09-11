import React from 'react';

const ColorFlags = () => {
    return (
        <div className="d-flex justify-content-center mb-5">
            <div className="rounded-circle bg-secondary mr-2" style={{ backgroundColor: 'red', height: '20px', width: '20px' }} />
            <i className="mr-4 text-gray-500 font-weight-600">En proceso</i>

            <div className="rounded-circle bg-primary mr-2" style={{ backgroundColor: 'red', height: '20px', width: '20px' }} />
            <i className="mr-4 text-gray-500 font-weight-600">Hay pendientes</i>

            <div className="rounded-circle bg-info mr-2" style={{ backgroundColor: 'red', height: '20px', width: '20px' }} />
            <i className="mr-4 text-gray-500 font-weight-600">Corregido</i>

            <div className="rounded-circle bg-green mr-2" style={{ backgroundColor: 'red', height: '20px', width: '20px' }} />
            <i className="mr-4 text-gray-500 font-weight-600">Listo</i>
        </div>
    );
};

export default ColorFlags;
