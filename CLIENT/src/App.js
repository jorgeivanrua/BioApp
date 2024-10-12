// CLIENT/src/App.js

import React, { useEffect, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary'; // Componente para manejar errores
import Loading from './components/Loading'; // Componente de carga
import AppRoutes from './AppRoutes'; // Importa las rutas de la aplicación
import 'admin-lte/dist/css/adminlte.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulación de carga de datos global si es necesario
        setLoading(false);
      } catch (err) {
        setError('Error al cargar la aplicación');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div> 
      
         
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
     
    </div>
  );
};

export default App;