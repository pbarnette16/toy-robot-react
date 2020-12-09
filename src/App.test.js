import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";


describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  /*
  it("renders App component header without crashing", () => {
    const wrapper = shallow(<App />);
    const header = (<h1 className="has-text-centered title is-1">Welcome in the personal finance app!</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });
  it("renders Notification component without crashing", () => {
    shallow(<Notification />);
  });
  it("renders button", () => {
    const wrapper = mount(<AccountBalance accounts={userBalance} />);
    const label = wrapper.find("#balance-button").text();
    expect(label).toEqual("Send 100$");
  });
  */
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
