import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Doughnut, PolarArea } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faTools,
  faExclamationTriangle,
  faFileAlt,
  faArrowCircleRight,
  faClipboardList,
  faUserCog,
  faCalendarAlt,
  faBell,
  faTasks,
  faChartPie,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
} from "chart.js";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/sparklines/sparkline.js";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";

// Registrar las escalas necesarias
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale
);

const Dashboard = () => {
  // Datos de ejemplo para los gráficos
  const barData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Mantenimientos Completados",
        backgroundColor: "rgba(75, 192, 192, 1)",
        data: [10, 12, 8, 15, 13, 9],
      },
      {
        label: "Reparaciones Completadas",
        backgroundColor: "rgba(75, 22, 92, 1)",
        data: [2, 13, 8, 5, 13, 9],
      },
    ],
  };

  const lineData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Incidencias Reportadas",
        data: [2, 5, 3, 8, 6, 4],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Limpieza", "Calibración", "Inspección"],
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ["#007bff", "#ffc107", "#17a2b8"],
      },
    ],
  };

  const polarData = {
    labels: ["Piezas Reemplazadas", "Equipos Fuera de Servicio", "Reparaciones"],
    datasets: [
      {
        data: [120, 25, 45],
        backgroundColor: ["#f39c12", "#dd4b39", "#00c0ef"],
      },
    ],
  };

  // Estado para tareas pendientes y notificaciones
  const [tasks, setTasks] = useState([
    { id: 1, text: "Design a nice theme", completed: false, status: "danger", time: "2 mins" },
    { id: 2, text: "Make the theme responsive", completed: true, status: "info", time: "4 hours" },
    // Más tareas...
  ]);


  const [notifications, setNotifications] = useState([
    { id: 1, message: "Nuevo equipo agregado al inventario.", time: "2 min" },
    { id: 2, message: "Mantenimiento del equipo X finalizado.", time: "10 min" },
    { id: 3, message: "Reparación del ventilador pendiente.", time: "1 hora" },
  ]);

  // Ejemplo de eventos para el calendario
  const events = [
    { title: "Mantenimiento MRI Scanner", date: "2024-09-10" },
    { title: "Revisión X-Ray 500 Pro", date: "2024-09-15" },
    { title: "Reunión de equipo", date: "2024-09-20" },
    { title: "Mantenimiento Ventilador", date: "2024-09-25" },
    { title: "Inspección Anual", date: "2024-09-30" },
    { title: "Capacitación de Personal", date: "2024-10-05" },
  ];

  // Manejo de completar tareas
  const handleCompleteTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: "Nueva tarea", // O puedes usar un input para esto
      completed: false,
      status: "primary",  // O cualquier estado inicial
      time: "2 mins"      // O calcula el tiempo como desees
    };
    setTasks([...tasks, newTask]);
  };
  const handleEditTask = (id) => {
    const newText = prompt("Edita la tarea:");
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };





  return (
    <div className="content-wrapper">
      {/* Encabezado de Contenido */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="content">
        <div className="container-fluid">
          {/* Cajas de Estado - KPIs */}
          <div className="row">
            {/* Caja Operativa */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>Equipos Operativos</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faCogs} />
                </div>
                <Link to="/equipment" className="small-box-footer">
                  Ver Equipos <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </div>
            {/* Caja de Mantenimientos */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>53</h3>
                  <p>Mantenimientos Completados</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTools} />
                </div>
                <Link to="/mantenimiento" className="small-box-footer">
                  Ver Mantenimientos <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </div>
            {/* Caja de Inventario */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
                  <p>Alertas de Inventario</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <Link to="/inventario" className="small-box-footer">
                  Ver Inventario <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </div>
            {/* Caja de Reportes */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>
                  <p>Reportes Pendientes</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <Link to="/report" className="small-box-footer">
                  Ver Reportes <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </div>
          </div>

          {/* Nuevas Cajas de Estado */}
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-primary">
                <div className="inner">
                  <h3>120</h3>
                  <p>Piezas Reemplazadas</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <Link to="/equipmentlist" className="small-box-footer">
                  Ver Piezas <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </div>

            {/* Caja de Usuarios */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-secondary">
                <div className="inner">
                  <h3>25</h3>
                  <p>Usuarios Activos</p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faUserCog} />
                </div>
                <Link to="/usuarios" className="small-box-footer">
                  Ver Usuarios <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
              </div>
            </div>





            {/* Caja de Tareas */}
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      Tareas Pendientes <FontAwesomeIcon icon={faSyncAlt} />
                    </h3>
                  </div>
                  {/* Cuerpo de la tarjeta de tareas */}
                  <div className="card-body">
                    <ul className="todo-list" data-widget="todo-list">
                      {tasks.map((task) => (
                        <li key={task.id} className={task.completed ? "done" : ""}>
                          <span className="handle">
                            <i className="fas fa-ellipsis-v"></i>
                            <i className="fas fa-ellipsis-v"></i>
                          </span>
                          <div className="icheck-primary d-inline ml-2">
                            <input
                              type="checkbox"
                              id={`todoCheck${task.id}`}
                              checked={task.completed}
                              onChange={() => handleCompleteTask(task.id)}
                            />
                            <label htmlFor={`todoCheck${task.id}`}></label>
                          </div>
                          <span className="text">{task.text}</span>
                          <small className={`badge badge-${task.status}`}>
                            <i className="far fa-clock"></i> {task.time}
                          </small>
                          <div className="tools">
                            <i className="fas fa-edit" onClick={() => handleEditTask(task.id)}></i>
                            <i className="fas fa-trash-o" onClick={() => handleDeleteTask(task.id)}></i>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Pie de la tarjeta con botón para agregar tarea */}
                  <div className="card-footer clearfix">
                    <button type="button" className="btn btn-primary float-right" onClick={handleAddTask}>
                      <i className="fas fa-plus"></i> Add item
                    </button>
                  </div>
                </div>
              </div>
            </div>







          </div>

          {/* Sección de Gráficos */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Tareas Completadas vs Incidencias</h3>
                </div>
                <div className="card-body">
                  <Bar data={barData} />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Tendencia de Incidencias</h3>
                </div>
                <div className="card-body">
                  <Line data={lineData} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Distribución de Tipos de Mantenimiento</h3>
                </div>
                <div className="card-body">
                  <Doughnut data={doughnutData} />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Estado de Reparaciones</h3>
                </div>
                <div className="card-body">
                  <PolarArea data={polarData} />
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Calendario */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    Calendario de Mantenimiento <FontAwesomeIcon icon={faCalendarAlt} />
                  </h3>
                </div>
                <div className="card-body">
                  <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
                </div>
              </div>
            </div>
          


          {/* Sección de Notificaciones */}
          
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Notificaciones Recientes</h3>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {notifications.map((notification) => (
                      <li key={notification.id} className="list-group-item">
                        {notification.message} - <small>{notification.time}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
           

            {/* Añadir una sección de análisis rápido */}
            
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Análisis Rápido</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-4 text-center">
                      <FontAwesomeIcon icon={faChartPie} size="3x" />
                      <p>Equipos Operativos</p>
                      <h4>150</h4>
                    </div>
                    <div className="col-4 text-center">
                      <FontAwesomeIcon icon={faTools} size="3x" />
                      <p>Mantenimientos</p>
                      <h4>53</h4>
                    </div>
                    <div className="col-4 text-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
                      <p>Alertas</p>
                      <h4>44</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
