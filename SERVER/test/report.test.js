const request = require('supertest');
const app = require('../server');

describe('Pruebas de generación de reportes', () => {
    it('debería obtener todos los reportes', async () => {
        const response = await request(app).get('/api/report');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear un nuevo reporte', async () => {
        const response = await request(app)
            .post('/api/report')
            .send({
                titulo: 'Reporte de Mantenimiento',
                contenido: 'Detalles del mantenimiento realizado',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('titulo', 'Reporte de Mantenimiento');
    });
});
