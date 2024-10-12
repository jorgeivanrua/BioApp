const request = require('supertest');
const app = require('../server');

describe('Pruebas de gestión de equipos', () => {
    it('debería obtener todos los equipos', async () => {
        const response = await request(app).get('/api/equipment');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear un nuevo equipo', async () => {
        const response = await request(app)
            .post('/api/equipment')
            .send({
                nombre: 'Equipo A',
                tipo: 'Tipo 1',
                descripcion: 'Descripción del equipo A',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('nombre', 'Equipo A');
    });
});
