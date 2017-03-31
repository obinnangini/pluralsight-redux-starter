import expect from 'expect';
import {formatAuthorsForDropDown} from './selectors';

describe('AuthorSelectors', () => {
  describe('formatAuthorsForDropDown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];
      expect(formatAuthorsForDropDown(authors)).toEqual(expected);
    });
  });
});
