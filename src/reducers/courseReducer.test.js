import expect from 'expect';
import * as courseActions from '../actions/courseActions';
import ActionTypes from '../actions/actionTypes';
import courseReducer from './courseReducer';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = courseActions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A', id:'A'},
      {title: 'B', id:'B'}
    ];

    const course = {title: 'C', id: 'B'};
    const action = courseActions.updateCourseSuccess(course);
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id === course.id);
    const untouchedCourse = newState.find(a => a.id === 'A');

    expect(newState.length).toEqual(2);
    expect(updatedCourse.title).toEqual('C');
    expect(untouchedCourse.title).toEqual('A');
  });
});
