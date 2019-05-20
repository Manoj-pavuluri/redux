import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Dashbord from './dashbord';

configure({ adapter: new Adapter() });

describe("<App/>", () => {
  it("To test the switch and routes in App.js", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Dashbord)).toHaveLength(1);
  })
});

