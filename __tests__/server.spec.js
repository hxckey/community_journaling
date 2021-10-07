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

    test("test specific article wrong index path", () => {
        return superT(api)
        .get("/articles/-1")
        .expect(404)
        .expect({
            message: 'Please enter a number greater than 0.'
        })
    })

    test('test gifs query path', () => {
        return superT(api)
        .get('/gifs/dog')
        .expect(200)
    })

    test('test post path for articles', () => {
        return superT(api)
        .post('/entry')
        .expect(201)
    })

    test('test post path for comments', () => {
        return superT(api)
        .post("/newcomment/1")
        .expect(201)
        .expect({
            message: "Comment posted"
        })
    })

    test('test delete path for articles', () => {
        return superT(api)
        .delete("/articles/delete/1")
        .expect({
            message: "Article deleted",
            success: true
        })
    })

    test('test article delete wrong index path', () => {
        return superT(api)
        .delete("/articles/delete/-1")
        .expect(404)
        .expect({
            message: 'Please enter a number greater than 0.'
        })
    })

    test('test article update path', () => {
        return superT(api)
        .put("/articles/update/2")
        .expect(201)
        .expect({
            message: "Your post has been updated"
        })
    })

    test('test article update wrong index path', () => {
        return superT(api)
        .put("/articles/update/-1")
        .expect(404)
        .expect({
            message: 'Please enter a number greater than 0.'
        })
    })
       
    test('test emoji update path', () => {
        return superT(api)
        .put("/emojis/update/1")
        .expect(200)
        .expect({
            message: "Post emoji-ed"        
        })
    })

    test('test emoji update wrong index path', () => {
        return superT(api)
        .put("/emojis/update/-1")
        .expect(500)
        .expect({
            message: "Error: post could not be emoji-ed"        
        })
    })

    test('test errors', () => {
        return superT(api)
        .put("/error")
        .expect(404)
    })

});

