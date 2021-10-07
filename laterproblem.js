const superT = require('supertest');
const article = require('community_journaling/client/articles.js');
//const { openPostModal } = require('../client/articles.js');

/**
 * @jest-environment jsdom
 */

describe("articles.js", () => {
    /* test('open modal', () => {
        document.body.innerHTML = `
        <input id='postBtn' type="submit" value="submit" formmethod="POST">
        `;
        require('../articles.js');
        postInput = document.getElementById('postBtn');
        postInput.submit();
        expect(openPostModal).toHaveBeenCalled();
      }); */
      test('getGiphy() returns an array',  () =>{
        it('should return a list', () =>{
            const gifList = getGiphy(query);
            expect(gifList).toEqual(['something']);
        });
    });
});
