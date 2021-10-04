const { TestWatcher } = require("@jest/core");
const superT = require('supertest')
const app = require('community_journaling/server/server.js')


describe('API routes', () => {
    let api;

    beforeEach(() => {
        api = app.listen(3000, () => {
            console.log('Server running on port 3000')
        });
    });

    afterEach(done => {
        console.log('Stopping test server')
        api.close(done);
    });

    test('test root path', () => {
        return superT(api)
        .get('/')
        .expect(200)
        .expect('Welcome to StreetHub')
    })

    test('test all articles path', () => {
        return superT(api)
        .get('/articles')
        .expect(200)
    })

    test('test specific article path', () => {
        return superT(api)
        .get('/articles/1')
        .expect(200)
        .expect('hello')
    })
});