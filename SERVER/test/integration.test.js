const request = require('supertest');
const app = require('../server');

describe('Pruebas de integraciones', () => {
    it('debería obtener todas las integraciones', async () => {
        const response = await request(app).get('/api/integracion');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear una nueva integración', async () => {
        const response = await request(app)
            .post('/api/integracion')
            .send({
                nombre: 'Integración A',
                descripcion: 'Descripción de la integración A',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('nombre', 'Integración A');
    });
});
