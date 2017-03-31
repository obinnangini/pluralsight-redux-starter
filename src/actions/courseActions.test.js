import expect from 'expect';
import * as courseActions from './courseActions';
import ActionTypes from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS_ACTION', () => {
      const course = {id: 'clean-code', title: 'Clean code'};
      // expect (courseActions.createCourseSuccess({}).type).toEqual(ActionTypes.CREATE_COURSES_SUCCESS);
      const action = courseActions.createCourseSuccess(course);
      expect(action.type).toEqual(ActionTypes.CREATE_COURSES_SUCCESS);
      expect(action.course).toEqual(course);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should create a BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
    // Nock example
    /*
      nock('http://example.com')
        .get('/courses')
        .reply(200, { body: {courses:[{id:1, firstName: 'Cory', lastName: 'House'}] }});
    */
    const expectedActions = [
      {type: ActionTypes.BEGIN_AJAX_CALL},
      {type: ActionTypes.LOAD_COURSES_SUCCESS,  body: {courses:[{id:1, firstName: 'Cory', lastName: 'House'}] }}
    ];

    const store = mockStore({courses: []}, expectedActions);
    return store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(ActionTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(ActionTypes.LOAD_COURSES_SUCCESS);
    });
  });
});
