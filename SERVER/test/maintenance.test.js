const request = require('supertest');
const app = require('../server');

describe('Pruebas para tareas de mantenimiento', () => {
    it('debería obtener todas las tareas de mantenimiento', async () => {
        const response = await request(app).get('/api/mantenimientos');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear un nuevo mantenimiento', async () => {
        const response = await request(app)
            .post('/api/mantenimientos')
            .send({
                equipoId: '60d21b4667d0d8992e610c85',
                fechaMantenimiento: '2023-09-22',
                tipoMantenimiento: 'preventivo',
                descripcion: 'Mantenimiento preventivo',
                realizadoPor: 'Técnico A',
                costo: 150,
                piezasReemplazadas: [],
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('tipoMantenimiento', 'preventivo');
    });
});
