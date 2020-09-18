const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    const categories = ['cat1', 'cat2']
    const newCategory = 'cat3'
    const results = saveItems(categories, newCategory)
    expect(results).to.contain(newCategory)
  });

  it('makes sure the result and the original are different', () => {
    expect.fail('please write this test');
  });
});
