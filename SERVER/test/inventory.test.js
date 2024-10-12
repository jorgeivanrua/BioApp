const request = require('supertest');
const app = require('../server');

describe('Pruebas de gestión de inventarios', () => {
    it('debería obtener todos los artículos de inventario', async () => {
        const response = await request(app).get('/api/inventario');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear un nuevo artículo de inventario', async () => {
        const response = await request(app)
            .post('/api/inventario')
            .send({
                nombre: 'Artículo A',
                cantidad: 100,
                precio: 50,
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('nombre', 'Artículo A');
    });
});
