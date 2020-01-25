import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react';
import {mount, shallow} from 'enzyme';
import PopUp from "./PopUp";
import {POPUP_ANIMATION_TIME_MILLIS} from "../../constants/animation";

describe("PopUp", () => {

  const dummyFunction = () => {
  };

  jest.useFakeTimers();

  afterEach(cleanup);

  it('renders correctly', () => {
    const popUp = renderer.create(
        <PopUp
            title={"some title"}
            hidePopUpPanel={dummyFunction}
            fullscreen={false}
        >
          <div>children</div>
        </PopUp>);
    expect(popUp).toMatchSnapshot();
  });

  it('should close when pop up panel is clicked', function () {
    const hidePopUpPanel = jest.fn();
    const popUp = shallow(
        <PopUp
            title={"title"}
            hidePopUpPanel={hidePopUpPanel}
            fullscreen={false}
        />);

    popUp.find("PopUpPanel").simulate("click");
    jest.runAllTimers();

    expect(popUp.state("hidden")).toBeTruthy();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), POPUP_ANIMATION_TIME_MILLIS);
    expect(hidePopUpPanel).toHaveBeenCalled();
  });

  it("should stop propagation on click", () => {
    const hidePopUpPanel = jest.fn();
    const mockEvent = jest.fn();
    const popUp = shallow(
        <PopUp
            title={"title"}
            hidePopUpPanel={hidePopUpPanel}
            fullscreen={false}
        />);

    popUp.find("PopUpDiv").simulate("click", {stopPropagation: mockEvent});

    expect(mockEvent).toHaveBeenCalled();
    expect(hidePopUpPanel).not.toHaveBeenCalled();
  });

  it('should call hidePopUpPanel on close click', () => {
    const hidePopUpPanel = jest.fn();
    const popUp = mount(
        <PopUp
            title={"title"}
            hidePopUpPanel={hidePopUpPanel}
            fullscreen={false}
        />);

    popUp.find("CloseButton").first().simulate("click");
    jest.runAllTimers();

    expect(hidePopUpPanel).toHaveBeenCalled();
  });

});
