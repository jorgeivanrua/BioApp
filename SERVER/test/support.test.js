const request = require('supertest');
const app = require('../server');

describe('Pruebas de tickets de soporte', () => {
    it('debería obtener todos los tickets de soporte', async () => {
        const response = await request(app).get('/api/tickets');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear un nuevo ticket de soporte', async () => {
        const response = await request(app)
            .post('/api/tickets')
            .send({
                asunto: 'Problema técnico',
                descripcion: 'Descripción del problema',
                prioridad: 'alta',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('asunto', 'Problema técnico');
    });
});
