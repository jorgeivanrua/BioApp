// CLIENT/src/components/pages/Report.js

import React, { useState } from 'react';

const Report = () => {
  const [reports, setReports] = useState([]);
  const [reportTitle, setReportTitle] = useState('');
  const [reportContent, setReportContent] = useState('');

  const addReport = () => {
    if (reportTitle && reportContent) {
      const newReport = {
        title: reportTitle,
        content: reportContent,
        date: new Date().toLocaleDateString(),
      };
      setReports([...reports, newReport]);
      setReportTitle('');
      setReportContent('');
    }
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Generación de Reportes</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Reportes</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Crear Reporte</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Título del Reporte</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Contenido del Reporte</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Contenido"
                    value={reportContent}
                    onChange={(e) => setReportContent(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={addReport}
                >
                  Agregar Reporte
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Reportes */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Reportes Generados</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Fecha</th>
                      <th>Contenido</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report, index) => (
                      <tr key={index}>
                        <td>{report.title}</td>
                        <td>{report.date}</td>
                        <td>{report.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Report;