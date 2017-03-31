import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ManageCoursePageConnectWrapper, {ManageCoursePage} from './ManageCoursePage';

function setup() {
  const props = {
    authors: [],
    course : {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
    actions: {saveCourse: () => {return Promise.resolve();}}
  };
  return mount(<ManageCoursePage {...props}/>);
}

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    // const wrapper = mount(<Provider store={store}>><ManageCoursePageConnectWrapper /></Provider>);
    const wrapper = setup();
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
  });
});
