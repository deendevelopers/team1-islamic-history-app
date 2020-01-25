import {mount} from 'enzyme';
import React from "react";
import SwipeUpDrawer from "./SwipeUpDrawer";
import toJson from 'enzyme-to-json';

describe("SwipeUpDrawer", function () {

  it('should render with no children', function () {
    const wrapper = mount(<SwipeUpDrawer/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render with children', function () {
    const wrapper = mount(
        <SwipeUpDrawer>
          <div>Some text</div>
          <div>Some more text</div>
        </SwipeUpDrawer>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});