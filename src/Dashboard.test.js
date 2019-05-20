import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './dashbord';
import Modal from 'react-awesome-modal';
import { ToastContainer } from 'react-toastify';

configure({ adapter: new Adapter() });

describe("<Dasboard/>", () => {

    it("To check the model", () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Modal))
    });
    it("To check the toast container", () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(ToastContainer))
    });

})