const db = require('../database/dbConfig');
const request = require('supertest');
const server = require('../api/server');



describe('GET /', () => {
 
  it('returns root route status 200 ok', () => {
      return request(server).get('/').expect(200)
  })

  it('check if endpoint is unauthorized', () => {
      return request(server).get('/api/users').expect(401)
  })

  it('returns root route status 200 ok', () => {
    return request(server).get('/api/recipes').expect(200)
})

  })

  describe('POST /', () => {

  
    it('check if endpoint is authorized', () => {
        return request(server).post('/api/auth/login').send({username: "user1", password: "test123"}).expect(200)
    })

    })