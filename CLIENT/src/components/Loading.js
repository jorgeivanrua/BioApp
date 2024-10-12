// src/components/Loading.js

import React from 'react';
import 'admin-lte/dist/css/adminlte.min.css'; // Asegúrate de que el CSS de AdminLTE esté importado

const Loading = () => {
    return (
        <div className="hold-transition loading-page">
            <div className="loader">
                <div className="loading-text">Cargando...</div>
            </div>
        </div>
    );
};

export default Loading;