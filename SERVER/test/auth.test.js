const request = require('supertest');
const app = require('../server');

describe('Pruebas de autenticación', () => {
    it('debería registrar un nuevo usuario', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                password: 'password123',
                email: 'test@example.com',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('username', 'testuser');
    });

    it('debería iniciar sesión con usuario existente', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'password123',
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('debería fallar al iniciar sesión con credenciales incorrectas', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'wrongpassword',
            });
        expect(response.status).toBe(401);
    });
});
