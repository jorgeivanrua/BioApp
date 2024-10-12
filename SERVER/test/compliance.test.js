const request = require('supertest');
const app = require('../server');

describe('Pruebas de cumplimiento normativo', () => {
    it('debería obtener todas las auditorías de cumplimiento', async () => {
        const response = await request(app).get('/api/cumplimiento');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear una nueva auditoría de cumplimiento', async () => {
        const response = await request(app)
            .post('/api/cumplimiento')
            .send({
                fecha: '2023-09-22',
                descripcion: 'Auditoría de cumplimiento normativo',
                realizadoPor: 'Auditor B',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('descripcion', 'Auditoría de cumplimiento normativo');
    });
});
