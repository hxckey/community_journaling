const superT = require('supertest')
const app = require('community_journaling/server/server.js')

describe('API routes', () => {
    let api;

    beforeAll(() => {
        api = app.listen(3000, () => {
            console.log('Server running on port 3000')
        });
    });

    afterAll(done => {
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
    })

    test('test post path for articles', () => {
        return superT(api)
        .post('/entry')
        .expect(201)
    })

    test('test post path for comments', () => {
        return superT(api)
        .post("/newcomment")
        .expect(201)
        .expect('Comment posted')
    })

    test('test delete path for articles', () => {
        return superT(api)
        .delete("/articles/delete/1")
        .expect(204)
        .expect("Article deleted")
    })

});