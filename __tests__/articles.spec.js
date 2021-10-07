const superT = require('supertest');
const article = require('community_journaling/client/articles.js');

describe("openPostModal is called when 'postBtn is clicked", () => {
    let clickHandler;
    beforeAll(() => {
      clickHandler = jest.fn();
      document.getElementById('postBtn');
  
      // as the `testClick()` is invoked within the application
      // you should require the implementation here instead
      // of trying to call it within the test
      require("./openPostModal");
    });
  
    it("should call the click event listerner for child1", () => {
      // not sure what to do here
      expect(clickHandler).toHaveBeenCalled();
    });
});

