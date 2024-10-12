const request = require('supertest');
const app = require('../server');

describe('Pruebas de auditorías', () => {
    it('debería obtener todas las auditorías', async () => {
        const response = await request(app).get('/api/auditoria');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear una nueva auditoría', async () => {
        const response = await request(app)
            .post('/api/auditoria')
            .send({
                fecha: '2023-09-22',
                descripcion: 'Auditoría del sistema',
                realizadoPor: 'Auditor A',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('descripcion', 'Auditoría del sistema');
    });
});
