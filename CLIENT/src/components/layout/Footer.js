import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container-fluid">
        <div className="row">
          {/* Información de la compañía */}
          <div className="col-md-4">
            <h5>Sobre la Aplicación</h5>
            <p>
              Esta aplicación gestiona equipos, inventarios, usuarios y genera reportes. 
              Desarrollada para optimizar la administración de recursos empresariales.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className="col-md-4">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacy">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terms">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/help">Centro de Ayuda</Link>
              </li>
              <li>
                <Link to="/contact">Contáctanos</Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-4">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="https://facebook.com" className="mr-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="mr-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>
              &copy; {new Date().getFullYear()} - JIRA - LCGA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
