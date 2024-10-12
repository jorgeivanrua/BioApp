// CLIENT/src/components/Calendario.js

import React, { useEffect, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'; // Importa Draggable

const Calendario = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const calendarEl = document.getElementById('calendar');
    const externalEventsEl = document.getElementById('external-events');

    // Inicializar el calendario
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      editable: true,
      droppable: true,
      events: events,
      drop(info) {
        console.log('Evento soltado:', info);
        if (document.getElementById('drop-remove').checked) {
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      },
    });

    calendar.render();

    // Crear eventos arrastrables
    const createDraggableEvent = (title, backgroundColor) => {
      const eventEl = document.createElement('div');
      eventEl.className = 'external-event';
      eventEl.innerText = title;
      eventEl.style.backgroundColor = backgroundColor;
      eventEl.style.padding = '10px';
      eventEl.style.marginBottom = '5px';
      eventEl.style.color = '#fff';
      externalEventsEl.appendChild(eventEl);

      // Hacer el evento arrastrable
      new Draggable(eventEl, {
        eventData: {
          title: title,
          backgroundColor: backgroundColor,
        },
      });
    };

    // Agregar eventos de ejemplo
    createDraggableEvent('Evento 1', '#f56954'); // Rojo
    createDraggableEvent('Evento 2', '#00a65a'); // Verde
    createDraggableEvent('Evento 3', '#0073b7'); // Azul

    return () => {
      calendar.destroy(); // Limpiar el calendario al desmontar el componente
    };
  }, [events]);

  const addNewEvent = (eventName) => {
    const newEvent = { title: eventName, start: new Date().toISOString().split('T')[0] };
    
    fetch('/api/calendar/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    })
    .then(response => response.json())
    .then(data => {
      setEvents([...events, data.event]);
    });
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Calendario de Eventos</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">Calendario</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-md-4">
            <div id="external-events">
              <h4>Eventos Externos</h4>
              <button onClick={() => addNewEvent('Nuevo Evento')} className="btn btn-primary">Agregar Evento</button>
            </div>
            <div>
              <input type="checkbox" id="drop-remove" />
              <label htmlFor="drop-remove">Eliminar al soltar</label>
            </div>
          </div>

          <div className="col-md-8">
            <div id="calendar" style={{ marginTop: '20px' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendario;