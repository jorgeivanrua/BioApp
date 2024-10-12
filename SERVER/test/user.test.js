const request = require('supertest');
const app = require('../server');

describe('Pruebas de gestión de usuarios', () => {
    it('debería obtener todos los usuarios', async () => {
        const response = await request(app).get('/api/usuarios');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('debería crear un nuevo usuario', async () => {
        const response = await request(app)
            .post('/api/usuarios')
            .send({
                username: 'newuser',
                password: 'newpassword',
                email: 'new@example.com',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('username', 'newuser');
    });
});
